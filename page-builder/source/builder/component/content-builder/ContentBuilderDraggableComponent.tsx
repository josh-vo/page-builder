import * as React from 'react'
import { DraggableComponent } from '../'
import { IComponent } from '../../interface'

export interface IContentBuilderDraggableComponent {
    id: string
    name: string
    content: React.ReactNode
    type: string
    children: IComponent[]
    onDragOver: (event: React.DragEvent<HTMLDivElement>) => (void)
    onDragDrop: (event: React.DragEvent<HTMLDivElement>, id: string) => (void)
}

export const ContentBuilderDraggableComponent = ({
    id,
    name,
    content,
    type,
    children,
    onDragOver,
    onDragDrop
}: IContentBuilderDraggableComponent) => {
    return (
        <DraggableComponent
            key={`drag-${id}`}
            name={name}
            content={content}
            type={type}
            onDragStart={() => null}
            draggable={false}
            dropped={true}
        />
    )
}
