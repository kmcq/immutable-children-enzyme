import React, { Component } from 'react';
import { List } from 'immutable';

class App extends Component {
  render() {
    return (
      <div className="App">
        {List(['first', 'second', 'third']).map(item => <span key={item}>{item}</span>)}
      </div>
    );
  }
}

export default App;
