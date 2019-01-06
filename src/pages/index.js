import React from 'react'

import Container from '../components/Container'
import Typer from '../components/Typer'

import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import HelpIcon from '@material-ui/icons/Help';
import CodeIcon from '@material-ui/icons/Code';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import ShortcutCard from '../components/ShortcutCard'
import Layout from '../components/Layout';
import withRoot from '../withRoot';
import Portfolio from '../components/Portfolio';



const styles = theme => {
	
	console.log('THE THEME IS', JSON.stringify(theme.palette.primary));
	console.log('POINTER IS', theme.palette.primary);
	console.log('WHOLE POINTER IS', theme);
	
	return {
		header: {
			background: theme.palette.primary.light,
			color: 'white',
			height: '300px',
			boxSizing: 'border-box',
			display: 'flex',
			alignItems: 'center',
			[theme.breakpoints.down('xs')]: {
				//alignItems: 'baseline'
			}
		},
		codeText: {
			color: 'white',
			fontSize: '4rem',
		}
	}
}

const IndexPage = ({ classes }) => (
	<Layout>
		<header className={classes.header} >
			<Container>
				<Typography variant="display4" className={classes.codeText} >
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
				</Typography>
			</Container>
		</header>
		<div>
			<Container paddingTop >
				<Typography variant="h4" gutterBottom >I'm a computer scientist based in San Jose, CA.</Typography>
				<Typography variant="subtitle1" gutterBottom >This site serves as my public profile and hosting space for my projects.</Typography>
				{/*<Grid container spacing={24} style={{ marginTop: 32 }} >
					<ShortcutCard title="Tutorials" to="/tutorials" icon={<HelpIcon />} />
					<ShortcutCard title="Projects" to="/projects" icon={<CodeIcon />} />
					<ShortcutCard title="About" to="/about" icon={<AccountCircleIcon />} />
				</Grid>*/}
				<Portfolio />
			</Container>
		</div>
  	</Layout>
)

export default withRoot(withStyles(styles)(IndexPage));