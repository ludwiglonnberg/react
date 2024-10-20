import React from "react";
import Config from "../Config.json";
import {Helmet} from "react-helmet";
import {NavLink} from "react-router-dom";
import Likebutton from "../components/Likebutton";

const TITLE = "Zoom TKL | " + Config.SITE_TITLE;

class Zoomtkl extends React.Component{
    render(){
        return(
        <main>
            <Helmet>
                <title>{TITLE}</title>
            </Helmet>
            <ul className="trail">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/products">All products</NavLink></li>
                <li><NavLink to="/zoomtkl">ZOOM TKL ESSENTIAL EDTION</NavLink></li>
            </ul>

            <div className="bigcontainer" id="TKL-container">
                
                <div className="productcontainer" id="TKL">
                    <h1>ZOOM TKL ESSENTIAL EDITION</h1>
                
                    <div className="item" id="mainimg">
                        <a href="#/"><img src="media/TKL1.webp" alt ="Skyblue1"/></a>
                    </div>

                    <div>
                        <div id="tklreview">
                            <ul>	
                                <li>
                                    <img src="media/icon _star_.png" alt ="star"/>
                                    <img src="media/icon _star_.png" alt ="star"/>
                                    <img src="media/icon _star_.png" alt ="star"/>
                                    <img src="media/icon _star_.png" alt ="star"/>
                                    <img src="media/icon _star_.png" alt ="star"/>
                                    <p>4 reviews</p>
                                    <Likebutton></Likebutton>
                                    

                                </li>
                            </ul>
                        </div>
                        
                        <h2>$189.00</h2>

                        <div id="options">	
                            <label>Case color</label>
                            <select id="Case_color" name="Case color">
                                <option value="skyblue">Sky blue</option>
                                <option value="wildgreen">Wild green</option>
                            </select>
                            <label>Back plates</label>
                            <select id="Back_plates" name="Back plates">
                                <option value="BlackSLS">Black (Stainless steel PVD Mirror)</option>
                                <option value="SilverSLS">Silver (Stainless steel PVD Mirror)</option>
                                <option value="GoldSLS">Gold (Stainless steel PVD Mirror)</option>
                            </select>
                            <label>Default plates</label>
                            <select id="Default_plates" name="Default plates">
                                <option value="alu">Aluminum plates</option>
                                <option value="PC">Polycarbonate (PC) plates</option>
                            </select>
                        </div>
                        <input type="button" value="Add to cart"/>
                        
                    </div>

                    <div className="thumbnail">
                        <div className="item"><a href="#/"><img src="media/TKL5.webp" alt ="Skyblue2"/></a></div>
                        <div className="item"><a href="#/"><img src="media/TKL2.webp" alt ="Skyblue3"/></a></div>
                        <div className="item"><a href="#/"><img src="media/TKL3.webp" alt ="Skyblue4"/></a></div>
                        <div className="item"><a href="#/"><img src="media/TKL4.webp" alt ="Skyblue5"/></a></div>
                    </div>

                    <div id="recommendations">
                        <h2>Others also viewed</h2>
                        <div className="thumbnail">
                            <div className="item"><a href="#/"><img src="media/boog.png" alt ="Boog75"/></a>
                                <p>Boog75 prebuilt</p>
                                <p>Price - $229.99</p>
                            </div>
                            <div className="item"><a href="#/"><img src="media/EssentialPad.png" alt ="ZoomPad"/></a>
                                <p>ZoomPad Essential Edition</p>
                                <p>From - $90.00</p>
                            </div>
                            <div className="item"><a href="#/"><img src="media/Zoom65.png" alt ="Zoom65"/></a>
                                <p>Zoom65 Essential Edition</p>
                                <p>From - $185.00</p>
                            </div>
                            <div className="item"><a href="#/"><img src="media/WS.png" alt ="WSSwitch"/></a>
                                <p>WS Switch Series</p>
                                <p>Price - $13.65</p>
                            </div>
                        </div>
                    </div>
                    
                </div>

                
                <table id="specs">
                    <h2>Essential kit</h2>
                    <tr>
                        <th>Kit Contents</th>
                        <th>Specifications</th>
                    </tr>
                    <tr>
                        <td>Aluminum top & bottom case of buyer's choice</td>
                        <td>Gasket mount design</td>
                    </tr>
                    <tr>
                        <td>SS PVD /Glass/Carbon Fiber back plates kit of buyer's choice</td>
                        <td>80% with F13,WK</td>
                    </tr>
                    <tr>
                        <td>Hot-swap, multi-layout Bluetooth PCB</td>
                        <td>PCB: 1.2mm, with Ai03 DB</td>
                    </tr>
                    <tr>
                        <td>Daughterboard/JST cable</td>
                        <td>5° Typing angle</td>
                    </tr>
                    <tr>
                        <td>Polycarbonate plate/Aluminum plate of buyer's choice</td>
                        <td>18.86 mm front height</td>
                    </tr>
                    <tr>
                        <td>Gasket Sleeves</td>
                        <td>Finish treatment: nano-coating, glass, stainless steel</td>
                    </tr>
                    <tr>
                        <td>Set of WS Stabilizers</td>
                        <td>Default plate: PC or Aluminium Plate</td>
                    </tr>
                    <tr>
                        <td>2250 mAh Li-ion battery</td>
                        <td>Support: split spacebar, split backspace, split left shift and split right shift</td>
                    </tr>
                    <tr>
                        <td>Coiled USB-C cable</td>
                        <td>Bluetooth PCB polling rate in wired mode: 1000hz</td>
                    </tr>
                </table>

                <div id ="video">
                    <h2>Video showcase</h2>
                    <iframe title ="Zoom TKL Assembled Edition" width="560" height="300" src="https://www.youtube.com/embed/htQNHjogH4E"></iframe>
                </div>

            </div>
        </main>
        )
    }
}

export default Zoomtkl