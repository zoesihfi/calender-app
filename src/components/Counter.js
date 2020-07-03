import React, { Component } from 'react'; 

export default class Counter extends Component { 
    constructor(props) { 
        super(props);
        this.state = {
        count: 0,
        result: null,
        message: ""
    }
}

increment = (x) => {
    return x += 1
}

decrement = (x) => {
    return x -= 1
}

findResult = (x) => {
    if (x >= 3 ) {
        return "Limit Reached";
    } else
        return "";
}

decFindResult = (x) => {
    if (x <= 0) {
        return "Limit Reached";
    } else
        return "";
}

handleClickIncrement = () => {
    const currentCount = this.increment(this.state.count);
    const currentResult = this.findResult(currentCount);
    

    if(currentCount > 3){
        this.setState({
        count: 0,
        result: ""
    })
    } else
        
        this.setState({
        count: currentCount,
        result: currentResult
    })
}

handleClickDecrement = () => {
    const currentCount = this.decrement(this.state.count);
    const currentResult = this.decFindResult(currentCount);
   

    if(currentCount < 0){
        this.setState({
        count: 0,
        result: currentResult
    })
    } else

        this.setState({
        count: currentCount,
        result: ""
    })
}

render() { 
    const currCount = this.state.count;
    const result = this.state.result;
    return ( 
        <div className="counter">
            <h2 className="current-count">{currCount}</h2>
            <h3 className="result" style={{color:"red"}}>{result}</h3>
            <button className="increment" onClick={this.handleClickIncrement}>Increase</button>
            <button className="decrement" onClick={this.handleClickDecrement}>Decrease</button>
    </div>
    )
  }
}
