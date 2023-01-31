import axios from "axios";
import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
import CommonLogo from "../assets/CommonLogo";

const CommonSignLog = ({ login }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const emailChange = (e) => {
    let changedEmail = e.target.value;
    setEmail((prev) => {
      return (prev = changedEmail);
    });
  };
  const passwordchange = (e) => {
    let changedPassword = e.target.value;
    setPassword((prev) => {
      return (prev = changedPassword);
    });
  };
  const checkUser = async (name) => {
    if (name === "login") {
      let getUser = await axios.post("http://localhost:3001/login", {
        email,
        password,
      });
      console.log("getUser==>", getUser);
      if (getUser?.data?.message === "success") {
        navigate("/products");
      }
    } else {
      await axios.post("http://localhost:3001/signup", { email, password });
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <h2 style={{ textTransform: "uppercase", fontWeight: 500 }}>
        {login ? "login" : "Signup"}
      </h2>
      <div>
        <p>Email</p>
        <input
          style={{
            border: "1px solid black",
            width: "100%",
            paddingLeft: "5px",
          }}
          onChange={(e) => emailChange(e)}
          value={email}
          placeholder="enter your email"
          type="text"
        />
      </div>
      <div>
        <p>Password</p>
        <input
          style={{
            border: "1px solid black",
            width: "100%",
            paddingLeft: "5px",
          }}
          onChange={(e) => passwordchange(e)}
          value={password}
          placeholder="enter you password"
          type="password"
        />
      </div>
      <div
        style={{
          textAlign: "center",
          background: "red",
          borderRadius: "7px",
          height: "30px",
        }}
      >
        {login ? (
          <button onClick={() => checkUser("login")} style={{ color: "white" }}>
            Login
          </button>
        ) : (
          <button
            onClick={() => checkUser("signup")}
            style={{ color: "white" }}
          >
            sign up
          </button>
        )}
        {login && (
          <div
            style={{
              color: "grey",
              display: "flex",
              flexDirection: "row-reverse",
              paddingTop: "8px",
              cursor: "pointer",
            }}
          >
            <p>forgot password?</p>
          </div>
        )}
      </div>
      <CommonLogo />
      {!login ? (
        <div className="flex mt-10 justify-center min-w-max">
          <div>
            <p>Need an account?</p>
          </div>
          <div
            onClick={() => navigate(login ? "/signup" : "/login")}
            style={{ cursor: "pointer" }}
          >
            <u>SIGN UP</u>
          </div>
        </div>
      ) : (
        <div className="flex mt-10 justify-center">
          <div>
            <p>Already a user?</p>
          </div>
          <div
            onClick={() => navigate(login ? "/signup" : "/login")}
            style={{ cursor: "pointer" }}
          >
            <u>LOGIN</u>
          </div>
        </div>
      )}
    </div>
  );
};

export default CommonSignLog;
