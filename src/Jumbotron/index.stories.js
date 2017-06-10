import React from 'react';
import { storiesOf } from '@storybook/react';
import Jumbotron from './index';

storiesOf('Jumbotron', module)
  .add('default', () => (
    <Jumbotron>
      Hello world
    </Jumbotron>
  ))
  .add('with props', () => (
    <Jumbotron className="quranJumbo" style={{ height: '200px' }} id="header">
      Hello world
    </Jumbotron>
  ));
