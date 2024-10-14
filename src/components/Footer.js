import React from "react";
import {NavLink} from "react-router-dom";



class Footer extends React.Component {
    render() {
        return (
            <footer>
            
                <div className="socials">
                <ul>
                    <li><div className="logo2"><img src="media/meletrix-black.webp" alt="logo" /></div></li>
                    
                    <li><h1>Our Socials</h1></li>
                    <li><a href="https://www.instagram.com/meletrix2022/"><img src="media/Instagram.png" alt ="instagram"/></a></li>
                    <li><a href="https://discord.com/invite/CJjtbwr"><img src="media/DiscordNew.png" alt ="discord"/></a></li>
                    <li><a href="https://twitter.com/meletrix?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"><img src="media/TwitterX.png" alt ="x" /></a></li>
                    <li><a href="https://www.youtube.com/@meletrix2184"><img src="media/YouTube.png" alt ="youtube"/></a></li>
                    <li><a href="https://www.facebook.com/meletrix2022/"><img src="media/Facebook.png" alt ="facebook"/></a></li>
                    <li><p> 2024 Meletrix. Powered by Shopify.</p></li>
                </ul>
                </div>
                
        
                <div className="news">
                    <h2>Newsletter</h2>
                    <p>Sign up to be updated with exclusive offers, product releases, news and more!</p>
        
                    <div id="emailinput"> 
                        <input type="text" placeholder="Enter your e-mail"/>
                        <input type="button" value=">"/>
                    </div>
                    
                </div>		
        
                <div className="menu" id="menu-list">
                <ul>
                    <li><h2>Menu</h2></li>
                    <li><NavLink to="/about">About Us</NavLink></li>
                    <li><NavLink to="/contact">Contact Us</NavLink></li>
                    <li><a href="/#">Designer Channel Us</a></li>
                    <li><a href="/#">Affiliate</a></li>
                    <li><a href="/#">Vendors</a></li>
                </ul>
                </div>	
        
                <div className="menu" id ="help-list">
                    
                <ul>
                    <li><h2>Help</h2></li>
                    <li><a href="/#">FAQ</a></li>
                    <li><a href="/#">Shipping Policy</a></li>
                    <li><a href="/#">Return & Refund Policy</a></li>
                    <li><a href="/#">Terms of Service</a></li>
                    <li><a href="/#">Privacy Policy</a></li>
                </ul>
                </div>	
            
                
            </footer>
        );
    }
}

export default Footer;