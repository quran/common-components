import React from 'react';
import { storiesOf, action } from '@storybook/react';
import Radio from './index';

storiesOf('Radio', module)
  .add('with text', () => (
    <div>
      {
        ['translation', 'transliteration'].map(type => (
          <Radio key={type} id={type} name="type" handleChange={() => action(type)}>
            {type.toUpperCase()}
          </Radio>
        ))
      }
    </div>
  ))
  .add('default checked', () => (
    <div>
      {
        ['translation', 'transliteration'].map(type => (
          <Radio key={type} id={type} name="type" checked={type === 'translation'} handleChange={() => action(type)}>
            {type.toUpperCase()}
          </Radio>
        ))
      }
    </div>
  ));
