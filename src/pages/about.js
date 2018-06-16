import React from 'react'
import PageContent from '../components/PageContent'

import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

import TitledPage from '../components/TitledPage'
import Experience from '../components/Experience'

import { skills, experience } from '../content/skills'

const SkillGroup = ({ skills, name }) => (
	<div style={{marginBottom: 32}} >
		<Typography variant="title" gutterBottom>{name}</Typography>
		<Grid container spacing={24} >
			{skills.map(skill => (
				<Grid item xs={4} sm={3} md={2} lg={2} key={skill.name} >
					<Card >
						<div style={{ padding: skill.padding || 0 }} >
							<CardMedia image={skill.image} title={skill.name} style={{paddingTop: '100%'}} />
						</div>
						<CardContent style={{padding: 8}} >
							<Typography noWrap variant='body1' align="center" >{skill.name}</Typography>
						</CardContent>
					</Card>
				</Grid>
			))}
		</Grid>
	</div>
)

const About = () => (
    <TitledPage title="About Me" >
	
		<Button
			variant="outlined"
			color="secondary"
			style={{ margin: '24px 0', fontWeight: 600 }}
			href="https://apps.gregbrisebois.com/downloads/gregbriseboisresume.pdf"
			target="_blank" >
			Download Résumé
		</Button>
			
        <Typography variant="display2" gutterBottom >Experience</Typography>
        
		<Grid container spacing={24} style={{ marginBottom: 32 }} >
			{experience.map(e => (
				<Grid item md={12} key={e.company} >
					<Experience experience={e} />
				</Grid>
			))}
		</Grid>
		
        <Typography variant="display2" gutterBottom >Skills</Typography>
		{skills.map(group => (
			<SkillGroup skills={group.skills} name={group.group} key={group.group} />
		))}
		
        <Typography variant="display2" gutterBottom >About the Site</Typography>
        <Typography variant="body1" >
			This site was built with React using the <a href="https://www.gatsbyjs.org/" >Gatsby</a> static site generator.
			Material Design theming was made possible by the wonderful <a href="https://material-ui.com/" >Material-UI</a>.
		</Typography>
		
    </TitledPage>
)

export default About;