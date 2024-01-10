import * as React from "react";
import { Link, useNavigate } from "react-router-dom";
import { postReq } from "../utils/apiCalls";
import { useState } from "react";

export function SignIn() {

   const [messageBox, setMessageBox] = useState({
      message: "",
      success: false,
   })

   const navigate = useNavigate();
   const handleSubmit = (event) => {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      const payload = {
         email: data.get("email"),
         password: data.get("password"),
         device_name: "browser",
         // device_name: navigator.userAgent,
      };


      if (!payload.email || !payload.password) {
         setMessageBox({
            message: "Some required fields are missing",
            success: false,
         });
         return false;
      }

      postReq("https://urisaul.com/u_api/api/q_login", [], payload)
         .then((res) => {
            if (!res.ok) {
               return res.json().then(err => { throw new Error(err.message) })
            }
            return res.json();
         })
         .then((res) => {
            localStorage.setItem("token", res.token);
            setMessageBox({
               message: "Login successful",
               success: true,
            })
            navigate('/')
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
         }}
      >
         <h1>Login</h1>
         <form
            onSubmit={handleSubmit}
            style={{
               display: "flex",
               flexDirection: "column",
               maxWidth: "100%",
               width: "350px",
               margin: "auto",
               marginBottom: "2em",
            }}
         >
            <label className="required">Email</label>
            <input name="email" type="email" />
            <label className="required">Password</label>
            <input name="password" type="password" />
            <br />
            <button type="submit">Login</button>
         </form>
         {messageBox.message && <div style={{
            color: (messageBox.success ? "none" : "red"),
            margin: "1em",
         }}>{messageBox.success ? "" : "*"} {messageBox.message}</div>}
         <p>
            don't have an account yet? <Link to={"/signup"}>click here</Link>
         </p>
      </div>
   );
}
