import { shallow } from 'enzyme';

import Index from '../pages/index';

/** @test {Title Component} */
describe('Title Component', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<Index label="test" />);

    expect(wrapper).toMatchSnapshot();
  });
});