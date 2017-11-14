/* global document */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styled, { css } from 'styled-components';

import Icon from '../Icon';

const width = 350;

const rightSide = css`
  right: ${width * -1}px;
  left: initial;
  transition: right 0.35s cubic-bezier(0.24, 1, 0.32, 1), visibility 0.2s;

  ${props => (props.open ? 'left: initial; right: 0px;' : '')};
`;
// eslint-disable-next-line no-confusing-arrow
const Container = styled.div`
  position: fixed;
  left: ${width * -1}px;
  top: 0px;
  bottom: 0px;
  background: #fff;
  z-index: 1031;
  box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12),
    0 8px 10px -5px rgba(0, 0, 0, 0.2);
  visibility: hidden;

  background: #fff;
  width: ${width}px;
  transition: left 0.35s cubic-bezier(0.24, 1, 0.32, 1), visibility 0.2s;
  overflow: auto;
  height: 100%;

  .navbar-text {
    margin-left: 0px;
    .backToHome {
      margin-right: 23px;
      font-size: 17px;
    }
  }

  ${props => (props.open ? 'left: 0px; visibility: visible;' : '')} ${props =>
      (props.right ? rightSide : '')} @media(max-width: 768px) {
    width: ${width}px;
    left: ${width * -1}px;

    .navbar-text {
      padding-left: 15px;
    }
  }
`;

const Header = styled.div`height: 50px;`;

const HeaderText = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
  padding-left: 10px;
`;

const CloseButton = styled(Icon)`
  position: absolute;
  top: 10px;
  right: 15px;
  padding: 5px;

  &:hover {
    cursor: pointer;
  }
`;

class Drawer extends Component {
  state = {
    open: this.props.open || false,
  };

  componentDidMount() {
    document.body.addEventListener('click', this.onBodyClick.bind(this), true);
  }

  componentWillUnmount() {
    document.body.removeEventListener('click', this.onBodyClick.bind(this), true);
  }

  onBodyClick = (event) => {
    if (!this.props.drawerClickClose) {
      if (this.content && this.content.contains(event.target)) {
        return false;
      }
    }

    if (this.getOpen()) {
      return this.setOpen(false);
    }

    return false;
  };

  onToggleClick = () => {
    this.setOpen(!this.getOpen());
  };

  onCloseClick = () => {
    this.setOpen(false);
  };

  getOpen() {
    return this.props.handleOpen ? this.props.open : this.state.open;
  }

  // eslint-disable-next-line
  setOpen(open) {
    return this.props.handleOpen ? this.props.handleOpen(open) : this.setState({ open });
  }

  renderToggle() {
    const { toggle } = this.props;

    if (toggle) {
      return React.cloneElement(toggle, { onClick: this.onToggleClick });
    }

    return <button onClick={this.onToggleClick}>Drawer toggle</button>;
  }

  renderHeader() {
    const { header } = this.props;

    return (
      <Header>
        <HeaderText>
          {header}
          <CloseButton type="delete" onClick={this.onCloseClick} />
        </HeaderText>
      </Header>
    );
  }

  render() {
    const { children, right } = this.props;

    return (
      <div
        ref={(ref) => {
          this.content = ref;
        }}
      >
        {this.renderToggle()}
        <Container open={this.getOpen()} right={right} className={'sidebar'}>
          {this.renderHeader()}
          {children}
        </Container>
      </div>
    );
  }
}

Drawer.propTypes = {
  open: PropTypes.bool.isRequired,
  handleOpen: PropTypes.func,
  children: PropTypes.node.isRequired,
  right: PropTypes.bool,
  toggle: PropTypes.element,
  drawerClickClose: PropTypes.bool,
  header: PropTypes.element,
};

Drawer.defaultProps = {
  handleOpen: null,
  right: false,
  drawerClickClose: true,
  toggle: null,
  header: null,
};

export default Drawer;
