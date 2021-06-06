//TYPES
import {
    UPDATE_ELEMENTS,
    UPDATE_INPUT_ELEMENTS,
    TOGGLE_HOVER,
    SET_NEW_POSITION
} from '../../Containers /Main/types'
import { IComponentState } from '../../Containers /Main/IComponentstate'

export const elementsReducer = (state: IComponentState, action: any) => {
  const { payload } = action
  switch (action.type) {
    case UPDATE_ELEMENTS:
      const { 
        elements = []
      } = payload;
      return { ...state, elements };
    case UPDATE_INPUT_ELEMENTS:
      const { 
        inputElements = []
      } = payload;
      return { ...state, inputElements };
    case TOGGLE_HOVER:
      const {
        inputContainerIsHovered
      } = payload;
      return { ...state, inputContainerIsHovered }
    case SET_NEW_POSITION:
      const {
        newItemPosition
      } = payload;
      return { ...state, newItemPosition }
    default:
        throw new Error();
  }
}