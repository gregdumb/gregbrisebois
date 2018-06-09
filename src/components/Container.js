import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core'

const styles = theme => ({
	gutter: {
		paddingLeft: 24,
		paddingRight: 24,
		marginLeft: 'auto',
		marginRight: 'auto',
		width: '100%',
		boxSizing: 'border-box',
		[theme.breakpoints.down('sm')]: {
			paddingLeft: 16,
			paddingRight: 16,
		}
	}
})

const Container = ({ children, classes, narrow }) => (
	<div className={classes.gutter} >
		{children}
	</div>
)

export default withStyles(styles)(Container);