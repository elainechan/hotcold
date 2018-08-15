import React from 'react';

export default class NumberInput extends React.Component {
	constructor(props) {
		super(props);		
	}

	// take input on guess
	onUserGuess(e) {
		e.preventDefault();
		const guess = this.guessInput.value;
		if (guess && this.guessInput.value) {
			this.props.onGuess(guess);
		}
	}

	render() {
		return(
			<form onSubmit={(e) => this.onGuess(e)}>
				<input
					type="number"
					placeholder="Enter a number"
					ref={input => this.guessInput = input}>
				</input>	
				<button>Guess!</button>
			</form>
		);
	}
}