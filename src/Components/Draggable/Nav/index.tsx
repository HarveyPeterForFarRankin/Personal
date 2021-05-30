import {useEffect, useRef, useState } from 'react';
import styles from '../../Draggable/Nav/nav.module.css'
import withDraggable from '../../../HOC/Draggable';


const Test = () => {
    return (
        <div
            className={styles.container}>
                test
        </div>
    )
}

export default withDraggable(Test)