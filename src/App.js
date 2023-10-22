import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/navBar";
<<<<<<< HEAD
import { About, Landing, Post, SignIn, SignUp } from './pages';

export default function App() {
   return (
      <div className="app">
         <Router>
            <header><NavBar /></header>
            <main>
               <Routes>
                  <Route path="/" element={<Landing />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/post/:id" element={<Post />} />
                  <Route path="/signup" element={<SignUp />} />
                  <Route path="/signin" element={<SignIn />} />
               </Routes>
            </main>
         </Router>
      </div>
=======
import Landing from "./pages/landing";
import Post from "./pages/post";
import NewPost from "./pages/newPost";
import About from "./pages/about";
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
            <Route path="/new-post" element={<NewPost />} />
            <Route path="/about" element={<About />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
         </Routes>
      </Router>
>>>>>>> efc76c0183e10b62437e4a265d25acc6ae82b6ff
   );
}