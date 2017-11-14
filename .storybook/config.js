import { configure, setAddon } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';

setOptions({
  name: 'Common Components',
  url: 'https://github.com/quran/common-components',
  goFullScreen: false,
  showLeftPanel: true,
  showDownPanel: true,
  showSearchBox: false,
  downPanelInRight: false,
  sortStoriesByKind: true,
});

const req = require.context('../src', true, /.stories.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
