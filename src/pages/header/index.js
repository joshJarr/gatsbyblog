import React from 'react';
import relative from 'path';
import Link from 'gatsby-link'


export default class Header extends React.Component {
    scrollTo(ev, element, redirect = true) {
      if (redirect) {
        ev.preventDefault()
      }
      let elementNode = document.getElementById(element);

      window.scrollTo(0, elementNode.offsetTop)
    }
    render() {
      return (
        <div style={{marginBottom: '1.45rem',}}>
          <div
            style={{
              opacity: 0.8,
              zIndex: 999,
              top: 0,
              width: '100%',
              position: 'fixed',
              margin: '0 auto',
              padding: '1rem 0',
              textAlign: 'center',
              background: '#eee',
            }}>
            <Link to='/' onClick={(ev) => this.scrollTo(ev, 'Top', false)} data-hover="Home" style={{ margin: '0 1em' }}>
              Home
            </Link>
            <a data-hover="Resume" onClick={(ev) => this.scrollTo(ev, 'Resume')} style={{ margin: '0 1em' }}>
              Resume
            </a>
            <a data-hover="Portfolio" onClick={(ev) => this.scrollTo(ev, 'Work')}  style={{ margin: '0 1em' }}>
              Portfolio
            </a>
            <a data-hover="Blog" onClick={(ev) => this.scrollTo(ev, 'Blog')}  style={{ margin: '0 1em' }}>
              Blog
            </a>
          </div>
      </div>
      )
    }
}
