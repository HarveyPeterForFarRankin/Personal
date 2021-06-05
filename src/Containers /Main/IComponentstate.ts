export interface IComponentState {
    elements: IElement [];
    isDragged: boolean;
    isHovered: boolean;
}

export interface IElement {
    id: number;
}