import React from 'react'
import PropTypes from 'prop-types'

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { withStyles } from '@material-ui/core/styles';

import Link from 'gatsby-link'
import { colors, sizes, media } from '../theme'
import Container from './Container'
import Hamburger from './Hamburger'

const HeaderLink = ({ text, path, onClick }) => (
	<Link
		to={path}
		onClick={onClick}
		css={{
			height: '100%',
			color: 'white',
			textDecoration: 'none',
			fontSize: '20px',
			[media.lessThan('large')]: {
				fontSize: '16px',
			},
			':hover': {
				textDecoration: 'none',
			}
		}} >
		<div css={{
			display: 'flex',
			alignItems: 'center',
			height: '100%',
			padding: '0 0.5em',
			[media.lessThan('small')]: {
				// For mobile dropdown
				height: '3em',
				fontSize: '1em',
			},
			':hover': {
				backgroundColor: colors.veryDarkHover,
			}
		}} >
			{text}
		</div>
	</Link>
)

const DropDown = ({ children, visible }) => (
	<div css={{
		//display: visible ? 'flex' : 'none',
		flexDirection: 'column',
		position: 'absolute',
		right: '0',
		top: sizes.header.small,
		background: colors.veryDark,
		width: 200,
		zIndex: 4,
		overflow: 'hidden',
		transformOrigin: 'top',
		transform: `scaleY(${visible ? 1 : 0})`,
		//height: visible ? 200 : 0,
		//opacity: visible ? 1 : 0,
		transition: 'all 0.1s ease-in-out',
	}} >
		{children}
	</div>
)

const styles = {
	root: {
		flexGrow: 1,
	},
	title: {
		flex: 1,
	},
	menuButton: {
		marginLeft: -12,
		marginRight: 20,
	}
}

const Header = ({ classes, headerTitle, toggleDropDown, closeDropDown, dropDownVisible }) => (
	<header className={classes.root} >
		<AppBar position="static" color="default" >
			<Toolbar>
				<IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
					<MenuIcon />
				</IconButton>
				<Typography className={classes.title} variant="title" color="inherit" >
					Greg Brisebois
				</Typography>
			</Toolbar>
		</AppBar>
	</header>
)

Header.propTypes = {
	headerTitle: PropTypes.string
}

export default withStyles(styles)(Header);
