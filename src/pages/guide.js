import React from "react";
import Config from "../Config.json";
import {Helmet} from "react-helmet";
import {NavLink} from "react-router-dom";

const TITLE = "Keyboard guide | " + Config.SITE_TITLE;

class Guide extends React.Component{
    render(){
        return(
        <main>
            <Helmet>
                <title>{TITLE}</title>
            </Helmet>
            <ul className ="trail">
                <li><NavLink to="index">Home</NavLink></li>
                <li><NavLink to="keyboardguide">Keyboard guide</NavLink></li>
            </ul>

            <div className="bigcontainer" id="guide-container">
                <div className="productcontainer" id ="keyboard-guide">

                    <introguide>
                    <h2>Keyboard guide</h2>
                    <p>Need help figuring out what keyboard suits your needs?
                    With all of our keyboards you have the option to customize
                    to how you like it but if you don’t know where to begin, 
                    the size is a good starting point! </p>
                    </introguide>
                    <h2>Sizing and layout</h2>
                    <example><h2>Example images</h2></example>

                    <div>
                        <h3>98%</h3>
                        <p>This is the largest layout we at Meletrix offer, 
                        it has all the keys of a full sized keyboard a part
                        from the editing keys “end” and “home”. Instead you 
                        have 2 additional slots where you can install an LCD screen,
                        a volume knob or two configurable buttons!</p>
                        <a href="#/">Browse 98% keyboards</a>
                    </div>
                    <img src="media/98keyboard.png" alt ="98keyboard"/>
                    
                    <div>
                        <h3>87%</h3>
                        <p>This is the layout often known as ten-keyless or TKL.
                        It offers all the customizability in a more compact
                        form without the numpad.</p>
                        <a href="#/">Browse 87% keyboards</a>
                    </div>
                    <img src="media/87keyboard.png" alt ="87keyboard"/>

                    <div>
                        <h3>75%</h3>
                        <p>The 75% layout is a slightly more space-efficient
                        variant of the 87% with all of the needed keys as well
                        as the function (f-keys) at the top. With this layout
                        we save space by having fewer editing keys.</p>
                        <a href="#/">Browse 75% keyboards</a>
                    </div>
                    <img src="media/75keyboard.png" alt ="75keyboard"/>

                    <div>
                        <h3>65%</h3>
                        <p>This is our most compact space-efficient keyboard,
                        where we are saving space by only having the necessary
                        keys. This is accomplished by removing the function keys
                        and most editing keys.</p>
                        <a href="#/">Browse 65% keyboards</a>
                    </div>
                    <img src="media/65keyboard.png" alt ="65keyboard"/>

                    <div>
                        <h3>20%</h3>
                        <p>If all you need is the numpad, the ZoomPad is here!
                        if you already have an 87% layout or smaller and still
                        like the numpad, it also gives you the possibility of
                        ultimate customizablity by allowing you to position your
                        numpad how you like!</p>
                        <a href="#/">Browse 20% keyboards</a>
                    </div>
                    <zoompad>
                        <img src="media/ZoomPad.png" alt ="20keyboard"/>
                    </zoompad>

                </div>
            </div>
        </main>
        )
    }
}

export default Guide