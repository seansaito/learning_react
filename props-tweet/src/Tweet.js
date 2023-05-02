import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Avatar from "./Avatar";
import { Author } from "./Author";
import { Time } from "./Time";
import { ReplyButton, RetweetButton, LikeButton, MoreOptionsButton } from './Buttons';
import Message from "./Message";

function Tweet({tweet}) {
    console.log(tweet);
    return (<div className="tweet">
        <Avatar hash={tweet.gravatar}/>
        <div className="content">
            <Author author={tweet.author}/>
            <Time time={tweet.timestamp} />
            <Message text={tweet.message}/>
            <div className="buttons">
                <ReplyButton />
                <RetweetButton count={tweet.retweets} />
                <LikeButton count={tweet.likes} />
                <MoreOptionsButton />
            </div>
        </div>
    </div>
    );
}

export default Tweet;