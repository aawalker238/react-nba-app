import React, { Component } from 'react';
import axios from 'axios';
import { JSON_SERVER_URL } from '../../../helpers/helperContants';

// COMPONENTS
import NewsSliderTemplates from './NewSliderTemplates';

class NewsSlider extends Component {
  state = {
    news: []
  };

  componentWillMount() {
    axios
      .get(
        `${JSON_SERVER_URL}/articles?_start=${this.props.start}&_end=${
          this.props.amount
        }`
      )
      .then(res => {
        this.setState({ news: res.data });
      });
  }

  render() {
    console.log(this.state.news);
    return (
      <NewsSliderTemplates
        news={this.state.news}
        type={this.props.type}
        settings={this.props.settings}
      />
    );
  }
}

export default NewsSlider;
