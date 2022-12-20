import React from "react";

class ClassCounter extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			count: 0
		}
		this.incr = this.incr.bind(this);
		this.decr = this.decr.bind(this);
	}

	incr() {
		this.setState({ count: this.state.count + 1 });
	}

	decr() {
		this.setState({ count: this.state.count - 1 });
	}

	render() {
		return (
			<div>
				<h3>{this.state.count}</h3>
				<button onClick={this.incr}>Increment</button>
				<button onClick={this.decr}>Dercement</button>
			</div>
		)
	}
}

export default ClassCounter;
