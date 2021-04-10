import React from 'react'
import './Post.css';
import { Avatar } from "@material-ui/core";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import share from "./profile_pics/share.png";


function Post({ profilePic, image, username, timestamp, message }) {
  return (
    <div className="post">
      <div className="post-top">
        <div className='active-gradient1'>
        <Avatar src={profilePic} className='post-avatar' />
        </div>
        <div className="post-topInfo">
          <h3>{username}</h3>
          <p>{timestamp}</p>
        </div>
      </div>
      
        <div className="post-bottom">
            <p>{message}</p>
        </div>
        <div className="post-image">
            <img src={image} alt=""/>
        </div>
        <div className="post-options">
        <div className="post-option">
        
        
        </div>
        </div>
    </div>
  );
}

export default Post;




