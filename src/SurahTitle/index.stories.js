import React from 'react';
import { storiesOf } from '@storybook/react';
import SurahTitle from './index';

import { withInfo } from '@storybook/addon-info';

storiesOf('SurahTitle', module)
  .addDecorator(story => (
    <div style={{ height: 1500 }}>
      <style>
        {`
          body{ margin: 0px; }
          .quran__ChapterOne path {
            fill: green;
          }
          .quran__ChapterOne{ background: orange;}
        `}
      </style>
      {story()}
    </div>
  ))
  .add('default', withInfo('default')(() => <SurahTitle chapterNumber={1} />))
  .add(
    'color props',
    withInfo('color props')(() => <SurahTitle chapterNumber={1} color="orange" />),
  )
  .add(
    'style props',
    withInfo('style props')(() => (
      <SurahTitle
        chapterNumber={1}
        color="red"
        style={{ margin: '10px 20px', borderBottom: '5px solid black' }}
      />
    )),
  )
  .add(
    'style fill via css (classname)',
    withInfo('style props')(() => (
      <SurahTitle
        chapterNumber={1}
        color="red"
        className="quran__ChapterOne"
        style={{ margin: '10px 20px' }}
      />
    )),
  )
  .add(
    'height and width props',
    withInfo('height and width props')(() => (
      <SurahTitle chapterNumber={1} color="green" height="600px" width="600px" />
    )),
  );
