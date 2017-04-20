# [Quran Components](https://quran.github.io/common-components/#/) [![CircleCI](https://circleci.com/gh/quran/common-components.svg?style=svg)](https://circleci.com/gh/quran/common-components) [![npm version](https://badge.fury.io/js/quran-components.svg)](https://www.npmjs.com/package/quran-components) [![NPM](https://img.shields.io/npm/dm/quran-components.svg?style=flat-square)](https://www.npmjs.com/package/quran-components) [![NPM](http://i.imgur.com/Lk5HsBo.png)](https://quranslack.herokuapp.com)

> Quran Common Components are a set of React UI components. The aim is to promote a consistent and reusable component library. 

## Installation

#### NPM

> `npm install --save quran-components`

#### YARN

> `yarn add quran-components`

## Usage

#### ES6

```js 
import React from 'React';
import { Button, Jumbotron } from 'quran-components';

const CustomBody = () => (
  <div>
    <Button />
    <Jumbotron />
  </div>
);
```

Also to reduce file size, you can require individual components:

```js
import React from 'React';
import Button from 'quran-components/lib/Button';

const MyButton = () => (
  <div>
    <Button />
  </div>
);
```

#### ES5

```js
var React = require('react');
var component = require('quran-components');
var Button = component.Button;

var MyButton = React.createClass({
  render: function() {
    return (
      <div>
        <Button />
      <div>
    );
  }
});
```



##### [Demo](https://quran.github.io/common-components/)
