import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Checkbox from './index';

storiesOf('Checkbox', module)
  .add('with text', () => (
    <Checkbox key="translation" id="translation" name="type" handleChange={action('translation')}>
      translation
    </Checkbox>
  ));
