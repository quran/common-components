import React, { PropTypes } from 'react';
import styled from 'styled-components';

const size = 20;

const Label = styled.label`
  display: inline-block;
  padding-right: 20px;
  font-weight: 500;
  color: #777;
  line-height: 20px;
  cursor: pointer;
  display: inline-block;

  &:hover .inner {
    -webkit-transform: scale(0.5);
    -ms-transform: scale(0.5);
    transform: scale(0.5);
    opacity: .5;
  }

  & .input {
    width: 1px;
    height: 1px;
    opacity: 0;
  }

  & .input:checked + .outer .inner {
    -webkit-transform: scale(1);
    -ms-transform: scale(1);
    transform: scale(1);
    opacity: 1;
  }

  & .input:checked + .outer {
    border: 2px solid ${props => props.theme.brandPrimary || '#2CA4AB'};
  }

  & .input:focus + .outer .inner {
    -webkit-transform: scale(1);
    -ms-transform: scale(1);
    transform: scale(1);
    opacity: 1;
    background-color: ${props => props.theme.brandPrimary || '#2CA4AB'};
  }

  & .outer {
    width: ${size}px;
    height: ${size}px;
    display: block;
    float: left;
    margin: 0px 5px 0px 0px;
    border: 2px solid ${props => props.theme.brandPrimary || '#2CA4AB'};
    border-radius: 50%;
    background-color: #fff;
  }

  & .inner {
    -webkit-transition: all 0.25s ease-in-out;
    transition: all 0.25s ease-in-out;
    width: ${size / 2}px;
    height: ${size / 2}px;
    -webkit-transform: scale(0);
    -ms-transform: scale(0);
    transform: scale(0);
    display: block;
    margin: ${size / 4}px;
    border-radius: 50%;
    background-color: ${props => props.theme.brandPrimary || '#2CA4AB'};
    opacity: 0;
  }
`;

const Radio = ({ id, name, checked, handleChange, children }) => (
  <Label htmlFor={id}>
    <input
      id={id}
      className="input"
      type="radio"
      name={name}
      checked={checked}
      onChange={handleChange}
    />
    <span className="outer">
      <span className="inner" />
    </span>
    {children}
  </Label>
);

Radio.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  handleChange: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired
};

export default Radio;
