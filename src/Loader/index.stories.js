import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Loading from './index';
import Button from '../Button';

storiesOf('Loader', module)
 .addWithInfo('isActive - true ', () => (<Loading isActive> <Button>Loading</Button></Loading>))
 .addWithInfo('isActive - false ', () => (<Loading isActive={false}> <Button>Not Loading</Button></Loading>));
