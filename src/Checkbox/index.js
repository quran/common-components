import React, { PropTypes } from 'react';
import styles from './style.scss';

const Checkbox = ({ id, name, checked, className, handleChange, children, ...props }) => (
  <label className={styles.quranCheckbox} htmlFor={id}>
    <input
      id={id}
      className={`${styles.checkbox} ${className}`}
      type="checkbox"
      name={name}
      checked={checked}
      onChange={handleChange}
      {...props}
    />
    {children}
  </label>
);

Checkbox.propTypes = {
  id: PropTypes.string.isRequired,
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  handleChange: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
  disabled: PropTypes.bool
};

Checkbox.defaultProps = {
  className: '',
  disabled: false
};

export default Checkbox;
