import React from 'react';
import { Jumbotron, Grid, Col, Well, Image, Row} from 'react-bootstrap';
import glitch from '../images/GlitchIcon_purple.png';
import * as Api from './Api';
import './HomePage.css';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      featured: []
    };
    this.renderHome = this.renderHome.bind(this);

 }

 componentDidMount() {
     Api.fetchFeatured(this.renderHome);
 }

 renderHome(data) {
     this.setState({
       featured: data.featured
     });
 }

  render () {
    const JumbotronInstance = (
      <Jumbotron>
        <main className="content" role="main">
          <Grid>
            <Row>
            <h2><img className="title-logo" src={glitch} alt="Twitch Glitch Icon"/>FEATURED STREAMS</h2>
              {this.state.featured.map((item, i) =>
                <Col key={i} xs={12} md={6} lg={6}>
                    <Well>
                      <h4><a className="item-link" href={item.stream.channel.url} target="_blank">{item.title}</a></h4>
                      <h4 className="item-name">{item.stream.game.slice(0, 30)}</h4>
                        <h5>{item.stream.channel.status.slice(0, 35)}</h5>
                       <Image src={item.stream.preview.medium} alt={item.stream.game} thumbnail/>
                    </Well>
                </Col>
                )}
           </Row>
         </Grid>
        </main>
      </Jumbotron>
    );

    return JumbotronInstance;

  }
}

export default HomePage;
