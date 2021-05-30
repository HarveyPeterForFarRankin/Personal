
import styles from '../../Draggable/Nav/nav.module.css'
import withDraggable from '../../../HOC/Draggable';

interface IProps {
    onMouseUp: () => void;
    onMouseDown:() => void;
    onMouseMove: (event:any) =>  void;
}

const NavDrag = (props: IProps) => {
    return (
        <div
            style={{cursor:'pointer', width:'200px'}}
            onMouseLeave={props.onMouseUp}
            {...props}
            >
                <p>Nav tag</p>
        </div>
    )
}

export default withDraggable(NavDrag)