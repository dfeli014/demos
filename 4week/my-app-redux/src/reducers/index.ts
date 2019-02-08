import { combineReducers } from "redux";
import { clickerReducer } from "./Clicker.reducer";
import { chuckNorrisReducer } from "./ChuckNorris.reducer";

export interface IClickerState {
  clicks: number
}

export interface IChuckNorrisState {
  joke: string,
  disableBuyJoke: boolean
}

export interface IState {
  clicker: IClickerState,
  chuckNorris: IChuckNorrisState
}

export const state = combineReducers<IState>({
  clicker: clickerReducer,
  chuckNorris: chuckNorrisReducer
})