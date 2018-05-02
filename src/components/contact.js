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
              style={{height: '250px', paddingTop: '5em'}}
              />
            <p style={{width: '75%', margin: 'auto', paddingTop: '1em', fontSize: '30px'}}> Ethel Jerez </p>

          </Cell>
          <Cell col={6}>
            <h2 style={{fontFamily: 'Open Sans', fontWeight: 'bold', color: 'white'}}>Contact Me</h2>
            <hr/>

          <div className="contact-list">
            <List>
              <ListItem>
                <ListItemContent style={{fontSize: '25px', fontFamily: 'Open Sans'}}>
                  <i className='fa fa-phone-square' aria-hidden="true"/>
                  (786) 376-2406
                </ListItemContent>
              </ListItem>

              <ListItem>
              <ListItemContent style={{fontSize: '25px', fontFamily: 'Open Sans'}}>
                <i className="fa fa-linkedin" aria-hidden="true"/>
                (786) 376-2406
              </ListItemContent>
            </ListItem>


            <ListItem>
            <ListItemContent style={{fontSize: '25px', fontFamily: 'Open Sans'}}>
              <i className='fa fa-envelope' aria-hidden="true"/>
              someone@example.com
            </ListItemContent>
          </ListItem>


          <ListItem>
          <ListItemContent style={{fontSize: '25px', fontFamily: 'Open Sans'}}>
            <i className='fa fa-skype' aria-hidden="true"/>
            MySkypeId
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
