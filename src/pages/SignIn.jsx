import * as React from "react";
import { Link } from "react-router-dom";
import { postReq } from "../utils/apiCalls";

export function SignIn() {
   const handleSubmit = (event) => {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      let payload = {
         email: data.get("email"),
         password: data.get("password"),
         device_name: "browser",
         // device_name: navigator.userAgent,
      };

      // var myHeaders = new Headers();
      // myHeaders.append("Content-Type", "application/json");
      // var raw = JSON.stringify(
      //    {
      //       email: 'ctriebitz@gmail.com',
      //       password: '123456',
      //       device_name: 'browser',
      //    }
      // )
      // var requestOptions = {
      //    method: 'POST',
      //    headers: myHeaders,
      //    body: raw,
      //    redirect: 'follow'
      // }
      console.log(payload);

      postReq("https://urisaul.com/u_api/api/login")
         .then((res) => res.text())
         .then((res) => {
            if (res.status === 200) {
               localStorage.setItem("token", res);
            } else {
               alert(res);
            }
         })
         .catch((err) => console.log(err));
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
            }}
         >
            <label>Email</label>
            <input name="email" type="email" />
            <label>Password</label>
            <input name="password" type="password" />
            <button type="submit">Login</button>
         </form>
         <p>
            don't have an account yet? <Link to={"/signup"}>click here</Link>
         </p>
      </div>
   );
}
