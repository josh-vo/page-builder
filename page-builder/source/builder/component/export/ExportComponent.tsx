import * as React from 'react'

export const ExportComponent = (props: any) => {
    const TEXT_BUTTON = 'Export'

    const _handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        console.log(event.target);
    }

    const _getClassName = () => {
        const { type } = props
        return [
            'btn',
            type === 'submit' ? 'submit' : 'normal'
        ].join(' ').trim();
    }

    const _createLayout = () => {
        const { handleClick } = props
        const className = _getClassName()

        return (<button className={className} onClick={ handleClick? handleClick : _handleClick}>{TEXT_BUTTON}</button>)
    }

    return (
        <React.Fragment>
            {_createLayout()}
        </React.Fragment>
    )
}