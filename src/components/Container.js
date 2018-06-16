import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core'

const styles = theme => ({
	gutter: {
		maxWidth: 1000,
		paddingLeft: 24,
		paddingRight: 24,
		marginLeft: 'auto',
		marginRight: 'auto',
		width: '100%',
		boxSizing: 'border-box',
		[theme.breakpoints.down('xs')]: {
			paddingLeft: 16,
			paddingRight: 16,
		}
	}
})

const Container = ({ children, classes, narrow, paddingTop, paddingBottom }) => (
	<div
		className={classes.gutter}
		style={{
			paddingTop: paddingTop ? 32 : 0,
			paddingBottom: paddingBottom ? 32 : 0,
		}} >
		{children}
	</div>
)

export default withStyles(styles)(Container);