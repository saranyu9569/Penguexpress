import React, { useState } from "react";
import * as Components from "./Components";
import Axios from "axios";

function App() {
  const [signIn, toggle] = useState(true);
  const [token, setToken] = useState("");
  const [formData, setFormData] = useState({
    member_tel: "",
    member_name: "",
    member_addrs: "",
    member_pass: "",
    confirm_member_pass: "",
    member_status: "Y",
  });

  const [loginData, setLoginData] = useState({
    member_tel: "",
    member_pass: "",
  });

  const handleInputLoginChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    if (name === "member_pass" || name === "confirm_member_pass") {
      const confirmPass = formData.confirm_member_pass;
      const pass = name === "member_pass" ? value : confirmPass;
      const isMatch = pass === confirmPass;
      console.log("Password match:", isMatch);
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault();

    if (formData.member_pass !== formData.confirm_member_pass) {
      alert("Password and confirm password do not match");
      return;
    }

    try {
      const response = await Axios.post(
        "http://localhost:3333/register",
        formData
      );
      console.log("SignUp response:", response.data);
    } catch (error) {
      console.error("SignUp error:", error);
    }
  };

  const handleSignIn = async (e) => {
    e.preventDefault();

    console.log(loginData);
    try {
      const response = await Axios.post(
        "http://localhost:3333/login",
        loginData
      );
      console.log("SignIn response:", response.data);
      const { status, token } = response.data;
      if (status === "ok") {
        setToken(token);
        localStorage.setItem("token", token);
        fetchUserInfo(token);
        window.location.href="/"
      } else {
        alert("Login failed");
      }
    } catch (error) {
      console.error("SignIn error:", error);
    }
  };

  const fetchUserInfo = async (token) => {
    try {
      const response = await Axios.post(
        "http://localhost:3333/authen",
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("User Info:", response.data);

      setFormData((prevData) => ({
        ...prevData,
        member_name: response.data.decoded.member_name, 
      }));
    } catch (error) {
      console.error("Error fetching user info:", error);
    }
  };

  return (
    <Components.Background>
      <Components.Container>
        <Components.SignUpContainer signinIn={signIn}>
          <Components.Form>
            <Components.Title>Create Account</Components.Title>
            <Components.SubHeader>
              Use your phonenumber for registeration
            </Components.SubHeader>
            <Components.Input
              type="text"
              placeholder="Name"
              name="member_name"
              value={formData.name}
              onChange={handleInputChange}
            />
            <Components.Input
              type="telephone"
              placeholder="Telephone"
              name="member_tel"
              value={formData.name}
              onChange={handleInputChange}
            />
            <Components.Input
              type="Address"
              placeholder="Address"
              name="member_addrs"
              value={formData.name}
              onChange={handleInputChange}
            />
            <Components.Input
              type="password"
              placeholder="Password"
              name="member_pass"
              value={formData.name}
              onChange={handleInputChange}
            />
            <Components.Input
              type="confirmpassword"
              placeholder="Confirm Password"
              name="confirm_member_pass"
              value={formData.confirm_member_pass}
              onChange={handleInputChange}
            />

            <Components.Button onClick={handleSignUp}>
              Sign Up
            </Components.Button>
          </Components.Form>
        </Components.SignUpContainer>

        <Components.SignInContainer signinIn={signIn}>
          <Components.Form>
            <Components.Title>Sign in</Components.Title>
            <Components.SubHeader>
              Use your phonenumber for login
            </Components.SubHeader>
            <Components.Input
              type="telephone"
              placeholder="Telephone"
              name="member_tel"
              value={loginData.name}
              onChange={handleInputLoginChange}
            />
            <Components.Input
              type="password"
              placeholder="Password"
              name="member_pass"
              value={loginData.name}
              onChange={handleInputLoginChange}
            />
            <Components.Anchor href="#">
              Forgot your password?
            </Components.Anchor>
            <Components.Button onClick={handleSignIn}>
              Sign In
            </Components.Button>
          </Components.Form>
        </Components.SignInContainer>

        <Components.OverlayContainer signinIn={signIn}>
          <Components.Overlay signinIn={signIn}>
            <Components.LeftOverlayPanel signinIn={signIn}>
              <Components.Title>Welcome Back!</Components.Title>
              <Components.Paragraph>
                Enter your personal details to use all of site
              </Components.Paragraph>
              <Components.GhostButton onClick={() => toggle(true)}>
                Sign In
              </Components.GhostButton>
            </Components.LeftOverlayPanel>

            <Components.RightOverlayPanel signinIn={signIn}>
              <Components.Title>Hello, Customer!</Components.Title>
              <Components.Paragraph>
                Register with your personal details to use all of site
              </Components.Paragraph>
              <Components.GhostButton onClick={() => toggle(false)}>
                Sign Up
              </Components.GhostButton>
            </Components.RightOverlayPanel>
          </Components.Overlay>
        </Components.OverlayContainer>
      </Components.Container>
    </Components.Background>
  );
}

export default App;