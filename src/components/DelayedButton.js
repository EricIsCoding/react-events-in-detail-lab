import React, { Component } from "react";

// Code DelayedButton Component Here
class DelayedButton extends Component {
    constructor(props) {
        super(props);

        this.state = {
            delay: this.props.dela
        }

        this.clickHandler = this.clickHandler.bind(this)
    }

    clickHandler(event) {
        event.persist()
        setTimeout(function() {
            this.props.onDelayedClick(event)}.bind(this), this.delay)
    }

    render() {
        return <button onClick={this.clickHandler}>Delayed Click!</button>
    }
}

export default DelayedButton;