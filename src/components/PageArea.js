import React from 'react';

import { withStyles } from '@material-ui/core/styles'

import Footer from './Footer'

const styles = theme => ({
	area: {
		flex: '1 1 100%',
		maxWidth: '100%',
		margin: '0 auto',
	},
	content: {
		minHeight: '100vh',
	},
	toolbar: theme.mixins.toolbar,
})

const PageArea = ({ classes, children }) => (
	<div className={classes.area} >
		
		<div className={classes.content} >
			<div className={classes.toolbar} />
			{children}
		</div>
		
		<Footer />
		
	</div>
)

export default withStyles(styles)(PageArea);