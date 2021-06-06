import IElement from '../../Models/Element';
export default interface IComponentState {
    elements: IElement [];
    inputElements: IElement [];
    inputContainerIsHovered: boolean;
    newItemPosition: number;
}