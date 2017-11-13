import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button from './index';

import { withInfo } from '@storybook/addon-info';

storiesOf('Button', module).add(
  'simple info',
  withInfo({
    text: 'String or React Element with docs about my component', // Warning! This option's name will be likely renamed to "summary" in 3.3 release. Follow this PR #1501 for details
    // other possible options see in Global options section below
  })(() => <Button onClick={action('clicked')}>Hello Button</Button>),
);

// storiesOf('Button', module)
//   .addWithInfo('simple usage', 'Basic usage of the button', () => (
//     <Button onClick={action('clicked')}>Hello Button</Button>
//   ))
//   .addWithInfo('with some emoji', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>)
//   .addWithInfo('square', () => (
//     <Button onClick={action('clicked')} square>
//       😀 😎 👍 💯
//     </Button>
//   ))
//   .addWithInfo('disabled', () => <Button disabled>Disabled</Button>)
//   .addWithInfo('Inverted', () => <Button color="inverted">Inverted</Button>)
//   .addWithInfo('With href', () => (
//     <Button href="http://Quran.com" target="_blank">
//       😎 👍 💯 Quran.com
//     </Button>
//   ))
//   .addWithInfo('With href (disabled)', () => (
//     <Button href="http://Quran.com" target="_blank" disabled>
//       😎 👍 💯 Quran.com
//     </Button>
//   ));
