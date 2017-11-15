import 'isomorphic-fetch';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import { config } from '../package';
import jsdom from 'jsdom';
import chai from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import chaiEnzyme from 'chai-enzyme';
const doc = jsdom.jsdom('<!doctype html><html><body><div id="render-here"></div></body></html>');
const win = doc.defaultView;

chai.use(sinonChai);
chai.use(chaiEnzyme());
chai.should();
global.expect = chai.expect;
global.sinon = sinon.sandbox.create();
global.document = doc;
global.window = win;
global.log = console.log;
Object.keys(window).forEach((key) => {
  if (!(key in global)) {
    global[key] = window[key];
  }
});

// afterEach('setup: restore sinon mocks', () => global.sinon.restore());
global.testAsyncExpectations = (done, testExpectations) => {
  setTimeout(() => {
    testExpectations();
    done();
  }, 0);
};
