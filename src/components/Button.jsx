import React from 'react'

import './Button.css'

export default props => (
    <button
        className={`
            button
            ${props.operation ? 'operation' : ''}
            ${props.double ? 'double' : ''}
            ${props.triple ? 'triple' : ''}
        `}
        onClick={() => props.onClick && props.onClick(props.label)}
    >
        {props.label}
    </button>
)