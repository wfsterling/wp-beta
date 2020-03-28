import React from 'react';
import PropTypes from 'prop-types';
import './Home.scss';

const Home = () => (
  <div className="Home">
    Home Component
  </div>
);

Home.propTypes = {
    workItems: PropTypes.array
};

Home.defaultProps = {};

export default Home;
