import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledInput = styled.input`
  box-sizing: border-box;
  height: 100%;
  text-align: left;
  height: 40px;
  width: 90%;
  padding-right: 48px;
  background: #f1f1f1;
  padding: 10px 15px;
  padding-right: 60px;
  outline: none;
  border: none;
  font-size: 14px;
  color: ${props => props.theme.brandPrimary || '#2CA4AB'};
  &:focus {
    border-color: ${props => props.theme.brandPrimary || '#2CA4AB'};
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 0 1px rgba(44, 164, 171, 0.52);
  }
  &[type=search] {
    padding: 10px 15px;
    height: 40px;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }
`;

const Input = ({ ...props }) => (
  <StyledInput {...props} />
);

Input.defaultProps = {
  placeholder: 'type here ...'
};

Input.propsTypes = {
  placeholder: PropTypes.string.isRequired
};

export default Input;
