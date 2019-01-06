import React from 'react'

import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import EmoticonSadIcon from 'mdi-material-ui/EmoticonSad'

import Container from '../components/Container'
import Layout from '../components/Layout';
import withRoot from '../withRoot';

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
	<Layout>
		<div className={classes.root} >
			<Container paddingTop >
				<Typography variant="display4" gutterBottom className={classes.title} >404</Typography>
				<Typography variant="headline" gutterBottom >Not found</Typography>
				<Typography variant="body2" gutterBottom >The requested page is not available on the server.</Typography>
				
				<EmoticonSadIcon className={classes.sadFace} />
			</Container>
		</div>
	</Layout>
)

export default withRoot(withStyles(styles)(NotFoundPage));