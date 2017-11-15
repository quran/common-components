import React from 'react';
import { storiesOf } from '@storybook/react';
import Jumbotron from './index';

import { withInfo } from '@storybook/addon-info';

storiesOf('Jumbotron', module)
  .add('default', withInfo('default')(() => (
    <Jumbotron>
      Hello world
    </Jumbotron>
  )))
  .add('with props', withInfo('with props')(() => (
    <Jumbotron className="quranJumbo" style={{ height: '200px' }} id="header">
      Hello world
    </Jumbotron>
  )));
