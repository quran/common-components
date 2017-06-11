import React from 'react';
import { storiesOf, action } from '@storybook/react';
import Button from './index';

storiesOf('Button', module)
  .addWithInfo('simple usage', 'Basic usage of the button', () => (
    <Button onClick={action('clicked')}>Hello Button</Button>
  ))
  .addWithInfo('with some emoji', () => (
    <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>
  ))
  .addWithInfo('square', () => (
    <Button onClick={action('clicked')} square>😀 😎 👍 💯</Button>
  ))
  .addWithInfo('disabled', () => (
    <Button disabled>Disabled</Button>
  ))
  .addWithInfo('Inverted', () => (
    <Button color="inverted">Inverted</Button>
  ))
  .addWithInfo('With href', () => (
    <Button href="http://Quran.com" target="_blank">😎 👍 💯 Quran.com</Button>
  ))
  .addWithInfo('With href (disabled)', () => (
    <Button href="http://Quran.com" target="_blank" disabled>😎 👍 💯 Quran.com</Button>
  ));
