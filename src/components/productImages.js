import React from "react";

class ProductImages extends React.Component{
    render(){
        const {mainImage, thumbnails} = this.props;

        return(
            <div>
                <div className="item" id="mainimg">
                    <a href="#/"><img src={mainImage} alt ="Skyblue1"/></a>
                </div>
                
                 <div className="thumbnail">
                    <div className="item"><a href="#/"><img src={thumbnails[0]} alt ="Skyblue2"/></a></div>
                    <div className="item"><a href="#/"><img src={thumbnails[1]} alt ="Skyblue3"/></a></div>
                    <div className="item"><a href="#/"><img src={thumbnails[2]} alt ="Skyblue4"/></a></div>
                    <div className="item"><a href="#/"><img src={thumbnails[3]} alt ="Skyblue5"/></a></div>
                </div>
            </div>
        
    
        )
    }
}

export default ProductImages;