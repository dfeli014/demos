import { IClickerState } from ".";
import { clickerTypes } from "../actions/clicker/clicker.actions";
import { chuckNorrisTypes } from "../actions/chuck-norris/ChuckNorris.actions";

const initialState: IClickerState = {
  clicks: 1500
}

export const clickerReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case clickerTypes.INCREMENT:
      return {
        ...state,
        clicks: action.payload.amount + state.clicks
      }
    case chuckNorrisTypes.BUY_JOKE:
      return {
        ...state,
        clicks: state.clicks - 1000
      }
  }
  return state;
}