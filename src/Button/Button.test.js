import { shallow } from 'enzyme';
import Button from './index';

describe('Button', () => {
  it('Should handle clicks', () => {
    const clickSpy = jest.fn();
    const component = shallow(<Button onClick={clickSpy}> button </Button>);

    component.simulate('click');

    expect(clickSpy).toBeCalled();
  });
});
