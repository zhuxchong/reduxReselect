import { createSelector } from "reselect";
import { TODO, ALLDONE } from "../constants";

const getData = state => state.list;
export const getTodo = createSelector(
  getData,
  list => {
    const result = list.filter(i => {
      return i[1] === TODO;
    });
    return result;
  }
);
export const getAlldone = createSelector(
  getData,
  list => {
    const result = list.filter(i => {
      return i[1] === ALLDONE;
    });
    return result;
  }
);
const testNum = state => state.testdata;
export const getNum = createSelector(
  [testNum],
  testdata => {
    console.log("num change");
    return testdata;
  }
);
