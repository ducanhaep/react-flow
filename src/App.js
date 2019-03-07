
import React, { Component } from 'react';
import './App.css';

type TestProps = {
  str: string,
  num?: number,
  arr:Array<number>,
};

type TestState ={
  message: number,
}
type FuncProp = {
  cc: number,
}
const FuncComp = (props: FuncProp) => {
  return(
    <div>{props.cc}</div>
  )
}

class Test extends Component<TestProps,TestState> {

  state = {
    message: 1,
  }
  static defaultProps = {
    str: "gfdjl",

  }
  h1:?HTMLHeadingElement;
  render() {
    return (
      <div>
        <h1>{this.props.str}</h1>
        <h1>{this.props.num}</h1>
        <h1>{this.props.arr.map(item=>{
          return(<li>{item}</li>)
        })}</h1>
        <h1 ref={el => this.h1 = el}>{this.state.message}</h1>
      </div>
    );
  }
}

class App extends Component<{}> {
  render() {
    return (
      <div className="App">
        <Test
          arr={[1,2,3]}
        >

        </Test>
        <FuncComp cc={1}>
        </FuncComp>
      </div>
    );
  }
}

export default App;
