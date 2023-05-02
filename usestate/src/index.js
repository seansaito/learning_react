import React, { useEffect, useState, useRef } from "react";
import ReactDOM from "react-dom";

// class OneTimeButton extends React.Component {
//     state = {
//         clicked: false,
//     }

//     handleClick = () => {
//         this.props.onClick()
//         this.setState({clicked: true})
//     }

//     render() {
//         return (
//             <button onClick={this.handleClick} disabled={this.state.clicked}>
//                 You can click me only once
//             </button>
//         )
//     }
// }

function OneTimeButton({ onClick }) {
  const [clicked, setClicked] = React.useState(false);
  // const [volume, setVolume] = useState(80)
  // const [position, setPosition] = useState(0)
  // const [isPlaying, setPlaying] = useState(false)
  const handleClick = () => {
    onClick();
    setClicked(true);
  };

  return (
    <button onClick={handleClick} disabled={clicked}>
      You can click me only once
    </button>
  );
}

function StepTracker() {
  const [steps, setSteps] = React.useState(0);
  function increment() {
    setSteps((steps) => steps + 1);
  }
  return (
    <div>
      Today you've taken {steps} steps
      <br />
      <button onClick={increment}>I took another step</button>
    </div>
  );
}

function RandomList() {
  const [items, setItems] = React.useState([]);
  const addItem = () => {
    setItems([
      ...items,
      {
        id: items.length,
        value: Math.random() * 100,
      },
    ]);
  };
  return (
    <>
      <button onClick={addItem}>Add a number</button>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.value}</li>
        ))}
      </ul>
    </>
  );
}

const InputExample = () => {
  const [text, setText] = useState('')
  const handleChange = (event) => {
    setText(event.target.value);
  }

  useEffect(() => {
    console.log(text);
  })

  return (
    <>
      <p>Input Example</p>
      <input type='text' value={text} onChange={handleChange} />
    </>
  )
}

const TrickInput = () => {
  const [text, setText] = useState('try typing something');

  const handleChange = (event) => {
    setText('haha nope')
  }

  return (
    <>
      <p>Trick Input example</p>
      <input type='text' value={text} onChange={handleChange} />
    </>
  )
}

const RefInput = () => {
  const input = useRef()
  const showValue = () => {
    alert(`Input contains: ${input.current.value}`)
  }

  return (
    <div>
      <input type='text' ref={input} />
      <button onClick={showValue}>Alert the Value!</button>
    </div>
  )
}

ReactDOM.render(
  <>
    <OneTimeButton onClick={() => alert("hi")} />
    <StepTracker />
    <RandomList />
    <InputExample />
    <TrickInput />
    <RefInput />
  </>,
  document.querySelector("#root")
);
