import * as React from 'react'

import { ContentComponent, DroppableComponent } from '../'
import { IComponent } from '../../interface'
import { ContentBuilderDraggableComponent } from './'

export interface IContentBuilderComponent {
    id?: string
    cssClass?: string
    components: IComponent[]
    onDragOver: (event: React.DragEvent<HTMLDivElement>) => (void)
    onDragDrop: (event: React.DragEvent<HTMLDivElement>, id: string) => (void)
}

export class ContentBuilderComponent extends React.Component<IContentBuilderComponent> {

    public render() {
        const { components, id, onDragOver, onDragDrop } = this.props
        return (
            <ContentComponent>
                {
                    components.map(({ name, content, type, children }: IComponent, componentIndex: number) => (
                        <ContentBuilderDraggableComponent
                            key={`${id}_${componentIndex}`}
                            id={`${id}_${componentIndex}`}
                            name={name}
                            content={content}
                            type={type}
                            children={children as IComponent[]}
                            onDragOver={onDragOver}
                            onDragDrop={onDragDrop}
                        />
                    ))}
                <DroppableComponent
                    name={id as string}
                    onDragOver={(ev) => onDragOver(ev)}
                    onDrop={(ev) => onDragDrop(ev, id as string)}
                />
            </ContentComponent>
        )
    }

}
