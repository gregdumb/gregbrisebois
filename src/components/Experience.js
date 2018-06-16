import React from 'react'
import PropTypes from 'prop-types'

import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

const styles = theme => ({
	title: {
		display: 'inline',
	}
})

const Experience = ({ classes, experience }) => (
	<Card>
		<CardContent>
			<Typography gutterBottom>
				<Typography variant="title" component="span" className={classes.title} >
					{experience.company}
				</Typography>
				
				<Typography variant="subheading" component="span" className={classes.title} >
					{" • " + experience.jobTitle}
				</Typography>
			</Typography>
			
			<Typography variant="body2" color="textSecondary" gutterBottom >{experience.dates}</Typography>
			
			<Typography variant="body1" dangerouslySetInnerHTML={{__html: experience.description}} ></Typography>
		</CardContent>
	</Card>
)

Experience.propTypes = {
	experience: PropTypes.shape({
		company: PropTypes.string,
		jobTitle: PropTypes.string,
		dates: PropTypes.string,
		description: PropTypes.string,
	})
}

export default withStyles(styles)(Experience);