import React from "react";
import Config from "../Config.json";
import {Helmet} from "react-helmet";
import {NavLink} from "react-router-dom";


const TITLE = "About Us | " + Config.SITE_TITLE;

class About extends React.Component {
    render(){
        return(
            <main>
                <Helmet>
                    <title>{TITLE}</title>
                </Helmet>
                <ul className ="trail">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/about">About us</NavLink></li>
	            </ul>
                <div className="bigcontainer" id ="big-about" >
                    
                    <div className="productcontainer" id ="about" >

                        <h2>About us</h2>
                        <div className="showcase"><img src="media/introimg.png" alt="introimage"/></div>
                        <div id="about-description">
                        <p>Born from the passion and creativity of Wuque Studio, Meletrix brings with it the same core DNA that has brought some of the most popular boards to the enthusiast community.
                        Focused on bringing more enthusiast-level mechanical keyboards to the market, Meletrix is devoted to bringing the best keyboards to everyone.</p>
                            

                        <p>From years of experience, the Meletrix team offers keyboard enthusiasts a chance to own highly customizable keyboards in an array of colors at all levels.
                        The introduction of the Boog75 HE lets users experience the latest in Magnetic Switch technology in a completely prebuilt offering making getting into the space easier than ever before.</p>
                            
                        <p>Sourcing the highest quality of materials, we expanded even further in the coming years with a team of designers, hardware and software engineers, and our manufacturing facility.
                        Allowing us to control the quality of the products and offering a more streamlined process we’re able to stay ahead of the curve and remain at the forefront of Keyboard Technology.</p>
                            
                        <p>Since inception with the Meletrix Zoom65, our first flagship board allowing a true enthusiast-level experience to everyone we’ve gone on to create the Zoom 65 v2, Zoom75, Zoom TKL,
                        Zoom98, Zoom Pad, and expanded even further into Keycaps, Switches, and accessories. Years later, this continues to be just the start with numerous other projects in the works.</p>
                        </div>
                        
                        <div id="reviewtitle">
                            <h2>Reviews</h2>
                            <p>Don't just take it from us, here's what our users have to say!</p>
                        </div>	

                        <div className="review">
                            <div id="kalle">
                                <h3>Kalle</h3>
                                <ul>	
                                    <li><img className="circle" src="media/User.png" alt ="user"/>
                                    <img src="media/icon _star_.png" alt ="star"/>
                                    <img src="media/icon _star_.png" alt ="star"/>
                                    <img src="media/icon _star_.png" alt ="star"/>
                                    <img src="media/icon _star_.png" alt ="star"/>
                                    <img src="media/icon _star_.png" alt ="star"/></li>	
                                </ul>
                                <div className="products">
                                    <p>This keyboard changed my life!</p>
                                </div>
                            </div>

                            <div id="olle">
                                <h3>Olle</h3>
                                <ul>	
                                    <li><img className="circle" src="media/User.png" alt ="user"/>
                                    <img src="media/icon _star_.png" alt ="star"/>
                                    <img src="media/icon _star_.png" alt ="star"/>
                                    <img src="media/icon _star_.png" alt ="star"/>
                                    <img src="media/icon _star_.png" alt ="star"/>
                                    <img src="media/icon _star_.png" alt ="star"/></li>	
                                </ul>
                                <div className="products">
                                    <p>This keyboard changed my life!</p>
                                </div>
                            </div>

                            <div id="pelle">
                                <h3>Pelle</h3>
                                <ul>	
                                    <li><img className="circle" src="media/User.png" alt ="user"/>
                                    <img src="media/icon _star_.png" alt ="star"/>
                                    <img src="media/icon _star_.png" alt ="star"/>
                                    <img src="media/icon _star_.png" alt ="star"/>
                                    <img src="media/icon _star_.png" alt ="star"/>
                                    <img src="media/icon _star_.png" alt ="star"/></li>	
                                </ul>
                                <div className="products">
                                    <p>This keyboard changed my life!</p>
                                </div>
                            </div>
                        </div>	

                    </div>
                </div>
            </main>
        );
    }
}

export default About;