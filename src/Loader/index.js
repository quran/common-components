import React, { PropTypes } from 'react';
import styled from 'styled-components';

const LoaderIcon = styled.div`
  position: fixed;
  margin: 60px auto;
  font-size: 10px;
  position: relative;
  text-indent: -9999em;
  border-top: 1.1em solid rgba(0, 90, 113, 0.2);
  border-right: 1.1em solid rgba(0, 90, 113, 0.2);
  border-bottom: 1.1em solid rgba(0, 90, 113, 0.2);
  border-left: 1.1em solid ${props => props.theme.brandPrimary || '#2CA4AB'};
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-animation: load8 1.1s infinite linear;
  animation: load8 1.1s infinite linear;
  z-index: 100;
  position: absolute;
  left: 45%;
  top: 30%;
  &,
  &:after {
    border-radius: 50%;
    width: 6em;
    height: 6em;
    position: fixed;
  }

  @-webkit-keyframes load8 {
    0% {
      -webkit-transform: rotate(0deg);
      transform: roatate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @keyframes load8 {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }

  ${props => (props.relative ? `
    position: relative;
    top: initial;
    left: initial;
  ` : '')}
`;

const Active = styled.div`
  opacity: 0.8;
  background-color: #ffffff;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
  z-index: 99;
`;

const Loader = ({ children, isActive, className, relative, ...props }) => (
  <div>
    {isActive && !relative && <Active />}
    {isActive &&
      <LoaderIcon relative={relative} className={className} {...props}>
        Loading...
      </LoaderIcon>}
    {children}
  </div>
);

Loader.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string
  ]).isRequired,
  isActive: PropTypes.bool.isRequired,
  relative: PropTypes.bool.isRequired,
  className: PropTypes.string
};

Loader.defaultProps = {
  isActive: false,
  relative: false,
  className: '',
  children: []
};

export default Loader;
