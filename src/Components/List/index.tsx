/* eslint-disable @typescript-eslint/no-unused-vars */
//APP
import classes from './list.module.css';
import { IElement } from '../../Containers /Main/IComponentstate';

//COMPONENTS
import ListItem from './ListItem';

interface IListProps {
    elements: IElement[];
    handleOnDrag: () => any;
    handleDragStop: (index:number) => void;
    handleHover?: () => any;
}

const List = ({ 
    elements, 
    handleOnDrag, 
    handleDragStop, 
    handleHover
}: IListProps) => {    
    return (
        <section  
            onMouseLeave={handleHover}
            onMouseEnter={handleHover} 
            className={classes.container}>
                {elements.map((el:IElement, index:number) => {
                    return (
                        <ListItem element={el} handleDragStop={handleDragStop} handleOnDrag={handleOnDrag} index={index} />
                    )
                })}
        </section>
    )
}

export default List