import React from "react";
import ReactDOM from "react-dom";
import axios from 'axios';

import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';



class Reddit extends React.Component {
    state = {
        posts: [],
    }

    componentDidMount() {
        setTimeout(() => {  console.log("World!"); }, 5000);
        axios
            .get(`https://www.reddit.com/r/${this.props.subreddit}.json`)
            .then((res) => {
                const posts = res.data.data.children.map((obj) => obj.data)
                this.setState({posts})
            })
    }

    render() {
        const {posts} = this.state
        console.log(this.state.posts)
        console.log(posts)
        return (
            <div>
                <h1>
                    {`/r/${this.props.subreddit}`}
                </h1>

                {
                    this.state.posts.length == 0 && 
                    <Button variant="primary" disabled>
                        <Spinner
                        as="span"
                        animation="grow"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                        />
                        Loading...
                    </Button>
                }

                <ul>
                    {posts.map((post) => (
                        <li key={post.id}>{`(${post.ups}) ${post.title}`}</li>
                    ))}
                </ul>
            </div>
        )
    }
}

ReactDOM.render(
    <Reddit subreddit='reactjs'/>, document.querySelector('#root')
)