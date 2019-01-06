import React from 'react'
import _ from 'lodash'

import { withStyles } from '@material-ui/core/styles'
import Chip from '@material-ui/core/Chip'

import UnstyledLink from './UnstyledLink'

// Thanks to Sophie Alpert from KhanAcademy
const intersperse = (arr, sep) => {
    if (arr.length === 0) { return [] }

    return arr.slice(1).reduce(function(xs, x, i) {
        return xs.concat([sep, x]);
    }, [arr[0]]);
}

const styles = theme => ({
	root: {
		display: 'flex'
	},
	chip: {
		margin: theme.spacing.unit / 2,
	}
})

const Tags = ({ classes, tags, css }) => (
	<div>
		{tags && tags.map(tag => (
			<UnstyledLink to={`/tags/${_.kebabCase(tag)}`} key={tag} >
				<Chip
					className={classes.chip}
					label={tag}
					onClick={() => {}}
				/>
			</UnstyledLink>
		))}
	
	</div>
)

export default withStyles(styles)(Tags);