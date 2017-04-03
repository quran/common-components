/* global document */
import React, { PropTypes, Component } from 'react';
import styles from './style.scss';

class Drawer extends Component {
  static propTypes = {
    open: PropTypes.bool.isRequired,
    handleOpen: PropTypes.func,
    children: PropTypes.node.isRequired,
    right: PropTypes.bool
  };

  static defaultProps = {
    handleOpen: null,
    right: false
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

  onBodyClick = () => {
    if (this.getOpen()) {
      return this.setOpen(false);
    }

    return false;
  }

  getOpen() {
    return this.props.handleOpen ? this.props.open : this.state.open;
  }

  setOpen(open) {
    return this.props.handleOpen ? this.props.handleOpen(open) : this.setState({ open });
  }

  render() {
    const { children, right } = this.props;
    const { open } = this.state;

    return (
      <div>
        <button onClick={() => this.setOpen(!this.getOpen())}>
          Drawer
        </button>
        <div
          className={`${styles.container} sidebar ${open && styles.open} ${right && styles.right}`}
        >
          {children}
        </div>
      </div>
    );
  }
}

export default Drawer;
