import React, { Component } from 'react';
import Heading from './Heading';

class Toggler extends Component {

    constructor() {
        super();
        this.state = { showFlag: true };
    }

    toggleFlag() {
        if (this.state.showFlag) {
            this.setState({ showFlag: false });
        }

        else {
            this.setState({ showFlag: true });
        }
    }

    render() {

        return (
            
                    <div className="container">
                        {
                            this.state.showFlag &&
                            <Heading />
                        }

                        <a className="btn btn-primary btn-default btn-block" onClick={this.toggleFlag.bind(this)}>
                            {this.state.showFlag ? 'hide' : 'show'}
                        </a>

                    </div>

        );
    }
}

export default Toggler;
