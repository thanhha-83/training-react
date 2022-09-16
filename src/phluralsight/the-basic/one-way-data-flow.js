import { useState } from 'react'

function Button({onClickFunction, increment}) {
  const handleClick = () => onClickFunction(increment)
  return (
    <button onClick={handleClick}>
      +{increment}
    </button>
  )
}

function Display({message}) {
  return (
    <div>{message}</div>
  )
}

function OneWayDataFlow() {
	const [counter, setCounter] = useState(0);
  const incrementCounter = (increment) => setCounter(counter + increment);
	return (
    <div>
      <Button onClickFunction={incrementCounter} increment={5}/>
      <Button onClickFunction={incrementCounter} increment={10}/>
      <Button onClickFunction={incrementCounter} increment={15}/>
      <Button onClickFunction={incrementCounter} increment={20}/>
      <Display message={counter} />
    </div>
  )
}

export default OneWayDataFlow