import React, { PropTypes } from 'react';
import styles from './style.scss';

function Button({ className, color, children, href, ...props }) {
  const buttonType = color && styles[color];

  if (href) {
    const attributes = props.disabled && { onClick: (event) => { event.preventDefault(); } };
    return (
      <a
        href={href}
        className={`${styles.quranLink} ${className} ${buttonType} ${props.disabled && styles.disabled}`}
        {...props}
        {...attributes}
      >{children}</a>);
  }

  return (
    <button
      className={`${styles.quranButton} ${className} ${buttonType}`}
      {...props}
    > {children}
    </button>
  );
}

Button.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  href: PropTypes.string,
  disabled: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string
  ]).isRequired,
};

Button.defaultProps = {
  className: '',
  color: '',
  disabled: false,
  href: null
};

export default Button;
