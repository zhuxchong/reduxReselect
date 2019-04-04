export const addList = data => {
  //console.log(data);
  return {
    type: "ADD_TASK",
    data: data
  };
};
export const changeStatus = (index, newStatus) => {
  return {
    type: "CHANGE_STATUS",
    index,
    newStatus
  };
};
export const selectTest = () => {
  return {
    type: "TEST"
  };
};
