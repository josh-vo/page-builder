import * as React from 'react'

import injectStyle from '../../utils/injectStyle'
import style from '../../style/ContentComponent'

injectStyle(style)

export interface IContentComponent {
    children: React.ReactNode
    className?: string
}

export const ContentComponent = ({ children, className = '' }: IContentComponent) =>
    <div className={className}>
        <div className='content'>
            {children}
        </div>
    </div>
