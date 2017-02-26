import React, { PropTypes } from 'react';
import styles from './button.scss';

function Button({ className = '', onClick, ...props }) {
  return (
    <button
      className={`qc ${styles.quranButton} ${className}`}
      onClick={onClick}
      {...props}
    >
      {props.children}
    </button>);
}

Button.propTypes = {
  className: PropTypes.any,
  children: PropTypes.any.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Button;
