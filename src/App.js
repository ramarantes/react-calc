import React, { Component } from 'react';
import './App.css';
import Display from './components/display'
import Keyboard from './components/keyboard'


class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      display: ""
    };

    //this.buttonClick = this.buttonClick.bind(this);
  }

  buttonClick = value => {
    const math = require('mathjs');
      // var val = parseInt(value);
      const arrayDisplay = "0123456789+-*/.";
      var res = arrayDisplay.indexOf(value) > -1;
      if(res)
        this.setState({display: this.state.display + value });
      else
      switch(value){
        case "C":
          this.setState({display: "" });
          break;
        case "=":
          this.setState({display:math.eval(this.state.display)});
          break;
      }
  }

  render() {

      const classCol = "col p-1";

    return (
      <div className="container rounded">
      
        <div className="row justify-content-md-center ">
          <div className={classCol} value={this.state.display}>
              <Display value={this.state.display}/>
            </div>
        </div>
        <div className="row ">
        <div className={classCol}>
            <Keyboard onClick={this.buttonClick}/>
          </div>
        </div>
      
      </div>
    );
  }
}

export default App;
