import React from 'react'
import './btn.css'

const Btn = ({value, type, onClick}) => {

    let cls = 'btn'

    if(type === 'f') {
        cls = "btn colorBtn"
    } else if(type === 'equal') {
        cls = "btn equal"
    }

    // console.log(type)
    return (
        <button className={cls} onClick={onClick}>{value}</button>
    )
}

export default Btn
