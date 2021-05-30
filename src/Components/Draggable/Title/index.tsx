import withDraggable from '../../../HOC/Draggable';

interface IProps {
    mouseUp: () => void;
    mouseDown:() => void;
    mouseMove: (event:any) =>  void;
}

const TitleDrag = ({mouseUp, mouseDown, mouseMove}: IProps) => {
    return (
        <div 
            style={{cursor:'pointer'}}
            onMouseMove={mouseMove}
            onMouseUp={mouseUp}
            onMouseDown={mouseDown}
            onMouseLeave={mouseUp}
            >
                <p>Title tag</p>
        </div>
    )
}

export default withDraggable(TitleDrag)