import React from 'react'
import PageContent from '../components/PageContent'

const SkillGroup = ({ children, name }) => (
    <div css={{
        marginBottom: '2em',
    }} >
        <h3>{name}</h3>
        <div css={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
        }} >
            {children}
        </div>
    </div>
)

const Skill = ({ name, image, padding }) => (
    <div css={{
        width: '8em',
        marginRight: '1em',
        marginBottom: '1em',
        //border: '1px solid lightgrey',
        boxShadow: '0px 0px 10px 0px rgba(179,179,179,1)',
        textAlign: 'center',
    }} >
        <img src={image} css={{
            width: '100%',
            padding: (padding || 0),
            boxSizing: 'border-box',
        }} />
        <p css={{
            marginTop: '0.25em',
            marginBottom: '0.25em',
        }} >{name}</p>
    </div>
)

const About = () => (
    <PageContent>
        <h1>About me</h1>
		<h2>
			<a href="https://apps.gregbrisebois.com/downloads/gregbriseboisresume.pdf" >
				<i className="fas fa-file-pdf" css={{paddingRight: '0.5em'}} />
				Resume
			</a>
		</h2>
        <h2>Skills</h2>
        <SkillGroup name={"Languages"} >
            <Skill name="Javascript" image={'/img/logos/js-logo.jpg'} />
            <Skill name="HTML5" image={'/img/logos/html5-logo.svg'} padding={'10%'} />
            <Skill name="C++" image={'/img/logos/cplusplus-logo.svg'} padding={'5%'} />
            <Skill name="Java" image={'/img/logos/java-logo.jpg'} padding={'5%'} />
            <Skill name="Python" image={'/img/logos/python-logo.svg'} padding={'10%'} />
        </SkillGroup>
        <SkillGroup name={"Frontend"} >
            <Skill name="React" image={'/img/logos/react-logo.jpg'} />
            <Skill name="Gatsby" image={'/img/logos/gatsby-logo.jpg'} padding={'10%'} />
            <Skill name="jQuery" image={'/img/logos/jquery-logo.jpg'} padding={'10%'} />
        </SkillGroup>
		<SkillGroup name={"Server/Backend"} >
			<Skill name="Node.js" image={'/img/logos/node-logo.jpg'} padding={'5%'} />
			<Skill name="Apache" image={'/img/logos/apache-logo.jpg'} padding={'10%'} />
			<Skill name="NGINX" image={'/img/logos/nginx-logo.jpg'} padding={'5%'} />
			<Skill name="Ubuntu Server" image={'/img/logos/ubuntu-logo.jpg'} padding={'10%'} />
		</SkillGroup>
        <SkillGroup name={"Game Development"} >
            <Skill name="Unreal Engine" image={'/img/logos/unreal-logo.jpg'} padding={'10%'} />
            <Skill name="Blender" image={'/img/logos/blender-logo.jpg'} padding={'10%'} />
        </SkillGroup>
    </PageContent>
)

export default About;