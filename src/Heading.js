import React, { Component } from 'react';

class Heading extends Component {

  render() {
    return (

      <div className="jumbotron">
        <h1 className="text-center">Heading Component</h1>
        <p className="text-center text-info">This is a text placed under <strong>Heading Component</strong></p>
      </div>

    );
  }
}

export default Heading;
