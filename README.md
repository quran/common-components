#[Quran Components](https://quran.github.io/common-components/#/) [![CircleCI](https://circleci.com/gh/quran/common-components.svg?style=svg)](https://circleci.com/gh/quran/common-components) [![npm version](https://badge.fury.io/js/quran-components.svg)](https://www.npmjs.com/package/quran-components) [![NPM](https://img.shields.io/npm/dm/quran-components.svg?style=flat-square)](https://www.npmjs.com/package/quran-components) [![NPM](http://i.imgur.com/Lk5HsBo.png)](https://quranslack.herokuapp.com)

Quran Common Components are a set of UI components. 

## Install

###NPM

` npm install --save quran-components`

###YARN

` yarn add quran-components`

## Usage
###ES6

```js 
	import { Button, Jumbotron } from 'quran-components';

	render() {
		return (
			<div>
				<Button />
				<Jumbotron />
			<div>
		)
	}
```

also to reduce file size, you can require individual components:

```js 
	import Button from 'quran-components/lib/Button';
	render() {
		return (
			<div>
				<Button />
			<div>
		)
	}
```

###ES5

```js 
	const component = require('quran-components');
	const Button = component.Button;

	render() {
   		return (
			<div>
				<Button />
			<div>)
	}
```



####[Demo](https://quran.github.io/common-components/)
