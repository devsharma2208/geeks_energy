import React, { useContext } from "react";
import { AuthLogin, LoginInfo } from "../../App";
import { useNavigate } from "react-router-dom";
import CompanyInfo from "../CompanyInfo/CompanyInfo";

const HeaderSection = () => {
  const { LoginButton, setLoginButton } = useContext(LoginInfo);
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthLogin);
  const navigate = useNavigate();

  const handleLogOut = () => {
    localStorage.removeItem("user");
    setIsLoggedIn(false);

    if (!isLoggedIn) {
      navigate("/");
    }
  };
  return (
    <div>
      <div className="parentheadersec">
        <div className="leftMenuSystem">
          <div className="logo" style={{ cursor: "pointer" }}>
            {" "}
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/3/3d/Filmmania-tp.png"
              width={100}
              height={30}
              alt="logo"
            />
          </div>
        </div>
        <div className="rightmenuSystem">
          <div className="rightmenuSystemsubchild">
            <li
              style={{ cursor: "pointer" }}
              onClick={() => setLoginButton(!LoginButton)}
            >
              Company Info
            </li>
            <li
              style={{
                cursor: "pointer",
                backgroundColor: `${!isLoggedIn ? "blue" : "red"}`,
                padding: "0.5rem",
                color: "white",
                borderRadius: "0.5rem",
              }}
              onClick={handleLogOut}
            >
              {!isLoggedIn ? "Log In" : "Log Out"}
            </li>
          </div>
        </div>
          </div>
          
      <CompanyInfo />
    </div>
  );
};

export default HeaderSection;
