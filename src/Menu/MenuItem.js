import React, { PropTypes } from 'react';
import Link from 'react-router/lib/Link';
import styles from './style.scss';

const MenuItem = ({ children, icon, href, onClick }) => {
  const Type = href ? Link : 'a';

  return (
    <li className={styles.item}>
      <Type href={href} className={styles.link} onClick={onClick}>
        {icon && <span className={styles.icon}>{icon}</span>}
        {children}
      </Type>
    </li>
  );
};

MenuItem.propTypes = {
  children: PropTypes.element.isRequired,
  icon: PropTypes.element,
  href: PropTypes.string,
  onClick: PropTypes.func
};

MenuItem.defaultProps = {
  icon: null,
  href: null,
  onClick: null
};

export default MenuItem;
