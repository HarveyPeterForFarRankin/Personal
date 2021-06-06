/* eslint-disable @typescript-eslint/no-unused-vars */
//APP
import classes from './list.module.css';
import { IElement } from '../../Containers /Main/IComponentstate';

//COMPONENTS
import ListItem from './ListItem';

interface IListProps {
    elements: IElement[];
    handleOnDrag?: () => any;
    handleDragStop?: (index:number) => void;
    handleHover?: (isHovered: boolean) => any;
}

const List = ({ 
    elements, 
    handleOnDrag, 
    handleDragStop, 
    handleHover
}: IListProps) => {   
    return (
        <section  
            onMouseLeave={() => handleHover && handleHover(false)}
            onMouseEnter={() => handleHover && handleHover(true)} 
            className={classes.container}>
                {elements.map((el:IElement, index:number) => {
                    return (
                        <ListItem key={el.id} element={el} handleDragStop={handleDragStop} handleOnDrag={handleOnDrag} index={index} />
                    )
                })}
        </section>
    )
}

export default List