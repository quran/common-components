import React, { PropTypes } from 'react';
import styles from './button.scss';

function Button({ className = '', color = '', onClick, ...props }) {
  const buttonType = color && styles[color];
  return (
    <button
      className={`qc ${styles.quranButton} ${className} ${buttonType}`}
      onClick={onClick}
      {...props}
    >
      {props.children}
    </button>);
}

Button.propTypes = {
  className: PropTypes.any,
  color: PropTypes.string,
  children: PropTypes.any.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Button;
