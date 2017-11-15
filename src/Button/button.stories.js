import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button from './index';
import { withInfo } from '@storybook/addon-info';

storiesOf('Button', module)
  .add(
    'simple info',
    withInfo('Basic usage of the button')(() => (
      <Button onClick={action('clicked')}>Hello Button</Button>
    )),
  )
  .add(
    'with some emoji',
    withInfo('Basic usage of the button')(() => (
      <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>
    )),
  )
  .add(
    'square',
    withInfo('Basic usage of the button')(() => (
      <Button onClick={action('clicked')} square>
        😀 😎 👍 💯
      </Button>
    )),
  )
  .add('disabled', withInfo('Basic usage of the button')(() => <Button disabled>Disabled</Button>))
  .add(
    'Inverted',
    withInfo('Basic usage of the button')(() => <Button color="inverted">Inverted</Button>),
  )
  .add(
    'With href',
    withInfo('Basic usage of the button')(() => (
      <Button href="http://Quran.com" target="_blank">
        😎 👍 💯 Quran.com
      </Button>
    )),
  )
  .add(
    'With href (disabled)',
    withInfo('Basic usage of the button')(() => (
      <Button href="http://Quran.com" target="_blank" disabled>
        😎 👍 💯 Quran.com
      </Button>
    )),
  );
