import React from 'react';
import relative from 'path';
import Link from 'gatsby-link'

export default class PortfolioBlock extends React.Component {
    render() {
      if(!this.props.data) {
        return (<div> no data </div>)
      }
      let data = this.props.data
      return (
        <div style={{
          margin: '0 auto',
          maxWidth: 1100,
          padding: '0px 1.0875rem 1.45rem',
          paddingTop: 0,
        }} id="Work">
          <h2 style={{textAlign: 'center'}}> Work </h2>
          <ul className="portfolio" style={{ margin: 0 }}>
          {
            data.allMarkdownRemark.edges.filter((post) => post.node.frontmatter.type == "work").map(post => {
              const image = post.node.frontmatter.image ? post.node.frontmatter.image.childImageSharp.responsiveSizes.src : '',
              title = post.node.frontmatter.title,
              path = post.node.frontmatter.path,
              description = post.node.frontmatter.description
              return (
                <li key={post.node.id}>
                  <Link
                    to={path}>
                    {title}
                    <span> {description} </span>
                  </Link>
                  <figure className="backgroundImage" style={{backgroundImage: `url(${image}` }} />
                </li>
              )
            })
          }
          </ul>
        </div>
      )
    }
}
