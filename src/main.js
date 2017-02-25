import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Root from './Root';

const render = (Component) => {
  console.log(Component);
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>, document.getElementById('root')
  );
};

render(Root);
// Hot Module Replacement API
if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./Root.js', () => {
    const newMain = require('./Root.js').default;

    render(newMain);
  });
}

