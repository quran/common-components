import React from 'react';
import { storiesOf, action } from '@storybook/react';
import Drawer from './index';
import Menu, { MenuItem } from '../Menu';

storiesOf('Drawer', module)
  .add('default', () => (
    <Drawer open={false}>
      <p>Drawer content</p>
    </Drawer>
  ))
  .add('with handleOpen function', () => (
    <Drawer handleOpen={action('handleOpen')} open={false}>
      <p>Drawer</p>
    </Drawer>
  ))
  .add('right side', () => (
    <Drawer open={false} right>
      <p>Drawer content</p>
    </Drawer>
  ))
  .add('with menu', () => (
    <Drawer open={false} right>
      <Menu>
        <MenuItem>Item 1</MenuItem>
        <MenuItem>Item 2</MenuItem>
        <MenuItem>Item 3</MenuItem>
      </Menu>
    </Drawer>
  ))
  .add('with toggle', () => (
    <Drawer open={false} right toggle={<a>A link toggle</a>}>
      <Menu>
        <MenuItem>Item 1</MenuItem>
        <MenuItem>Item 2</MenuItem>
        <MenuItem>Item 3</MenuItem>
      </Menu>
    </Drawer>
  ))
  .add('do not close when content clicked', () => (
    <Drawer open={false} drawerClickClose={false}>
      <Menu>
        <MenuItem>Item 1</MenuItem>
        <MenuItem>Item 2</MenuItem>
        <MenuItem>Item 3</MenuItem>
      </Menu>
    </Drawer>
  ))
  .add('With header', () => (
    <Drawer open={false} header={<p>A header</p>}>
      <Menu>
        <MenuItem>Item 1</MenuItem>
        <MenuItem>Item 2</MenuItem>
        <MenuItem>Item 3</MenuItem>
      </Menu>
    </Drawer>
  ));
