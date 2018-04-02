import React from 'react'
import Link from 'gatsby-link'

const Tags = ({ tags }) => (
    <p css={{color: 'lightgrey'}} >Tags: {(node.frontmatter.tags || []).map(tag => (
        <span>
            <span css={{
                ':hover': {
                    color: 'white',
                    background: 'salmon',
                    borderRadius: '0.3em',
                    padding: '0.1em 0.25em',
                }
            }} >
                {tag}
            </span>
            {', '}
        </span>
    ))}</p>
)

export default Tags;