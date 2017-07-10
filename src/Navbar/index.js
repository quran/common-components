/* global window */
import React, { PropTypes, Component } from 'react';
import styled, { css } from 'styled-components';

const Fixed = css`
  position: Fixed;
  left: 0px;
  right: 0px;
`;

const Scrolled = css`
  box-shadow: 0 4px 5px 0 rgba(0,0,0,0.14), 0 1px 10px 0 rgba(0,0,0,0.12), 0 2px 4px -1px rgba(0,0,0,0.2);
`;

const Nav = styled.nav`
  border-bottom: 1px solid rgba(0,0,0,0.12);
  height: 50px;

  ${props => (props.fixed ? Fixed : '')}
  ${props => (props.scrolled ? Scrolled : '')}
`;

const Container = styled.div`
  padding: 0 15px;
`;

export { default as NavItem } from './NavItem.js';

class Navbar extends Component {
  static propTypes = {
    children: PropTypes.arrayOf(PropTypes.element),
    fixed: PropTypes.bool,
    className: PropTypes.string
  };

  static defaultProps = {
    fixed: false,
    children: [],
    className: ''
  };

  state = {
    scrolled: false
  };

  componentDidMount() {
    window.addEventListener('scroll', this.handleNavbar, true);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleNavbar, true);
  }

  handleNavbar = () => {
    const { fixed } = this.props;
    const { scrolled } = this.state;

    if (window.pageYOffset > 50) {
      if (!scrolled && fixed) {
        this.setState({ scrolled: true });
      }
    } else if (scrolled) {
      this.setState({ scrolled: false });
    }

    return false;
  };

  render() {
    const { children, fixed, className } = this.props;

    return (
      <Nav fixed={fixed} scrolled={this.state.scrolled} className={className}>
        <Container>
          {children}
        </Container>
      </Nav>
    );
  }
}

export default Navbar;
