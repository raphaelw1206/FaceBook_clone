import React from 'react';
import {useState} from 'react';
import './MessageSender.css';
import { Avatar } from "@material-ui/core";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import EmojiEmotionsIcon from "@material-ui/icons/EmojiEmotions";


function MessageSender() {
    const [input, setInput] = useState(''); //has an empty value by default
    const[imageURL, setImageUrl] = useState('');
    const handleSubmit = e => {
        e.preventDefault();   //<----  e.preventDefault prevents the default 
                                 //behavior like refreshing the page//

        setInput('');
        setImageUrl('');

};




    return (
        <div className='messageSender'>
        <div className="message-top">
        <Avatar/>
        <form action="">
        
         <input 
            value={input} // input value goes to e that targets the value
            onChange={(e) => setInput(e.target.value)} //< set onChange 1st
         placeholder={`What's on your mind Ella Mai?`}
         />
         
      
         <input  
            value={imageURL} //This will take the image Url you set for the path
            onChange={(e) => setInput(e.target.value)}
         placeholder={'image URL (optional)'}
         />
      
         <button onClick={handleSubmit} type='submit'> Submit
         </button>
        </form>
        </div>

        <div className="message-bottom">

        <div className="message-sender option">

        <VideoCallIcon style={{color: 'red'}}
        />
        <h3>Live Video</h3>
        <PhotoLibraryIcon style={{color: 'green'}} 
        />
        <h3>Photo/Video</h3>
        <EmojiEmotionsIcon style={{color: 'gold'}}
        />
        <h3>Feeling/Activity</h3>
        </div>

        </div>
    


        </div>
    )
}

export default MessageSender



