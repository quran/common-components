import React, { PropTypes } from 'react';
import { nav, rightPosition } from './style.scss';

const NavItem = ({ children, className, right }) => (<ul className={`${nav} ${right && rightPosition} ${className}`}>{children}</ul>);

NavItem.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
  className: PropTypes.string,
  right: PropTypes.boolean,
};

NavItem.defaultProps = {
  children: [],
  className: '',
  right: false
};


export default NavItem;
