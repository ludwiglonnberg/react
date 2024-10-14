import React from "react";

class Hero extends React.Component{
    render(){
        return(
            <main>
            <div className = "herocontainer">
                    
                    <div className = "hero" id ="blue">
                        
                        <img src="media/hero2.png" alt="Zoom TKL SKY blue" />
                
                        <div className ="shadow">
                            <div className ="textbox">
                                <div className="herotext">
                                    <h2>ZOOM75 ESSENTIAL EDITION - SKY BLUE</h2>
                                    <p>Our successful ZOOM-series has a new member! 
                                    Zoom75 is a premium keyboard with everything
                                    you could possibly need.</p>
                                    <input type="button" value="Get it now" />
                                </div>
                            </div>
                        </div>

                        
                    </div>
                    
                    <div className = "hero" id="purple">
                        
                        <img src="/media/purplekeyboard.png" alt="Zoom purple" />
                        <div className ="shadow">
                            <div className ="textbox">
                                
                                <div className="herotext">
                                    <h2>ZOOM75 ESSENTIAL EDITION - LILAC</h2>
                                    <p>Our successful ZOOM-series has a new member! 
                                        Zoom75 is a premium keyboard with everything
                                        you could possibly need.</p>
                                    <input type="button" value="Get it now" />
                                </div>
                            </div>
                        </div>
                        
                    </div>

                    <div className = "hero" id="red">
                        
                        <img  src="media/zoom98hero.png" alt="Zoom98 scarlet" />
                        <div className ="shadow">
                            <div className ="textbox">
                                
                                <div className="herotext">
                                    <h2>ZOOM98 GB - SCARLET RED</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    <input type="button" value="Get it now" />
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    
                </div>
            </main>
        )
    }
}

export default Hero;