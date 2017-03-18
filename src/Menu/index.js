import React, { PropTypes } from 'react';
import styles from './style.scss';

export { default as MenuItem } from './MenuItem.js';

const Menu = ({ children, bordered }) => (
  <ul className={`${styles.list} ${bordered && styles.bordered}`}>
    {children}
  </ul>
);

Menu.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
  bordered: PropTypes.bool
};

Menu.defaultProps = {
  children: [],
  bordered: false
};

export default Menu;
