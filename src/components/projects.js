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
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://upload.wikimedia.org/wikipedia/commons/1/16/Ruby_on_Rails-logo.png) center / cover'}} > Rails Project #1</CardTitle>
          <CardText>
            <div class="mdl-card__supporting-text">
            Lorem Ipsum
          </div>
          </CardText>

          <CardActions border>
            <div class="mdl-card__actions">
            <Button colored>GitHub</Button>
            <Button colored>LiveDemo</Button>
            </div>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
          </CardMenu>
        </Card>



        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://upload.wikimedia.org/wikipedia/commons/1/16/Ruby_on_Rails-logo.png) center / cover'}} > Rails Project #2</CardTitle>
          <CardText>
            <div class="mdl-card__supporting-text">
            Lorem Ipsum
          </div>
          </CardText>
          <CardActions border>
            <div class="mdl-card__actions">
            <Button colored>GitHub</Button>
            <Button colored>LiveDemo</Button>
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
        <div><h1>This is React</h1></div>
      )
    }
  }


  render() {
    return(
      <div>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId})} ripple>
          <Tab style={{color: 'white', fontFamily: 'Open Sans'}}>Ruby on Rails</Tab>
        <Tab style={{color: 'white', fontFamily: 'Open Sans'}}>React</Tab>
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
