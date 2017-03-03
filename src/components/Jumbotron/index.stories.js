import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Jumbotron from './index';

storiesOf('Jumbotron', module)
  .add('default', () => (
    <Jumbotron>
      Hello world
    </Jumbotron>
  ));
