import React from "react";
import {NavLink} from "react-router-dom";
import Hamburger from "./Hamburger";

class Header extends React.Component {
    render() {
        return (
            <header>
		
                <div className="logo"><NavLink to="/" ><img src="/media/meletrix-black.webp" alt="logo"/></NavLink></div>
                <div className="underline"></div>
                

                <div className="nav">
                    <ul>
                        <li className ="menu-item">
                            <NavLink to="products">Products ▾</NavLink>
                            <ul className ="submenu" >
                                <li className ="item1"><NavLink to="products">Keyboards ▸</NavLink></li>
                                <ul className="nested-submenu" >
                                    <li><NavLink to="zoomtkl">ZOOM TKL ESSENTIAL EDITION</NavLink></li>
                                    <li><a href="/#">Boog75 Prebuilt</a></li>
                                    <li><a href="/#">Zoom98 EE</a></li>
                                    <li><a href="/#">Zoom65 Essential Edition V2</a></li>
                                </ul>
                                <li id ="switch-item"><a href="products.html">Switches</a></li>
                                <li id ="cap-item"><a href="products.html">Keycaps</a></li>
                            </ul>
                        </li>
                        <li><a href="/#">News</a></li>
                        <li><NavLink to="about">About Us</NavLink></li>
                        <li><a href="/#">Help</a></li>
                        <li><NavLink to="contact">Contact Us</NavLink></li>
                    </ul>
                </div>
                
                <div id="search-container">
                    <input type="text" placeholder="Search" />
                </div>

                
                <div className="profile">
                <ul>
                    <li><a href="/#"><img src="media/User.png" alt ="User" /></a></li>
                    <li><a href="/#"><img src="media/ShoppingCart.png" alt ="Shopping Cart"/></a></li>
                    
                </ul>
                </div>
            
                <div className = "dropdown">
                    <ul>
                        
                        <li><NavLink to="products">Products</NavLink></li>
                        <li><a href="/#">News</a></li>
                        <li><NavLink to="about">About Us</NavLink></li>
                        <li><a href="/#">Help</a></li>
                        <li><NavLink to="contact">Contact Us</NavLink></li>
                        
                    </ul>
                    
                </div>
                <div className ="hamburger" onClick={Hamburger}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                <div id="search-icon">
                    <a href="/#"><img src="media/Search.png" alt ="Menu"/></a>
                </div>

		
	        </header>
        );
    }
}

export default Header;