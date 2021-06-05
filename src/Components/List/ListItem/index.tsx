// CORE
import Draggable from 'react-draggable';
// APP
import classes from './listItem.module.css';
import {useCustomContext} from '../../../Contexts/MainContext';

//TYPES
import {IElement} from '../../../Containers /Main/IComponentstate';

interface IListItemProps {
    element: IElement;
    index: number;
    handleDragStop: (index: number) => any;
    handleOnDrag: () => any;
}

const ListItem = ({element, index, handleDragStop, handleOnDrag}: IListItemProps) => {
    const {
        elementsDispatcher, 
        elementsState: {
            isDragged
        }
    } = useCustomContext();

    return (
         <Draggable 
            position={{x:0,y:0}} 
            onStop={ () => handleDragStop(index)} 
            onDrag={handleOnDrag}>
                <div 
                    key={element.id}
                    className={`${classes.itemContainer} ${isDragged && (classes.dragged)}`}>
                    {element.id}
                </div>
        </Draggable>
    )
}

export default ListItem;