import React from "react";


class Options extends React.Component{
    render(){
        const {caseColor, backPlates, defaultPlates} = this.props;

        return(
            <div id="options">	
                <label>Case color</label>
                <select id="Case_color" name="Case color">
                    <option value="1">{caseColor[0]}</option>
                    <option value="2">{caseColor[1]}</option>
                </select>
                <label>Back plates</label>
                <select id="Back_plates" name="Back plates">
                    <option value="1">{backPlates[0]}</option>
                    <option value="2">{backPlates[1]}</option>
                    <option value="3">{backPlates[2]}</option>
                </select>
                <label>Default plates</label>
                <select id="Default_plates" name="Default plates">
                    <option value="1">{defaultPlates[0]}</option>
                    <option value="2">{defaultPlates[1]}</option>
                </select>
            </div>
        
    
        )
    }
}

export default Options;