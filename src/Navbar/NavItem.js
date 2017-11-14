import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const List = styled.ul`
  margin: 0;
  padding: 0;
  float: ${props => (props.right ? 'right' : 'left')};

  & > li {
    display: inline-block;
    margin: 15px 10px;

    & > button {
      margin-top: -10px;
    }
  }
`;

const NavItem = ({ children, className, right }) => (
  <List right={right} className={className}>
    {children}
  </List>
);

NavItem.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
  className: PropTypes.string,
  right: PropTypes.boolean,
};

NavItem.defaultProps = {
  children: [],
  className: '',
  right: false,
};

export default NavItem;
