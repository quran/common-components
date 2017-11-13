import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Drawer from './index';
import Menu, { MenuItem } from '../Menu';

storiesOf('Drawer', module)
  .addWithInfo('default', () => (
    <Drawer open={false}>
      <p>Drawer content</p>
    </Drawer>
  ))
  .addWithInfo('with handleOpen function', () => (
    <Drawer handleOpen={action('handleOpen')} open={false}>
      <p>Drawer</p>
    </Drawer>
  ))
  .addWithInfo('right side', () => (
    <Drawer open={false} right>
      <p>Drawer content</p>
    </Drawer>
  ))
  .addWithInfo('with menu', () => (
    <Drawer open={false} right>
      <Menu>
        <MenuItem>Item 1</MenuItem>
        <MenuItem>Item 2</MenuItem>
        <MenuItem>Item 3</MenuItem>
      </Menu>
    </Drawer>
  ))
  .addWithInfo('with toggle', () => (
    <Drawer open={false} right toggle={<a>A link toggle</a>}>
      <Menu>
        <MenuItem>Item 1</MenuItem>
        <MenuItem>Item 2</MenuItem>
        <MenuItem>Item 3</MenuItem>
      </Menu>
    </Drawer>
  ))
  .addWithInfo('do not close when content clicked', () => (
    <Drawer open={false} drawerClickClose={false}>
      <Menu>
        <MenuItem>Item 1</MenuItem>
        <MenuItem>Item 2</MenuItem>
        <MenuItem>Item 3</MenuItem>
      </Menu>
    </Drawer>
  ))
  .addWithInfo('With header', () => (
    <Drawer open={false} header={<p>A header</p>}>
      <Menu>
        <MenuItem>Item 1</MenuItem>
        <MenuItem>Item 2</MenuItem>
        <MenuItem>Item 3</MenuItem>
      </Menu>
    </Drawer>
  ));
