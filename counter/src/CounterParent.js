import React from "react";
import PropTypes from "prop-types";

function handleAction(event) {
    console.log('Child did:', event);
}

function Parent() {
    return <Child onAction={handleAction} />
}

function Child({onAction, reset}) {
    return (
        <>
            <button onClick={onAction}>Click me!</button>
            <button onClick={reset}>Reset</button>
        </>
    )
}

// export class CountingParent extends React.Component {

//     constructor(props) {
//         super(props)

//         this.state = {
//             actionCount: 0,
//         }

//         this.handleAction = this.handleAction.bind(this);
//         this.reset = this.reset.bind(this);
//     }

//     handleAction(action) {
//         console.log('Child says', action)

//         // this.setState({
//         //     actionCount: this.state.actionCount + 1,
//         // })

//         this.setState((state, props) => {
//             return {
//                 actionCount: state.actionCount + 1
//             }
//         })
//     }

//     reset() {
//         console.log('Resetting')

//         // this.setState({
//         //     actionCount: 0,
//         // })

//         this.setState((state, props) => {
//             return {
//                 actionCount: 0
//             }
//         })
//     }

//     render() {
//         return (
//             <div>
//                 <Child onAction={this.handleAction} reset={this.reset} />
//                 <p>Clicked {this.state.actionCount} times!</p>
//             </div>
//         )
//     }

// }

export class CountingParent extends React.Component {

    state = {
        actionCount: 0,
    }

    handleAction = (action) => {
        console.log('Child says', action)
        this.setState((state, props) => {
            return {
                actionCount: state.actionCount + 1
            }
        })
    }

    reset = () => {
        console.log('Resetting')
        this.setState((state, props) => {
            return {
                actionCount: 0
            }
        })
    }

    render() {
        return (
            <div>
                <Child onAction={this.handleAction} reset={this.reset} />
                <p>Clicked {this.state.actionCount} times!</p>
            </div>
        )
    }
}