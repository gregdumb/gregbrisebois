import React from 'react'
import PageContent from '../components/PageContent'

import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'

import Container from '../components/Container'

const SkillGroup = ({ skills, name }) => (
	<div style={{marginBottom: 32}} >
		<Typography variant="title" gutterBottom>{name}</Typography>
		<Grid container spacing={24} >
			{skills.map(skill => (
				<Grid item xs={4} sm={3} md={2} lg={2} >
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

const skillGroups = [{
	group: "Languages",
	skills: [{
		name: "Javascript",
		image: "/img/logos/js-logo.jpg",
	}, {
		name: "HTML5",
		image: "/img/logos/html5-logo.svg",
		padding: '10%',
	}, {
		name: "C++",
		image: "/img/logos/cplusplus-logo.svg",
		padding: '5%',
	}, {
		name: "Java",
		image: "/img/logos/java-logo.jpg",
		padding: '5%',
	}, {
		name: "Python",
		image: "/img/logos/python-logo.svg",
		padding: '10%',
	}]
}, {
	group: "Frontend",
	skills: [{
		name: "React",
		image: "/img/logos/react-logo.jpg",
	}, {
		name: "Redux",
		image: "/img/logos/redux-logo.jpg",
		padding: '10%',
	}, {
		name: "Gatsby",
		image: "/img/logos/gatsby-logo.jpg",
		padding: '10%',
	}, {
		name: "jQuery",
		image: "/img/logos/jquery-logo.jpg",
		padding: '10%',
	}, {
		name: "Android",
		image: "/img/logos/android-logo.jpg",
		padding: "10%",
	}]
}, {
	group: "Server Frameworks & Libraries",
	skills: [{
		name: "Express",
		image: "/img/logos/express-logo.jpg",
		padding: "5%",
	}, {
		name: "Sequelize",
		image: "/img/logos/sequelize-logo.jpg",
		padding: "5%",
	}, {
		name: "Socket.io",
		image: "/img/logos/socket-logo.jpg"
	}]
}, {
	group: "Server Technologies",
	skills: [{
		name: "Node.js",
		image: "/img/logos/node-logo.jpg",
		padding: "5%",
	}, {
		name: "NGINX",
		image: "/img/logos/nginx-logo.jpg",
		padding: "5%",
	}, {
		name: "Apache",
		image: "/img/logos/apache-logo.jpg",
		padding: "10%",
	}, {
		name: "MySQL",
		image: "/img/logos/mysql-logo.jpg",
		padding: "10%",
	}, {
		name: "Ubuntu Server",
		image: "/img/logos/ubuntu-logo.jpg",
		padding: "10%",
	}]
}, {
	group: "Game Development",
	skills: [{
		name: "Unreal Engine",
		image: "/img/logos/unreal-logo.jpg",
		padding: "10%",
	}, {
		name: "Blender",
		image: "/img/logos/blender-logo.jpg",
		padding: "10%"
	}]
}]

const About = () => (
    <Container>
        <h1>About me</h1>
		<h2>
			<a href="https://apps.gregbrisebois.com/downloads/gregbriseboisresume.pdf" target="_blank" >
				<i className="fas fa-file-pdf" css={{paddingRight: '0.5em'}} />
				Resume
			</a>
		</h2>
        <h2>Experience</h2>
        <ul>
            <li>
                <h3>Analog Devices Inc.</h3>
                <p style={{margin: '0.5em 0'}} >July 2017 - Present</p>
                <p style={{margin: '0.5em 0'}} >Software Intern, multiple projects including:</p>
                <ul>
                    <li>Web-based design aid tools for specific parts</li>
                    <li>Linduino (Arduino) driver development for ADI parts</li>
                    <li>Desktop .NET plugins for the ACE testing platform</li>
                </ul>
            </li>
        </ul>
        <h2>Skills</h2>
		{skillGroups.map(group => (
			<SkillGroup skills={group.skills} name={group.group} />
		))}
        <h2>About the Site</h2>
        <p>This site was built with React and Gatsby</p>
    </Container>
)

export default About;