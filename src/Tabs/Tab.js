import React, { PropTypes } from 'react';

const Tab = ({ title, children }) => (<div id={`tab-${title.replace(/\s/g, '-')}`}>{children}</div>);

Tab.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string
  ]).isRequired
};

export default Tab;
