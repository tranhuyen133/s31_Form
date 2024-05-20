import React, { Component } from 'react'
interface Props{}
interface State{
    count:number,
    interval:null,
}
let interval:any;

export default class ClassComponet extends Component<Props,State> {

    constructor(props:Props){
        super(props)
        //khởi tạo state
        this.state={
            count:0,
            interval:null
        }

    }
    // componentDidMount(): void {
    //      interval=setInterval(()=>{
    //         console.log("hàm setInterval được gọi");
            
    //     },1000)
    // }
    // handleClick =()=>{
    //     clearInterval(interval);
    // }
        
    
  render() {
    return (
      <div>ClassComponent
        <button onClick={this.handleClick}> dừng Interval</button>
      </div>
    )
  }
}
