import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="Landing-grid">
          <Cell col={12}>
            <img
              src="https://www.ardentcreative.com/wp-content/uploads/2013/06/color_web-design-icon-1.png"
              alt="avatar"
              className="avatar-img"
              />

            <div className="banner-text">
              <h1>Full Stack Web Developer</h1>

            <hr/>

            <p> HTML/CSS | JavaScript | React.js | Ruby on Rails </p>

          <div className="social-links">

              {/* Linkedin */}
              <a href="https://www.linkedin.com/in/ethel-jerez/" rel="noopener noreferrer" target="_blank">
                <i className="fa fa-linkedin-square" aria-hidden="true" />
              </a>

              {/* Github */}
              <a href="https://github.com/emjerez" rel="noopener noreferrer" target="_blank">
                <i className="fa fa-github-square" aria-hidden="true" />
              </a>

            </div>
          </div>

          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;
