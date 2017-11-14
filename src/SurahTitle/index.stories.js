import React from 'react';
import { storiesOf } from '@storybook/react';
import SurahTitle from './index';

import { withInfo } from '@storybook/addon-info';

storiesOf('SurahTitle', module)
  .add('default', withInfo('default')(() => <SurahTitle chapterNumber={1} />))
  .add('color props', withInfo('color props')(() => <SurahTitle chapterNumber={1} color="orange" />))
  .add('style props', withInfo('style props')(() => (
    <SurahTitle
      chapterNumber={1}
      color="red"
      style={{ margin: '10px 20px', borderBottom: '5px solid black' }}
    />
  )))
  .add('height and width props', withInfo('height and width props')(() => (
    <SurahTitle chapterNumber={1} color="green" height="600px" width="600px" />
  )));
