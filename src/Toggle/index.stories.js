import React from 'react';
import { storiesOf, action } from '@storybook/react';
import Toggle from './index';

storiesOf('Toggle', module)
  .add('basic', () => <Toggle id="some-toggle-switch-1" onChange={action} />)
  .add('basic checked', () => <Toggle id="some-toggle-switch-2" onChange={action} checked />)
  .add('flat', () => <Toggle id="some-toggle-switch-3" onChange={action} flat />)
  .add('flat checked', () =>
    <Toggle id="some-toggle-switch-4" onChange={action} checked flat />
  );
