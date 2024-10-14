import React from "react";
import Config from "../Config.json";
import Hero from "../components/Hero"
import {Helmet} from "react-helmet";
import {NavLink} from "react-router-dom";

const TITLE = "Home | " + Config.SITE_TITLE;

class Home extends React.Component{
    render(){
        return(
            <main>
                <Helmet>
                    <title>{TITLE}</title>
                </Helmet>
        
                <Hero/>
                
                <div className = "container" id = "container-1">	
                    <h1>Explore our products!</h1>

                    <div className = "products">
                        <NavLink to="products"><img src="media/keyboards.jpg" alt="keyboards link" /></NavLink>
                        <div className ="imgtext"><h1>Keyboards</h1></div>
                        
                    </div>

                    <div className = "products">
                        
                        <a href="/#"><img src="media/switches.webp" alt="switches link" /></a>
                        <div className ="imgtext"><h1>Switches</h1></div>	
                    </div>

                    <div className = "products">
                
                        <a href="/#"><img src="media/keycaps.webp" alt ="keycaps link" /></a>
                        <div className ="imgtext"><h1>Keycaps</h1></div>
                    </div>
                    
                    
                </div>

                <div className = "container" id="container-2">
                    <img src="media/Guidebackground.png" alt ="guideimage" />
                    <div className = "guide">
                        <h1>Keyboard guide</h1>
                        <p>Learn about our keyboards to find what best suits you!</p>
                        
                        <form style={{marginRight: 5 + 'em'}} action="guide" method="get">
                            <button>Go to guide</button>
                        </form>
                    </div>
                </div>

                <div  className = "container" id="container-3">

                    <div>
                        <img className="circle" src="media/AroundtheGlobe.png" alt ="Around the World" />
                        <p>We offer worldwide shipping to our customers.</p>		
                            
                    </div>
                    <div>
                        <img className="circle" src="media/Chat.png" alt ="Customer Service" />
                        <p>We are available from monday to friday (9:00 AM to 6:00 PM  on Beijing Time) to answer your questions.</p>
                    </div>
                    <div>	
                        
                        <img className="circle" src="media/Protect.png" alt ="Secure Payment" />
                        <p>We offer you different payment methods and all payments are processed securely   .</p>
                    </div>		
                    
                </div>
            </main>
        );
    }
}

export default Home;