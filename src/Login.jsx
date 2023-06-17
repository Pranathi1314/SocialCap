import React, { useState } from "react"
export const Login = (props)  => {
    const [email, setEmail] = useState ('');
    const [pass, setPass] = useState ('');
    
    const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
    }

    return (
        
        <div className="auth-form-container">
    <form className="login-form" onSubmit={handleSubmit}>
       <h2>Log-In</h2>
        <label htmlFor="email">Email</label>
        <input value={email} type="email" placeholder="Email" id="email" name= "email"/>
       
        <label htmlFor="password">Password</label>
        <input  value={pass} type="password" placeholder="******" id="password" name= "password"/>
        <button type="Submit">Log In</button>

    </form>
    <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button>
    </div>
    )
}