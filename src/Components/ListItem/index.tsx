// CORE
import Draggable from 'react-draggable';

// APP
import classes from './listItem.module.css';
import {useCustomContext} from '../../Contexts/MainContext';
import {useState} from 'react'

//TYPES
import IElement from '../../Models/Element';
import {SET_NEW_POSITION} from '../../Reducers/Main/types';

interface IListItemProps {
    element: IElement;
    index: number;
    handleDragStop: any;
}

const ListItem = ({
    element : {
        id,
        backgroundColor
    }, 
    index, 
    handleDragStop, 
}: IListItemProps) => {
    // get context
    const {
        elementDispatcher, 
        elementsState: {
        
        }
    } = useCustomContext();

    const [itemDragged, setDragged] = useState(false)

    const hovering = (e:any) => {
        const {
            target: {
                clientHeight
            } 
        } = e;
        const appendAbove = elementMousePosition(e) < (clientHeight/2);
        const position = appendAbove ? index : index + 1;
        // update the element positiion
        elementDispatcher({type: SET_NEW_POSITION, payload: {newItemPosition: position} })
    }

    const elementMousePosition = ({clientY, target}:any) => {
        const { top } = target.getBoundingClientRect();
        //returns mouse position relative to the event element
        return clientY - top;
    }

    const handleStop = (): void => {
        // stop item drag
        setDragged(false);
        // handle drag stop on list
        if(!!handleDragStop) return handleDragStop(index);
    }

    return (
         <Draggable 
            position={{x:0,y:0}} 
            onStop={handleStop} 
            onDrag={() => setDragged(true)}>
                <div 
                    style={{backgroundColor}}
                    className={`${classes.itemContainer} ${itemDragged && (classes.dragged)}`}
                    onMouseMove={hovering}
                    key={id}>
                </div>
        </Draggable>
    )
}

export default ListItem;