import PropTypes from 'prop-types';
import styled from 'styled-components';

const List = styled.ul`
  padding-left: 0px;

  ${props => (props.bordered ? 'border: 1px solid #777;' : '')};
`;

export { default as MenuItem } from './MenuItem.js';

const Menu = ({ children, bordered, className, ...props }) => (
  <List bordered={bordered} className={className} {...props}>
    {children}
  </List>
);

Menu.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
  bordered: PropTypes.bool,
  className: PropTypes.string,
};

Menu.defaultProps = {
  children: [],
  bordered: false,
  className: '',
};

export default Menu;
