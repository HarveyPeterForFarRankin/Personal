/* eslint-disable @typescript-eslint/no-unused-vars */
//APP
import classes from './list.module.css';

//TYPES
import IElement  from '../../Models/Element';
import { useCustomContext } from '../../Contexts/MainContext';

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
    
    const {
        elementsState: {
            newItemPosition,
            isDragged
        }
    } = useCustomContext();

    return (
        <section  
            onMouseLeave={() => handleHover && handleHover(false)}
            onMouseEnter={() => handleHover && handleHover(true)} 
            className={classes.container}>
                <div className={classes.listContainer}>
                    {elements.map((el:IElement, index:number) => {
                        const above = (isDragged && newItemPosition === index + 1);
                        return (
                            <div className={` ${classes.box} ${above && (classes.below)}`} id={index.toString()}>
                                <ListItem key={el.id} element={el} handleDragStop={handleDragStop} index={index} />
                            </div>
                        )
                    })}
                </div>
               
        </section>
    )
}

export default List