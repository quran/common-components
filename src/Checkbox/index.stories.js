import React from 'react';
import { storiesOf, action } from '@storybook/react';
import Checkbox from './index';

storiesOf('Checkbox', module)
  .add('with text', () => (
    <Checkbox key="translation" id="translation" name="type" handleChange={action('translation')}>
      translation
    </Checkbox>
  ))
  .add('with lots of text', () => (
    <div style={{ width: 150 }}>
      <Checkbox key="translation" id="translation" name="type" handleChange={action('translation')}>
        translationasdasdasdasdsadasdasdasdasd
      </Checkbox>
    </div>
  ))
  .add('Disabled', () => (
    <div style={{ width: 150 }}>
      <Checkbox key="translation" id="translation" name="type" handleChange={action('translation')} disabled>
        I am disabled
      </Checkbox>
    </div>
  ));
