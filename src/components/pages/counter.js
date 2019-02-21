import React from "react";


export default class CountMe extends React.Component {
    constructor() {
    super()
    this.state = {count: 0}
    this.handleCountMe = this.handleCountMe.bind(this)

    }

    handleCountMe(num) {
        this.setState({
            count: this.state.count + num
        })
    }


    render() {
        return(
            <div>
                <h6>Press our buttons</h6>
                <div>
                    <button onClick={() => this.handleCountMe(1)}>Click Me to Count!</button>
                    <button onClick={() => this.handleCountMe(-1)}>Click Me to Decrement</button>
                </div>
                <div>Shoobydoo the count is: { this.state.count }</div>
            </div>
        )
    }
}




