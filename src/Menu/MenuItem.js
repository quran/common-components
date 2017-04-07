import React, { PropTypes } from 'react';
import Link from 'react-router/lib/Link';
import styles from './style.scss';

const MenuItem = ({ children, icon, href, className, divider, ...props }) => {
  const Type = href ? Link : 'a';

  return (
    <li className={`${styles.item} ${className} ${divider && styles.divider}`}>
      {
        children &&
        <Type href={href} className={styles.link} {...props}>
          {icon && <span className={styles.icon}>{icon}</span>}
          {children}
        </Type>
      }
    </li>
  );
};

MenuItem.propTypes = {
  children: PropTypes.element.isRequired,
  icon: PropTypes.element,
  href: PropTypes.string,
  className: PropTypes.string,
  divider: PropTypes.bool
};

MenuItem.defaultProps = {
  icon: null,
  href: null,
  className: '',
  divider: false
};

export default MenuItem;
