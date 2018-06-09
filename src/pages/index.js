import React from 'react'
import Link from 'gatsby-link'
import Container from '../components/Container'
import Typer from '../components/Typer'
import BoxLink from '../components/BoxLink'
import { colors, media } from '../theme'

import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'

import ShortcutCard from '../components/ShortcutCard'

const styles = theme => ({
	header: {
		background: theme.palette.primary.light,
		color: 'white',
	},
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
				<Grid container spacing={24} >
					<ShortcutCard title="Tutorials" to="/tutorials" />
					<ShortcutCard title="Projects" to="/projects" />
					<ShortcutCard title="About" to="/about" />
				</Grid>
			</Container>
		</div>
  	</div>
)

export default withStyles(styles)(IndexPage);