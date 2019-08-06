import React from 'react'
import './Button.css'


//quanto mais componentes sem estado melhor!
// Quanto mais componentes com estados mais bugs
export default props =>
    <button className={`
        botao
        ${props.operation ? 'operation' : ''}
        ${props.double ? 'double' : ''}
        ${props.triple ? 'triple' : ''}
    `} onClick={e => props.click && props.click(props.label)}>
        {props.label}
    </button>
