import React from 'react';

import { withStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid'

import PostLink from './PostLink';

const styles = {
	
}

const PostLinkList = ({ classes, nodes }) => (
	<Grid container spacing={24} >
		{nodes.map(node => (
			<Grid item xs={12} sm={6} md={4} key={node.fields.slug} >
				<PostLink node={node} />
			</Grid>
		))}
	</Grid>
)

export default withStyles(styles)(PostLinkList);