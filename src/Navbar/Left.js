import React, { PropTypes } from 'react';
import { nav } from './style.scss';

const Left = ({ children, className }) => (<ul className={`${nav} ${className}`}>{children}</ul>);
Left.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
  className: PropTypes.string
};

Left.defaultProps = {
  children: [],
  className: ''
};

export default Left;
