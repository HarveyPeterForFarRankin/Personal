// CORE
import { useReducer, useEffect } from 'react'

// APP
import { elementsInitialState } from '../../Reducers/Main/initialState'; 
import { elementsReducer } from '../../Reducers/Main';
import CustomContext from '../../Contexts/MainContext';
import classes from './index.module.css';

// TYPES
import { 
    UPDATE_ELEMENTS, 
    UPDATE_INPUT_ELEMENTS,
    TOGGLE_HOVER
} from './types';

// Components
import List from '../../Components/List';
import StaticList from '../../Components/StaticList';
import { IElement } from './IComponentstate';

const Main = () => {
    const [elementsState, elementDispatcher] = useReducer(elementsReducer, elementsInitialState)

    useEffect(() => {
        //set the initial state
        elementDispatcher({
            type: UPDATE_ELEMENTS,
            payload: {
                elements: [{id: 1, backgroundColor: 'red'}, {id: 2, backgroundColor: 'green'}, {id:3, backgroundColor: 'blue'}]
            } 
        })
    }, [] )

    const stopDrag = (index:number) => {
        const { 
            elements, 
            inputElements, 
            inputContainerIsHovered, 
            newItemPosition
        } = elementsState;
        //set drag to stop
        if(inputContainerIsHovered){
            const elClone = [...elements];
            const splicedEl = elClone.splice(index,1)[0];
            const remainingElements = elClone;
            const inputElsClone = inputElements.map((el:IElement) => {
                return {...el}
            })
            // insert new el in position or push onto the empty array
            inputElsClone.length ? insertIntoArray(inputElsClone, newItemPosition, splicedEl) : inputElsClone.push(splicedEl);
            // update lists
            updateLists(remainingElements, inputElsClone);
        }
    } 

    const updateLists = (elements: any[], inputElements: any[] ) => {
        // update original list
        elementDispatcher({type: UPDATE_ELEMENTS, payload: {elements: elements }});          
        // update new list
        elementDispatcher({type: UPDATE_INPUT_ELEMENTS, payload: { inputElements: inputElements }});
    }

    const toggleHover = (isHovered: boolean) => elementDispatcher({type: TOGGLE_HOVER, payload: { inputContainerIsHovered: isHovered }});

    //TODO - create function that does not mutate;
    const insertIntoArray = (arr: IElement[], newPosition: number, element: any ) => arr.splice(newPosition, 0, element); 

    const { 
        elements ,
        inputElements,
    } = elementsState

    const {
        Provider
    } = CustomContext

    return (
        <main className={classes.container}>
            <Provider value={{elementsState,elementDispatcher}}>
                <StaticList handleDragStop={stopDrag} elements={elements}/>
                <List elements={inputElements} handleHover={toggleHover}/>
            </Provider>
        </main>
    )
}

export default Main;