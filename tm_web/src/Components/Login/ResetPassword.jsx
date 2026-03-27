import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";

const ResetPassword = () => {
  const { token } = useParams();
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleReset = async () => {
    const res = await fetch(
      `http://localhost:5000/api/auth/reset-password/${token}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ password })
      }
    );

    const data = await res.json();

    if (res.ok) {
      alert("Password reset successful ✅");
      navigate("/login");
    } else {
      alert(data.message);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h2>Reset Password</h2>
      <input
        type="password"
        placeholder="Enter new password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <br /><br />
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default ResetPassword;