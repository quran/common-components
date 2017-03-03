import React, { PropTypes } from 'react';
import backgroundImage from '../../images/background.jpg';

const styles = require('./style.scss');

const Jumbotron = ({ children }) => (
  <div
    className={styles.container}
    style={{ backgroundImage: `url(${backgroundImage})` }}
  >
    {children}
  </div>
);

Jumbotron.propTypes = {
  children: PropTypes.element.isRequired
};

export default Jumbotron;
