import React from 'react'
import Link from 'gatsby-link'
import _ from 'lodash'

// Thanks to Sophie Alpert from KhanAcademy
const intersperse = (arr, sep) => {
    if (arr.length === 0) { return [] }

    return arr.slice(1).reduce(function(xs, x, i) {
        return xs.concat([sep, x]);
    }, [arr[0]]);
}

const Tags = ({ tags, css }) => (
    <span css={{color: 'grey'}} >
        {intersperse((tags || []).map(tag => (
            <span>
                <Link to={`/tags/${_.kebabCase(tag)}`} css={{
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
            </span>
        )), ', ')}
    </span>
)

export default Tags;