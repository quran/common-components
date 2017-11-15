/* global document */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TetherComponent from 'react-tether';
import styled, { css } from 'styled-components';

const arrowSize = 5;
const arrowSizePadding = 2;
const transition = '0.3s';

const open = css`
  opacity: 1;
  margin-top: ${arrowSize}px;
  visibility: visible;
`;

const Content = styled.div`
  background: #fff;
  border: 1px solid #ccc;
  border-color: rgba(0, 0, 0, 0.2);
  color: #000;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  // display: none;
  outline: none;
  border-radius: 2px;
  -webkit-user-select: text;
  padding: 10px 15px;
  max-width: 100%;
  min-width: 250px;
  position: relative;
  margin-top: ${arrowSize + 5}px;
  opacity: 0;
  visibility: hidden;
  transition: margin-top ${transition}, opacity ${transition}, visibility ${transition};

  &:after {
    content: '';
    position: absolute;
    top: ${arrowSize * -1}px;
    left: 50%;
    border-style: solid;
    border-width: 0 ${arrowSize}px ${arrowSize}px;
    border-color: #ffffff transparent;
    display: block;
    width: 0;
    z-index: 1;
    transform: translateX(-50%);
  }

  &:before {
    content: '';
    position: absolute;
    top: ${arrowSize - 10 - arrowSizePadding}px;
    left: 50%;
    border-style: solid;
    border-width: 0 ${arrowSize + arrowSizePadding}px ${arrowSize + arrowSizePadding}px;
    border-color: rgba(0, 0, 0, 0.2) transparent;
    display: block;
    width: 0;
    z-index: 0;
    transform: translateX(-50%);
  }

  ${props => (props.open ? open : '')};
`;

class Popover extends Component {
  state = {
    open: false,
  };

  componentDidMount() {
    document.body.addEventListener('click', this.handleBodyClick.bind(this), true);
  }

  componentWillUnmount() {
    document.body.removeEventListener('click', this.handleBodyClick.bind(this), true);
  }

  handleBodyClick = (event) => {
    if (
      !this.popover ||
      !this.popover._targetNode || // eslint-disable-line
      !this.popover._elementParentNode // eslint-disable-line
    ) {
      return false;
    }

    const isSame = event.target === this.popover._targetNode; // eslint-disable-line
    const isWithinTrigger = this.popover._targetNode.contains(event.target); // eslint-disable-line
    // eslint-disable-next-line
    const isWithinPopover = this.popover._elementParentNode.contains(event.target);

    if (isSame || isWithinTrigger) {
      return this.setState({ open: !this.state.open });
    }

    if (isWithinPopover && this.props.persist === 'self') {
      return false;
    }

    if (this.state.open) {
      return this.setState({ open: false });
    }

    return false;
  };

  render() {
    const { trigger, children, attachment, className } = this.props;

    return (
      <TetherComponent
        attachment={attachment}
        constraints={[
          {
            to: 'scrollParent',
          },
        ]}
        ref={(popover) => {
          this.popover = popover;
        }}
      >
        {trigger}
        <Content className={className} open={this.state.open}>
          {children}
        </Content>
      </TetherComponent>
    );
  }
}

Popover.propTypes = {
  trigger: PropTypes.element.isRequired,
  attachment: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.element), PropTypes.element])
    .isRequired,
  persist: PropTypes.oneOf([null, 'self']),
};

Popover.defaultProps = {
  trigger: <a>Click</a>,
  persist: null,
  className: '',
  attachment: 'top center',
};

export default Popover;
