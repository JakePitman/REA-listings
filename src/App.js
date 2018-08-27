import React, { Component } from 'react';
import './App.css';
import {data} from './data'

import Card from './components/Card'

class App extends Component {

  state = {
    results: data.results,
    savedProperties: data.saved
  }

  render() {

    console.log(this.state.savedProperties)
    return (
      <div className="container">

        <div className="column">
          <h1>Results</h1>
            {this.state.results.map( result => {
                return <Card listingData={result}/>
            })}
        </div>

        <div className="column">
          <h1>Saved Properties</h1>
            {this.state.savedProperties.map( result => {
                return <Card listingData={result}/>
            })}
        </div>
      </div>
    );
  }
}

export default App;
