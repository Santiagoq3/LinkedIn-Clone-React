import React from 'react'
import './FeedOptions.css'

const FeedOptions = ({Icon,title}) => {
    return (
        <div className="options">
            <Icon />
            <h4>{title}</h4>
        </div>
    )
}

export default FeedOptions
