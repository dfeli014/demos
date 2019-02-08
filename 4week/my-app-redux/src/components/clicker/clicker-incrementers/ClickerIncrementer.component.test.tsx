import React from 'react';
import { shallow } from "enzyme";
import { IClickerIncrementerProps, ClickerIncrementersComponent } from './ClickerIncrementers.component';
import Button from 'reactstrap/lib/Button';

describe('<ClickComponent />', () => {
  let props: IClickerIncrementerProps;
  beforeEach(() => {
    props = {
      clicks: 0,
      incrementAmount: 0,
      renderAt: 0,
      increment: jest.fn()
    }
  })

  const incrementAmountArr = [1, 5, 15, 350, 8000];
  incrementAmountArr.forEach(amount => {
    it(`calls the increment function with amount: ${amount} when the button is clicked`, () => {
      props.incrementAmount = amount;
      const incrementer = shallow(<ClickerIncrementersComponent {...props} />);
      const button = incrementer.find(Button).first();
      button.simulate('click');
      expect(props.increment).toBeCalledWith(amount);
      button.simulate('click');
      expect(props.increment).toBeCalledTimes(2);
    })
  })

  it('should not render a button when clicks is less than renderAt', () => {
    props = {
      ...props,
      clicks: 500,
      renderAt: 501
    }
    const incrementer = shallow(<ClickerIncrementersComponent {...props} />);
    const button = incrementer.find(Button);
    expect(button).toHaveLength(0);
  })

  it('should render a button when clicks is equal to renderAt', () => {
    props = {
      ...props,
      clicks: 500,
      renderAt: 500
    }
    const incrementer = shallow(<ClickerIncrementersComponent {...props} />);
    const button = incrementer.find(Button);
    expect(button).toHaveLength(1);
  })
  
  it('should render a button when clicks greater than renderAt', () => {
    props = {
      ...props,
      clicks: 501,
      renderAt: 500
    }
    const incrementer = shallow(<ClickerIncrementersComponent {...props} />);
    const button = incrementer.find(Button);
    expect(button).toHaveLength(1);
  })



})