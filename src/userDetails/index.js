import React, { useEffect, useState } from "react";
import axios from "axios";
import CommonSignLog from "../common_signIn_login";
import Glogo from "../assets/google-logo.png";
import flogo from "../assets/facebook-logo.png";
import { useNavigate } from "react-router-dom";
const UserDetails = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/login");
  }, []);

  return (
    <div
      style={{
        width: "23%",
        height: "70%",
        padding: "20px",
        background: "white",
        borderRadius: "10px",
        minWidth: "220px",
      }}
    >
      <CommonSignLog login={true} />
    </div>
  );
};

export default UserDetails;
