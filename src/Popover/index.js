/* global document */
import React, { PropTypes, Component } from 'react';
import TetherComponent from 'react-tether';
import styles from './style.scss';

class Popover extends Component {
  state = {
    open: false
  }

  componentDidMount() {
    document.body.addEventListener('click', this.handleBodyClick.bind(this), true);
  }

  componentWillUnmount() {
    document.body.removeEventListener('click', this.handleBodyClick.bind(this), true);
  }

  handleBodyClick = (event) => {
    if (!this.popover || !this.popover._targetNode || !this.popover._elementParentNode) return false; // eslint-disable-line

    const isSame = event.target === this.popover._targetNode; // eslint-disable-line
    const isWithinTrigger = this.popover._targetNode.contains(event.target); // eslint-disable-line
    const isWithinPopover = this.popover._elementParentNode.contains(event.target); // eslint-disable-line

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
  }

  render() {
    const { trigger, children } = this.props;

    return (
      <TetherComponent
        attachment="top center"
        constraints={[{
          to: 'scrollParent'
        }]}
        ref={(popover) => { this.popover = popover; }}
      >
        {trigger}
        <div className={`${styles.popover} ${this.state.open && styles.open}`}>
          {children}
        </div>
      </TetherComponent>
    );
  }
}

Popover.propTypes = {
  trigger: PropTypes.element.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element
  ]).isRequired,
  persist: PropTypes.oneOf([null, 'self'])
};

Popover.defaultProps = {
  trigger: <a>Click</a>,
  persist: null
};

export default Popover;
