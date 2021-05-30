
import styles from '../../Draggable/Nav/nav.module.css'
import withDraggable from '../../../HOC/Draggable';

interface IProps {
    mouseUp: () => void;
    mouseDown:() => void;
    mouseMove: (event:any) =>  void;
}

const NavDrag = ({mouseUp, mouseDown, mouseMove}: IProps) => {
    return (
        <div
            style={{cursor:'pointer'}}
            onMouseMove={mouseMove}
            onMouseUp={mouseUp}
            onMouseDown={mouseDown}
            onMouseLeave={mouseUp}
            >
                <p>Nav tag</p>
        </div>
    )
}

export default withDraggable(NavDrag)