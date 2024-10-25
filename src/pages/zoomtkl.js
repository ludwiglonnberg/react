import React from "react";

import Config from "../Config.json";
import {Helmet} from "react-helmet";
import {NavLink} from "react-router-dom";

import Likebutton from "../components/Likebutton";
import Recommendations from "../components/productRecommendations";
import Options from  "../components/productOptions"
import ProductImages from "../components/productImages";

const TITLE = "Zoom TKL | " + Config.SITE_TITLE;

class Zoomtkl extends React.Component{

    
    render(){
        const caseColor = ["Sky Blue", "Wild Green"]
        const backPlates = ["Black (Stainless steel PVD Mirror)","Silver (Stainless steel PVD Mirror)","Gold (Stainless steel PVD Mirror)"]
        const defaultPlates = ["Aluminum plates","Polycarbonate(PC) plates"]

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

                        <Options caseColor = {caseColor} backPlates = {backPlates} defaultPlates = {defaultPlates}/>
                        <input type="button" value="Add to cart"/>
                        
                    </div>

                    <div className="thumbnail">
                        <div className="item"><a href="#/"><img src="media/TKL5.webp" alt ="Skyblue2"/></a></div>
                        <div className="item"><a href="#/"><img src="media/TKL2.webp" alt ="Skyblue3"/></a></div>
                        <div className="item"><a href="#/"><img src="media/TKL3.webp" alt ="Skyblue4"/></a></div>
                        <div className="item"><a href="#/"><img src="media/TKL4.webp" alt ="Skyblue5"/></a></div>
                    </div>

                   <Recommendations></Recommendations>
                    
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