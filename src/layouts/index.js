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

	render() {
		let {data, children} = this.props;

		return(
			<div css={{
				
			}} >
				<Helmet
					title={data.site.siteMetadata.title}
					meta={[
						{ name: 'description', content: 'Sample' },
						{ name: 'keywords', content: 'sample, something' },
					]}
				/>
				<Header
					headerTitle={data.site.siteMetadata.title}
					toggleDropDown={this.toggleDropDown}
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
