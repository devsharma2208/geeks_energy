import logo from "./logo.svg";
import "./App.css";
import SignUpPage from "./components/Authentication/SignUpPage";
import LoginPage from "./components/Authentication/LoginPage";
import CombinedAuth from "./components/Authentication/CombinedAuth";
import { Navigate, Route, Routes } from "react-router-dom";
import { createContext, useState } from "react";
import Home from "./components/Home.jsx/Home";
import ProductSimplePage from "./components/Home.jsx/ProductSimplePage";
import HeaderSection from "./components/HeaderSection/HeaderSection";
import CompanyInfo from "./components/CompanyInfo/CompanyInfo";

export const AuthLogin = createContext();
export const LoginInfo = createContext();

function App() {
  let isUserLoggedIn;
  const token = localStorage.getItem("user");
  if (token) {
    isUserLoggedIn = true;
  } else {
    isUserLoggedIn = false;
  }

  const [isLoggedIn, setIsLoggedIn] = useState(isUserLoggedIn);
  const [LoginButton, setLoginButton] = useState(false);

  return (
    <div className="App">
      <LoginInfo.Provider value={{ LoginButton, setLoginButton }}>
        <AuthLogin.Provider value={{ isLoggedIn, setIsLoggedIn }}>
          <HeaderSection />
          <Routes>
            <Route path='/' element={<SignUpPage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/home' element={<Home />} />
            <Route path='/home/:userId' element={<ProductSimplePage />} />
           </Routes> 
        </AuthLogin.Provider >
      </LoginInfo.Provider>

      
     
    </div>
  );
}

export default App;
