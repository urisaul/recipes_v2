import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

export default function NavBar() {
   const [isMenuShowed, setIsMenuShown] = useState(false);
   return (
      <div className='nav-bar'>
         <h1>Logo</h1>
         <nav className={isMenuShowed && 'open'}>
            <ul onClick={() => setIsMenuShown(prev => !prev)}>
               <li><NavLink to={"/"}>Home</NavLink></li>
               <li><NavLink to={"/about"}>About</NavLink></li>
               <li><NavLink to={"/contact"}>Contact</NavLink></li>
               <li><NavLink to={"/signup"}>Signup</NavLink></li>
               <li><NavLink to={"/signin"}>Signin</NavLink></li>
               <li><NavLink to={"/account"}>Account</NavLink></li>
            </ul>
         </nav>
         <button onClick={() => setIsMenuShown(prev => !prev)}>
            <span></span>
         </button>
      </div>
   );
}
