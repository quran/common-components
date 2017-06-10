import React, { PropTypes } from 'react';
import classnames from 'classnames';
import styles from './toggle.scss';

const SwitchToggle = ({ id, flat, onToggle, ...otherProps }) => {
  const isFlat = flat ? styles.toggleFlat : styles.toggleRound;

  return (
    <div className={`${styles.switch} switch`}>
      <input
        id={id}
        className={classnames(styles.toggle, isFlat)}
        type="checkbox"
        onChange={onToggle}
        {...otherProps}
      />
      <label htmlFor={id} className={styles.label} />
    </div>
  );
};

SwitchToggle.propTypes = {
  id: PropTypes.string,
  flat: PropTypes.bool,
  onToggle: PropTypes.func.isRequired
};

SwitchToggle.defaultProps = {
  flat: false,
  id: '',
};

export default SwitchToggle;
