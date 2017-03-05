import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Navbar, { LeftNav, RightNav } from './index';
import Button from '../Button';

storiesOf('Navbar', module)
  .addDecorator(story => (
    <div style={{ height: 1500 }}>
      <style>
        {`
          body{ margin: 0px; }
          .my-custm-className{ background: green;}
          .my-custm-className__left{ background: gold;}
          .my-custm-className__right { background: pink;}
        `}
      </style>
      {story()}
    </div>
  ))
  .add('with items', () => (
    <Navbar>
      <LeftNav>
        <li>Something</li>
        <li><a tabIndex="-1">link</a></li>
      </LeftNav>
      <RightNav>
        <li>Something</li>
        <li><a tabIndex="-1">link</a></li>
        <li><Button onClick={action('clicked')}>Hello Button</Button></li>
      </RightNav>
    </Navbar>
  ))
  .add('fixed', () => (
    <Navbar
      fixed
    >
      <LeftNav>
        <li>Something</li>
        <li><a tabIndex="-1">link</a></li>
      </LeftNav>
      <RightNav>
        <li>Something</li>
        <li><a tabIndex="-1">link</a></li>
        <li><Button onClick={action('clicked')}>Hello Button</Button></li>
      </RightNav>
    </Navbar>
  ))
  .add('With custom classNames', () => (
    <Navbar
      fixed
      className="my-custm-className"
    >
      <LeftNav className="my-custm-className__left">
        <li>Something</li>
        <li><a tabIndex="-1">link</a></li>
      </LeftNav>
      <RightNav className="my-custm-className__right">
        <li>Something</li>
        <li><a tabIndex="-1">link</a></li>
        <li><Button onClick={action('clicked')}>Hello Button</Button></li>
      </RightNav>
    </Navbar>
  ));
