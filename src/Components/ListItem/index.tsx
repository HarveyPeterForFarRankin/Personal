// CORE
import Draggable from 'react-draggable';

// APP
import classes from './listItem.module.css';
import {useCustomContext} from '../../Contexts/MainContext';
import {useState} from 'react'

//TYPES
import IElement from '../../Models/Element';
import {SET_NEW_POSITION ,SET_DRAGGED} from '../../Reducers/Main/types';

interface IListItemProps {
    element: IElement;
    index: number;
    handleDragStop: any;
    setHoverStyling?: (isDragged: boolean) => any;
}

const ListItem = ({
    element : {
        id,
        backgroundColor,
        text
    }, 
    index, 
    handleDragStop, 
    setHoverStyling
}: IListItemProps) => {
    // get context

    const [dragged, setDrag] = useState(false)

    const {
        elementDispatcher, 
        elementsState: {
            isDragged
        }
    } = useCustomContext();

    const hovering = (e:any) => {
        setNewPosition(e);
        // set styling
    }

    const setNewPosition = async (e:any) => {
        const {
            target: {
                clientHeight
            }
        } = e;
        const appendAbove = elementMousePosition(e) < (clientHeight/2);
        const position = appendAbove ? index : index + 1;
        // update the element positiion
        await elementDispatcher({type: SET_NEW_POSITION, payload: {newItemPosition: position} } );
        if(setHoverStyling) setHoverStyling(isDragged);
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

    const setDragged = (isDragged: boolean) => {
        // set global drag state
        elementDispatcher({type: SET_DRAGGED, payload: {isDragged}});
        // set local for styling (not sure why global does not work)
        setDrag(isDragged);
    } 

    return (
         <Draggable 
            position={{x:0,y:0}} 
            onStop={handleStop} 
            onDrag={() => setDragged(true)}>
                <div 
                    styles={{backgroundColor: backgroundColor}}
                    className={`${classes.itemContainer} ${dragged && (classes.dragged)}`}
                    onMouseMove={hovering}
                    key={id}>
                        {text}
                </div>
        </Draggable>
    )
}

export default ListItem;