import { configure, setAddon } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';
import infoAddon from '@storybook/addon-info';

const req = require.context('../src', true, /.stories.js$/)

setAddon(infoAddon);

function loadStories() {
  req.keys().forEach((filename) => req(filename))
}

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

configure(loadStories, module);
