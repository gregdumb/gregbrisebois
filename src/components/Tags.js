import React from 'react'
import Link from 'gatsby-link'

const Tags = ({ tags, css }) => (
    <span css={{color: 'grey', float: 'right'}} >{(tags || []).map(tag => (
        <span>
            <Link css={{
                ':hover': {
                    color: 'white',
                    background: 'salmon',
                    borderRadius: '0.3em',
                    padding: '0.1em 0.25em',
                    textDecoration: 'none',
                }
            }} >
                {tag}
            </Link>
            {', '}
        </span>
    ))}</span>
)

export default Tags;