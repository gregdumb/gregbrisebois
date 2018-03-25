import React from 'react'
import Typed from 'typed.js'
import { css } from 'glamor'

let typedjsBlink = css.keyframes({
	'0%': {opacity: 1},
	'50%': {opacity: 0},
	'100%': {opacity: 1},
});

css.global('.typed-cursor', {
	opacity: 1,
	animation: `${typedjsBlink} 0.7s infinite`,
});

css.global('.typed-fade-out', {
	opacity: 0,
	transition: 'opacity .25s',
	animation: 0,
});

class Typer extends React.Component {
	componentDidMount() {
		const { options } = this.props;
		this.typed = new Typed(this.el, options);
	}
	
	componentWillUnmount() {
		this.typed.destroy();
	}
	
	render() {
		return(
			<span
				ref={(el) => {this.el = el;}}
			/>
		);
	}
}

export default Typer;