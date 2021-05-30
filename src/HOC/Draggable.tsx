import { throws } from 'assert/strict';
import React, {Component} from 'react';


const WithDraggable = (Component:any) => {
    return class Draggable extends React.Component {
    constructor(props:any){
        super(props);
        this.state = {
            position: { x:0 ,y:0 },
            pressed: false,
        } 
        this.ref = React.createRef();
    }

    componentDidUpdate = (prevProps:any, prevState:any) => {
        const { position } = prevState;
        const { position: currentPos} = this.state;
        console.log(JSON.stringify(position), JSON.stringify(currentPos))
        if(JSON.stringify(position) !== JSON.stringify(currentPos)){
            const { x, y } = currentPos
            this.ref.current.style.transform = `translate(${x}px, ${y}px)`
        }
    }

    setPressed = (val:boolean) => this.setState({pressed: val })
    
    onMouseMove = (event: any) => {
        const { movementX , movementY } = event
                const { pressed, position: { x, y } } = this.state
                console.log(pressed)
                if (pressed) {
                    this.setState({
                        x: x + movementX,
                        y: y + movementY
                    })
                }
    }

    render(){
        return(
            <div
            onMouseDown={() => this.setPressed(true)}
            onMouseUp={() => this.setPressed(false)}
            onMouseMove={this.onMouseMove}>
                <Component/>
            </div>
        )
    }

}
}


export default WithDraggable