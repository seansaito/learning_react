import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function HelloWorld() {
    const name = "Dave";
    // let username = "root";
    let username = undefined;
    // let username = null;


    // return React.createElement(
    //     "div", null,
    //     React.createElement("h1", null, "This is a hello"),
    //     "hello ",
    //     React.createElement("strong", null, name)
    // );


    return (
        <>
            <div>
                <h1>This is a Hello</h1>
                { username ? <strong>Hello {username}</strong> : "You are not logged in" }
            </div>
            <span>Another element</span>
        </>
    );
}

ReactDOM.render(
    <HelloWorld />, 
    document.querySelector("#root")
);
