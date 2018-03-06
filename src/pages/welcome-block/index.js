import React from 'react';
import homeIntroLg from "./home-intro-high.jpg";
import homeIntroSm from "./home-intro-low.jpg";
import { img } from './1741811.jpg'

export default class WelcomeBlock extends React.Component {
    render() {
      return (
        <div id="Top" style={{paddingTop: '62px'}}>
          <div className="responsive-half" style={{  minHeight: '500px', display: 'inline-block', verticalAlign: 'top', backgroundImage: `url(${homeIntroLg})`, backgroundSize: 'cover', backgroundPosition: 'center center' }} />
          <div className="responsive-half" style={{  display: 'inline-block', verticalAlign: 'top' }}>
            <div style={{ height: '350px', background: '#eee', padding: '2em' }}>
              <div style={{marginBottom: '1em'}}>
                <h1 style={{margin: '5px'}}> JOSH JARVIS</h1>
                <small style={{color: '#999'}}> Digital Artist | Developer </small>
              </div>
              <h4 style={{fontSize: '2em', maxWidth: '15em', textAlign: 'left' }}> A creative Web Developer and Digital Artist based in the South West.</h4>
            </div>
            <div style={{ height: '150px', padding: '1em', color: '#eee', background: '#333', padding: '3em' }}>
              <a href="https://www.linkedin.com/in/josh-j/" className="social-link"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
              <a href="https://twitter.com/_joshjarvis" className="social-link"><i className="fa fa-twitter" aria-hidden="true"></i></a>
              <a href="https://github.com/joshJarr" className="social-link"><i className="fa fa-github" aria-hidden="true"></i></a>
            </div>
          </div>
        </div>
      )
    }
}
