import React from 'react';

import {
    withStyles, Card, CardContent, Typography, CardMedia,
} from '@material-ui/core';
import UnstyledLink from './UnstyledLink';

const styles = theme => ({
    root: {
        display: 'flex',
        flexDirection: 'row',
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column',
        },
        //borderColor: theme.palette.divider,
        //borderRadius: 16,
        //borderWidth: 1,
        //borderStyle: 'solid',
        //background: 'none',
        //boxShadow: 'none',
    },
    media: {
        minWidth: 280,
        minHeight: 140,
    }
})

const ShowcaseCard = ({ classes, node: { frontmatter, fields } }) => (
    <UnstyledLink to={fields.slug}>
        <Card className={classes.root} >
            <CardMedia
                className={classes.media}
                image={frontmatter.image.childImageSharp.fluid.src} />
            <CardContent>
                <Typography variant='h5' gutterBottom>{frontmatter.title}</Typography>
                <Typography variant='body1'>{frontmatter.summary}</Typography>
            </CardContent>
        </Card>
    </UnstyledLink>
);

export default withStyles(styles)(ShowcaseCard);