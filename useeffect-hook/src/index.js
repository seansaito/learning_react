import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';

const LogEffect = () => {
    const [text, setText] = useState('');
    useEffect(() => {
        console.log('latest value:', text)
    })
    return <input value={text} onChange={(e) => setText(e.target.value)} />
}

function App() {
    // Store a reference to the input's DOM node
    const inputRef = useRef()
    // Store the input's value in state
    const [value, setValue] = useState('')
    useEffect(
        () => {
            //This runs after the first render,
            // so the ref is already set.
            console.log('render')
            inputRef.current.focus()
            console.log(value);
        },
        // The effect depends on inputRef
        [inputRef]
    )

    return (
        <input
            ref={inputRef}
            value={value}
            onChange={(e) => setValue(e.target.value)}
        />
    )
}

function Reddit({subreddit}) {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        // Fetch the data when the component mounts
        fetch(`https://www.reddit.com/r/${subreddit}.json`)
        .then((res) => res.json())
        .then((json) =>
            //Save the posts into the state
            setPosts(json.data.children.map((c) => c.data))
        )
    }, [subreddit, setPosts])
    return (
        <ul>
            {posts.map((post) => {
                <li key={post.id}>{post.title}</li>
            })}
        </ul>
    )
}

function RedditApp() {
    // 2 pieces of state: one to hold the input value,
    // another to hold the current subreddit
    const [inputValue, setValue] = useState('reactjs');
    const [subreddit, setSubreddit] = useState(inputValue);

    const handleSubmit = (e) => {
        e.preventDefault()
        setSubreddit(inputValue)
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input value={inputValue} onChange={(e) => setValue(e.target.value)} />
            </form>
            <Reddit subreddit={subreddit} />
        </>
    )
}


ReactDOM.render(
    <RedditApp />,
    document.querySelector('#root')
)

// ReactDOM.render(<App />, document.querySelector('#root'))