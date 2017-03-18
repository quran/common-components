import React, { PropTypes } from 'react';
import { quranInput } from './input.scss';

const Input = ({ ...props }) => (
  <input className={quranInput} {...props} />
);

Input.defaultProps = {
  placeholder: 'type here ...'
};

Input.propsTypes = {
  placeholder: PropTypes.string.isRequired
};

export default Input;
