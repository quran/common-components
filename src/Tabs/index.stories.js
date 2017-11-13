import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Tabs, { Tab } from './index';

storiesOf('Tabs', module)
  .addWithInfo('default', () => (
    <Tabs>
      <Tab title="title 1">Some info 1</Tab>
      <Tab title="title 2">Some info 2</Tab>
      <Tab title="title 3">Some info 3</Tab>
    </Tabs>
  ))
  .addWithInfo('with onClick handler', () => (
    <Tabs onClick={action()}>
      <Tab title="title 1">Some info 1</Tab>
      <Tab title="title 2">Some info 2</Tab>
      <Tab title="title 3">Some info 3</Tab>
    </Tabs>
  ))
  .addWithInfo('selected props', () => (
    <Tabs selected={1}>
      <Tab title="title 1">Some info 1</Tab>
      <Tab title="title 2">Some info 2</Tab>
      <Tab title="title 3">Some info 3</Tab>
    </Tabs>
  ))
  .addWithInfo('HTML tags in title', () => (
    <Tabs onClick={action()}>
      <Tab title={<h2>h2</h2>}>Some info 1</Tab>
      <Tab title={<small>small</small>} id="small">
        Some info 2
      </Tab>
      <Tab title="title 3">Some info 3</Tab>
    </Tabs>
  ));
