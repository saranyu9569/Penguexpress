var express = require("express");
var cors = require("cors");
var app = express();
var bodyParser = require("body-parser");
var jsonParser = bodyParser.json();
const bcrypt = require("bcrypt");
const saltRounds = 10;
var jwt = require("jsonwebtoken");
const secret = "PenguExpress";

app.use(cors());

const mysql = require("mysql2");
  // Parse application/json
app.use(bodyParser.json());

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

//Connect
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "penguexpress",
});

app.post("/register", jsonParser, function (req, res, next) {
  bcrypt.hash(req.body.member_pass, saltRounds, function (err, hash) {
    if (err) {
      res.json({ status: "error", message: err });
      return;
    }
    connection.execute(
      "INSERT INTO customer(customer_tel, addrs_detail, customer_name, member_status) VALUES(?,?,?,?)",
      [
        req.body.member_tel,
        req.body.member_addrs,
        req.body.member_name,
        req.body.member_status,
      ],
      function (err, results, fields) {
        if (err) {
          res.json({ status: "error", message: err });
          return;
        }
        // First query successful, now execute the second query
        connection.execute(
          "INSERT INTO member(member_pass, member_tel) VALUES(?,?)",
          [hash, req.body.member_tel],
          function (err, results, fields) {
            if (err) {
              res.json({ status: "error", message: err });
              return;
            }
            res.json({ status: "OK" });
          }
        );
      }
    );
  });
});

app.post("/login", jsonParser, function (req, res, next) {
  connection.execute(
    "SELECT M.*, C.customer_name FROM member M JOIN customer C ON M.member_tel = C.customer_tel WHERE M.member_tel=?",
    [req.body.member_tel],
    function (err, users, fields) {
      if (err) {
        res.json({ status: "error", message: err });
        return;
      }
      if (users.length == 0) {
        res.json({ status: "error", message: "no user found" });
        return;
      }
      bcrypt.compare(
        req.body.member_pass,
        users[0].member_pass,
        function (err, isLogin) {
          if (isLogin) {
            var token = jwt.sign({ member_tel: users[0].member_tel }, secret, {
              expiresIn: "1h",
            });
            res.json({
              status: "ok",
              message: "Login Success",
              token,
              userName: users[0].customer_name,
            });
          } else {
            res.json({ status: "error", message: "Login Failed" });
          }
        }
      );
    }
  );
});

//Verify Token
app.post("/authen", jsonParser, function (req, res, next) {
  try {
    const token = req.headers.authorization.split(" ")[1];
    var decoded = jwt.verify(token, secret);
    // Fetch user information based on decoded member_tel
    connection.execute(
      "SELECT customer_name FROM customer WHERE customer_tel = ?",
      [decoded.member_tel],
      function (err, results, fields) {
        if (err) {
          res.status(500).json({ status: "error", message: err.message });
          return;
        }
        if (results.length === 0) {
          res.status(404).json({ status: "error", message: "User not found" });
          return;
        }
        // User found, send the user information along with decoded token
        res.json({
          status: "ok",
          decoded,
          customer_name: results[0].customer_name,
        });
      }
    );
  } catch (err) {
    res.status(401).json({ status: "error", message: err.message });
  }
});

app.get("/pickup", (req, res) => {
  connection.query(
    "SELECT parcel_ID FROM parcel",
    (error, results, fields) => {
      if (error) {
        res.status(500).json({ status: "error", message: error.message });
        return;
      }
      res.json({ status: "ok", provinces: results });
    }
  );
});

app.get("/shipping", (req, res) => {
  connection.query(
    "SELECT name_th, code FROM provinces",
    (error, results, fields) => {
      if (error) {
        res.status(500).json({ status: "error", message: error.message });
        return;
      }
      res.json({ status: "ok", provinces: results });
    }
  );
});

app.get("/tracking/:parcelNumber", (req, res) => {
  const parcelNumber = req.params.parcelNumber;
  const query = `SELECT S.stamptime,S.detail,D.dc_name
  FROM status S
  JOIN distribute_center D 
  ON S.dc_ID = D.dc_ID
  WHERE S.parcel_ID='${parcelNumber}'`;

  connection.query(query, [parcelNumber], (err, results) => {
    if (err) {
      console.error("Error fetching tracking information:", err);
      res.status(500).json({ error: "Error fetching tracking information" });
      return;
    }
    res.json(results);
  });
});

// Existing code...

app.get("/Admin", (req, res) => {
  const sql = "SELECT * FROM parcel";
  connection.query(sql, (err, data) => {
    if (err) {
      console.error("Error fetching parcels:", err);
      res.status(500).json({ error: "Error fetching parcels" });
      return;
    }
    res.status(200).json(data);
  });
});

app.post("/complaints", jsonParser, function(req, res, next) {
  console.log("Received complaint request:", req.body);
  connection.execute(
    "INSERT INTO appeal (appeal_ID, appeal_type, appeal_des, appeal_usertel) VALUES (?, ?, ?, ?)",
    [req.body.appeal_track, req.body.appeal_type, req.body.appeal_des, req.body.appeal_usertel],
    function (err, results, fields) {
      if (err) {
        console.error("Error inserting complaint data:", err);
        return res.status(500).json({ error: "Error inserting complaint data" });
      }
      console.log("Complaint data inserted successfully");
      res.json({ message: "Complaint received successfully" });
    }
  );
});

app.post("/claim", jsonParser, function(req, res, next) {
  console.log("Received complaint request:", req.body);
  connection.execute(
    "INSERT INTO claim (claim_ID, claim_username, claim_userSSID, claim_usertel, claim_email, claim_parcelID, claim_des, claim_bankaccount, claim_banknum, claim_bankholdername, claim_type) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
    [req.body.claim_ID, req.body.claim_username, req.body.claim_userSSID, req.body.claim_usertel, req.body.claim_email, req.body.claim_parcelID, req.body.claim_des, req.body.claim_bankaccount, req.body.claim_banknum, req.body.claim_bankholdername, req.body.claim_type],
    function (err, results, fields) {
      if (err) {
        console.error("Error inserting complaint data:", err);
        return res.status(500).json({ error: "Error inserting complaint data" });
      }
      console.log("Complaint data inserted successfully");
      res.json({ message: "Complaint received successfully" });
    }
  );
});

app.post("/create", jsonParser, function(req, res, next) {
  console.log("Received complaint request:", req.body);
  connection.execute(
    "INSERT INTO parcel (parcel_ID, weight, type, shpping_cost, parcel_sender, parcel_reciever) VALUES (?, ?, ?, ?, ?, ?)",
    [req.body.parcel_ID, req.body.weight, req.body.type, req.body.shipping_cost, req.body.parcel_sender, req.body.parcel_receiver],
    function (err, results, fields) {
      if (err) {
        console.error("Error inserting complaint data:", err);
        return res.status(500).json({ error: "Error inserting complaint data" });
      }
      console.log("Complaint data inserted successfully");
      res.json({ message: "Complaint received successfully" });
    }
  );
});

app.listen(3333, function () {
  console.log("CORS-enabled web server listening on port 3333");
});
