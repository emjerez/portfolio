import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';



class About extends Component {
  render() {
    return(

      <div style={{width: '100%', height: '100%', position: 'absolute', margin: 'auto', background: 'url(https://pre00.deviantart.net/93a9/th/pre/i/2016/019/5/6/eat__sleep__code__repeat__alternative_version__by_johnslegers-d9ojp49.png) center / cover'}}>
        <Grid className="about-grid">
          <Cell col={12}>
          <div className="banner-text">
          <h1 style={{fontFamily: 'Fira Mono', fontSize: '50px', textAlign: 'center', paddingTop: '80px'}}> &lt;Ethel Jerez&gt; </h1>
          </div>
          </Cell>
        </Grid>
      </div>

    )
  }
}

export default About;
