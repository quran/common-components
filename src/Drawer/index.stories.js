import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Drawer from './index';

storiesOf('Drawer', module)
  .add('default', () => (
    <Drawer>
      <p>Drawer content</p>
    </Drawer>
  ))
  .add('with handleOpen function', () => (
    <Drawer handleOpen={action('handleOpen')}>
      <p>Drawer content</p>
    </Drawer>
  ));
