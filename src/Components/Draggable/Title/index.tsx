import withDraggable from '../../../HOC/Draggable';
import Draggable from 'react-draggable';

interface IProps {
    onMouseUp: () => void;
    onMouseDown:() => void;
    onMouseMove: (event:any) =>  void;
}

const TitleDrag = (props: IProps) => {
    return (
        <Draggable>
            <div 
                style={{cursor:'pointer'}}
                onMouseLeave={props.onMouseUp}
                {...props}
                >
                    <p>Title tag</p>
            </div>
        </Draggable>
    )
}

export default TitleDrag