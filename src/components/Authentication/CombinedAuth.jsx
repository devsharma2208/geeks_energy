import React from "react";
import LoginPage from "./LoginPage";
import SignUpPage from "./SignUpPage";

const CombinedAuth = () => {
  return (
    <div
      style={{
        height: "400px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div id="mobileres" style={{ display: "flex", gap: "20px" }}>
        <SignUpPage />
        <LoginPage />
      </div>
    </div>
  );
};

export default CombinedAuth;
