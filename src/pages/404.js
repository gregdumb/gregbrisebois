import React from 'react'
import Link from 'gatsby-link'

import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import EmoticonSadIcon from 'mdi-material-ui/EmoticonSad'

import Container from '../components/Container'

const styles = theme => ({
	root: {
		textAlign: 'center'
	},
	title: {
		fontSize: '4rem'
	},
	sadFace: {
		fontSize: '4rem',
		color: theme.palette.secondary.dark,
		marginTop: 16
	}
})

const NotFoundPage = ({ classes }) => (
	<div className={classes.root} >
		<Container paddingTop >
			<Typography variant="display4" gutterBottom className={classes.title} >404</Typography>
			<Typography variant="headline" gutterBottom >Not found</Typography>
			<Typography variant="body2" gutterBottom >The requested page is not available on the server.</Typography>
			
			<EmoticonSadIcon className={classes.sadFace} />
		</Container>
	</div>
)

export default withStyles(styles)(NotFoundPage);