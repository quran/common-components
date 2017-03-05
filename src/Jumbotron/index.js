import React, { PropTypes } from 'react';
import styles from './style.scss';
import backgroundImage from '../images/background.jpg';

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
