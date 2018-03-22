import React from 'react'
import PropTypes from 'prop-types'
import { colors, media } from '../theme'

const Container = ({ children }) => (
	<div css={{
		paddingLeft: '1rem',
		paddingRight: '1rem',
		marginLeft: 'auto',
		marginRight: 'auto',
		maxWidth: '1260px',
		[media.lessThan('medium')]: {
			paddingLeft: '0.75rem',
			paddingRight: '0.75rem'
		}
	}} >
		{children}
	</div>
)

Container.propTypes = {
}

export default Container;