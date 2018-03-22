import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import { sizes, media } from '../theme'

import Header from '../components/Header'
import './index.css'

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
			sidebarIsOpen: false
		}
	}

	render() {
		let {data, children} = this.props;

		return(
			<div>
				<Helmet
					title={data.site.siteMetadata.title}
					meta={[
						{ name: 'description', content: 'Sample' },
						{ name: 'keywords', content: 'sample, something' },
					]}
				/>
				<Header headerTitle={data.site.siteMetadata.title} onOpenSidebar={() => this.setState({sidebarIsOpen: !this.state.sidebarIsOpen})} />
				<div
					css={{
						marginTop: sizes.header.large,
						[media.lessThan('large')]: {
							marginTop: sizes.header.small,
						}
					}}
				>
					{children()}
				</div>
				<div style={{
					position: 'absolute',
					top: 0,
					left: 0,
					width: '200px',
					minHeight: '100%',
					backgroundColor: 'white',
					display: (this.state.sidebarIsOpen) ? 'block' : 'none'
				}}>
					<p>Sidebar goes here</p>
				</div>
			</div>
		)
	}
}

TemplateWrapper.propTypes = {
	children: PropTypes.func,
	data: PropTypes.object,
}

export default TemplateWrapper
