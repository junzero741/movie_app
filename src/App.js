import React, { useState } from 'react';
import PropTypes from 'prop-types';


class App extends React.Component{
  
  state = {
    count : 0
  };

  add = () => {
    console.log("add");
    this.setState(current => ({count : ++current.count}));    // setState를 호출할 때마다 리액트는 자동으로 render 함수를 실행시키게 되어있다.
  }
  
  minus = () => {
    console.log('minus');
    this.setState(current => ({count : --current.count}));
  }

  componentDidMount(){
    console.log("components mounted");
  }

  componentDidUpdate(){
    console.log("components updated");
  }

  render() {
    console.log('components rendering');
    return(
      <div>
        <h1>The number is {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    )
  }

}

export default App;
