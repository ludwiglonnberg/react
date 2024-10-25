import React from "react";

class Recommendations extends React.Component{
    render(){
        return(
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
        
    
        )
    }
}

export default Recommendations;