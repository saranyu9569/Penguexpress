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
      "INSERT INTO customer(customer_tel, customer_address, customer_name, member_status) VALUES(?,?,?,?)",
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
        res.json({ status: "OK" });
      }
    );
    connection.execute(
      "INSERT INTO member(member_pass,member_tel) VALUES(?,?)",
      [hash, req.body.member_tel],
      function (err, results, fields) {
        if (err) {
          res.json({ status: "error", message: err });
          return;
        }
      }
    );
  });
});

app.post("/CreateShipment", jsonParser, function (req, res, next) {
  connection.execute(
    "INSERT INTO customer(customer_tel, customer_address, customer_name, member_status) VALUES(?,?,?,?)",
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
      res.json({ status: "OK" });
    }
  );
  connection.execute(
    "INSERT INTO member(member_pass,member_tel) VALUES(?,?)",
    [hash, req.body.member_tel],
    function (err, results, fields) {
      if (err) {
        res.json({ status: "error", message: err });
        return;
      }
    }
  );
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

app.get("/Shipping", (req, res) => {
  connection.query("SELECT name_th, code FROM provinces", (error, results, fields) => {
    if (error) {
      res.status(500).json({ status: "error", message: error.message });
      return;
    }
    res.json({ status: "ok", provinces: results });
  });
});

app.listen(3333, function () {
  console.log("CORS-enabled web server listening on port 3333");
});
