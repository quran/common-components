import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Icon from './index';

storiesOf('Icon', module)
  .add('with type', () => (
    <Icon type="calendar" />
  ))
  .add('with text', () => (
    <Icon type="calendar">
      Calendar
    </Icon>
  ));
