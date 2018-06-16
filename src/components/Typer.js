import React from 'react'
import Typed from 'typed.js'
import { injectGlobal, keyframes } from 'styled-components'

import { withStyle, withStyles } from '@material-ui/core/styles'

const styles = theme => ({
	'@global': {
		'@keyframes blinky': {
			'0%': { opacity: 1 },
			'50%': { opacity: 0 },
			'100%': { opacity: 1 },
		},
		'.typed-cursor': {
			opacity: 1,
			animation: `blinky 0.7s infinite`,
		},
		'.typed-fade-out': {
			opacity: 0,
			transition: 'opacity 0.25s',
			animation: 0,
		}
	}
})

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

export default withStyles(styles)(Typer);