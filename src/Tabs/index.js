import React, { PropTypes, Component } from 'react';
import styles from './style.scss';

export { default as Tab } from './Tab';

class Tabs extends Component {
  static propTypes = {
    selected: PropTypes.number,
    className: PropTypes.string,
    onClick: PropTypes.func, // eslint-disable-line
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.element),
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
      PropTypes.string
    ]).isRequired
  }

  static defaultProps = {
    className: '',
    selected: 0
  }

  state = {
    selected: this.props.selected
  }

  handleTabClick(selected) {
    if (this.props.onClick) {
      this.props.onClick(selected);
    }
    this.setState({ selected });
  }

  render() {
    const { children, className } = this.props;
    const widthPercent = (1 / children.length) * 100;
    const width = `${widthPercent}%`;
    const marginLeft = `${(this.state.selected) * widthPercent}%`;

    return (
      <div className={`${styles.container} ${className}`}>
        <ul className={styles.tabs}>
          {
            this.props.children.map((child, index) => (
              <li key={`index-${child.props.title}`}>
                <a
                  tabIndex="-1"
                  onClick={() => this.handleTabClick(index)}
                  className={index === this.state.selected && styles.active}
                  style={{ width }}
                >
                  {child.props.title}
                </a>
              </li>
            ))
          }
          <hr className={styles.underline} style={{ width, marginLeft }} />
        </ul>

        <div>
          {children[this.state.selected]}
        </div>
      </div>
    );
  }
}

export default Tabs;
