import React from 'react'
import './HeaderOptions.css'

const HeaderOptions = ({Icon, title}) => {
    return (
        <div className="headeroptions">
            {Icon && <Icon className="headerOption__icon" />}
            <h3 className="headerOption__title">{title}</h3> 
        </div>
    )
}

export default HeaderOptions
