import * as React from "react";
import { Link } from "react-router-dom";
import { postReq } from "../utils/apiCalls";
import { useState } from "react";

export function SignUp() {

   const [messageBox, setMessageBox] = useState({
      message: "",
      success: false,
   })


   const handleSubmit = (event) => {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      const payload = {
         email: data.get("email"),
         password: data.get("password"),
         name: data.get("firstname") + " " + data.get("lastname"),
         client_id: 225,
         password: data.get("password"),
         password_confirmation: data.get("password_confirmation"),
      };

      if (!payload.email || !payload.password || !payload.password_confirmation || !payload.fistname) {
         setMessageBox({
            message: "Some required fields are missing",
            success: false,
         });
         return false;
      }

      postReq("https://urisaul.com/u_api/api/user/q_create", [], payload)
         .then((res) => {
            if (!res.ok) {
               return res.json().then(err => { throw new Error(err.message) })
            }
            return res.json();
         })
         .then((res) => {
            setMessageBox({
               message: "Account Created successfully! check your email for a confirmation message",
               success: true,
            })
         })
         .catch((err) => {
            console.log(err);
            setMessageBox({
               message: err.message,
               success: false,
            })
         })
         .finally(() => {
            setTimeout(() => {
               setMessageBox({
                  message: "",
                  success: false,
               });
            }, 5000);
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
               marginBottom: "1em",
            }}>
            <label className="required">First Name</label>
            <input name="firstname" />
            <label>Last Name (optional)</label>
            <input name="lastname" />
            <label className="required">Email</label>
            <input name="email" type="email" />
            <label className="required">Password</label>
            <input name="password" type="password" />
            <label className="required">Confirm Password</label>
            <input name="password_confirmation" type="password" />
            <br />
            <button type="submit">Create Account</button>
         </form>
         {messageBox.message && <div style={{
            color: (messageBox.success ? "none" : "red"),
            margin: "1em",
            }}>{messageBox.success ? "" : "*"} {messageBox.message}</div>}
         <p>already have an account? <Link to={"/signin"}>click here</Link></p>
      </div>
   );
}
