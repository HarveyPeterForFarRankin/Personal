/* eslint-disable @typescript-eslint/no-unused-vars */
//APP
import classes from './list.module.css';

//TYPES
import IElement  from '../../Models/Element';

//COMPONENTS
import ListItem from '../ListItem';

interface IListProps {
    elements: IElement[];
    handleDragStop?: (index:number) => void;
    handleHover?: (isHovered: boolean) => any;
}

const List = ({ 
    elements, 
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
                        <ListItem key={el.id} element={el} handleDragStop={handleDragStop} index={index} />
                    )
                })}
        </section>
    )
}

export default List