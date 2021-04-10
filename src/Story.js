import React from 'react'
import { Avatar } from "@material-ui/core";
import './Story.css';



function Story({ image, profileSrc, title }) {
    return (
        <div style={{ backgroundImage: `url(${image})` }}
        className='story'>
     <div className="active-gradient">     
        <Avatar className='avatar' fontSize='large' src={profileSrc}/>
            <h4>{title}</h4>
        </div>    
    </div>
    );
}

export default Story;
