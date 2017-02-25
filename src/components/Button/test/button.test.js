import Button from '../index';
import { shallow } from 'enzyme';
describe('<Button />', () => {
  it('Should Render', () => {
    const component = shallow(<Button />);
    expect(component.find('button').exists()).to.eql(true);
  });
});