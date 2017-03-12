import React from 'react';
import { shallow } from 'enzyme';
import Button from '../index';

describe('<Button />', () => {
  it('Should Render and simulate click ', () => {
    const onClickSpy = sinon.spy();
    const component = shallow(<Button onClick={() => onClickSpy()}>Hello</Button>);
    expect(component.find('button').exists()).to.eql(true);
    component.find('button').simulate('click');
    expect(onClickSpy).to.have.called; // eslint-disable-line
  });
});
