import React, { PropTypes } from 'react';
import styles from './button.scss';

function Button({ color, className = '', onClick, ...props }) {
  const buttonColor = color ? styles[`btn--${color}`] : '';

  return (
    <button
      className={`${styles.btn} ${buttonColor} ${className}`}
      onClick={onClick}
      {...props}
    >
      {props.children}
    </button>);
}

Button.propTypes = {
  color: PropTypes.string,
  className: PropTypes.any,
  children: PropTypes.any.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Button;
