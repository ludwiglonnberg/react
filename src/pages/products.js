import React from "react";
import Config from "../Config.json";
import {Helmet} from "react-helmet";
import {NavLink} from "react-router-dom";

const TITLE = "Products | " + Config.SITE_TITLE;

class Products extends React.Component{
    render(){
        return (
            <main>
                <Helmet>
                    <title>{TITLE}</title>
                </Helmet>
                <ul className ="trail">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/products">All products</NavLink></li>
                </ul>
                <div className="bigcontainer" id="big-productcontainer">
                    
                    <div className="productcontainer" id="left">
                        <ul>
                            <li><h3>Product type</h3></li>
                                <ul>
                                    <li><input type="checkbox"/> Keyboards</li>
                                    <li><input type="checkbox"/> Switches</li>
                                    <li><input type="checkbox"/> Keycaps</li>
                                    <li><input type="checkbox"/> Accessories</li>
                                </ul>

                            <li><h3>Size</h3></li>
                                <ul>
                                    <li><input type="checkbox"/> 98%</li>
                                    <li><input type="checkbox"/> 87%</li>
                                    <li><input type="checkbox"/> 75%</li>
                                    <li><input type="checkbox"/> 65%</li>
                                    <li><input type="checkbox"/> 20%</li>
                                </ul>

                            <li><h3>In stock</h3></li>	
                                <ul>
                                    <li><input type="checkbox"/> In Stock</li>
                                    <li><input type="checkbox"/> Out of Stock</li>
                                </ul>
                            
                        </ul>
                
                    
                    </div>
                    <div className="productcontainer" id="right">

                        <h1>All products</h1>
                        <div className="item"><NavLink to="/zoomtkl"><img src="media/ZoomTKL.png" alt ="Zoom TKL"/>
                        ZOOM TKL ESSENTIAL EDITION From - $189.00
                        </NavLink></div>
                        <div className="item"><a href="#/"><img src="media/Boog75.png" alt ="BOOG"/>
                        Boog75 Prebuilt From - $229.99</a></div>
                        <div className="item"><a href="#/"><img src="media/Zoom65.png" alt ="Zoom65"/>
                        Zoom65 Essential Edition V2 From - $185.00</a></div>
                        <div className="item"><a href="#/"><img src="media/Zoom98.png" alt ="Zoom98"/>
                        Zoom98 EE From - $205.00</a></div>
                        <div className="item"><a href="#/"><img src="media/EssentialPad.png" alt ="ZoomPad"/>
                        ZoomPad Essential Edition From - $90.00</a></div>
                        <div className="item"><a href="#/"><img src="media/WS.png" alt ="WSSwitch"/>
                        WS Switch Series From - $185.00</a></div>
                        
                    </div>
                
                </div>
            </main>
        )
    }
}

export default Products