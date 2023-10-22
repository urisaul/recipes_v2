import * as React from 'react';
import { NavLink } from 'react-router-dom';

export default function NavBar() {
   return (
      <div className='nav-bar'>
         <h1>Logo</h1>
         <input type="checkbox" id="nav-toggle" />
         <nav>
            <ul>
               <li><NavLink to={"/"}>Home</NavLink></li>
               <li><NavLink to={"/about"}>About</NavLink></li>
               <li><NavLink to={"/contact"}>Contact</NavLink></li>
               <li><NavLink to={"/signup"}>SignUp</NavLink></li>
               <li><NavLink to={"/signin"}>SignIn</NavLink></li>
               <li><NavLink to={"/account"}>Account</NavLink></li>
            </ul>
         </nav>
         <label htmlFor="nav-toggle">
            <span></span>
         </label>
      </div>
   );
}
