import PropTypes from 'prop-types';
import styled from 'styled-components';

const Label = styled.label`
  cursor: pointer;
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-transform: capitalize;
`;

const Input = styled.input`
  -webkit-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
  appearance: none;
  -webkit-appearance: none;
  background-color: #fafafa;
  border: 1px solid #cacece;
  padding: 9px;
  border-radius: 3px;
  display: inline-block;
  height: 10px;
  width: 10px;
  outline: none;
  margin: 0px;
  position: relative;
  margin-right: 12px;
  vertical-align: bottom;
  &:hover {
    cursor: pointer;
    border: 1px solid #adb8c0;
    background-color: ${props => props.theme.brandPrimary || '#2CA4AB'};
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05), inset 0px 1px 3px rgba(0, 0, 0, 0.1);
  }
  &:disabled {
    background-image: linear-gradient(to bottom, #d8d8d8, #d8d8d8);
  }
  &:focus {
    outline: none;
    border-color: rgba(0, 126, 255, 0.55);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 0 1px rgba(0, 126, 255, 0.1);
  }
  &:checked {
    background-color: ${props => props.theme.brandPrimary || '#2CA4AB'};
    border: 1px solid #adb8c0;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05), inset 0px -15px 10px -12px rgba(0, 0, 0, 0.05),
      inset 15px 10px -12px rgba(255, 255, 255, 0.1);
    color: #fff;
    &:active {
      box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05), inset 0px 1px 2px rgba(0, 0, 0, 0.1);
    }
    &:focus {
      outline: none;
      border-color: rgba(0, 126, 255, 0.55);
      box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 0 1px rgba(0, 126, 255, 0.1);
    }
    &:after {
      content: '✔';
      font-size: 12px;
      margin: 0.1em 0 0.1em 0;
      line-height: 1.5em;
      font-weight: 500;
      position: absolute;
      top: 0px;
      right: 4px;
    }
  }
`;

const Checkbox = ({ id, name, checked, className, handleChange, children, ...props }) => (
  <Label htmlFor={id}>
    <Input
      id={id}
      className={className}
      type="checkbox"
      name={name}
      checked={checked}
      onChange={handleChange}
      {...props}
    />
    {children}
  </Label>
);

Checkbox.propTypes = {
  id: PropTypes.string.isRequired,
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  handleChange: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
  disabled: PropTypes.bool,
};

Checkbox.defaultProps = {
  className: '',
  disabled: false,
};

export default Checkbox;
