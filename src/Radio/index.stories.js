import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Radio from './index';

import { withInfo } from '@storybook/addon-info';

storiesOf('Radio', module)
  .add('with text', withInfo('with text')(() => (
    <div>
      {['translation', 'transliteration'].map(type => (
        <Radio key={type} id={type} name="type" handleChange={() => action(type)}>
          {type.toUpperCase()}
        </Radio>
      ))}
    </div>
  )))
  .add('default checked', withInfo('default checked')(() => (
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
  )));
