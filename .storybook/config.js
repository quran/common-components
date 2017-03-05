import { configure } from '@kadira/storybook';
import { setOptions } from '@kadira/storybook-addon-options';
const req = require.context('../src', true, /.stories.js$/)

function loadStories() {
  req.keys().forEach((filename) => req(filename))
}

setOptions({
  name: 'Common Components',
  url: 'https://github.com/quran/common-components',
  goFullScreen: true,
  showLeftPanel: false,
  showDownPanel: false,
  showSearchBox: false,
  downPanelInRight: false,
  sortStoriesByKind: true,
});

configure(loadStories, module);
