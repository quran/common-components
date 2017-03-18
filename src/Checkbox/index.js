import React, { PropTypes } from 'react';
import cx from 'classnames';
import styles from './style.scss';

const Checkbox = ({ id, name, checked, className, handleChange, children }) => (
  <label className={styles.quranCheckbox} htmlFor={id}>
    <input
      id={id}
      className={cx(styles.checkbox, className)}
      type="checkbox"
      name={name}
      checked={checked}
      onChange={handleChange}
    />
    <span className={styles.children}>{children}</span>
  </label>
);
Checkbox.defaultProps = {
  className: ''
};

Checkbox.propTypes = {
  id: PropTypes.string.isRequired,
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  handleChange: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
};

export default Checkbox;
