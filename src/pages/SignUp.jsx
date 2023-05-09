import * as React from "react";
import { Link } from "react-router-dom";

export function SignUp() {
   const handleSubmit = (event) => {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      console.log({
         email: data.get("email"),
         password: data.get("password"),
      });
   };

   return (
      <div
         style={{
            display: "flex",
            flexDirection: "column",
            maxWidth: "100%",
            width: "350px",
            margin: "auto",
         }}>
         <h1>
            Sign Up
         </h1>
         <form onSubmit={handleSubmit}
            style={{
               display: "flex",
               flexDirection: "column",
               maxWidth: "100%",
               width: "350px",
               margin: "auto",
            }}>
            <label>First Name</label>
            <input name="firstname" />
            <label>Last Name</label>
            <input name="lastname" />
            <label>Email</label>
            <input name="email" type="email" />
            <label>Password</label>
            <input name="password" type="password" />
            <label>Confirm Password</label>
            <input name="password_confirmation" type="password" />
         </form>
         <p>already have an account? <Link to={"/signin"}>click here</Link></p>
      </div>
   );
}
