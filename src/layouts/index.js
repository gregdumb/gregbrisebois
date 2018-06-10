import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import withRoot from '../withRoot'

import Header from '../components/Header'
import Footer from '../components/Footer'
import MenuDrawer from '../components/MenuDrawer'
import PageArea from '../components/PageArea'

require('typeface-bitter')
require('typeface-open-sans')
require("prismjs/themes/prism-tomorrow.css")
//import './index.css'

import { withStyles } from '@material-ui/core';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

export const query = graphql`
	query LayoutQuery {
		site {
			siteMetadata {
				title
			}
		}
	}
`;

const styles = theme => ({
	root: {
		display: 'flex',
		alignItems: 'stretch',
		minHeight: '100vh',
		width: '100%',
	},
	toolbar: theme.mixins.toolbar,
	grow: {
		flex: '1 1 auto',
	},
	content: {
		paddingTop: 80,
		flex: '1 1 100%',
		maxWidth: '100%',
		margin: '0 auto',
	}
})

class TemplateWrapper extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			menuOpen: false,
		}
	}
	
	onDrawerClose = () => {
		this.setState({
			menuOpen: false,
		})
	}
	
	openDrawer = () => {
		this.setState({
			menuOpen: true,
		})
	}

	render() {
		let {data, children, classes} = this.props;
		
		let metaTags = [
			{ name: 'description', content: 'Personal site of Greg Brisebois' },
			{ name: 'keywords', content: 'greg brisebois, gregory brisebois, software, tutorials, profile' },
		];
		
		return(
				<div className={classes.root} >
					<Helmet
						title={data.site.siteMetadata.title}
						meta={metaTags}
					/>
					<Header
						headerTitle={data.site.siteMetadata.title}
						toggleDropDown={this.toggleDropDown}
						closeDropDown={this.closeDropDown}
						dropDownVisible={this.state.dropDownVisible}
						openDrawerClicked={this.openDrawer}
					/>
					<MenuDrawer className={classes.grow} isOpen={this.state.menuOpen} onClose={this.onDrawerClose} />
					<PageArea >
						{children()}
					</PageArea>
					{/*<Footer />*/}
				</div>
		)
	}
}

TemplateWrapper.propTypes = {
	children: PropTypes.func,
	data: PropTypes.object,
}

export default withRoot(withStyles(styles)(TemplateWrapper));
