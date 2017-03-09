import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Button from './index';

storiesOf('Button', module)
  .addWithInfo('simple usage', 'Basic usage of the button', () => (
    <Button onClick={action('clicked')}>Hello Button</Button>
  ))
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>
  ))
  .add('disabled', () => (
    <Button disabled>Disabled</Button>
  ))
  .add('Inverted', () => (
    <Button color="inverted">Inverted</Button>
  ))
  .add('Link (Provide href)', () => (
    <Button href="http://Quran.com" target="_blank">😎 👍 💯 Quran.com</Button>
  ))
  .add('Link disabled', () => (
    <Button href="http://Quran.com" target="_blank" disabled>😎 👍 💯 Quran.com</Button>
  ))
  .add('Link Inverted', () => (
    <Button color="inverted" href="http://Quran.com" target="_blank">😎 👍 💯 Quran.com</Button>
  ));
