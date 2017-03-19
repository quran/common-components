import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Popover from './index';
import Button from '../Button';

storiesOf('Popover', module)
  .addDecorator(story => (
    <div style={{ width: 500, textAlign: 'center', padding: 50 }}>
      {story()}
    </div>
  ))
  .addWithInfo('default', 'Basic usage of the popover', () => (
    <Popover trigger={<Button>I am a trigger</Button>}>
      <p>Text here</p>
    </Popover>
  ));
