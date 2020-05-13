import React, { Component } from "react";

// Code CoordinatesButton Component Here
class CoordinatesButton extends Component {
    constructor(props) {
        super(props);

        this.clickHandler = this.clickHandler.bind(this)
    }

    clickHandler(event) {
        this.props.onReceiveCoordinates([event.clientX, event.clientY])
    }

    render() {
        return <button onClick={ this.clickHandler }>Recieve Coordinates</button>
    }
}

export default CoordinatesButton;