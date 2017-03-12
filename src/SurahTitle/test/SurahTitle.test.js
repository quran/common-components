import React from 'react';
import { shallow } from 'enzyme';
import Title from '../index';

const chapter = {
  id: 1
};

describe('<Title />', () => {
  const wrapper = shallow(<Title chapterNumber={chapter.id} color="#044455" className="qurancom-title" />);

  it('should render', () => {
		expect(wrapper).to.be.ok; // eslint-disable-line
		expect(wrapper.find('.qurancom-title')).to.be.ok; // eslint-disable-line
  });

  it('should svg', () => {
		expect(wrapper.find('svg')).to.be.ok; // eslint-disable-line
		expect(wrapper.find('path')).to.be.ok; // eslint-disable-line
  });
});
