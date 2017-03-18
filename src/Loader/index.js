import React, { PropTypes } from 'react';
import styles from './style.scss';

const Loader = ({ children, isActive, className, relative, ...props }) => (
  <div className={isActive ? styles.qcLoader : ''}>
    {isActive && !relative && <div className={styles.active} />}
    {isActive && <div className={`${styles.loader} ${className} ${relative && styles.relative}`} {...props}>Loading...</div>}
    {children}
  </div>

);

Loader.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string
  ]).isRequired,
  isActive: PropTypes.bool.isRequired,
  relative: PropTypes.bool.isRequired,
  className: PropTypes.string
};

Loader.defaultProps = {
  isActive: false,
  relative: false,
  className: '',
  children: []
};

export default Loader;
