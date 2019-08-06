import React from 'react'
import './Display.css'


//quanto mais componentes sem estado melhor!
// Quanto mais componentes com estados mais bugs
export default props => 
    <button className='screen'>{props.value}</button>
