import React from 'react';
import { Jumbotron, Grid, Col } from 'react-bootstrap';
import './AboutPage.css'

class AboutPage extends React.Component {
  render () {
    return (
      <Jumbotron>
        <Grid>
          <Col xs={12} lg={12}>
        <h2>ABOUT</h2>
        <p>This web application is built with React.js, React-Router and React-Bootstrap.</p>
        <p>Powered by Twitch (Kraken) API.</p>
        <p>To see the other web applications<a href="//berraknil.com" target="_blank"> I </a>
        have built, please check my <a href="//github.com/berraknil/portfolio" target="_blank">portfolio</a>.</p>
        </Col>
        </Grid>
      </Jumbotron>
      );
  }
}

export default AboutPage;
