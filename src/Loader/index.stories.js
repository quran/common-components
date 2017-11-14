import React from 'react';
import { storiesOf } from '@storybook/react';
import Loading from './index';
import Button from '../Button';

import { withInfo } from '@storybook/addon-info';

storiesOf('Loader', module)
 .add('isActive - true ', withInfo('isActive - true ')(() => (<Loading isActive> <Button>Loading</Button></Loading>)))
 .add('isActive - false ', withInfo('isActive - false ')(() => (<Loading isActive={false}> <Button>Not Loading</Button></Loading>)))
 .add('isActive - relative ', withInfo('isActive - relative ')(() => (
   <div>
     <Loading isActive relative />
   </div>
 )));
