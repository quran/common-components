import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Menu, { MenuItem } from './index';
import Icon from '../Icon';
import Checkbox from '../Checkbox';
import Radio from '../Radio';

import { withInfo } from '@storybook/addon-info';

storiesOf('Menu', module)
  .add('default', withInfo('Basic usage of the menu')(() => (
    <Menu>
      <MenuItem>Item 1</MenuItem>
      <MenuItem>Item 2</MenuItem>
      <MenuItem>Item 3</MenuItem>
    </Menu>
  )))
  .add('bordered', withInfo('bordered')(() => (
    <Menu bordered>
      <MenuItem>Item 1</MenuItem>
      <MenuItem>Item 2</MenuItem>
      <MenuItem>Item 3</MenuItem>
    </Menu>
  )))
  .add('divider', withInfo('divider')(() => (
    <Menu>
      <MenuItem>Item 1</MenuItem>
      <MenuItem divider />
      <MenuItem>Item 2</MenuItem>
      <MenuItem>Item 3</MenuItem>
    </Menu>
  )))
  .add('with icons', withInfo('with icons')(() => (
    <Menu>
      <MenuItem icon={<Icon type="calendar" />}>Item 1</MenuItem>
      <MenuItem icon={<Icon type="calendar" />}>Item 2</MenuItem>
      <MenuItem icon={<Icon type="calendar" />}>Item 3</MenuItem>
    </Menu>
  )))
  .add('on click', withInfo('on click')(() => (
    <Menu>
      <MenuItem onClick={action('clicked')}>Item 1</MenuItem>
      <MenuItem onClick={action('clicked')}>Item 2</MenuItem>
      <MenuItem onClick={action('clicked')}>Item 3</MenuItem>
    </Menu>
  )))
  .add('menu inside menu', withInfo('menu inside menu')(() => (
    <Menu>
      <MenuItem icon={<Icon type="calendar" />}>Item 1</MenuItem>
      <MenuItem icon={<Icon type="calendar" />}>Item 2</MenuItem>
      <MenuItem
        icon={<Icon type="calendar" />}
        menu={
          <Menu>
            <MenuItem icon={<Icon type="calendar" />}>Item 1</MenuItem>
            <MenuItem icon={<Icon type="calendar" />}>Item 2</MenuItem>
            <MenuItem icon={<Icon type="calendar" />}>Item 3</MenuItem>
          </Menu>
        }
      >
        Item 3
      </MenuItem>
    </Menu>
  )))
  .add('checkboxes', withInfo('checkboxes')(() => (
    <Menu>
      <MenuItem>
        <Checkbox
          key="translation1"
          id="translation¡"
          name="type1"
          handleChange={action('translation')}
        >
          translation
        </Checkbox>
      </MenuItem>
      <MenuItem>
        <Checkbox
          key="translation2"
          id="translation2"
          name="type2"
          handleChange={action('translation')}
        >
          translation
        </Checkbox>
      </MenuItem>
      <MenuItem>
        <Checkbox
          key="translation3"
          id="translation3"
          name="type3"
          handleChange={action('translation')}
        >
          translation
        </Checkbox>
      </MenuItem>
    </Menu>
  )))
  .add('radio', withInfo('radio')(() => (
    <Menu>
      {['translation', 'transliteration'].map(type => (
        <MenuItem>
          <Radio key={type} id={type} name="type" handleChange={action(type)}>
            {type.toUpperCase()}
          </Radio>
        </MenuItem>
      ))}
    </Menu>
  )))
  .add(
  'large',
  withInfo('Menu with all the checkboxes, radios and menu dropdowns')(() => (
    <Menu>
      <MenuItem icon={<Icon type="calendar" />}>Item 1</MenuItem>
      <MenuItem icon={<Icon type="calendar" />}>Item 2</MenuItem>
      <MenuItem
        icon={<Icon type="calendar" />}
        menu={
          <Menu>
            <MenuItem icon={<Icon type="calendar" />}>Item 1</MenuItem>
            <MenuItem icon={<Icon type="calendar" />}>Item 2</MenuItem>
            <MenuItem icon={<Icon type="calendar" />}>Item 3</MenuItem>
          </Menu>
          }
      >
          Item 3
        </MenuItem>
      <MenuItem divider />
      {['Translation', 'Transliteration'].map(type => (
        <MenuItem>
          <Radio key={type} id={type} name="type" handleChange={action(type)}>
            {type}
          </Radio>
        </MenuItem>
        ))}
      <MenuItem divider />
      <MenuItem>
        <Checkbox
          key="translation1"
          id="translation¡"
          name="type1"
          handleChange={action('translation')}
        >
            translation
          </Checkbox>
      </MenuItem>
      <MenuItem>
        <Checkbox
          key="translation2"
          id="translation2"
          name="type2"
          handleChange={action('translation')}
        >
            translation
          </Checkbox>
      </MenuItem>
      <MenuItem>
        <Checkbox
          key="translation3"
          id="translation3"
          name="type3"
          handleChange={action('translation')}
        >
            translation
          </Checkbox>
      </MenuItem>
    </Menu>
    ))
);
