import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./pages/signup";
import SignIn from "./pages/signin";
// import Landing from "./pages/landing";
// import Recipe from "./pages/post";
// import Account from "./pages/account";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<div>Hello@@?</div>} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </Router>
  );
}