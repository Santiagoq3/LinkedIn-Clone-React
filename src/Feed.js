import { Avatar } from '@material-ui/core'
import React from 'react'
import './Feed.css'
import FeedOptions from './FeedOptions'
import CreateIcon from '@material-ui/icons/Create';
import ImageIcon from '@material-ui/icons/Image';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import EventNoteIcon from '@material-ui/icons/EventNote';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import PostOptions from './PostOptions';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ChatIcon from '@material-ui/icons/Chat';
import ShareIcon from '@material-ui/icons/Share';
import SendIcon from '@material-ui/icons/Send';

const Feed = () => {
    return (
        <div className="feed">
          <div className="feed__containerInput">
              <div className="feed__input">
                <Avatar />
                <input placeholder={"Escriba un mensaje..."} type="text" />
              </div>
              <div className="feed__options">
                <FeedOptions Icon={CreateIcon} title={"Crear"} />
                <FeedOptions Icon={ImageIcon} title={"Photo"} />
                <FeedOptions Icon={SubscriptionsIcon} title={"Video"} />
                <FeedOptions Icon={EventNoteIcon} title={"Events"} />
                <FeedOptions Icon={CalendarViewDayIcon} title={"Calendar"} />
              </div>
          </div>
          <div className="feed__post">
            <div className="feed__userPost">
                <Avatar />
                <div className="feed_userInfo">
                    <h3>Santiago</h3>
                    <h4>Software Devoloper</h4>
                </div>
            </div>
            <div className="feed_message">
                 <p>Este es el mensaje</p>
            </div>
            <div className="feed_postOptions">
                <PostOptions Icon={ThumbUpAltIcon} title={"Like"} color="#1485bd" />
                <PostOptions Icon={ChatIcon} title={"Chat"} color="#61a145" />
                <PostOptions Icon={ShareIcon} title={"Compartir"} color="#df704d" />
                <PostOptions Icon={SendIcon} title={"Enviar"} color="#f5bb5c" />
            </div>

          </div>

        </div>
    )
}

export default Feed
