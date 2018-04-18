import React, { Component } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { JSON_SERVER_URL } from '../../../helpers/helperContants';

// CSS
import styles from './NewsList.css';

class NewsList extends Component {
  state = {
    items: [],
    start: this.props.start,
    end: this.props.start + this.props.amount,
    amount: this.props.amount
  };

  componentWillMount() {
    axios
      .get(
        `${JSON_SERVER_URL}/articles?_start=${this.state.start}&_end=${
          this.state.end
        }`
      )
      .then(res => {
        this.setState({
          items: [...this.state.items, ...res.data]
        });
      });
  }

  renderNews = type => {
    let template = null;

    switch (type) {
      case 'card':
        template = this.state.items.map((item, idx) => (
          <div>
            <div className={styles.newslist_item}>
              <Link to={`/article/${item.id}`}>
                <h2>{item.title}</h2>
              </Link>
            </div>
          </div>
        ));
        break;
      default:
        template = null;
    }

    return template;
  };

  render() {
    return <div>{this.renderNews(this.props.type)}</div>;
  }
}

export default NewsList;
