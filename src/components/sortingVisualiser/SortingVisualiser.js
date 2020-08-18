import React, { Component } from 'react';
import './SortingVisualiser.css';
import {getMergeSortAnimations} from '../sortingAlgo/MergeSort.js';
import {getSelectionSortAnimations} from '../sortingAlgo/SelectionSort.js';
import {getBubbleSortAnimations} from '../sortingAlgo/BubbleSort.js';
import {getQuickSortAnimations} from '../sortingAlgo/QuickSort.js';

const ANIMATION_SPEED_MS = 3;
// Change this value for the number of bars (value) in the array.
const PRIMARY_COLOR = 'black';
// This is the color of array bars that are being compared throughout the animations.
const SECONDARY_COLOR = 'white';
// button styling
const btnStyle =
{
  color:"black",
  fontWeight:"10px",
  backgroundColor:"transparent",
padding:"10px",
buttonBarStyle:"transparent",
}
const btnBorder =
{
  display:"flex",
  position:"relative",
  top:"20px",
  left:"460px",
  backgroundColor:"transparent",
  height:"41px",
  width:"600px",
justifyContent:"space-between"
}
//end of styling
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

    sortingArr(){
        this.setState({
            array:this.state.array.sort((a,b)=>a-b)
        })
    }

    mergeSort(){
        const animations = getMergeSortAnimations(this.state.array);
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('display-bar');
            const isColorChange = i % 3 !== 2;
            if (isColorChange) {
                const [barOneIdx, barTwoIdx] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
                setTimeout(() => {
                barOneStyle.backgroundColor = color;
                barTwoStyle.backgroundColor = color;
                }, i * ANIMATION_SPEED_MS);
            } else {
                setTimeout(() => {
                const [barOneIdx, newHeight] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                barOneStyle.height = `${newHeight}px`;
                }, i * ANIMATION_SPEED_MS);
            }
        }
    }

    selectionSort(){
        const animations = getSelectionSortAnimations(this.state.array);
        for (let i = 0; i < animations.length; i++) {
          const arrayBars = document.getElementsByClassName('display-bar');
          const isColorChange = i % 4 < 2;
          if (isColorChange) {
            const [barOneIdx, barTwoIdx] = animations[i];
            const barOneStyle = arrayBars[barOneIdx].style;
            const barTwoStyle = arrayBars[barTwoIdx].style;
            const color = i % 4 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
            setTimeout(() => {
              barOneStyle.backgroundColor = color;
              barTwoStyle.backgroundColor = color;
            }, i * ANIMATION_SPEED_MS);
          } else {
            setTimeout(() => {
              const [barOneIdx, newHeight] = animations[i];
              const barOneStyle = arrayBars[barOneIdx].style;
              barOneStyle.height = `${newHeight}px`;
            }, i * ANIMATION_SPEED_MS);
          }
        }
    }

    bubbleSort(){
        const animations = getBubbleSortAnimations(this.state.array);
        for (let i = 0; i < animations.length; i++) {
          const arrayBars = document.getElementsByClassName('display-bar');
          const isColorChange = i % 4 < 2;
          if (isColorChange) {
            const [barOneIdx, barTwoIdx] = animations[i];
            const barOneStyle = arrayBars[barOneIdx].style;
            const barTwoStyle = arrayBars[barTwoIdx].style;
            const color = i % 4 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
            setTimeout(() => {
              barOneStyle.backgroundColor = color;
              barTwoStyle.backgroundColor = color;
            }, i * ANIMATION_SPEED_MS);
          } else {
            setTimeout(() => {
              const [barOneIdx, newHeight] = animations[i];
              const barOneStyle = arrayBars[barOneIdx].style;
              barOneStyle.height = `${newHeight}px`;
            }, i * ANIMATION_SPEED_MS);
          }
        }
    }

    quickSort(){
        const animations = getQuickSortAnimations(this.state.array);
        for (let i = 0; i < animations.length; i++) {
          const arrayBars = document.getElementsByClassName('display-bar');
          const isColorChange = i % 4 < 2;
          if (isColorChange) {
            const [barOneIdx, barTwoIdx] = animations[i];
            const barOneStyle = arrayBars[barOneIdx].style;
            const barTwoStyle = arrayBars[barTwoIdx].style;
            const color = i % 4 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
            setTimeout(() => {
              barOneStyle.backgroundColor = color;
              barTwoStyle.backgroundColor = color;
            }, i * ANIMATION_SPEED_MS);
          } else {
            setTimeout(() => {
              const [barOneIdx, newHeight] = animations[i];
              const barOneStyle = arrayBars[barOneIdx].style;
              barOneStyle.height = `${newHeight}px`;
            }, i * ANIMATION_SPEED_MS);
          }
        }
    }

    render() {
        // this.sortingArr()
        return (
            <>
                <div style={btnBorder}>
                     <button style={btnStyle} onClick={()=>this.mergeSort()}>Merge Sort</button>
                    <button style={btnStyle} onClick={()=>this.selectionSort()}>Selection Sort</button>
                    <button style={btnStyle} onClick={()=>this.bubbleSort()}>Bubble Sort</button>
                    <button style={btnStyle} onClick={()=>this.quickSort()}>Quick Sort</button>
                    <button style={btnStyle} onClick={()=>this.resetArr()}>Reset Array</button>
                </div>
                <div className="container">
                    {this.state.array.map((value,i)=>(
                        <div key={i} className="display-bar" style={{height:`${value}px`}}>
                        </div>
                    ))}
                </div>
            </>
        );
    }

    randomIntFromInterval(min, max) {
        // min and max included
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
}

export default SortingVisualiser;