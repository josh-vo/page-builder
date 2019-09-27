import * as React from 'react'

const TextBoxComponent = () => {

    const _getClassName = () => {
        return 'input-text'
    }

    const _getType = () => {
        return 'text'
    }

    const _createLayout = () => {
        const className = _getClassName()
        const type = _getType()

        return (<input className={className} type={type} />)
    }

    return (
        <React.Fragment>
            {_createLayout()}
        </React.Fragment>)
}

export const getNode = () => {
    return <TextBoxComponent />
}