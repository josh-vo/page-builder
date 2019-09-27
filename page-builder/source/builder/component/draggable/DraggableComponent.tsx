import * as React from 'react'

import injectStyle from '../../utils/injectStyle'
import style from '../../style/DraggableComponent'

injectStyle(style)

export interface IDraggableComponent {
    name: string
    content: React.ReactNode
    type: string
    draggable?: boolean
    dropped?: boolean
    onDragStart: (ev: React.DragEvent<HTMLDivElement>, name: string, type: string) => void
}

export const DraggableComponent = ({
    name,
    content,
    type,
    onDragStart,
    draggable = true,
    dropped = false
}: IDraggableComponent) =>
    <div className='draggable-component' draggable={draggable} onDragStart={(ev) => onDragStart(ev, name, type)}>
        <span>{name}</span>
        {content}
    </div>
