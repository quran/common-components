import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Input from './index';

import { withInfo } from '@storybook/addon-info';

storiesOf('Input', module)
  .add('search', withInfo('Basic usage of the button')(() => (
    <Input type="search" onChange={action} placeholder="search .." />
  )))
  .add('text', withInfo('text')(() => <Input type="text" onChange={action} placeholder="type here .." />));
