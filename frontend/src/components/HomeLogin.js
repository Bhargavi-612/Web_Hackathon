import React, { useState } from 'react';
import './LoginRegisterBox.css'; // Import CSS for styling
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";

function HomeLogin() {
  const [isLoginMode, setIsLoginMode] = useState(true);

  const [data, setData] = useState({
		email: "",
		password: "",
	});
	const [error, setError] = useState("");
	const navigate = useNavigate();

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

  const handleSubmit = async (e) => {
		e.preventDefault();
    try {
      const url = "http://localhost:8080/api/auth";
      const { data: res } = await axios.post(url, data);
      localStorage.setItem("token", res.data);
      window.location = "/home";
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
    }
	};

  return (
    <div className='page-container'>
        <div className="login-register-box">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
            <div className="form-group">
                <h4>Email:</h4>
                <input
                type="email"
                //value={data.email}
                onChange={handleChange}
                required
                />
            </div>
            <div className="form-group">
                <h4>Password:</h4>
                <input
                type="password"
                //value={data.password}
                onChange={handleChange}
                required
                />
            </div>
            <button type="submit">Login</button>
            </form>
        </div>
    </div>
  );
}

export default HomeLogin;
