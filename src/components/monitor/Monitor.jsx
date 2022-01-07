import React from 'react'
import './monitor.css'

const Monitor = ({mainText, subText}) => {
    return (
        <div className="monitor">
            <p className="main-text">{mainText}</p>
            <p className="sub-text">{subText}</p>
        </div>
    )
}

export default Monitor
