/* global document */
import React, { PropTypes, Component } from 'react';
import styles from './style.scss';

class Drawer extends Component {
  static propTypes = {
    open: PropTypes.bool.isRequired,
    handleOpen: PropTypes.func,
    children: PropTypes.node.isRequired,
    right: PropTypes.bool,
    toggle: PropTypes.element,
    drawerClickClose: PropTypes.bool
  };

  static defaultProps = {
    handleOpen: null,
    right: false,
    drawerClickClose: true,
    toggle: null
  }

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
        Drawer
      </button>
    );
  }

  render() {
    const { children, right } = this.props;
    const { open } = this.state;

    return (
      <div>
        {this.renderToggle()}
        <div
          className={`${styles.container} sidebar ${open && styles.open} ${right && styles.right}`}
          ref={(ref) => { this.content = ref; }}
        >
          {children}
        </div>
      </div>
    );
  }
}

export default Drawer;
