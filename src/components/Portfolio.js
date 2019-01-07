import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'

import { withStyles, Typography, Grid, Divider, Button } from '@material-ui/core'
import EmailIcon from '@material-ui/icons/Email';
import FilePdfIcon from 'mdi-material-ui/FilePdf';

import { experience } from '../content/skills';
import ShowcaseCard from './ShowcaseCard';
import Experience from './Experience';
import UnstyledLink from './UnstyledLink';

import profilePic from '../content/img/profile-round.png';

const projectsQuery = graphql`
    {
        allMarkdownRemark(
            filter: {
                frontmatter: { featured: { eq: true } }
                fields: { folder: { eq: "projects" } }
            }
        ) {
            edges {
                node {
                    frontmatter {
                        title
                        date
                        tags
                        featured
                        summary
                        image {
                            childImageSharp {
                                fluid(maxWidth: 400) {
                                    src
                                    base64
                                }
                            }
                        }
                    }
                    fields {
                        slug
                    }
                    excerpt
                }
            }
        }
    }
`

const styles = theme => ({
    root: {
        marginTop: 32,
        marginBottom: 72,
    },
    profile: {
        //width: 128,
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    sectionTitle: {
        //marginTop: 48,
    },
    projectsGrid: {
        marginTop: 16,
        marginBottom: 16,
    },
    button: {
        marginRight: 16,
        marginBottom: 16,
    },
    icon: {
        marginRight: 8,
    }
})

const divider = name => <>
    <Divider style={{ margin: '32px 0' }} />
    <Typography variant='h4' gutterBottom>{name}</Typography>
</>;

const Portfolio = ({ classes }) => (
    <div className={classes.root} >
        <img src={profilePic} className={classes.profile} />
        {divider('Featured Projects')}
        <StaticQuery
            query={projectsQuery}
            render={({ allMarkdownRemark: { edges } }) => (
                <Grid container spacing={32} className={classes.projectsGrid} >
                    {edges.map(({ node }) => (
                        <Grid xs={12} item>
                            <ShowcaseCard node={node} />
                        </Grid>
                    ))}
                </Grid>
            )}
        />
        <Typography variant='body1' gutterBottom>
            See more projects <Link to='/projects'>here</Link> or on
            <a href='https://github.com/gregoryjjb' target='_blank' rel='noreferrer'> my GitHub</a>.
        </Typography>
        {divider('Experience')}
        {experience.map(e => <Experience experience={e} />)}
        {divider('Skills')}
        <Typography variant='body1'>In order of proficiency:</Typography>
        <Typography variant='body1'>
            <ul>
                <li>Web fundamentals (HTML5, ES6, CSS)</li>
                <li>Modern frontend development (React, JSS, Webpack)</li>
                <li>Server-side development (Nodejs, SQL, WebSockets)</li>
                <li>C++ (Arduino, Unreal Engine)</li>
            </ul>
        </Typography>
        {divider('Contact')}
        <Button
            variant='outlined'
            size='large'
            color='primary'
            component='a'
            href='mailto:gregoryjjb@gmail.com'
            target='_blank'
            className={classes.button}>
            <EmailIcon className={classes.icon}/>
            Email
        </Button>
        <Button
            variant='outlined'
            size='large'
            color='primary'
            component='a'
            href='https://apps.gregbrisebois.com/downloads/gregbriseboisresume.pdf'
            target='_blank'
            className={classes.button}>
            <FilePdfIcon className={classes.icon} />
            Download Résumé
        </Button>
    </div>
)

export default withStyles(styles)(Portfolio)
