// CORE
import { useReducer, useEffect } from 'react'

// APP
import { elementsInitialState } from '../../Reducers/Main/initialState'; 
import { elementsReducer } from '../../Reducers/Main';
import CustomContext from '../../Contexts/MainContext';

// TYPES
import { 
    UPDATE_ELEMENTS, 
    UPDATE_INPUT_ELEMENTS,
    START_DRAGGING,
    STOP_DRAGGING,
    TOGGLE_HOVER
} from './types';

// Components
import List from '../../Components/List';

const Main = () => {
    const [elementsState, elementDispatcher] = useReducer(elementsReducer, elementsInitialState)

    useEffect(() => {
        //set the initial state
        elementDispatcher({
            type: UPDATE_ELEMENTS,
            payload: {
                elements: [{id: 1}, {id: 2}, {id:3}]
            } 
        })
    }, [] )

    const startDrag = () => elementDispatcher({type:START_DRAGGING})

    const stopDrag = (index:number) => {
        const { elements, inputElements, isHovered } = elementsState;
        // get clone
        const elClone = [...elements];
        const splicedEl = elClone.splice(index,1);
        const remainingElements = elClone;
        //set drag to stop
        elementDispatcher({type: STOP_DRAGGING});
        if(isHovered){
            //update elements
            elementDispatcher({type: UPDATE_ELEMENTS, payload: {elements: remainingElements }});
            //update Input elements
            elementDispatcher({type: UPDATE_INPUT_ELEMENTS, payload: {inputElements: [...inputElements, ...splicedEl]}})
        }
    } 

    const toggleHover = () => elementDispatcher({type: TOGGLE_HOVER})

    const { 
        elements ,
        inputElements,
        isDragged
    } = elementsState

    const {
        Provider
    } = CustomContext

    return (
        <main>
            <Provider value={{elementsState,elementDispatcher}}>
                <List isDragged={isDragged} handleDragStop={stopDrag} handleOnDrag={startDrag} elements={elements} />
                <List handleDragStop={stopDrag} handleOnDrag={startDrag} elements={inputElements} handleHover={toggleHover}  />
            </Provider>
        </main>
    )
}

export default Main;