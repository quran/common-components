import { configure, setAddon } from '@kadira/storybook';
import { setOptions } from '@kadira/storybook-addon-options';
import infoAddon from '@kadira/react-storybook-addon-info';

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
  showDownPanel: false,
  showSearchBox: false,
  downPanelInRight: false,
  sortStoriesByKind: true,
});

configure(loadStories, module);
