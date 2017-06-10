import React from 'react';
import { storiesOf } from '@storybook/react';
import Sites from './index';

storiesOf('Sites', module)
  .addDecorator(story => (
    <div style={{ width: 500, textAlign: 'center', padding: 50 }}>
      {story()}
    </div>
  ))
  .addWithInfo('default', 'Basic usage of the sites', () => (
    <Sites />
  ));
