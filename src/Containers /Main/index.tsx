// CORE
import { useReducer, useEffect } from 'react'

// APP
import { elementsInitialState } from '../../Reducers/Main/initialState'; 
import { elementsReducer } from '../../Reducers/Main';
import { IElement} from './IComponentstate';
import { UPDATE_ELEMENTS } from './types';

const Main = () => {
    const [elementsState, dispatcher] = useReducer(elementsReducer, elementsInitialState)

    useEffect(() => {
        //set the initial state
        dispatcher({
            type: UPDATE_ELEMENTS,
            payload: [{id: 1}, {id: 2}, {id:3}]
        })
    }, [] )

    const { elements } = elementsState

    return (
        <main>
            {elements.map((el:IElement) => {
                return (
                    <div>
                        {el.id}
                    </div>
                )
            })}
        </main>
    )
}

export default Main;