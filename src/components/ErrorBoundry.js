import React, { Component } from 'react';

class ErrorBoundry extends Component {
    constructor(props){
        super(props);
        this.state = {
            hasError: false
        }
    }

    componentDidCatch(error, infor) {
        this.setState ({ hasError: true})
    }

    render() {
        return this.state.hasError ?
        <h1>Ihhh. Deu m....</h1> :
        this.props.children
    }
}

export default ErrorBoundry;