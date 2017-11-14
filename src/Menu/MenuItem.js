import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import Icon from '../Icon';

const Item = styled.li`
  color: #777;
  list-style-type: none;

  ${props => (props.divider ? 'border-top: 1px solid #c4c4c4;' : '')};
`;

const Menu = styled.div`
  height: ${props => (props.open ? 'auto' : 0)};
  transition: 0.5s height;
  overflow: hidden;
`;

const StyledIcon = styled(Icon)`
  position: absolute;
  right: 15px;
`;

const StyledLink = styled.div`
  padding: 10px 15px;
  text-decoration: none;
  color: #777;
  display: block;
  cursor: pointer;
  position: relative;

  &:hover {
    background: #f5f5f5;
    color: #333;
  }
`;

class MenuItem extends Component {
  state = {
    menuOpen: false,
  };

  handleClick = (event) => {
    const { onClick, menu } = this.props;

    if (menu) {
      this.setState({ menuOpen: !this.state.menuOpen });
    }

    return onClick && onClick(event);
  };

  render() {
    const {
      children,
      icon,
      href,
      className,
      divider,
      menu,
      component, // eslint-disable-line
      onClick, // eslint-disable-line
      ...props
    } = this.props;
    const Type = component ? StyledLink.withComponent(component) : StyledLink;

    return (
      <Item className={className} divider={divider}>
        {children && (
          <Type href={href} onClick={this.handleClick} {...props}>
            {icon && <span style={{ marginRight: 16 }}>{icon}</span>}
            {children}
            {menu && <StyledIcon type={this.state.menuOpen ? 'directup' : 'dropdown'} />}
          </Type>
        )}
        {menu && <Menu open={this.state.menuOpen}>{menu}</Menu>}
      </Item>
    );
  }
}

MenuItem.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]).isRequired,
  icon: PropTypes.element,
  href: PropTypes.string,
  className: PropTypes.string,
  divider: PropTypes.bool,
  menu: PropTypes.element,
  onClick: PropTypes.func,
};

MenuItem.defaultProps = {
  icon: null,
  href: null,
  className: '',
  divider: false,
  menu: null,
  onClick: null,
};

export default MenuItem;
