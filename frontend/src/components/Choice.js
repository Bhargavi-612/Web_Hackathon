import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";

function Choice() {
    const navigate = useNavigate();

    const handleSubmit1 = async (e) => {
        try{
            e.preventDefault();
            navigate("/login");
        }
        catch(error){
            console.log(error.response.data.message);
        }
	};

    const handleSubmit2 = async (e) => {
		try{
            e.preventDefault();
            navigate("/register");
        }
        catch(error){
            console.log(error.response.data.message);
        }
	};

    return(
        <div className="container">
            <button className="btn" onClick={handleSubmit1}>Login</button>
            <button className="btn" onClick={handleSubmit2}>Sign Up</button>
        </div>
    );
}

export default Choice;