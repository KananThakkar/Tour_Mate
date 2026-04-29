import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

export const Login = () => {
  const [action, setAction] = useState("Login");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

    // 🔹 VALIDATION FUNCTION
  const validate = () => {

    // Name validation (Sign Up only)
    if (action === "Sign Up") {
      if (!name.trim()) {
        alert("Username is required");
        return false;
      }
      if (name.length < 3) {
        alert("Username must be at least 3 characters");
        return false;
      }
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Enter a valid email");
      return false;
    }

    // Password validation
    const passwordRegex = /^(?=.*[0-9]).{6,}$/;
    if (!passwordRegex.test(password)) {
      alert("Password must be at least 6 characters and contain a number");
      return false;
    }

    return true;
  };


  // 🔐 LOGIN FUNCTION
  const handleLogin = async () => {
    if (!validate()) return;
    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password })
      });

      const data = await res.json();

      if (res.ok) {
        localStorage.setItem("token", data.token);
        alert("Login successful ✅");
        navigate("/home");
      } else {
        alert(data.message || "Login failed ❌");
      }

    } catch (err) {
      console.log(err);
      alert("Server error ❌");
    }
  };

  // 📝 SIGNUP FUNCTION
  const handleSignup = async () => {
    if (!validate()) return;
    try {
      const res = await fetch("http://localhost:5000/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password })
      });

      const data = await res.json();

      if (res.ok) {
        alert("Signup successful ✅");
        setAction("Login"); // switch to login
      } else {
        alert(data.message || "Signup failed ❌");
      }

    } catch (err) {
      console.log(err);
      alert("Server error ❌");
    }
  };

  return (
    <div className="container">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>

      <div className="inputs">
        {action === "Sign Up" && (
          <div className="input">
            <input 
              type="text" 
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)} />
          </div>
        )}

        <div className="input">
          <input
            type="email"
            placeholder="Email Id"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="input">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </div>

      {action === "Login" && (
        <div className="forgot-password">
          <span onClick={async () => {
            const emailInput = prompt("Enter your email");

            if (!emailInput) return;

            await fetch("http://localhost:5000/api/auth/forgot-password", {
              method: "POST",
              headers: {
              "Content-Type": "application/json"
              },
              body: JSON.stringify({ email: emailInput })
            });

            alert("Reset link sent to your email 📩");
          }}>
          Forgot Password?
          </span>
            
        </div>
      )}

      <div className="submit-container">
        <div
          className={action === "Login" ? "submit gray" : "submit gray"}
          onClick={() => setAction("Sign Up")}
        >
          {action === "Sign Up" ? "Login" : "Sign Up"}
        </div>

        <div
          className={action === "Sign Up" ? "submit" : "submit"}
          onClick={action === "Login" ? handleLogin : handleSignup}
        >
          {action === "Login" ? "Login" : "Sign Up"}
        </div>
      </div>
    </div>
  );
};