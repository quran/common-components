import React from 'react';
import { storiesOf, action } from '@storybook/react';
import Button from './index';

storiesOf('Button', module)
  .addWithInfo('simple usage', 'Basic usage of the button', () => (
    <Button onClick={action('clicked')}>Hello Button</Button>
  ))
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>
  ))
  .add('square', () => (
    <Button onClick={action('clicked')} square>😀 😎 👍 💯</Button>
  ))
  .add('disabled', () => (
    <Button disabled>Disabled</Button>
  ))
  .add('Inverted', () => (
    <Button color="inverted">Inverted</Button>
  ))
  .add('With href', () => (
    <Button href="http://Quran.com" target="_blank">😎 👍 💯 Quran.com</Button>
  ))
  .add('With href (disabled)', () => (
    <Button href="http://Quran.com" target="_blank" disabled>😎 👍 💯 Quran.com</Button>
  ));
