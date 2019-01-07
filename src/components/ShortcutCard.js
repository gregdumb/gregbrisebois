import React from 'react';

import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'

import UnstyledLink from './UnstyledLink'

const styles = theme => ({
	paper: {
		padding: 16,
		display: 'flex',
		alignItems: 'center',
		color: theme.palette.secondary.dark,
	},
	title: {
		marginLeft: 16,
	}
})

const ShortcutCard = ({ classes, title, to, icon }) => (
	<Grid item xs={12} sm={4} >
		<UnstyledLink to={to} >
			<Paper className={classes.paper}>
				{icon}
				<Typography variant="h5" className={classes.title} >{title}</Typography>
			</Paper>
		</UnstyledLink>
	</Grid>
)

export default withStyles(styles)(ShortcutCard);