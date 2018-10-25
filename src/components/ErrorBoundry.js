// IN A SENSE, THIS IS LIKE try catch 
// THE ERROR MESSAGE WILL BE DISPLAYED CORRECTLY ON BUILD
// AS IN DEVELOPMENT, YOU WILL SEE THE ERROR DISPLAY LESS THAN 1 SECOND
// THEN SEE THE ERROR MESSAGE POINTING WHERE THE ERROR HAPPENED 
import React, { Component } from 'react';

class ErrorBoundry extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }
    }

    componentDidCatch(error, info) {    // this lifecycle method ONLY available in React 16 and higher
        this.setState({ hasError: true })
    }

    render() {
        if (this.state.hasError) {
            return <h1>Something wrong!</h1>
        }
        return this.props.children // whatever inside the errorboundry
    }
}

export default ErrorBoundry;