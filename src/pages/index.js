import React from 'react'
import Link from 'gatsby-link'
import Container from '../components/Container'
import Typer from '../components/Typer'
import BoxLink from '../components/BoxLink'
import { colors, media } from '../theme'

import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import HelpIcon from '@material-ui/icons/Help';

import UnstyledLink from '../components/UnstyledLink'

import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
	header: {
		background: theme.palette.primary.light,
		color: 'white',
	},
	paper: {
		padding: 16,
		
	}
})

const IndexPage = ({ classes }) => (
	<div>
		<header css={{
			background: 'cornflowerblue',
			color: 'white',
			height: '300px',
			boxSizing: 'border-box',
			display: 'flex',
			alignItems: 'center',
			[media.lessThan('medium')]: {
				alignItems: 'baseline',
			}
			}} className={classes.header} >
			<Container>
				<h1 css={{textAlign: 'left', fontSize: '4rem'}} >
					{"> "}
					<Typer options={{
						strings: [
							'I write websites',
							'I write backends',
							'I write games',
							'I write tutorials',
							'I write code',
						],
						typeSpeed: 70,
						backSpeed: 70,
						backDelay: 1000,
						loop: false,
					}} />
				</h1>
			</Container>
		</header>
		<div>
			<Container >
				<h3>I'm a computer scientist based in San Jose, CA.</h3>
				<p>This site serves as my public profile and hosting space for my projects.</p>
				{/*<div css={{
					display: 'flex',
					justifyContent: 'center',
					[media.lessThan('small')]: {
						flexDirection: 'column',
					}
				}} >
					<BoxLink text="Tutorials" icon="graduation-cap" to="/tutorials/" />
					<BoxLink text="Projects" icon="wrench" to="/projects/" />
					<BoxLink text="About" icon="question" to="/about/" />
				</div>*/} 
				<Grid container spacing={24} >
					<Grid item xs={12} sm={4} >
						<UnstyledLink to="/tutorials" >
							<Paper className={classes.paper}>
								<Typography variant="headline" >Tutorials</Typography>
							</Paper>
						</UnstyledLink>
					</Grid>
					<Grid item xs={12} sm={4} >
						<UnstyledLink to="/projects" >
							<Paper className={classes.paper}>
								<Typography variant="headline" >Projects</Typography>
							</Paper>
						</UnstyledLink>
					</Grid>
					<Grid item xs={12} sm={4} >
						<UnstyledLink to="/about" >
							<Paper className={classes.paper}>
								<Typography variant="headline" >About</Typography>
							</Paper>
						</UnstyledLink>
					</Grid>
				</Grid>
			</Container>
		</div>
  	</div>
)

export default withStyles(styles)(IndexPage);