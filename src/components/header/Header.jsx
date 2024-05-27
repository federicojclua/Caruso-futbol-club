import React from 'react';
import "./Header.css";
import Reservation from './reservation/Reservation';
import NavBar from './nav-bar/NavBar';



const Header = () => {
  return (
   <>
  
  
   <div>
   <NavBar/>
   <header className="header">
      <div className="video-container">
        <video autoPlay loop muted>
          <source src="src\assets\video\header-video2.mp4" type="video/mp4" />
          Tu navegador no soporta el elemento de video.
        </video>
      </div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        {/* Aquí va tu Navbar de Bootstrap */}
      </nav>
    </header>
      
        
        <Reservation/>
      </div>
   
   </>
  );
}
export default Header;
