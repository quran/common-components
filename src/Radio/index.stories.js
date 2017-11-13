import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Radio from './index';

storiesOf('Radio', module)
  .addWithInfo('with text', () => (
    <div>
      {['translation', 'transliteration'].map(type => (
        <Radio key={type} id={type} name="type" handleChange={() => action(type)}>
          {type.toUpperCase()}
        </Radio>
      ))}
    </div>
  ))
  .addWithInfo('default checked', () => (
    <div>
      {['translation', 'transliteration'].map(type => (
        <Radio
          key={type}
          id={type}
          name="type"
          checked={type === 'translation'}
          handleChange={() => action(type)}
        >
          {type.toUpperCase()}
        </Radio>
      ))}
    </div>
  ));
