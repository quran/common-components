import React from 'react';
import { storiesOf } from '@storybook/react';
import Jumbotron from './index';

storiesOf('Jumbotron', module)
  .addWithInfo('default', () => (
    <Jumbotron>
      Hello world
    </Jumbotron>
  ))
  .addWithInfo('with props', () => (
    <Jumbotron className="quranJumbo" style={{ height: '200px' }} id="header">
      Hello world
    </Jumbotron>
  ));
