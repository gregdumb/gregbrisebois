import React from 'react';

import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'

import UnstyledLink from './UnstyledLink'

const styles = theme => ({
	paper: {
		padding: 16,
		
	}
})

const ShortcutCard = ({ classes, title, to }) => (
	<Grid item xs={12} sm={4} >
		<UnstyledLink to={to} >
			<Paper className={classes.paper}>
				<Typography variant="headline" >{title}</Typography>
			</Paper>
		</UnstyledLink>
	</Grid>
)

export default withStyles(styles)(ShortcutCard);