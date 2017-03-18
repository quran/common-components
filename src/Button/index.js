import React, { PropTypes } from 'react';
import cx from 'classnames';
import styles from './style.scss';

function Button({ className, color, children, href, ...props }) {
  const buttonType = color && styles[color];

  if (href) {
    const attributes = props.disabled && { onClick: (event) => { event.preventDefault(); } };
    const classnames = cx(styles.quranLink, className, buttonType, { [styles.disabled]: props.disabled, [styles.square]: props.square }); // eslint-disable-line
    return (
      <a
        href={href}
        className={classnames}
        {...props}
        {...attributes}
      >{children}</a>);
  }

  const classnames = cx(styles.quranButton, className, buttonType, { [styles.square]: props.square }); // eslint-disable-line

  return (
    <button
      className={classnames}
      {...props}
    > {children}
    </button>
  );
}

Button.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  href: PropTypes.string,
  square: PropTypes.bool,
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
  href: null,
  square: false
};

export default Button;
