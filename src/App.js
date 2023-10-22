import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/navBar";
import { About, Landing, NewPost, Post, SignIn, SignUp } from './pages';

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
                  <Route path="/new-post" element={<NewPost />} />
                  <Route path="/signup" element={<SignUp />} />
                  <Route path="/signin" element={<SignIn />} />
               </Routes>
            </main>
         </Router>
      </div>
   );
}