import { shallow, mount } from "enzyme";

import Game from "./index";
import Modes from "../Modes";
import Player from "../Player";

const data = {
  weapons: [
    {
      beats: ["Scissors"],
      icon: "rock.svg",
      label: "Rock",
    },
    {
      beats: ["Rock"],
      icon: "paper.svg",
      label: "Paper",
    },
    {
      beats: ["Paper"],
      icon: "scissors.svg",
      label: "Scissors",
    },
  ],
  modes: [
    {
      label: "PLAYER VS COMPUTER",
      player1Label: "PLAYER",
      player2Label: "COMPUTER",
    },
    {
      label: "COMPUTER VS COMPUTER",
      player1Label: "COMPUTER 1",
      player2Label: "COMPUTER 2",
    },
  ],
};
/** @test {Game Component} */
describe("Game Component", () => {
  it("should render without crashing", () => {
    const wrapper = shallow(<Game label="test" />);

    expect(wrapper).toMatchSnapshot();
  });

  it("should render Mode of Game", () => {
    const wrapper = mount(<Game data={data} />);
    const inst = wrapper.instance();
    const mode = wrapper.find(Modes);
    expect(mode.find('.label').text()).toEqual(data.modes[0].label);
    mode.find('button').simulate('click');
    expect(mode.find('.label').text()).toEqual(data.modes[1].label);
    
});
it("should render Players of Game", () => {
    const wrapper = mount(<Game data={data} />);
    const inst = wrapper.instance();
    const player1 = wrapper.find(Player).at(0);
    expect(player1.find('span').at(0).text()).toEqual(data.modes[0].player1Label);
    const player2 = wrapper.find(Player).at(1);
    expect(player2.find('span').at(0).text()).toEqual(data.modes[0].player2Label);

    
});
});
