import React from 'react';
import { render } from '@testing-library/react';

import './style.css'

class Background extends React.Component{
    
    constructor(props) {
        super(props)
        this.state = {
            selectedColour:""
        }
    }

    changeBackgroundColor = (event) => {
        
        let newColour = event.target.value;
        this.setState({selectedColour:newColour});
    }

    render = () => {
        return(

            <div style={{
                backgroundColor: this.state.selectedColour 
            } } className="back-container">
                <div className="colour-box"> 
                    <h2>Choose a colour!</h2>
                    <input onChange={this.changeBackgroundColor} type="color"/>
                    <p><strong>{this.state.selectedColour}</strong></p>
                </div>
            </div>
        )
    }

}

export default Background;

