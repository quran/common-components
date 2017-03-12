import React from 'react';
import { storiesOf } from '@kadira/storybook';
import SurahTitle from './index';

storiesOf('SurahTitle', module)
  .addWithInfo('default', () => (
    <SurahTitle chapterNumber={1} />
  ))
  .addWithInfo('color props', () => (
    <SurahTitle chapterNumber={1} color="orange" />
  ))
  .addWithInfo('style props', () => (
    <SurahTitle chapterNumber={1} color="red" style={{ margin: '10px 20px', borderBottom: '5px solid black' }} />
  ))
  .addWithInfo('height and width props', () => (
    <SurahTitle chapterNumber={1} color="green" height="600px" width="600px" />
  ));
