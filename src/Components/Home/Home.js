import React from 'react';

// COMPONENTS
import NewsSlider from '../Widgets/NewsSlider/NewsSlider';
import NewsList from '../Widgets/NewsList/NewsList';

const Home = () => (
  <div>
    <NewsSlider
      type="featured"
      start="3"
      amount="6"
      settings={{
        dots: false
      }}
    />
    <NewsList type="card" loadmore={true} start={3} amount={3} />
  </div>
);

export default Home;
