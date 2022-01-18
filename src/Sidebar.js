import { Avatar } from '@material-ui/core'
import React from 'react'
import './Sidebar.css'

const Sidebar = () => {

    const topics = (topic)=>{
        return <div className="sidebar_topics"> 
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    }
    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img src="https://media.istockphoto.com/vectors/abstract-blurred-colorful-background-vector-id1248542684?k=6&m=1248542684&s=612x612&w=0&h=tp53UuDxaU_Jp2xkj_jBMXy0Xnqy82ZAAdLozau2kQM=" alt="" />
                <Avatar className="sidebar__avatar" />
                <h2>Nombre</h2>
                <h4> Descriopcion</h4>
            </div>

            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who viewed you</p>
                    <p className="sidebar__number">2,543</p>
                </div>
                <div className="sidebar__stat">
                    <p>Who viewed you</p>
                    <p className="sidebar__number">2,543</p>
                </div>
            </div>

            <div className="sidebar__bottom">
                <p>Recent</p>
                {topics("React")}
                {topics("Job")}
                {topics("Programming")}
                {topics("Interviews")}
                {topics("Technology")}
            </div>
        </div>
    )
}

export default Sidebar
