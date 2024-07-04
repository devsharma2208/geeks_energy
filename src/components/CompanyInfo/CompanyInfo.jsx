import React, { useContext, useState } from "react";
import "./Company.css";
import { createPortal } from "react-dom";
import { AuthLogin, LoginInfo } from "../../App";

function CompanyInfo() {
  const { LoginButton, setLoginButton } = useContext(LoginInfo);
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthLogin);

  console.log("this is islooged", isLoggedIn);
  function handleOverlayClick(event) {
    if (event.target === event.currentTarget) {
      setLoginButton(false);
    }
  }

  return (
    <div>
      {LoginButton && isLoggedIn && (
        <div onClick={handleOverlayClick} className="parentLogin">
          <div onClick={(e) => e.stopPropagation()} className="settingwidth">
            <h2>Company Info</h2>
            <p>
              <strong>Company:</strong> Geeksynergy Technologies Pvt Ltd
            </p>
            <p>
              <strong>Address:</strong> Sanjayanagar, Bengaluru-56
            </p>
            <p>
              <strong>Phone:</strong> XXXXXXXXX09
            </p>
            <p>
              <strong>Email:</strong> XXXXXX@gmail.com
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default CompanyInfo;
