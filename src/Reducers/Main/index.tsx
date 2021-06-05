import {
    UPDATE_ELEMENTS
} from '../../Containers /Main/types'
import { IComponentState, IElement } from '../../Containers /Main/IComponentstate'

export const elementsReducer = (state: IComponentState, action: {type:string, payload: IElement[] }) => {
  switch (action.type) {
    case UPDATE_ELEMENTS:
      return {...state, elements: action.payload };
    default:
        throw new Error();
  }
}