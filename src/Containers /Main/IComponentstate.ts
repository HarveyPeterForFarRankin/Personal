export interface IComponentState {
    elements: IElement [];
    inputElements: IElement [];
    isDragged: boolean;
    inputContainerIsHovered: boolean;
    newItemPosition: number;
}

export interface IElement {
    id: number;
    backgroundColor: string;
}