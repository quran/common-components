import React from 'react';
import styles from './button.scss';
export default ({ color, className, onClick, ...props }) => {
  const buttonColor = color ? styles[`btn--${color}`] : '';

  return (
    <button className={`${styles.btn} ${buttonColor} ${className || ''}`}
      onClick={onClick}
       {...props}>
      {props.children}
    </button>);
};
