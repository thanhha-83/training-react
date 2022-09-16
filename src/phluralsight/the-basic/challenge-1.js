// Challenge: Start the button with 5
// Double the button's label on each click

import { useState } from 'react'

function Challenge1() {
	const [counter, setCounter] = useState(5);
	const handleClick = () => setCounter(counter*2)
	return <button onClick={handleClick}>{counter}</button>;
}

export default Challenge1