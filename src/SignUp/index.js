import React from "react";
import CommonSignLog from "../common_signIn_login";

const SignUp = () => {
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
      <CommonSignLog login={false} />
    </div>
  );
};

export default SignUp;
