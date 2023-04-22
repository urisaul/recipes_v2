import * as React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar () {
    return (
        <div style={{display: "flex", justifyContent: "space-between", padding: "2% 5%"}}>
            <Link to={"/"}>Home</Link>
            <Link to={"/about"}>About Us</Link>
            <Link to={"/contact"}>Contact Us</Link>
            <Link to={"/signup"}>SignUp</Link>
            <Link to={"/signin"}>SignIn</Link>
            <Link to={"/account"}>My Account</Link>
        </div>
    )
}