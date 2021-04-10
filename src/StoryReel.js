import React from 'react'
import Story from './Story';
import './StoryReel.css';
import ellaMai from './profile_pics/ellaMai.png';
import her_music from './profile_pics/her_music.png';
import jayZ from './profile_pics/jayZ.png';
import rWall from './profile_pics/rWall.png';





function StoryReel() {
    return (
        <div className='story-reel'>
        
        <Story
        image={ellaMai}
        profileSrc={ellaMai}
        title='Ella Mai'
        />
        <Story
        image={her_music}
        profileSrc={her_music}
        title='H.E.R.'
        />
        <Story
        image={jayZ}
        profileSrc={jayZ}
        title='Jayz'
        />
        <Story
        image={rWall}
        profileSrc={rWall}
        title='Nolo'
        />
                  
        </div>
    );
}

export default StoryReel;




