import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Tweet from "./Tweet";

const testTweet = {
    message: 'Something about cats.',
    gravatar: '40044819b1dc2904638f689281150cac',
    author: {
    handle: 'catperson',
    name: 'IAMA Cat Person',
    },
    likes: 2,
    retweets: 1,
    timestamp: '2016-07-30 21:24:37',
}

ReactDOM.render(
    <Tweet tweet={testTweet} />,
    document.querySelector("#root")
);