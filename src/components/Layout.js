import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/Header'
import MenuDrawer from '../components/MenuDrawer'
import PageArea from '../components/PageArea'

import 'typeface-bitter';
import 'typeface-roboto';
import "prismjs/themes/prism-tomorrow.css";

import { withStyles } from '@material-ui/core';

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
	'@global': {
		'a': {
			...theme.mixins.link,
		}
	},
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
        let {/*data,*/ children, classes} = this.props;
        
        let data = {
            site: {
                siteMetadata: {
                    title: 'Greg Brisebois',
                }
            }
        };
		
		let metaTags = [
			{ name: 'description', content: 'Personal site of Greg Brisebois' },
			{ name: 'keywords', content: 'greg brisebois, gregory brisebois, software, tutorials, profile' },
			//{ name: 'branch', content: process.env.BRANCH },
			//{ name: 'head', content: process.env.HEAD },
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
					<MenuDrawer className={classes.grow} isOpen={this.state.menuOpen} onOpen={this.openDrawer} onClose={this.onDrawerClose} />
					<PageArea >
						{children}
					</PageArea>
				</div>
		)
	}
}

TemplateWrapper.propTypes = {
	children: PropTypes.func,
	data: PropTypes.object,
}

export default withStyles(styles)(TemplateWrapper);
