import PropTypes from 'prop-types';

const Tab = ({ title, id, children }) => (<div id={`tab-${id || String(title).replace(/\s/g, '-')}`}>{children}</div>);

Tab.propTypes = {
  id: PropTypes.string,
  title: PropTypes.oneOfType([
    PropTypes.string, 
    PropTypes.element
  ]).isRequired,
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
