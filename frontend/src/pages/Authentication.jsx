import React, { useState } from "react";
import axios from "axios";
import "../App.css";

const Authentication = () => {
  const [isRegister, setIsRegister] = useState(false);
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); // 👈 new state

  const handleSubmit = async (e) => {
    e.preventDefault();
    const endpoint = isRegister
      ? "http://localhost:5000/api/v1/users/register"
      : "http://localhost:5000/api/v1/users/login";

    try {
      const res = await axios.post(endpoint, { name, username, password });
      alert(res.data.message);
    } catch (err) {
      alert(err.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-overlay">
        <div className="auth-container">
          <h2 className="app-title">StreamRTC Video Call</h2>
          <h3 className="auth-title">
            {isRegister ? "Create Account" : "Welcome Back"}
          </h3>
          <form onSubmit={handleSubmit} className="auth-form">
            {isRegister && (
              <input
                type="text"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            )}

            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />

            <div className="password-field">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <span
                className="toggle-password"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "🫣" : "👁️"}
              </span>
            </div>

            <button type="submit" className="auth-btn">
              {isRegister ? "Register" : "Login"}
            </button>
          </form>

          <p className="toggle-text">
            {isRegister ? "Already have an account?" : "New to StreamRTC?"}{" "}
            <span onClick={() => setIsRegister(!isRegister)}>
              {isRegister ? "Login here" : "Register here"}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Authentication;