import React, {Component,createRef} from 'react';


const WithDraggable = (Component:any) => {
    return class Draggable extends React.Component<any,any> {
    constructor(props:any){
        super(props);
        this.state = {
            position: { x: 0 ,y: 0 },
            dragging: false
        } 
        this.ref = createRef();
    }

    // componentDidUpdate = (prevProps:any, prevState:any) => {
    //     if(JSON.stringify(prevState.position) !== JSON.stringify(this.state.position)){
    //         const { x, y } = this.state.position;
    //         this.ref.current.style.transform = `translate(${x}px, ${y}px)`
    //     }
    // }

    // setPressed = (val:boolean) => {
    //     this.setState({pressed: val })
    // } 
    
    // onMouseMove = (event: any) => {
    //     const { movementX , movementY } = event
    //             const { pressed, position: { x, y } } = this.state
    //             if (pressed) {
    //                 this.setState({
    //                     position: {
    //                     x: x + movementX,
    //                     y: y + movementY
    //                     }
    //                 })
    //             }
    // }

    toggleDragging = () => {
        const {dragging} = this.state;
        this.setState({dragging: !dragging})
    }


    // defaultProps = () => ({
    //     onMouseDown: () => this.setPressed(true),
    //     onMouseUp: () => this.setPressed(false),
    //     onMouseMove: this.onMouseMove,
    //     })

    render(){
        const {dragging} = this.state
        return(
            <div
            onDragEnd={this.toggleDragging}
            onDragStart={this.toggleDragging}
            draggable={true}
            style={{display: dragging ? 'none': 'inline-block' }}
            ref={this.ref}>
                <Component />
            </div>
        )
    }

}
}


export default WithDraggable