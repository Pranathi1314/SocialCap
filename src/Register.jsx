import React, { useState } from "react"
export const Register = (props)  => {

    const [name, setNmail] = useState ('');
    const [email, setEmail] = useState ('');
    const [contact, setContact] = useState ('');
    const [address, setAddress] = useState ('');
    const [pass, setPass] = useState ('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
        }
        

    return (
       
        <div className="auth-form-container">
           
        <form className="register-form"onSubmit={handleSubmit}>
            <h1>Register</h1>

        <label htmlFor="name">Name</label>
        <input type="name" placeholder="Full Name" id="name" name= "name"/>
        <label htmlFor="email">User-ID</label>
        <input type="email" placeholder="Email" id="email" name= "email"/>
        <label htmlFor="contact ">Contact </label>
        <input type="contact " placeholder="Contact " id="contact " name= "contact "/>
        <label htmlFor="address">Address</label>
        <input type="address" placeholder="Address" id="address" name= "address"/>
        <label htmlFor="password">Password</label>
        <input type="password" placeholder="******" id="password" name= "password"/>

        <button type="Submit">Register</button>

    </form>
    
    <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
    
    </div>
    
    )
}