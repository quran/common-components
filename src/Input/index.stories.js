import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Input from './index';

storiesOf('Input', module)
  .addWithInfo('search', 'Basic usage of the button', () => (
    <Input type="search" onChange={action} placeholder="search .." />
  ))
  .addWithInfo('text', () => <Input type="text" onChange={action} placeholder="type here .." />);
