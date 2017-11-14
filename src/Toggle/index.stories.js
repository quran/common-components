import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Toggle from './index';

import { withInfo } from '@storybook/addon-info';

storiesOf('Toggle', module)
  .add('basic', withInfo('basic')(() => <Toggle id="some-toggle-switch-1" onChange={action} />))
  .add('basic checked', withInfo('basic checked')(() => (
    <Toggle id="some-toggle-switch-2" onChange={action} checked />
  )))
  .add('flat', withInfo('flat')(() => <Toggle id="some-toggle-switch-3" onChange={action} flat />))
  .add('flat checked', withInfo('flat checked')(() => (
    <Toggle id="some-toggle-switch-4" onChange={action} checked flat />
  )));
