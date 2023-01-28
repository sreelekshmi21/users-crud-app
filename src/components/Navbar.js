import React from 'react';
import {Link} from 'react-router-dom'


const Navbar = () =>{   
    
    
    
    return(   
           
           <>
            <nav className="navbar fixed-top navbar-expand-md navbar-dark bg-dark">
               <div className="container-fluid"> 
               <a href="#" className="navbar-brand mb-0 h1">
                   
                   CRUD APP</a>
            <button className="navbar-toggler"
                           type="button"
                               data-bs-toggle="collapse"
                               data-bs-target="#toggleMobileMenu"
                               aria-controls="#toggleMobileMenu"
                               aria-expanded="false"
                               aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
               <div className="collapse navbar-collapse" id="toggleMobileMenu">
                   <ul className="navbar-nav text-center">
                       <li className="nav-item">
                         <a className="nav-link" href="/notetaker">Note Taker</a>
                       </li>
                       <li className="nav-item">
                         <Link className="nav-link" to='/canvas'>Canvas</Link>
                       </li>
                       <li className="nav-item">
                         <Link className="nav-link" to='/features'>Features</Link>
                       </li>                       
                     </ul>                     

                     <ul className="ms-auto text-center"> 
                       <li className="nav-item dropdown">
                         <a className="nav-link dropdown-toggle" 
                         role="button" 
                         data-bs-toggle='dropdown'
                         aria-expanded="false"
                         href="#">
                          <img src="images/green-leaves.jpg" alt="" className="topAvtar"/>
                         </a>
                         <ul className="dropdown-menu dropdown-menu-end text-center"
                             aria-labelledby="navbarDropdown"
                         >
                             <li className="dropdown-item">
                                 <a className="nav-link" href="#">Login</a>
                             </li>
                             <li className="dropdown-item">
                                 <a className="nav-link" href="#">Register</a>
                             </li>
                             <li className="dropdown-item">
                                 <a className="nav-link" href="#">LogOut</a>
                             </li>
                         </ul>
                       </li>
                   </ul>
               </div>  
            </div>         
        </nav>  
            </>   

       )
   
}
export default Navbar