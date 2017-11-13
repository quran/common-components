import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Checkbox from './index';

storiesOf('Checkbox', module)
  .addWithInfo('with text', () => (
    <Checkbox key="translation" id="translation" name="type" handleChange={action('translation')}>
      translation
    </Checkbox>
  ))
  .addWithInfo('with lots of text', () => (
    <div style={{ width: 150 }}>
      <Checkbox key="translation" id="translation" name="type" handleChange={action('translation')}>
        translationasdasdasdasdsadasdasdasdasd
      </Checkbox>
    </div>
  ))
  .addWithInfo('Disabled', () => (
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
  ));
