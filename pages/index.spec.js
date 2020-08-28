import { mount } from 'enzyme';

import Index from './index';

/** @test {Title Component} */
describe('Title Component', () => {
  it('should render without crashing', () => {
    const wrapper = mount(<Index label="test" />);

    expect(wrapper.find('h1')).toHaveLength(1);
  });
});