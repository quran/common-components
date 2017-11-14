import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Drawer from './index';
import Menu, { MenuItem } from '../Menu';

import { withInfo } from '@storybook/addon-info';

storiesOf('Drawer', module)
  .add('default', withInfo('default')(() => (
    <Drawer open={false}>
      <p>Drawer content</p>
    </Drawer>
  )))
  .add('with handleOpen function', withInfo('with handleOpen function')(() => (
    <Drawer handleOpen={action('handleOpen')} open={false}>
      <p>Drawer</p>
    </Drawer>
  )))
  .add('right side', withInfo('right side')(() => (
    <Drawer open={false} right>
      <p>Drawer content</p>
    </Drawer>
  )))
  .add('with menu', withInfo('with menu')(() => (
    <Drawer open={false} right>
      <Menu>
        <MenuItem>Item 1</MenuItem>
        <MenuItem>Item 2</MenuItem>
        <MenuItem>Item 3</MenuItem>
      </Menu>
    </Drawer>
  )))
  .add('with toggle', withInfo('with toggle')(() => (
    <Drawer open={false} right toggle={<a>A link toggle</a>}>
      <Menu>
        <MenuItem>Item 1</MenuItem>
        <MenuItem>Item 2</MenuItem>
        <MenuItem>Item 3</MenuItem>
      </Menu>
    </Drawer>
  )))
  .add('do not close when content clicked', withInfo('do not close when content clicked')(() => (
    <Drawer open={false} drawerClickClose={false}>
      <Menu>
        <MenuItem>Item 1</MenuItem>
        <MenuItem>Item 2</MenuItem>
        <MenuItem>Item 3</MenuItem>
      </Menu>
    </Drawer>
  )))
  .add('With header', withInfo('With header')(() => (
    <Drawer open={false} header={<p>A header</p>}>
      <Menu>
        <MenuItem>Item 1</MenuItem>
        <MenuItem>Item 2</MenuItem>
        <MenuItem>Item 3</MenuItem>
      </Menu>
    </Drawer>
  )));
