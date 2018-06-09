import React from 'react'
import PropTypes from 'prop-types'
import { colors, media } from '../theme'

const Container = ({ children, narrow }) => (
	<div css={{
		paddingLeft: 24,
		paddingRight: 24,
		marginLeft: 'auto',
		marginRight: 'auto',
		width: '100%',
		boxSizing: 'border-box',
		maxWidth: (narrow ? '800px' : '1000px'),
		[media.lessThan('medium')]: {
			paddingLeft: 16,
			paddingRight: 16,
		}
	}} >
		{children}
	</div>
)

Container.propTypes = {
}

export default Container;