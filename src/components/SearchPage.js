import React from 'react';
import Search from './Search';
import * as Api from './Api';
import {Col, Well, Jumbotron, Grid, Image} from 'react-bootstrap';
import './SearchPage.css';


class SearchPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
     this.handleSearch = this.handleSearch.bind(this);
     this.renderStreams = this.renderStreams.bind(this);
   }

  handleSearch(query) {
      Api.fetchGames(query, this.renderStreams);
  }

 renderStreams(data) {
      this.setState({
        items: data.streams
      });
  }

  render() {
    return  (
      <Jumbotron>
        <main className="content" role="main">
          <Grid>
            <Col xs={12} md={6} mdOffset={3}>
                <Search handleSearch={this.handleSearch} />
            </Col>
            {this.state.items.map((item, i) =>
            <Col key={i} xs={12} s={12} md={6} lg={6}>
               <Well>
                <h3><a href={item.channel.url} target="_blank">{item.channel.display_name}</a></h3>
                <h4>Streaming: {item.channel.game}</h4>
                <h5>{item.channel.status.slice(0, 30)}</h5>
                <Image src={item.preview.medium} alt="Channel Thumbnail" thumbnail/>
              </Well>
            </Col>)}
        </Grid>
      </main>
    </Jumbotron>
    )
  }
}

export default SearchPage;
