import React from 'react';
import relative from 'path';
import Link from 'gatsby-link'


export default class BlogBlock extends React.Component {
  constructor(graphql) {
    super()

  }
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
        }} id="Blog">
          <h2 style={{textAlign: 'center'}}> Blog </h2>
          <ul className="blog-post" style={{ margin: 0 }}>
          {
            data.allMarkdownRemark.edges.reverse().filter((post) => post.node.frontmatter.type == "blog").map(post => {
              const image = post.node.frontmatter.image ? post.node.frontmatter.image.childImageSharp.responsiveSizes.src : '',
              title = post.node.frontmatter.title,
              path = post.node.frontmatter.path,
              description = post.node.frontmatter.description,
              draft = post.node.frontmatter.draft == "true"? true : false,
              firstParagraph = post.node.frontmatter.firstParagraph,
              backgroundColor = Math.floor((Math.random() * 254) + 1),
              rotation = Math.floor((Math.random() * 65) + 15)
              return (
                <li key={post.node.id}>
                  <figure className="backgroundImage" style={{backgroundImage: `url(${image}`}}>
                    <span style={{background: `hsl(${backgroundColor}, 100%, 30%)`, color: 'pink', transform: `rotate(${rotation}deg)`}} ></span>
                  </figure>
                  <div>
                    <div>
                      <h3> {title} </h3>
                      <span> {description} </span>
                    </div>
                    <p>{firstParagraph}</p>

                    <div className="more">
                      {draft ?  <span style={{fontStyle: 'italic', color: '#cecece'}}>Coming Soon</span> : <Link data-hover="Read More" to={path}>Read More</Link>}
                    </div>
                  </div>
                </li>
              )
            })
          }
          </ul>
        </div>
      )
    }
}
