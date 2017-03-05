import React, { PropTypes, Component } from 'react';

const styles = require('./style.scss');

class Tabs extends Component {
  static propTypes = {
    selected: PropTypes.number,
    children: PropTypes.arrayOf(PropTypes.element).isRequired
  }

  static defaultProps = {
    selected: 0
  }

  state = {
    selected: this.props.selected
  }

  handleTabClick(selected) {
    this.setState({ selected });
  }

  render() {
    const widthPercent = (1 / this.props.children.length) * 100;
    const width = `${widthPercent}%`;
    const marginLeft = `${(this.state.selected) * widthPercent}%`;

    return (
      <div className={styles.container}>
        <ul className={styles.tabs}>
          {
            this.props.children.map((child, index) => (
              <li>
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
          {this.props.children[this.state.selected]}
        </div>
      </div>
    );
  }
}

export default Tabs;
