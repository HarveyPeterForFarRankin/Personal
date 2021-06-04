
import Draggable from 'react-draggable';

interface IProps {
}

const NavDrag = (props: IProps) => {
    return (
        <Draggable>
            <div
                style={{cursor:'pointer', width:'200px', height:'50px', border:'1px solid black'}}
                >
                    <p>Nav tag</p>
            </div>
        </Draggable>
    )
}

export default NavDrag