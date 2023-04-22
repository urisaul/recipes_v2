import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./pages/signup";
import SignIn from "./pages/signin";
import NavBar from "./components/navBar";
import Landing from "./pages/landing";
import Post from "./pages/post";
// import Landing from "./pages/landing";
// import Recipe from "./pages/post";
// import Account from "./pages/account";

export default function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/post/:id" element={<Post />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </Router>
  );
}