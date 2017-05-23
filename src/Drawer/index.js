/* global document */
import React, { PropTypes, Component } from 'react';
import styles from './style.scss';

import Icon from '../Icon';

class Drawer extends Component {
  state = {
    open: this.props.open || false
  }

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
  }

  onToggleClick = () => {
    this.setOpen(!this.getOpen());
  }

  onCloseClick = () => {
    this.setOpen(false);
  }

  getOpen() {
    return this.props.handleOpen ? this.props.open : this.state.open;
  }

  setOpen(open) {
    return this.props.handleOpen ? this.props.handleOpen(open) : this.setState({ open });
  }

  renderToggle() {
    const { toggle } = this.props;

    if (toggle) {
      return React.cloneElement(toggle, { onClick: this.onToggleClick });
    }

    return (
      <button onClick={this.onToggleClick}>
        Drawer toggle
      </button>
    );
  }

  renderHeader() {
    const { header } = this.props;

    return (
      <div className={styles.header}>
        <div className={header && styles.headerText}>
          {header}
          <Icon
            className={`${styles.closeBtn}`}
            type="delete"
            onClick={this.onCloseClick}
          />;
        </div>
      </div>
    );
  }

  render() {
    const { children, right } = this.props;

    return (
      <div>
        {this.renderToggle()}
        <div
          className={`${styles.container} sidebar ${this.getOpen() && styles.open} ${right && styles.right}`}
          ref={(ref) => { this.content = ref; }}
        >
          {this.renderHeader()}
          {children}
        </div>
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
  header: PropTypes.element
};

Drawer.defaultProps = {
  handleOpen: null,
  right: false,
  drawerClickClose: true,
  toggle: null,
  header: null
};

export default Drawer;
