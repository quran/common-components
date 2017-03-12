import React, { PropTypes } from 'react';
import { qcLoader, active, loader } from './style.scss';

const Loader = ({ children, isActive, className, ...props }) => (
  <div className={isActive ? qcLoader : ''}>
    {isActive && <div className={active} />}
    {isActive && <div className={loader} {...props}>Loading...</div>}
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
  className: PropTypes.string
};

Loader.defaultProps = {
  isActive: false,
  className: '',
  children: []
};

export default Loader;
