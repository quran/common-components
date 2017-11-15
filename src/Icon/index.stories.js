import React from 'react';
import { storiesOf } from '@storybook/react';
import Icon from './index';

import { withInfo } from '@storybook/addon-info';

storiesOf('Icon', module)
  .add('with type', withInfo('with type')(() => (
    <Icon type="calendar" />
  )))
  .add('with text', withInfo('with text')(() => (
    <Icon type="calendar">
      Calendar
    </Icon>
  )));
