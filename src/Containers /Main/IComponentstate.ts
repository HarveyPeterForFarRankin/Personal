export interface IComponentState {
    elements: IElement [];
    inputElements: IElement [];
    isDragged: boolean;
    isHovered: boolean;
}

export interface IElement {
    id: number;
}