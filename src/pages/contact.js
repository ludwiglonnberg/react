import React from "react";
import Config from "../Config.json";
import {Helmet} from "react-helmet";
import {NavLink} from "react-router-dom";

const TITLE = "Contact Us | " + Config.SITE_TITLE;

class Contact extends React.Component{
    render(){
        return(
        <main>
            <Helmet>
                <title>{TITLE}</title>
            </Helmet>
            <ul className ="trail">
		        <li><NavLink to="/">Home</NavLink></li>
		        <li><NavLink to="/contact">Contact us</NavLink></li>
	        </ul>
            <div className="bigcontainer" id="formcontainer">
                <div className ="productcontainer" id ="contactform">

                    <h1>Contact Us</h1>
                    <p>We are available from Monday to Friday (9:00 AM to 6:00 PM on Beijing Time) to answer your questions.</p>
                    <h3>For products purchased on meletrix.com</h3>
                    <p>You can contact us using the form  on this page or send an email to service@meletrix.com.
                        <p>Please include the following information:</p>
                        <ul>
                            <li>Your order number.</li>
                            <li>A brief description of the problem you're experiencing.</li>
                            <li>Please make sure to send the email from the email address associated with your meletrix.com account.</li>
                        </ul>
                    </p>

                    <h3>For products purchased elsewhere</h3>
                    <p>You can contact us using the form  on this page or send an email to service@meletrix.com.
                        <p>Please include the following information:</p>
                        <ul>
                            <li>The store you bought the item from.</li>
                            <li>A brief description of the problem you're experiencing.</li>
                            <li>The date of purchase.</li>
                        </ul> 
                    </p>

                    <form action="#">
                        <label for="name">Name</label>
                        <input type="text" id="name" name="name" placeholder="Enter your name"/>
                        
                        <label for="email">E-mail</label>
                        <input type="text" id="email" placeholder="Enter your e-mail"/>
                        
                        <label for ="supporttype">Support type</label>
                        <select id="Supporttype" name="Supporttype">
                            <option value="meletrix">Products from meletrix.com</option>
                            <option value="elsewhere">Products from elsewhere</option>
                            <option value="general">General inquiry</option>
                            <option value="business">Business inquiry</option>
                        </select>

                        <label for="message">Message</label>
                        <textarea id="message" name="message" placeholder="Write something.." style={{height:"200px"}}></textarea>
                        <input type="Button" value="Submit"/>
                    </form>
                </div>
            </div>
        </main>
        )
    }
}

export default Contact