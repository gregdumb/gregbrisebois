import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import { sizes, media } from '../theme'

import Header from '../components/Header'
import Footer from '../components/Footer'

require('typeface-bitter')
require('typeface-open-sans')
require("prismjs/themes/prism-tomorrow.css")
import './index.css'
import './hamburgers.css'


require('./fontawesome-all')

export const query = graphql`
	query LayoutQuery {
		site {
			siteMetadata {
				title
			}
		}
	}
`;

class TemplateWrapper extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			dropDownVisible: false
		}
	}
	
	toggleDropDown = () => {
		this.setState({
			dropDownVisible: !this.state.dropDownVisible,
		})
	}
	
	closeDropDown = () => {
		this.setState({
			dropDownVisible: false,
		})
	}

	render() {
		let {data, children} = this.props;
		
		let metaTags = [
			{ name: 'description', content: 'Personal site of Greg Brisebois' },
			{ name: 'keywords', content: 'greg brisebois, gregory brisebois, software, tutorials, profile' },
		];
		
		if(process.env.BRANCH !== 'master') metaTags.push({ name: 'robots', content: 'noindex' });
		
		return(
			<div css={{
				
			}} >
				<Helmet
					title={data.site.siteMetadata.title}
					meta={metaTags}
				/>
				<Header
					headerTitle={data.site.siteMetadata.title}
					toggleDropDown={this.toggleDropDown}
					closeDropDown={this.closeDropDown}
					dropDownVisible={this.state.dropDownVisible}
				/>
				<div
					css={{
						marginTop: sizes.header.large,
						minHeight: `calc(100vh - ${sizes.header.large})`,
						[media.lessThan('large')]: {
							marginTop: sizes.header.small,
						}
					}}
				>
					{children()}
				</div>
				<Footer />
			</div>
		)
	}
}

TemplateWrapper.propTypes = {
	children: PropTypes.func,
	data: PropTypes.object,
}

export default TemplateWrapper
