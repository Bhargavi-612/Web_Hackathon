import React, { useState } from 'react';
import './LoginRegisterBox.css'; // Import CSS for styling
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";

function HomeRegister() {
  const [data, setData] = useState({
		name: "",
		role: "",
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
            const url = "http://localhost:8080/api/users";
            const { data: res } = await axios.post(url, data);
            navigate("/login");
            console.log(res.message);
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
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
            <div className="form-group">
                <h4>Name:</h4>
                <input
                type="text"
                placeholder="Full name"
                //value={data.name}
                onChange={handleChange}
                required
                />
            </div>
            <div className="form-group">
                <h4>Role:</h4>
                <input
                type="text"
                placeholder="Teaching/Learning"
                //value={data.role}
                onChange={handleChange}
                required
                />
            </div>
            <div className="form-group">
                <h4>Email:</h4>
                <input
                type="text"
                placeholder="EmailID"
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
            <button type="submit">Register</button>
            </form>
        </div>
    </div>
  );
}

export default HomeRegister;
