import React, { useContext, useState } from 'react';
import { AuthLogin } from '../../App';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const {isLoggedIn, setIsLoggedIn} = useContext(AuthLogin)
  const [loginData, setLoginData] = useState({
    name: '',
    password: '',
  });
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  };
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (
      storedUser &&
      storedUser.name === loginData.name &&
      storedUser.password === loginData.password
    ) {
        setErrorMessage("True"); // I Set logged in state to true
        navigate("../home")
        setIsLoggedIn(true)
        
    } else {
      setErrorMessage('Invalid Credentials');
    }
  };

  return (
    <div className='parentauth'>
      <div className='childpaerntauth'>
      <h1>Login</h1>
      <span style={{ fontSize: "10px", color: "green" }}>Already a user? Login</span>

      <form className='paddingAuth' style={{ backgroundColor: 'white' }} onSubmit={handleLogin}>
        <div className='signUpList'>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={loginData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className='signUpList'>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={loginData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button style={{color:"white", fontWeight: 'bold',backgroundColor: "#2196F3", border: "none", padding: 5, borderRadius: "4px", cursor: 'pointer', marginTop: 88}} type="submit">Login</button>
        {errorMessage && <p style={{fontWeight: "bolder",fontSize: "13px" , color:"red"}}>{errorMessage}</p>}
      </form>
      </div>
    </div>
  );
};

export default LoginPage;
