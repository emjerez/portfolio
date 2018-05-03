import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';


class Contact extends Component {
  render() {
    return(
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>

            <img
              src="http://www.avatarys.com/var/albums/Cool-Avatars/Facebook-Avatars/500x500-facebook-avatars/cute-fluffy-monster-facebook-avatar-500x500.png?m=1455128230"
              alt="avatar"
              style={{height: '280px', paddingTop: '3em'}}
              />


          </Cell>
          <Cell col={6} style={{justifyContent: 'center'}}>
            <h2 style={{fontFamily: 'Fira Mono', color: 'white', fontSize: '40px'}}>Contact Me</h2>
            <hr/>

          <div className="contact-list">
            <List >
              <ListItem>
                <ListItemContent style={{fontSize: '24px', fontFamily: 'Fira Mono'}}>
                  <i className='fa fa-phone-square' aria-hidden="true"/>
                  (786) 376-2406
                </ListItemContent>
              </ListItem>



            <ListItem>
            <ListItemContent style={{fontSize: '19px', fontFamily: 'Fira Mono'}}>
              <i className='fa fa-envelope' aria-hidden="true" />

              <a className="email" href="mailto:ejerez.webdev@gmail.com">ejerez.webdev@gmail.com</a>
            </ListItemContent>
          </ListItem>


            </List>
            </div>

          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Contact;
