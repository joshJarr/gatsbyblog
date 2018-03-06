import React from 'react';
import relative from 'path';


export default class ResumeBlock extends React.Component {
    experiance = [
      {
        location: 'Bristol',
        name: 'Wazoku',
        role: 'Work Placement Developer',
        description: 'Conducting my work placement/industry year from Plymouth University with Wazoku, a web software company. My role here was to maintain and contribute to development efforts for Idea Spotlight, an idea management web platform. As a developer, I used various technologies, including CSS preprocessors, AngularJs, Grunt, and Django working in a large team using agile methodologies and git flow source control. Also had experience starting a new project on a small 2 person team where I had the control over the architecture and design process working with a backend Django developer.',
        date: 'September 2015 - September 2016',
      },
      {
        location: 'Plymouth',
        name: 'Wazoku, Self Employed',
        role: 'Contractor',
        description: 'Working on a contract basis on a new project for Wazoku, consuming their Public API to create a simplified idea management platform for a client. A solo project using Angular2 to provide web and mobile experience and implementing social login through LinkedIn with 0Auth. Experience with architecting developing and deploying the project - used Firebase to create a serverless test site for Wazoku and constructing a simple end to end test suite with selenium.',
        date: 'November 2016 - March 2017',
      },
      {
        location: 'Plymouth University',
        name: 'Creative Summer Studio',
        role: 'Developer',
        description: 'Working with the University studio on various projects as a developer. Working with Angular, Firebase and progressive web app technologies to optimise performance of Artory, an existing mobile app. Working on Emoti-OS https://emoti-os.me/ a realtime Wordpress site using sockets to facilitate text communication between users and an AI entity, using CSS Animations to create an interactive experience.',
        date: 'May 2017 - August 2017',
      },
      {
        location: 'Bristol',
        name: 'Wazoku',
        role: 'Developer',
        description: 'Rejoining Wazoku as a developer. I have been focusing on producing clean, tested and maintainable code. Using modern JavaScript technologies such as Typescript, WebPack and AngularJs for a large-scale web app and Jasmine, Karma and Selenium for frontend test coverage . I have also attended NG Poland while here, looking into the bennifits of state management in web apps.',
        date: 'August 2017 - Present',
      },
    ]

    education = [
      {
        level: 'A-Level',
        title: 'Photography, Media Studies, and, Information and Communications Technology',
        name: 'Eggbuckland Community College',
        date: 'September 2012 - June 2014',
      },
      {
        level: 'Degree',
        title: 'BSc Digital Arts and Technology - First Class Honours',
        name: 'Plymouth University',
        date: 'September 2014 - July 2017',
      },
    ]

    render() {
      return (
        <div style={{
          margin: '0 auto',
          maxWidth: 960,
          padding: '0px 1.0875rem 1.45rem',
          paddingTop: 0,
        }} id="Resume">
          <div style={{marginBottom: '10em'}}>
            <h2 style={{textAlign: 'center'}}> Experiance </h2>
              {this.experiance.reverse().map((xp, i) => (
              <div className="xp-block" key={i} style={{minHeight: '200px', borderLeft: '2px solid #cecece'}}>
                <figure style={{ verticalAlign: 'top', minHeight: '200px', width: '40%', display: 'inline-block' }}>
                  <span style={{width: '50px', height: '50px', display: 'inline-block', color: '#eee', borderRadius: '5em', position: 'relative', left: '-25px', background: '#333', padding: '.5em', fontSize: '1.4em'}}>
                    <i className="fa fa-briefcase" aria-hidden="true"></i>
                  </span>
                  <div style={{display: 'inline-grid'}}>
                    <span style={{display: 'block'}}> {xp.date} </span>
                    <small style={{display: 'block'}}> {xp.location} </small>
                  </div>
                </figure>
                <div style={{ minHeight: '200px', width: '60%', display: 'inline-block', marginBottom: '2em'}}>
                  <span style={{display: 'block', fontWeight: 'bold'}}> {xp.name} </span>
                  <span style={{display: 'block', fontWeight: 100}}> {xp.role} </span>
                  <span> {xp.description} </span>
                </div>
              </div>
            ))}
        </div>
        <div>
          <h2 style={{textAlign: 'center'}}> Education </h2>
          {this.education.reverse().map((xp, i) => (
            <div className="xp-block" key={i} style={{minHeight: '200px', borderLeft: '2px solid #cecece'}}>
              <figure style={{ verticalAlign: 'top', width: '40%', display: 'inline-block' }}>
                <span style={{width: '50px', height: '50px', display: 'inline-block', color: '#eee', borderRadius: '5em', position: 'relative', left: '-25px', background: '#333', padding: '.5em', fontSize: '1.4em'}}>
                  <i className="fa fa-briefcase" aria-hidden="true"></i>
                </span>
                <div style={{display: 'inline-grid'}}>
                  <span style={{display: 'block'}}> {xp.date} </span>
                </div>
              </figure>
              <div style={{width: '60%', display: 'inline-block', marginBottom: '2em'}}>
                <span style={{display: 'block', fontWeight: 'bold'}}> {xp.level} </span>
                <span style={{display: 'block', fontWeight: 100}}> {xp.name} </span>
                <span> {xp.title} </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      )
    }
}
