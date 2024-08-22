import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import styles from "./AdminLogin.module.css";

const AdminLogin: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth(); // Use the context to get the login function
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const isLoggedIn = await login(username, password); // Call the login function
      if (isLoggedIn) {
        navigate("/admin"); // Navigate if login is successful
      } else {
        alert("Username or password is incorrect");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("An error occurred during login. Please try again.");
    }
  };

  return (
    <div className={styles.loginContainer}>
      <h2 className={styles.loginTitle}>Admin Login</h2>
      <div className={styles.loginForm}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter username"
          className={styles.loginInput}
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter password"
          className={styles.loginInput}
        />
        <button onClick={handleLogin} className={styles.loginButton}>
          Login
        </button>
      </div>
    </div>
  );
};

export default AdminLogin;
