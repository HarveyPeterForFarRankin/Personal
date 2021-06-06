import ListItem from '../List/ListItem';
import classes from './staticList.module.css';
import {IElement} from '../../Containers /Main/IComponentstate'

interface IStaticListProps {
    elements: IElement[];
    handleDragStop: (index:number) => void;
}

const StaticList = ({ 
    elements, 
    handleDragStop, 
}: IStaticListProps) => {   
    return (
        <section  
            className={classes.container}>
                {elements.map((el:IElement, index:number) => {
                    return (
                        <ListItem key={el.id} element={el} handleDragStop={handleDragStop} index={index} />
                    )
                })}
        </section>
    )
}

export default StaticList