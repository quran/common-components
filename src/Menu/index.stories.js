import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Menu, { MenuItem } from './index';
import Icon from '../Icon';

storiesOf('Menu', module)
  .addWithInfo('default', 'Basic usage of the menu', () => (
    <Menu>
      <MenuItem>Item 1</MenuItem>
      <MenuItem>Item 2</MenuItem>
      <MenuItem>Item 3</MenuItem>
    </Menu>
  ))
  .add('bordered', () => (
    <Menu bordered>
      <MenuItem>Item 1</MenuItem>
      <MenuItem>Item 2</MenuItem>
      <MenuItem>Item 3</MenuItem>
    </Menu>
  ))
  .add('divider', () => (
    <Menu>
      <MenuItem>Item 1</MenuItem>
      <MenuItem divider />
      <MenuItem>Item 2</MenuItem>
      <MenuItem>Item 3</MenuItem>
    </Menu>
  ))
  .add('with icons', () => (
    <Menu>
      <MenuItem icon={<Icon type="calendar" />}>Item 1</MenuItem>
      <MenuItem icon={<Icon type="calendar" />}>Item 2</MenuItem>
      <MenuItem icon={<Icon type="calendar" />}>Item 3</MenuItem>
    </Menu>
  ))
  .add('on click', () => (
    <Menu>
      <MenuItem onClick={action('clicked')}>Item 1</MenuItem>
      <MenuItem onClick={action('clicked')}>Item 2</MenuItem>
      <MenuItem onClick={action('clicked')}>Item 3</MenuItem>
    </Menu>
  ));
