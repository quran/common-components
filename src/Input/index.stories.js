import React from 'react';
import { storiesOf, action } from '@storybook/react';
import Input from './index';

storiesOf('Input', module)
  .addWithInfo('search', 'Basic usage of the button', () => (
    <Input type="search" onChange={action} placeholder="search .." />
  )).add('text', () => (
    <Input type="text" onChange={action} placeholder="type here .." />
  ));
