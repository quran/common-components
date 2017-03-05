import React, { PropTypes } from 'react';

const Tab = ({ title, children }) => (<div id={`tab-${title.replace(/\s/g, '-')}`}>{children}</div>);

Tab.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired
};

export default Tab;
