import classes from './index.module.css';
import NavTag from './Components/Draggable/Nav';
import TitleTag from './Components/Draggable/Title';
import Draggable from 'react-draggable';
import { Component } from 'react';
import React from 'react'

interface IComponent {
  elements: {id:number}[];
  elements1: {id:number}[]
  onHover: boolean;
  isDragged: boolean;
}

class App extends Component<any, IComponent> {
  constructor(props:any){
    super(props)

    this.state = {
      elements: [{id: 1},{id: 2},{id: 3},{id: 4},{id: 5}],
      elements1: [],
      onHover: false,
      isDragged:false
    }
  }

  sortRowList = (index:number) => {
    const {elements, elements1,onHover} = this.state
    const elementsClone = [...elements];
    const remainingEl = elementsClone.splice(index,1)
    if(onHover){
      //only run 
      this.setState({
        elements: elementsClone,
        elements1: [...elements1, ...remainingEl],
        isDragged:false
      })
    }
  }

  render(){
    console.log(this.state.isDragged)
    const {elements,elements1,isDragged} = this.state
    return (
      <div style={{width:'100%', display:'flex',justifyItems:'center',justifyContent:'center',padding:'50px'}}>
        <section style={{width:'500px', border:'1px solid black', padding: '50px',margin:"10px"}}>
          {elements.map((el:IComponent, index:number) => {
            return (
              <Draggable onDrag={() => this.setState({isDragged:true})} position={{x:0,y:0}} onStop={() => this.sortRowList(index)}>
                <div className={ isDragged && classes.drag} style={{width:'100%',height:'100px', border:'1px solid black', marginBottom:'10px'}}>
                  {el.id}
                </div>
              </Draggable>
            )
          })}
        </section>
        <section onMouseOver={() => this.setState({onHover:true})} onMouseLeave={() => this.setState({onHover:false})} onMouseEnter={() => this.setState({onHover:true})} style={{width:'500px', border:'1px solid black', padding: '50px',margin:"10px"}}>
          {elements1.map((el:IComponent, index:number) => {
            return (
              <Draggable onDrag={() => this.setState({isDragged:true})} position={{x:0,y:0}} onStop={() => this.sortRowList(index)}>
                <div className={ isDragged && classes.drag} style={{width:'100%',height:'100px', border:'1px solid black', marginBottom:'10px'}}>
                  {el.id}
                </div>
              </Draggable>
            )
          })}
        </section>
        <div>
        </div>
      </div>
    );
  }

}

export default App;
