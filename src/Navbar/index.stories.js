import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Navbar from './index';
import Button from '../Button';

storiesOf('Navbar', module)
  .addDecorator(story => (
    <div style={{ height: 1500 }}>
      <style>
        {`
          body{ margin: 0px; }
        `}
      </style>
      {story()}
    </div>
  ))
  .add('with items', () => (
    <Navbar
      leftNav={[
        <li>Something</li>,
        <li><a tabIndex="-1">link</a></li>
      ]}
      rightNav={[
        <li>Something</li>,
        <li><a tabIndex="-1">link</a></li>,
        <li><Button onClick={action('clicked')}>Hello Button</Button></li>
      ]}
    />
  ))
  .add('fixed', () => (
    <Navbar
      fixed
      leftNav={[
        <li>Something</li>,
        <li><a tabIndex="-1">link</a></li>
      ]}
      rightNav={[
        <li>Something</li>,
        <li><a tabIndex="-1">link</a></li>
      ]}
    />
  ));
