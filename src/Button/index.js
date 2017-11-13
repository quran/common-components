import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const inverted = css`
  background: white;
  border-color: ${props => props.theme.brandPrimary || '#2CA4AB'};
  color: ${props => props.theme.brandPrimary || '#2CA4AB'};
  &:hover {
    color: white;
    background-color: ${props => props.theme.brandPrimary || '#2CA4AB'};
    border-color: white;
  }
`;

const disabled = css`
  background-color: #ccc;
  color: #6a6a6a;
  cursor: not-allowed;
`;

const StyledBase = styled.button`
  display: inline-block;
  outline: 0;
  border: 0;
  background: none;
  cursor: pointer;
  width: 220px;
  height: 40px;
  border-radius: ${props => (props.square ? 0 : '50px')};
  border: 2px solid white;
  color: white;
  background-color: ${props => props.theme.brandPrimary || '#2CA4AB'};
  font-size: 14px;
  font-style: normal;
  font-stretch: normal;
  text-align: center;
  vertical-align: middle;
  touch-action: manipulation;

  &:hover {
    text-decoration: none;
    color: ${props => props.theme.brandPrimary || '#2CA4AB'};
    border-color: ${props => props.theme.brandPrimary || '#2CA4AB'};
    background-color: white;
  }

  &:disabled {
    ${disabled}
  }

  ${props => (props.color === 'inverted' ? inverted : '')}
  ${props => (props.disabled ? disabled : '')}
`;

const StyledLink = StyledBase.withComponent('a').extend`
  text-align: center;
  line-height: 40px;
  text-decoration: none;
`;

function Button({ className, color, children, href, ...props }) {
  if (href) {
    const attributes = props.disabled && {
      onClick: (event) => {
        event.preventDefault();
      }
    };

    return (
      <StyledLink
        href={href}
        className={className}
        color={color}
        {...props}
        {...attributes}
      >
        {children}
      </StyledLink>
    );
  }

  return (
    <StyledBase className={className} color={color} {...props}>
      {children}
    </StyledBase>
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
  ]).isRequired
};

Button.defaultProps = {
  className: '',
  color: '',
  disabled: false,
  href: null,
  square: false
};

export default Button;
