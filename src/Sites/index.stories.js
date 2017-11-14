import React from 'react';
import { storiesOf } from '@storybook/react';
import Sites from './index';

import { withInfo } from '@storybook/addon-info';

storiesOf('Sites', module)
  .addDecorator(story => (
    <div style={{ width: 500, textAlign: 'center', padding: 50 }}>
      {story()}
    </div>
  ))
  .add('default', withInfo('Basic usage of the sites')(() => (
    <Sites />
  )));
