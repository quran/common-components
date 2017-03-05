/* global window */
import React, { PropTypes, Component } from 'react';

const styles = require('./style.scss');

class Navbar extends Component {
  static propTypes = {
    leftNav: PropTypes.arrayOf(PropTypes.element),
    rightNav: PropTypes.arrayOf(PropTypes.element),
    fixed: PropTypes.bool
  }

  static defaultProps = {
    fixed: false,
    leftNav: [],
    rightNav: []
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
    const { leftNav, rightNav, fixed } = this.props;

    return (
      <nav className={`${styles.nav} ${fixed && styles.fixed} ${this.state.scrolled && styles.scrolled}`}>
        <div className={styles.container}>
          <ul className={styles.nav}>
            {leftNav}
          </ul>
          <ul className={`${styles.nav} ${styles.right}`}>
            {rightNav}
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
