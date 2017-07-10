import React, { PropTypes } from 'react';
import styled from 'styled-components';
import types from './types';

const I = styled.i`
  // SS Standard documentation: https://romancandletours.com/assets/css/ss-standard/documentation.html
  @font-face {
    font-family: "SSStandard";
    src: url('https://assets-1f14.kxcdn.com/fonts/ss-standard.eot');
    src: url('https://assets-1f14.kxcdn.com/fonts/ss-standard.eot?#iefix') format('embedded-opentype'),
    url('https://assets-1f14.kxcdn.com/fonts/ss-standard.woff') format('woff'),
    url('https://assets-1f14.kxcdn.com/fonts/ss-standard.ttf') format('truetype'),
    url('https://assets-1f14.kxcdn.com/fonts/ss-standard.svg#SSStandard') format('svg');
    font-weight: normal;
    font-style: normal;
  }

  &,
  &:before, &:before,
  &.ss-standard:before, &.ss-standard:before,
  &.right:after, &.right:after,
  &.ss-standard.right:after, &.ss-standard.right:after {
    font-family: "SSStandard";
    font-style: normal;
    font-weight: normal;
    text-decoration: none;
    text-rendering: optimizeLegibility;
    white-space: nowrap;
    vertical-align: middle;
    /*-webkit-font-feature-settings: "liga"; Currently broken in Chrome >= v22. Falls back to text-rendering. Safari is unaffected. */
    -moz-font-feature-settings: "liga=1";
    -moz-font-feature-settings: "liga";
    -ms-font-feature-settings: "liga" 1;
    -o-font-feature-settings: "liga";
    font-feature-settings: "liga";
    -webkit-font-smoothing: antialiased;
  }

  &.right:before,
  &.right:before {
    display: none;
    content: '';
  }

  &:before, &.right:after {
    content: '${props => (props.type ? types[props.type] : '')}';
  }

`;

const Icon = ({ type, children, ...props }) => (
  <span {...props}>
    <I type={type} />
    {children}
  </span>
);

Icon.propTypes = {
  type: PropTypes.string.isRequired,
  children: PropTypes.element
};

Icon.defaultProps = {
  children: null
};

export default Icon;
