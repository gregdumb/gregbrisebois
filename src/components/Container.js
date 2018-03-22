import React from 'react'
import PropTypes from 'prop-types'
import { colors, media } from '../theme'

const Container = ({ children }) => (
	<div css={{
		paddingLeft: '1rem',
		paddingRight: '1rem',
		marginLeft: 'auto',
		marginRight: 'auto',
		maxWidth: '1260px'
	}} >
		{children}
	</div>
)

Container.propTypes = {
}

export default Container;