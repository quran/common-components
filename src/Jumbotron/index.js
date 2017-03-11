import React, { PropTypes } from 'react';
import styles from './style.scss';
import backgroundImage from '../images/background.jpg';

const Jumbotron = ({ children, className, style, ...props }) => (
  <div
    className={`${styles.container} ${className}`}
    style={{ backgroundImage: `url(${backgroundImage})`, ...style }}
    {...props}
  >
    {children}
  </div>
);

Jumbotron.defaultProps = {
  className: '',
  style: {}
};

Jumbotron.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string
  ]).isRequired,
  className: PropTypes.string,
  style: PropTypes.object // eslint-disable-line
};

export default Jumbotron;
