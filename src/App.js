import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/navBar";
import { About, Landing, NewPost, Post, SignIn, SignUp } from "./pages";
import { EditPost } from "./pages/EditPost";

export default function App() {
  return (
    <div className="app">
      <Router>
        {/* <header><NavBar /></header> */}
        <header>
          <h1>Recipe Collection</h1>
          <p>Explore a variety of delicious recipes</p>

          <div className="navbar" id="myNavbar">
            {/* <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Meal Planner</a>
            <a href="#">User Profile</a>
            <a href="javascript:void(0);" class="icon" onClick="myFunction()">
              &#9776;
            </a> */}
          </div>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/about" element={<About />} />
            <Route path="/post/:id" element={<Post />} />
            <Route path="/new-post" element={<NewPost />} />
            <Route path="/edit-post/:id" element={<EditPost />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
          </Routes>
        </main>
      </Router>
      <footer>
        <p>&copy; 2023 Recipe Collection</p>
      </footer>
    </div>
  );
}
