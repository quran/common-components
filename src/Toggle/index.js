import React, { PropTypes } from 'react';
import styled, { css } from 'styled-components';

const height = 25;
const width = 50;

const Switch = styled.div`
  display: inline-block;
  vertical-align: middle;
`;

const roundStyle = css`
  & + .label {
    padding: 2px;
    width: ${width}px;
    height: ${height}px;
    background-color: #dddddd;
    border-radius: ${height}px;
  }

  & + .label:before,
  & + .label:after {
    display: block;
    position: absolute;
    top: 1px;
    left: 1px;
    bottom: 1px;
    content: "";
  }

  & + .label:before {
    right: 1px;
    background-color: #f1f1f1;
    border-radius: ${height}px;
    transition: background 0.4s;
  }

  & + .label:after {
    width: ${height - 2}px;
    height: ${height - 2}px;
    background-color: #fff;
    border-radius: ${height - 2}px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
    transition: margin 0.4s;
    position: relative;
    top: 1px;
  }

  &:checked + .label:before {
    background-color: ${props => props.theme.brandPrimary || '#2CA4AB'};
  }

  &:checked + .label:after {
    margin-left: ${width / 2}px;
  }
`;

const flatStyle = css`
  & + .label {
    padding: 2px;
    width: ${width}px;
    height: ${height}px;
    background-color: #dddddd;
    border-radius: ${height}px;
    transition: background 0.4s;
  }
  & + .label:before,
  & + .label:after {
    display: block;
    position: absolute;
    content: "";
  }
  & + .label:before {
    top: 2px;
    left: 2px;
    bottom: 2px;
    right: 2px;
    background-color: #fff;
    border-radius: ${height}px;
    transition: background 0.4s;
  }
  & + .label:after {
    top: 4px;
    left: 4px;
    bottom: 4px;
    width: ${height - 5}px;
    height: ${height - 5}px;
    background-color: #dddddd;
    border-radius: ${height - 5}px;
    transition: margin 0.4s, background 0.4s;
  }
  &:checked + .label {
    background-color: ${props => props.theme.brandPrimary || '#2CA4AB'};
  }
  &:checked + .label:after {
    margin-left: ${width / 2}px;
    background-color: ${props => props.theme.brandPrimary || '#2CA4AB'};
  }
`;

const Toggle = styled.input`
  position: absolute;
  margin-left: -9999px;
  visibility: hidden;

  & + .label {
    display: block;
    position: relative;
    cursor: pointer;
    outline: none;
    user-select: none;
    margin-bottom: 0px;
  }

  ${props => (props.toggleStyle === 'flat' ? flatStyle : roundStyle)}
`;

const SwitchToggle = ({ id, flat, onToggle, ...otherProps }) => (
  <Switch className="switch">
    <Toggle
      id={id}
      toggleStyle={flat ? 'flat' : 'round'}
      type="checkbox"
      onChange={onToggle}
      {...otherProps}
    />
    <label htmlFor={id} className="label" />
  </Switch>
);

SwitchToggle.propTypes = {
  id: PropTypes.string,
  flat: PropTypes.bool,
  onToggle: PropTypes.func.isRequired
};

SwitchToggle.defaultProps = {
  flat: false,
  id: ''
};

export default SwitchToggle;
