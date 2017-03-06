/* global window */
import React, { PropTypes, Component } from 'react';
import styles from './style.scss';

export { default as NavItem } from './NavItem.js';

class Navbar extends Component {
  static propTypes = {
    children: PropTypes.arrayOf(PropTypes.element),
    fixed: PropTypes.bool,
    className: PropTypes.string
  }

  static defaultProps = {
    fixed: false,
    children: [],
    className: ''
  }

  state = {
    scrolled: false
  }

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
  }

  render() {
    const { children, fixed, className } = this.props;

    return (
      <nav className={`${styles.nav} ${fixed && styles.fixed} ${this.state.scrolled && styles.scrolled} ${className}`}>
        <div className={styles.container}>
          {children}
        </div>
      </nav>
    );
  }
}

export default Navbar;
