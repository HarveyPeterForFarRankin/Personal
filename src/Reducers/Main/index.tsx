//TYPES
import {
    UPDATE_ELEMENTS,
    UPDATE_INPUT_ELEMENTS,
    START_DRAGGING,
    STOP_DRAGGING,
    TOGGLE_HOVER
} from '../../Containers /Main/types'
import { IComponentState } from '../../Containers /Main/IComponentstate'

export const elementsReducer = (state: IComponentState, action: any) => {
  switch (action.type) {
    case UPDATE_ELEMENTS:
      const { 
          payload: { 
              elements = []
            }
      } = action;
      return { ...state, elements: elements };
    case UPDATE_INPUT_ELEMENTS:
      const { 
          payload: { 
              inputElements = []
            }
      } = action;
      return { ...state, inputElements: inputElements };
    case START_DRAGGING:
      return { ...state, isDragged: true }
    case STOP_DRAGGING:
      return { ...state, isDragged: false }
    case TOGGLE_HOVER:
      const {
        isHovered
      } = state;
      return { ...state, isHovered:!isHovered }
    default:
        throw new Error();
  }
}