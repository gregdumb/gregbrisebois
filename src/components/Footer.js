import React from 'react'

import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

import Container from './Container'

const styles = theme => ({
	root: {
		background: theme.palette.primary.light,
		padding: '16px 0',
		marginTop: 16,
	}
})

const Footer = ({ classes }) => (
	<footer className={classes.root} >
		<Container>
			<Typography variant="body2" color="default" >Copyright © Gregory Brisebois 2018, all rights reserved</Typography>
			{/*<p>
				Copyright © Gregory Brisebois 2018, all rights reserved
				<span style={{float: 'right'}} >
					<FooterLink href="https://www.linkedin.com/in/gregbrisebois/" icon="linkedin" />
					<FooterLink href="https://github.com/gregdumb" icon="github" />
				</span>
			</p>*/}
		</Container>
	</footer>
)

export default withStyles(styles)(Footer);