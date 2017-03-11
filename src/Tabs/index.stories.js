import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Tabs, { Tab } from './index';

storiesOf('Tabs', module)
  .add('default', () => (
    <Tabs>
      <Tab title="title 1">
        Some info 1
      </Tab>
      <Tab title="title 2">
        Some info 2
      </Tab>
      <Tab title="title 3">
        Some info 3
      </Tab>
    </Tabs>
  ))
  .add('with onClick handler', () => (
    <Tabs onClick={action()}>
      <Tab title="title 1">
        Some info 1
      </Tab>
      <Tab title="title 2">
        Some info 2
      </Tab>
      <Tab title="title 3">
        Some info 3
      </Tab>
    </Tabs>
  ))
  .add('selected props', () => (
    <Tabs selected={1}>
      <Tab title="title 1">
        Some info 1
      </Tab>
      <Tab title="title 2">
        Some info 2
      </Tab>
      <Tab title="title 3">
        Some info 3
      </Tab>
    </Tabs>
  ));
