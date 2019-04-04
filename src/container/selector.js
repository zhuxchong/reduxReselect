import { createSelector } from "reselect";
const getData = state => state.list;
export const getVisibleTodos = createSelector(
  getData,
  list => {
    console.log("list change");
    return list;
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
