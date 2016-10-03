import React from 'react';
import glitch from '../images/GlitchIcon_purple.png';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        query: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
      this.setState({
          query: event.target.value
      });
  }

  handleSubmit(event) {
      event.preventDefault();
      let query = encodeURIComponent(this.state.query);
      this.props.handleSearch(query);
  }

  render() {
    return (
         <div className="jumbotron">
           <h2><img className="search-logo" src={glitch} alt="Twitch Glitch Icon"/>SEARCH</h2>
            <form className="search-form" onSubmit={this.handleSubmit} role="search">
              <div className="form-group">
                <label htmlFor="query-input">Enter Keyword</label>
                  <input className="form-control" id="query-input"
                          type="text" placeholder="search for streams"
                          onChange={this.handleInputChange}
                         value={this.state.query} autoFocus={focus}/>
                  </div>
                  <button type="submit">Submit</button>
            </form>
      </div>)
  }
}

Search.propTypes = {
    handleSearch: React.PropTypes.func.isRequired,
};

export default Search;
