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
    console.log(event.target, this.popover);

    if (this.state.open) {
      this.handleClick(false);
    }
  }

  handleClick = (newState) => {
    console.log(newState);
    this.setState({ open: newState });
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
        {React.cloneElement(trigger, { onClick: () => this.handleClick(!this.state.open) })}
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
  persist: PropTypes.string
};

Popover.defaultProps = {
  trigger: <a>Click</a>,
  persist: null
};

export default Popover;
