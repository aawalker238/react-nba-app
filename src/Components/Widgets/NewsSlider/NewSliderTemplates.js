import React from 'react';
import Slick from 'react-slick';
import { Link } from 'react-router-dom';

// CSS
import styles from './NewsSlider.css';

const NewsSliderTemplates = props => {
  let template = null;
  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    ...props.settings
  };

  switch (props.type) {
    case 'featured':
      template = props.news.map((item, idx) => {
        return (
          <div key={idx}>
            <div className={styles.featured_item}>
              <div
                className={styles.featured_image}
                style={{
                  background: `url(../images/articles/${item.image})`
                }}
              />
              <Link to={`/articles/${item.id}`}>
                <div className={styles.featured_caption}>{item.title}</div>
              </Link>
            </div>
          </div>
        );
      });
      break;
    default:
      template = null;
  }

  return <Slick {...settings}>{template}</Slick>;
};

export default NewsSliderTemplates;
