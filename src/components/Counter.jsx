import React, { useState } from 'react'

const Counter = () => {
	const [count, setCount] = useState(0)

	function incr() {
		setCount(count + 1);
	}

	function decr() {
		setCount(count - 1);
	}

	return (
		<div>
			<h3>{count}</h3>
			<button onClick={incr}>Increment</button>
			<button onClick={decr}>Dercement</button>
		</div>
	)
}

export default Counter