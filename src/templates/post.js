import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

export default function Template({data}) {
  const {markdownRemark: post} = data
  const image = post.frontmatter.image ? post.frontmatter.image.childImageSharp.responsiveSizes.src : ''
  return (
    <div style={{
      margin: '2em auto',
      maxWidth: 720,
      padding: '0 1.0875rem 1.45rem',
      paddingTop: 0,
    }} className="page-from-right">
      <Link style={{marginBottom: '2em'}} to="/" title="Home">Home</Link>
      <img src={image} width="300px" height="300px" style={{display: 'block', margin: '0 auto'}}/>
      <h1 style={{textAlign: 'center', marginTop: '2em'}}>{post.frontmatter.title}</h1>
      <h4 style={{textAlign: 'center'}}> {post.frontmatter.date} </h4>
      <div dangerouslySetInnerHTML={{__html: post.html}}/>

    </div>
  )
}

export const postQUERY = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path} }) {
      html
      frontmatter {
        path
        title
        date
        image {
          childImageSharp {
            responsiveSizes(maxWidth: 400) {
              src
              srcSet
              sizes
            }
          }
        }
      }
    }
  }
`