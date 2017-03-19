import React, { PropTypes } from 'react';
import styles from './style.scss';

export { default as MenuItem } from './MenuItem.js';

const Menu = ({ children, bordered, className, ...props }) => (
  <ul className={`${className} ${styles.list} ${bordered && styles.bordered}`} {...props}>
    {children}
  </ul>
);

Menu.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
  bordered: PropTypes.bool,
  className: PropTypes.string
};

Menu.defaultProps = {
  children: [],
  bordered: false,
  className: ''
};

export default Menu;
