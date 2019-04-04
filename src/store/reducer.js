import { ALLDONE, TODO } from "../constants";

const defaultState = {
  list: [["defaultToDo", TODO, 0], ["defaultAllDone", ALLDONE, 1]],
  testdata: 123
};

export default (state = defaultState, action) => {
  let count = state.list.length;

  if (action.type === "ADD_TASK") {
    const newState = JSON.parse(JSON.stringify(state));
    newState.list = [...newState.list, [action.data, TODO, count]];
    return newState;
  }
  if (action.type === "CHANGE_STATUS") {
    const newState = JSON.parse(JSON.stringify(state));

    newState.list[action.index][1] = action.newStatus;
    return newState;
  }
  if (action.type === "TEST") {
    const newState = JSON.parse(JSON.stringify(state));
    newState.testdata++;
    return newState;
  } else {
    return state;
  }
};
