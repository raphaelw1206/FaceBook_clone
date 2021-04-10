import React from 'react'
import './Feed.css'; 
import StoryReel from './StoryReel.js'
import MessageSender from './MessageSender.js';
import Post from './Post.js';
import browns from './profile_pics/browns.png'
import rWall from './profile_pics/rWall.png';
import ellaMai from './profile_pics/ellaMai.png';
import her_music from './profile_pics/her_music.png';
import jayZ from './profile_pics/jayZ.png';
import ellaPic from './profile_pics/ellaPic.png'
import lebronDunk from './profile_pics/lebronDunk.png'
import lebronProfile from './profile_pics/lebronProfile.png'



function Feed() {
    return (
        <div className='feed'>
            {/* StoryReel */}

            
            <StoryReel />

            <MessageSender/>


            <Post
            profilePic={ellaMai}
            image= {ellaPic}
            username='Ella Mai'
            timestamp= "2/22/2021"
            message= 'First post on the facebook 👏' 
            />

            <Post
            profilePic={lebronProfile}
            image= {lebronDunk}
            username='rwaller'
            timestamp= 'this is a timestamp'
            message= 'My first post on the facebook Clone 👏' 
            />
            <Post
            profilePic={rWall}
            image= {browns}
            username='rwaller'
            timestamp= 'this is a timestamp'
            message= 'My first post on the facebook Clone 👏' 
            />
           
            

            {/* MessageSender */}
            






        </div>
    );
}

export default Feed
