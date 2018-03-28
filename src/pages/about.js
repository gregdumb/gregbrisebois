import React from 'react'
import PageContent from '../components/PageContent'

const SkillGroup = ({ children, name }) => (
    <div css={{

    }} >
        <h3>{name}</h3>
        <div css={{
            display: 'flex',
            flexDirection: 'row',
        }} >
            {children}
        </div>
    </div>
)

const Skill = ({ name, image }) => (
    <div css={{
        width: '10em',
        border: '1px solid lightgrey',
        textAlign: 'center',
    }} >
        <img src={image} css={{width: '100%'}} />
        <p >{name}</p>
    </div>
)

const About = () => (
    <PageContent>
        <h1>About me</h1>
        <h2>Skills</h2>
        <SkillGroup name={"Web (Frontend)"} >
            <Skill name="React" image={'/img/logos/react-logo.jpg'} />
            <Skill name="Gatsby" />
        </SkillGroup>
    </PageContent>
)

export default About;