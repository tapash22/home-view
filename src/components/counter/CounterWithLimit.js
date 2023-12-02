import { Component } from "react";
import Countup from 'react-countup';

class CounterWithLimit extends Component{
  render(){
    return (
      <div className="ring-1 ring-yellow-800 py-6 px-6 rounded-xl items-center">
        <div className="flex justify-center font-bold text-2xl ">
        <Countup end={this.props.count} duration={2} /> +
        </div>
        <p className="text-center text-lg font-normal text-black py-1">
          {this.props.title}
        </p>
      </div>
    )
  }
}

export default CounterWithLimit;