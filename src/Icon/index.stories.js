import React from 'react';
import { storiesOf } from '@storybook/react';
import Icon from './index';

storiesOf('Icon', module)
  .addWithInfo('with type', () => (
    <Icon type="calendar" />
  ))
  .addWithInfo('with text', () => (
    <Icon type="calendar">
      Calendar
    </Icon>
  ));
