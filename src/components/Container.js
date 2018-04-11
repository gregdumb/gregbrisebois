import React from 'react'
import PropTypes from 'prop-types'
import { colors, media } from '../theme'

const Container = ({ children, narrow }) => (
	<div css={{
		paddingLeft: '1rem',
		paddingRight: '1rem',
		marginLeft: 'auto',
		marginRight: 'auto',
		width: '100%',
		boxSizing: 'border-box',
		maxWidth: (narrow ? '800px' : '1000px'),
		[media.lessThan('medium')]: {
			paddingLeft: '0.75rem',
			paddingRight: '0.75rem',
		}
	}} >
		{children}
	</div>
)

Container.propTypes = {
}

export default Container;