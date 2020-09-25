import { shallow, mount } from "enzyme";

import Modes from "./index";


/** @test {Mode Component} */
describe("Game Modes Component", () => {
  const func1=jest.fn();
  it("should render without crashing", () => {
    const wrapper = shallow(<Modes  />);

    expect(wrapper).toMatchSnapshot();
  });

  it("should handle Mode of Game", () => {
    const wrapper = mount(<Modes onToggleMode={func1} currentMode={{label:'test'}}/>);
    
    const modeChangeButton = wrapper.find('button');
    modeChangeButton.simulate('click');
    expect(func1).toHaveBeenCalled();
   
    
});

});
