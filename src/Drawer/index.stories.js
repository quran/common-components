import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Drawer from './index';

storiesOf('Drawer', module)
  .add('default', () => (
    <Drawer open={false}>
      <p>Drawer content</p>
    </Drawer>
  ))
  .add('with handleOpen function', () => (
    <Drawer handleOpen={action('handleOpen')} open={false}>
      <p>Drawer content</p>
    </Drawer>
  ));
