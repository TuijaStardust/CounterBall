import React, {Component} from 'react';
import './App.css';
// import Counter from './Counter/Counter';
import CounterHook from './CounterHook/CounterHook';

class App extends Component {
  render() {
    return (
      <div>
        {/* <Counter /> */}
        <CounterHook />
      </div>
    )
  }
}

export default App;
