import { shallow } from 'enzyme';

import Game from './index';

/** @test {Title Component} */
describe('Title Component', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<Game label="test" />);

    expect(wrapper).toMatchSnapshot();
  });
});