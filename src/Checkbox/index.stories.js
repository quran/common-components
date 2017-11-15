import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Checkbox from './index';

import { withInfo } from '@storybook/addon-info';

storiesOf('Checkbox', module)
  .add('with text', withInfo('with text')(() => (
    <Checkbox key="translation" id="translation" name="type" handleChange={action('translation')}>
      translation
    </Checkbox>
  )))
  .add('with lots of text', withInfo('with lots of text')(() => (
    <div style={{ width: 150 }}>
      <Checkbox key="translation" id="translation" name="type" handleChange={action('translation')}>
        translationasdasdasdasdsadasdasdasdasd
      </Checkbox>
    </div>
  )))
  .add('Disabled', withInfo('Disabled')(() => (
    <div style={{ width: 150 }}>
      <Checkbox
        key="translation"
        id="translation"
        name="type"
        handleChange={action('translation')}
        disabled
      >
        I am disabled
      </Checkbox>
    </div>
  )));
