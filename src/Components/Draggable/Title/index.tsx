import withDraggable from '../../../HOC/Draggable';

interface IProps {
    onMouseUp: () => void;
    onMouseDown:() => void;
    onMouseMove: (event:any) =>  void;
}

const TitleDrag = (props: IProps) => {
    return (
        <div 
            style={{cursor:'pointer'}}
            onMouseLeave={props.onMouseUp}
            {...props}
            >
                <p>Title tag</p>
        </div>
    )
}

export default withDraggable(TitleDrag)