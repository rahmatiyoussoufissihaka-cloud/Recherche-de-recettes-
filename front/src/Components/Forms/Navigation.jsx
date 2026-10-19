import { useState } from "react";
import {  NavLink } from "react-router";

export default function Navigation(){
    const [isOpen, setIsOpen] = useState(false)
  
  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

     return (
    <nav className="navbar-nav navbar navbar-expand-lg navbar-light bg-light shadow-sm py-3">
        <div className="container-fluid content">
            <NavLink  className="navbar-brand logo" >
                TheMealDB
            </NavLink> 
                <button 
                    className="navbar-toggler" 
                    onClick={toggleMenu}
                    type="button" data-bs-toggle="collapse" 
                    aria-controls="navbarNav" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
              </button>
             <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}  id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-link">
                        
                        <NavLink to="/" end className='nav-link navbar-link'>
                            Recherche
                        </NavLink>
                    </li>
                     <li className="nav-link">
                        <NavLink to="/Favoris" className='nav-link navbar-link'>Favoris</NavLink>
                    </li>
                </ul>

             </div>
        
        </div>
      
    </nav>
    
  );
}