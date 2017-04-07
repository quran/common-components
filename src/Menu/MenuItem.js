import React, { PropTypes, Component } from 'react';
import Link from 'react-router/lib/Link';
import Icon from '../Icon';
import styles from './style.scss';

class MenuItem extends Component {
  state = {
    menuOpen: false
  }

  handleClick = (event) => {
    const { onClick, menu } = this.props;

    if (menu) {
      this.setState({ menuOpen: !this.state.menuOpen });
    }

    return onClick && onClick(event);
  }

  render() {
    const { children, icon, href, className, divider, menu, onClick, checkbox, ...props } = this.props; // eslint-disable-line
    const Type = href ? Link : 'div';

    return (
      <li className={`${styles.item} ${className} ${divider && styles.divider}`}>
        {
          children &&
          <Type href={href} className={styles.link} onClick={this.handleClick} {...props}>
            {icon && <span className={styles.icon}>{icon}</span>}
            {children}
            {
              menu &&
              <Icon type={this.state.menuOpen ? 'directup' : 'dropdown'} className={styles.menuIcon} />
            }
          </Type>
        }
        {
          menu &&
          <div className={`${styles.menu} ${this.state.menuOpen && styles.menuOpen}`}>
            {menu}
          </div>
        }
      </li>
    );
  }
}

MenuItem.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]).isRequired,
  icon: PropTypes.element,
  href: PropTypes.string,
  className: PropTypes.string,
  divider: PropTypes.bool,
  menu: PropTypes.element,
  onClick: PropTypes.func
};

MenuItem.defaultProps = {
  icon: null,
  href: null,
  className: '',
  divider: false,
  menu: null,
  onClick: null
};

export default MenuItem;
