import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    password: "",
    email: "",
    phoneNumber: "",
    profession: "Student", // Default profession
  });

  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(formData));

    setFormData({
      name: "",
      password: "",
      email: "",
      phoneNumber: "",
      profession: "Student",
    });

    setMessage("Now you can login");
    navigate("/login");
  };

  return (
    <div className="parentauth">
      <div className="childpaerntauth">
        <h1>Sign Up</h1>
        <span style={{ fontSize: "10px", color: "green" }}>
          Not a user ? SignUp
        </span>
        <form
          style={{ backgroundColor: "white" }}
          className="paddingAuth"
          onSubmit={handleSubmit}
        >
          <div className="signUpList">
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="signUpList">
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="signUpList">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="signUpList">
            <label>Phone Number:</label>
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
            />
          </div>
          <div className="signUpList">
            <label>Profession:</label>
            <select
              name="profession"
              value={formData.profession}
              onChange={handleChange}
            >
              <option value="Student">Student</option>
              <option value="Teacher">Teacher</option>
              <option value="Engineer">Engineer</option>
              <option value="Doctor">Doctor</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <button
            style={{
              color: "white",
              fontWeight: "bold",
              backgroundColor: "#2196F3",
              border: "none",
              padding: 5,
              borderRadius: "4px",
              cursor: "pointer",
            }}
            type="submit"
          >
            Sign Up
          </button>
        </form>
        <span
          style={{ fontWeight: "bolder", fontSize: "13px", color: "green" }}
        >
          {message}
        </span>
      </div>
    </div>
  );
};

export default SignUpPage;
