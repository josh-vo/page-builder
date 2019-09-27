import * as React from 'react'
import { fromJS } from 'immutable'
import { IContent, IComponent } from './interface'
import * as DraggableComponents from './model/DraggableComponents'
import { ContentBuilderComponent, DraggableComponent, ExportComponent } from './component'

import injectStyle from './utils/injectStyle'
import style from './style/BuilderLayout'

injectStyle(style)

export interface IBuilderState {
    dashboardState: IContent[]
    isDragging: boolean
}

const INT_LENGTH = 3

const originalState: IContent[] = [
    {
        components: []
    },
    {
        components: []
    },
    {
        components: []
    },
]

export class BuilderLayout extends React.Component {
    public state: IBuilderState = {
        dashboardState: originalState,
        isDragging: false
    }

    constructor(props: {}) {
        super(props)

        this._onDragStart = this._onDragStart.bind(this)
        this._onDrop = this._onDrop.bind(this)
        this._handleClick = this._handleClick.bind(this)
    }

    private _handleClick(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        const { dashboardState } = this.state
        console.log(JSON.stringify(dashboardState))
    }

    public render() {
        const { dashboardState } = this.state
        return (
            <div className='builder'>
                <div className='builder-header'>
                    <ExportComponent type={'normal'} handleClick={this._handleClick} />
                </div>
                <div className='builder-draggables'>
                    {
                        DraggableComponents.Components.map(
                            ({ name, content, type }: IComponent, index: number) =>
                                <DraggableComponent
                                    key={`comp-${index}`}
                                    name={name}
                                    content={content}
                                    type={type}
                                    onDragStart={this._onDragStart}
                                    dropped={false}
                                />
                        )
                    }
                </div>
                <div className='builder-droppables'>
                    {
                        dashboardState.map(({ id, cssClass, components: contentComponents }: IContent, index: number) => (
                            <ContentBuilderComponent
                                key={`cb_${index}`}
                                id={`cb_${index}`}
                                cssClass={cssClass}
                                components={contentComponents}
                                onDragDrop={this._onDrop}
                                onDragOver={(event: React.DragEvent<HTMLDivElement>) => this._onDragOver(event)}
                            />
                        )
                        )}
                </div>
            </div>
        )
    }

    private _onDragStart(event: React.DragEvent<HTMLDivElement>, name: string, type: string) {
        const draggable = (event.target as HTMLDivElement).draggable;
        if (draggable === true) {
            event.dataTransfer.setData('id', name)
            event.dataTransfer.setData('type', type)
        }
        event.dataTransfer.setData('draggable', String(draggable))
    }

    private _onDragOver(event: React.DragEvent<HTMLDivElement>) {
        event.preventDefault()
    }

    private _onDrop(event: React.DragEvent<HTMLDivElement>, containerId: string) {
        const name = event.dataTransfer.getData('id')
        const type = event.dataTransfer.getData('type')
        const content = DraggableComponents.getContentByName(name)
        const draggable = event.dataTransfer.getData('draggable')
        if (Boolean(draggable) === true) {
            const newComponent: IComponent = this._generateComponent(name, content, type)
            const containerArray: string[] = containerId.split('_')
            containerArray.shift() // ignore first param, it is string prefix
            const componentsPath: Array<number | string> = []
            containerArray.forEach((id: string, index: number) => {
                componentsPath.push(parseInt(id, INT_LENGTH))
                componentsPath.push(index === 0 ? 'components' : 'children')
            })
            const { dashboardState } = this.state
            let componentState = fromJS(dashboardState)
            componentState = componentState.setIn(componentsPath, componentState.getIn(componentsPath).push(newComponent))
            this.setState({ dashboardState: componentState.toJS() })
        }
    }

    private _generateComponent(name: string, content: React.ReactNode, type: string): IComponent {
        let newComponent: IComponent = {
            name,
            content,
            type
        }
        return newComponent
    }
}