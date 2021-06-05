//CORE
import Draggable from 'react-draggable';

//APP
import classes from '../list.module.css';
import { IElement } from '../../Containers /Main/IComponentstate' ;

interface IListProps {
    elements: IElement[];
}

const List = ({elements}: IListProps) => {

    return (
        <section className={classes.container}>
            {elements.map((el:IElement) => {
                return (
                    <Draggable>
                        <div>
                            {el.id}
                        </div>
                    </Draggable>
                )
            })}
        </section>
    )
}

export default List