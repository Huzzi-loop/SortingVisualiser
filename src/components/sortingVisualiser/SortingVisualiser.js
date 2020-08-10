import React, { Component } from 'react';
import './SortingVisualiser.css';

class SortingVisualiser extends Component {
    constructor(props){
        super(props);
        this.state={
            array:[],
        };
    }

    componentDidMount(){
        this.resetArr();
    }

    resetArr(){
        const array = [];
        for (let i = 0; i < 100; i++) {
            array.push(this.randomIntFromInterval(5, 600));
        }
    this.setState({array});
    }

    render() {
        return (
            <div className="container">
                {this.state.array.map((value,i)=>(
                    <div key={i} className="display-bar" style={{height:`${value}px`}}>
                    </div>
                ))}
            </div>
        );
    }

    randomIntFromInterval(min, max) {
        // min and max included
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
}

export default SortingVisualiser;
