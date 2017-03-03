import { configure } from '@kadira/storybook';
import { setOptions } from '@kadira/storybook-addon-options';
const req = require.context('../src/components', true, /.stories.js$/)

function loadStories() {
  req.keys().forEach((filename) => req(filename))
}

setOptions({
  name: 'Common Component',
  url: 'https://github.com/quran/common-components',
  goFullScreen: false,
  showLeftPanel: true,
  showDownPanel: true,
  showSearchBox: false,
  downPanelInRight: true,
  sortStoriesByKind: true,
});

configure(loadStories, module);
