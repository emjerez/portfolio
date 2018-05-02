import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl'


class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {activeTab: 0};
  }

  toggleCategories() {

    if(this.state.activeTab === 0){
      return(
        <div className="projects-grid" >
        <Card shadow={5} style={{minWidth: '450', margin: 'auto', width: '30%'}}>
          <img src={require('./images/bake-away.png')} style={{height:'100%', width: '100%', position: 'relative,', paddingTop: '40px', paddingBottom: '40px'}}/>

          <CardText>
            <div class="mdl-card__supporting-text">
            BakeAway
          </div>
          </CardText>

          <CardActions border>
            <div class="mdl-card__actions">
            <Button style={{fontFamily: 'Fira Mono'}} colored href="https://github.com/emjerez/BakeAway-App.git" >GitHub</Button>
            <Button style={{fontFamily: 'Fira Mono'}} colored>LiveDemo</Button>
            </div>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
          </CardMenu>
        </Card>



        <Card Card shadow={5} style={{minWidth: '450', margin: 'auto', width: '30%'}}>
          
          <CardText>
            <div class="mdl-card__supporting-text">
            Lorem Ipsum
          </div>
          </CardText>
          <CardActions border>
            <div class="mdl-card__actions">
            <Button style={{fontFamily: 'Fira Mono'}} colored href="">GitHub</Button>
            <Button style={{fontFamily: 'Fira Mono'}} colored>LiveDemo</Button>
            </div>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
          </CardMenu>
        </Card>
      </div>
      )
    } else if(this.state.activeTab === 1){
      return(
          <div className="projects-grid" >
          <Card shadow={5} style={{minWidth: '450', margin: 'auto', width: '30%'}}>
            <img src={require('./images/ICD10.png')} style={{height:'100%', width: '100%', position: 'relative,', paddingTop: '40px', paddingBottom: '40px'}}/>
            <CardText>
              <div class="mdl-card__supporting-text">
              ICD-10 Search Tool
            </div>
            </CardText>
            <CardActions border>
              <div class="mdl-card__actions">
              <Button style={{fontFamily: 'Fira Mono'}} colored href="https://github.com/emjerez/ICD-10---Search-Tool-React-App---Final-Project.git">GitHub</Button>
              <Button style={{fontFamily: 'Fira Mono'}} colored>LiveDemo</Button>
              </div>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>


          <Card shadow={5} style={{minWidth: '450', margin: 'auto', width: '30%'}}>
            <img src={require('./images/bake-away.png')} style={{height:'100%', width: '100%', position: 'relative,', paddingTop: '40px', paddingBottom: '40px'}}/>
            <CardText>
              <div class="mdl-card__supporting-text">
              Weather App
            </div>
            </CardText>
            <CardActions border>
              <div class="mdl-card__actions">
              <Button style={{fontFamily: 'Fira Mono'}} colored href="https://github.com/emjerez/ICD-10---Search-Tool-React-App---Final-Project.git">GitHub</Button>
              <Button style={{fontFamily: 'Fira Mono'}} colored>LiveDemo</Button>
              </div>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

</div>

      )
    }
  }


  render() {
    return(
      <div>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId})} ripple>
          <Tab style={{color: 'white', fontFamily: 'Open Sans', fontSize: '15px'}}>Ruby on Rails</Tab>
        <Tab style={{color: 'white', fontFamily: 'Open Sans', fontSize: '15px'}}>React</Tab>
        </Tabs>

          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>

      </div>
    )
  }
}

export default Projects;
