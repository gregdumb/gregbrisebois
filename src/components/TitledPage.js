import React from 'react'
import Helmet from 'react-helmet'

import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

import Container from './Container'

const styles = theme => ({
})

const TitledPage = ({ classes, children, title }) => (
	<Container paddingTop paddingBottom >
		<Helmet title={`${title} - Greg Brisebois`} />
		<Typography variant="display4" gutterBottom >{title}</Typography>
		{children}
	</Container>
)

export default withStyles(styles)(TitledPage);