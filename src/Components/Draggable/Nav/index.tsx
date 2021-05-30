import React, {useEffect, useRef, useState } from 'react';
import styles from '../../Draggable/Nav/nav.module.css'

const NavDrag = () => {
    const [pressed, setpressed] = useState(false)
    const [position, setPosition] = useState({x: 0, y: 0})
    const ref = useRef()
    
    useEffect(() => {
        const { x, y} = position
        ref.current.style.transform = `translate(${x}px, ${y}px)`
    },[position])
    
    const onMouseMove = (event:any) => {
        const { movementX , movementY } = event
        const { x, y } = position
        if (pressed) {
        setPosition({
            x: x + movementX,
            y: y + movementY
            })
        }
    }

    return (
        <div
            className={styles.container}
            onMouseDown={() => setpressed(true)}
            onMouseUp={() => setpressed(false)}
            onMouseMove={ onMouseMove }
            ref={ ref }>
            can drag
        </div>
    )
}

export default NavDrag