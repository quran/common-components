import PropTypes from 'prop-types';

const Tab = ({ title, id, children }) => (<div id={`tab-${id || String(title).replace(/\s/g, '-')}`}>{children}</div>);

Tab.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string
  ]).isRequired
};

Tab.defaultProps = {
  id: null
};

export default Tab;
