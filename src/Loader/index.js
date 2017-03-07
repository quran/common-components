import React, { PropTypes } from 'react';
import { qcLoader, active, loader } from './style.scss';

const Loader = ({ children, isActive }) => (
  <div className={isActive ? qcLoader : ''}>
    {isActive && <div className={active} />}
    {isActive && <div className={loader}>Loading...</div>}
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
  isActive: PropTypes.bool.isRequired
};

Loader.defaultProps = {
  spin: false,
  children: []
};

export default Loader;
