import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export { default as Tab } from './Tab';

const List = styled.ul`
  padding: 0;
  text-align: center;

  & > li {
    display: inline;

    & > a {
      display: inline-block;
      padding: 10px 15px;
      outline: none;
      cursor: pointer;
      box-sizing: border-box;
      color: ${props => props.theme.brandPrimary || '#2CA4AB'};
      font-size: 1.15rem;

      &:hover {
        background: #f1f1f1;
      }
    }
  }
`;

const Underline = styled.hr`
  border-color: ${props => props.theme.brandPrimary || '#2CA4AB'};
  transition: 0.3s ease-in-out;
  margin-left: 0px;
  margin-top: 0px;
`;

class Tabs extends Component {
  static propTypes = {
    selected: PropTypes.number,
    className: PropTypes.string,
    onClick: PropTypes.func, // eslint-disable-line
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.element),
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
      PropTypes.string,
    ]).isRequired,
  };

  static defaultProps = {
    className: '',
    selected: 0,
  };

  state = {
    selected: this.props.selected,
  };

  handleTabClick(selected) {
    if (this.props.onClick) {
      this.props.onClick(selected);
    }
    this.setState({ selected });
  }

  render() {
    const { children, className } = this.props;
    const widthPercent = 1 / children.length * 100; // eslint-disable-line
    const width = `${widthPercent}%`;
    const marginLeft = `${this.state.selected * widthPercent}%`;

    return (
      <div className={className}>
        <List>
          {this.props.children.map((child, index) => (
            <li key={`index-${index + 1}`}>
              <a tabIndex={index + 1} onClick={() => this.handleTabClick(index)} style={{ width }}>
                {child.props.title}
              </a>
            </li>
          ))}
          <Underline style={{ width, marginLeft }} />
        </List>

        <div>{children[this.state.selected]}</div>
      </div>
    );
  }
}

export default Tabs;
