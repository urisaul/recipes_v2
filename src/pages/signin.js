import * as React from "react";
import { Link } from "react-router-dom";
import { postReq } from "../utils/apiCalls";

export default function SignIn() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    let payload = {
      email: data.get("email"),
      password: data.get("password"),
      device_name: "browser",
      // device_name: navigator.userAgent,
    };
    console.log(payload);

    postReq("https://urisaul.com/u_api/api/login", [], payload, false)
      .then((res) => {
        if (res.status !== 200) {
          alert(res.text());
        }
        return res.text()
      })
      .then((res) => {
        localStorage.setItem("token", res);
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
