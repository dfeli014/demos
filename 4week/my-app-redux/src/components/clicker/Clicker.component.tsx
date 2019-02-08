import React from 'react';
import { ClickerDisplayComponent } from './clicker-display/ClickerDisplay.component';
import { ClickerIncrementersComponent } from './clicker-incrementers/ClickerIncrementers.component';
import { connect } from 'react-redux';
import { IState, IClickerState } from '../../reducers';
import { increment } from '../../actions/clicker/clicker.actions';

export interface ICLickerProps {
  clicker: IClickerState,
  increment: (amount: number) => void
}

export class ClickerComponent extends React.Component<ICLickerProps, any> {

  constructor(props) {
    super(props);
  }

  render() {
    const {clicks} = this.props.clicker;
    // const {clicks} = this.props;
    const incrementers: any[] = [];
    for (let i = 100; i <= clicks; i+=100) {
      incrementers.push(<ClickerIncrementersComponent key={'incrementer-' + i} {...{
        clicks,
        incrementAmount: i/10,
        renderAt: i,
        increment: this.props.increment
      }} /> )
    }
    return (
      <div>
        <ClickerDisplayComponent clicks={clicks}/>
        <ClickerIncrementersComponent {...{
          clicks,
          incrementAmount: 1,
          renderAt: 0,
          increment: this.props.increment
        }}/>
        <br />
        <ClickerIncrementersComponent {...{
          clicks,
          incrementAmount: 5,
          renderAt: 10,
          increment: this.props.increment
        }}/>
        {incrementers}
      </div>
    )
  }

}

const mapStateToProps = (state: IState) => {
  return {
    clicker: state.clicker
  }
}

const mapDispatchToProps = {
  increment
}

export default connect(mapStateToProps, mapDispatchToProps)(ClickerComponent);