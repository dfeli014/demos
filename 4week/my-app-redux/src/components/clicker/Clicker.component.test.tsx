import React from 'react';
import { shallow } from "enzyme";
import { ClickerComponent, ICLickerProps } from "./Clicker.component";
import { ClickerDisplayComponent } from './clicker-display/ClickerDisplay.component';
import { ClickerIncrementersComponent } from './clicker-incrementers/ClickerIncrementers.component';

describe('<ClickComponent />', () => {
  let props: ICLickerProps;
  beforeEach(() => {
    props = {
      clicker: {
        clicks: 0
      },
      increment: jest.fn()
    }
  })
  it('renders one <ClickerDisplayComponent />', () => {
    const clicker = shallow(<ClickerComponent {...props} />);
    expect(clicker.find(ClickerDisplayComponent)).toHaveLength(1);
  })

  const clickValues = [0, 1, 2, 10, 15, 5000, 350];
  clickValues.forEach(value => {
    const expectedIncrementers = Math.floor(value / 100) + 2;
    it(`renders ${expectedIncrementers} incrementers for clicks=${value}`, () => {
      props.clicker.clicks = value;
      const clicker = shallow(<ClickerComponent {...props} />);
      expect(clicker.find(ClickerIncrementersComponent)).toHaveLength(expectedIncrementers);
    })
  })



})