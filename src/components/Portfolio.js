import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import { withStyles, Typography, Grid, Divider } from '@material-ui/core'

import { experience } from '../content/skills';
import ShowcaseCard from './ShowcaseCard';
import Experience from './Experience';

import profilePic from '../favicon.png';

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
        width: 128,
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
    }
})

const divider = () => <Divider style={{ margin: '32px 0' }} />;

const Portfolio = ({ classes }) => (
    <div className={classes.root} >
        <img src={profilePic} className={classes.profile} />
        {divider()}
        <Typography variant="h4" gutterBottom className={classes.sectionTitle} >Featured Projects</Typography>
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
        {divider()}
        <Typography variant='h4' gutterBottom className={classes.sectionTitle}>Experience</Typography>
        {experience.map(e => <Experience experience={e} />)}
        {divider()}
        <Typography variant='h4' gutterBottom className={classes.sectionTitle}>Contact</Typography>
    </div>
)

export default withStyles(styles)(Portfolio)
