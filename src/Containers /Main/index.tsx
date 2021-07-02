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
} from '../../Reducers/Main/types';
import IElement  from '../../Models/Element';

// COMPONENTS
import List from '../../Components/List';
import StaticList from '../../Components/StaticList';
import Nav from '../../Components/Elements/Nav';
import Header from '../../Components/Elements/Header';
import About from '../../Components/Elements/About';

const dummyElements = [
    {
        id: 1,
        Element: Nav,
        backgroundColor: 'green',
        text: ` <nav><p>This is the nav bar</p></nav>`
    },
    {
        id: 2,
        Element: Header,
        backgroundColor: 'blue',
        text: `<h1>This is the header</h1>`
    },
    {
        id: 3,
        Element: About,
        backgroundColor: 'orange',
        text: '<div>This is the about section</div>'
    }
]

const Main = () => {
    const [elementsState, elementDispatcher] = useReducer(elementsReducer, elementsInitialState)

    useEffect(() => {
        //set the initial state of the static list
        elementDispatcher({
            type: UPDATE_ELEMENTS,
            payload: {
                elements: dummyElements
            } 
        })
    }, [] )

    const handleElementsSwitch = (index:number) => {
        const { 
            elements, 
            inputElements, 
            inputContainerIsHovered, 
            newItemPosition
        } = elementsState;

        if(inputContainerIsHovered){
            const selectList = [...elements];
            const splicedEl = selectList.splice(index,1)[0];
            const selectListMutated = selectList;
            const inputsList = inputElements.map((el:IElement) => {
                return {...el}
            })
            // insert new el in position or push onto the empty array
            inputsList.length ? insertIntoArrayAtPoisition(inputsList, newItemPosition, splicedEl) : inputsList.push(splicedEl);
            // update lists
            updateLists(selectListMutated, inputsList);
        }
    } 

    const updateLists = (elements: any[], inputElements: any[] ) => {
        // update original list
        elementDispatcher({type: UPDATE_ELEMENTS, payload: {elements: elements }});          
        // update new list
        elementDispatcher({type: UPDATE_INPUT_ELEMENTS, payload: { inputElements: inputElements }});
    }

    const toggleHover = (isHovered: boolean) => elementDispatcher({type: TOGGLE_HOVER, payload: { inputContainerIsHovered: isHovered }});

    // TODO - create function that does not mutate;
    const insertIntoArrayAtPoisition = (arr: IElement[], position: number, newElement: any) => arr.splice(position, 0, newElement); 

    const { 
        elements ,
        inputElements,
    } = elementsState

    const {
        Provider
    } = CustomContext

    return (
        <main>
            <Provider value={{elementsState,elementDispatcher}}>
                {inputElements.map(({Element}: IElement) => {
                    return (
                        <Element/>
                    )
                })}
                <div className={classes.container}>
                    <StaticList handleDragStop={handleElementsSwitch} elements={elements}/>
                    <List  elements={inputElements} handleHover={toggleHover}/>
                </div>
            </Provider>
        </main>
    )
}

export default Main;