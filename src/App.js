import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (

      <div classtyle={{height: '300px', position: 'relative', }}>
          <Layout fixedHeader>
              <Header className= "header-color" title=" " scroll>
                  <Navigation>
                    <Link to="/landingpage">HOME</Link>
                    <Link to="/about">ABOUT</Link>
                    <Link to="/projects">PROJECTS</Link>
                    <Link to="/contact">CONTACT</Link>
                  </Navigation>
              </Header>
              <Drawer title=" ">
                  <Navigation className="nav-bar">
                    <Link to="/landingpage">HOME</Link>
                    <Link to="/about">ABOUT</Link>
                    <Link to="/projects">PROJECTS</Link>
                    <Link to="/contact">CONTACT</Link>
                  </Navigation>
              </Drawer>
              <Content>
                <div className="page-content" />
                <Main/>
              </Content>
          </Layout>
      </div>


    );
  }
}

export default App;
