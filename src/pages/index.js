import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <h1>Hi people</h1>
    <p>Welcome to my site.</p>
    <p>I have som projects and stuff here.</p>
    <Link to="/projects/">Go to projects</Link>
  </div>
)

export default IndexPage
