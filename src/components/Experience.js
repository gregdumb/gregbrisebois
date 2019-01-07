import React from 'react'
import PropTypes from 'prop-types'

import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

const styles = theme => ({
	root: {
		//borderColor: theme.palette.divider,
        //borderRadius: 16,
        //borderWidth: 1,
        //borderStyle: 'solid',
        //background: 'none',
        //boxShadow: 'none',
	},
	title: {
		display: 'inline',
	},
})

class Experience extends React.Component {
	state = {
		html: '',
	}
	
	componentDidMount() {
		this.setState({
			html: this.props.experience.description,
		});
	}
	
	render() {
		const { classes, experience } = this.props;
		
		return(
			<Card className={classes.root}>
				<CardContent>
					<Typography gutterBottom>
						<Typography variant="h5" component="span" className={classes.title} >
							{experience.company}
						</Typography>
						
						<Typography variant="subtitle1" component="span" className={classes.title} >
							{" • " + experience.jobTitle}
						</Typography>
					</Typography>
					
					<Typography variant="body2" color="textSecondary" gutterBottom >{experience.dates}</Typography>
					
					<Typography variant="body1" dangerouslySetInnerHTML={{__html: this.state.html}} ></Typography>
				</CardContent>
			</Card>
		)
	}
}

Experience.propTypes = {
	experience: PropTypes.shape({
		company: PropTypes.string,
		jobTitle: PropTypes.string,
		dates: PropTypes.string,
		description: PropTypes.string,
	})
}

export default withStyles(styles)(Experience);