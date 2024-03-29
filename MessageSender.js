import { Avatar } from '@material-ui/core'
import React, { useState } from 'react'
import "./MessageSender.css"
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';


function MessageSender() {



    return (
        <div className="messageSender">
            <div className="messageSender__top">
                <Avatar src="" />
                <form >
                    <input

                        className="messageSender__input"
                        placeholder={`Whats on Your Mind `} />
                    <input

                        
                        placeholder="Post Image (optional)" />
                    <button type="submit">Hidden Button</button>
                </form>
            </div>
            <div className="messageSender__bottom">
                <div className="messageSender__option">
                    <VideocamIcon style={{ color: "red" }} />
                    <h3>Live Video</h3>
                </div>
                <div className="messageSender__option">
                    <PhotoLibraryIcon style={{ color: "green" }} />
                    <h3>Photo/Video</h3>
                </div>
                <div className="messageSender__option">
                    <InsertEmoticonIcon style={{ color: "green" }} />
                    <h3>Feeling/Activity</h3>
                </div>
            </div>
        </div>
    )
}

export default MessageSender
