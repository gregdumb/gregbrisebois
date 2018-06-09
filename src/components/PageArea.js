import React from 'react';

import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
	area: {
		flex: '1 1 100%',
		maxWidth: '100%',
		margin: '0 auto',
	},
	toolbar: theme.mixins.toolbar,
})

const PageArea = ({ classes, children }) => (
	<div className={classes.area} >
		<div className={classes.toolbar} />
		{children}
	</div>
)

export default withStyles(styles)(PageArea);