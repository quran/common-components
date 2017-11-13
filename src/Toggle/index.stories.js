import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Toggle from './index';

storiesOf('Toggle', module)
  .addWithInfo('basic', () => <Toggle id="some-toggle-switch-1" onChange={action} />)
  .addWithInfo('basic checked', () => (
    <Toggle id="some-toggle-switch-2" onChange={action} checked />
  ))
  .addWithInfo('flat', () => <Toggle id="some-toggle-switch-3" onChange={action} flat />)
  .addWithInfo('flat checked', () => (
    <Toggle id="some-toggle-switch-4" onChange={action} checked flat />
  ));
