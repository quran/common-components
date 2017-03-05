import React, { PropTypes } from 'react';
import { nav, right } from './style.scss';

const Right = ({ children, className }) => (<ul className={`${nav} ${right} ${className}`}>{children}</ul>);

Right.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
  className: PropTypes.string
};

Right.defaultProps = {
  children: [],
  className: ''
};


export default Right;
