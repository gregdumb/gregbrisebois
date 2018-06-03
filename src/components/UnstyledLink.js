import React from 'react'
import Link from 'gatsby-link'
import { withStyles } from '@material-ui/core/styles'

const styles = {
	link: {
		color: 'unset',
		textDecoration: 'none',
		'&:hover': {
			textDecoration: 'none',
		}
	}
}

const UnstyledLink = ({ children, classes, to }) => (
	<Link className={classes.link} to={to} >
		{children}
	</Link>
)

export default withStyles(styles)(UnstyledLink);