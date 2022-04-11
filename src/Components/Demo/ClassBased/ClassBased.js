import { Component } from "react";

class ClassBased extends Component {

    constructor(){
        super()
        this.state = {
            counter : 0
        }
        console.log("CONSTRUCTOR");
    }

    componentDidMount(){
        console.log("COMPONENT DID MOUNT");
    }
    componentDidUpdate(){
        console.log("COMPONENT DID UPDATE");
    }
    componentWillUnmount(){
        console.log("COMPONENT WILL UNMOUNT");
    }

    clickHandler = () => {
        // this.state.counter += 1; 
        this.setState({
            counter : this.state.counter + 1
        })
    }

    render(){
        console.log("RENDER")
        return (
            <div>
                <h3>The Class based component</h3>
                <h4>Counter : {this.state.counter} </h4>
                <button onClick={this.clickHandler}>Increase</button>
            </div>
        )
    }

}

export default ClassBased;