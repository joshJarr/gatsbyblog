import React from 'react'
import Link from 'gatsby-link'
import WelcomeBlock from './welcome-block'
import ResumeBlock from './resume-block'
import PortfolioBlock from './portfolio'
import BlogBlock from './blog-posts'
import Header from './header'

export default function IndexPage({data}) {
    return (
    <div className="page-from-left">
      <Header />
      <div style={{margin: '-1.1em'}}>
        <WelcomeBlock />
      </div>
      <hr style={{marginBottom: '4em'}}/>
      <ResumeBlock />
      <hr style={{margin: '0 30% 5em 30%'}}/>
      <PortfolioBlock id="Work" data={data} />
      <hr style={{margin: '4em 30%'}}/>
      <BlogBlock id="Blog" data={data} />
    </div>
  )
}

export const postQUERY = graphql`
query IndexQuery {
  allMarkdownRemark(
    limit: 100
    sort: { fields: [frontmatter___date], order: DESC }
  ) {
    edges {
      node {
        id
        frontmatter {
          firstParagraph
          title
          path
          description
          type
          draft
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
  }
}`
