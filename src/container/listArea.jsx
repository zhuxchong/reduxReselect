import React from "react";
import { connect } from "react-redux";
import ItemList from "../component/List";
import TestButton from "../component/Test";
import { TODO, ALLDONE } from "../constants";
import { Input } from "antd";
//import { addList } from "../store/actionCreator";
import { addList, changeStatus, selectTest } from "../store/actionCreator";
import { getNum, getTodo, getAlldone } from "./selector";

const Search = Input.Search;
const ListArea = props => {
  //console.log(props);
  const alldone = props.alldone;
  const todo = props.todo;
  return (
    <div>
      <Search
        placeholder="new task"
        onSearch={v => {
          props.addToList(v);
        }}
        style={{ width: 200 }}
      />
      <p>Todo</p>
      <ItemList
        property={TODO}
        itemlist={todo}
        changeStatus={props.changeStatus}
      />
      <p>Alldone</p>
      <ItemList
        property={ALLDONE}
        itemlist={alldone}
        changeStatus={props.changeStatus}
      />
      {/* <Button type="danger" onClick={props.selectTest}>
        TestSelect{props.testdata}
      </Button> */}
      <TestButton num={props.testdata} selectTest={props.selectTest} />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    //actionList: getVisibleTodos(state),
    alldone: getAlldone(state),
    todo: getTodo(state),
    testdata: getNum(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addToList(task) {
      dispatch(addList(task));
    },
    changeStatus(index, newStatus) {
      dispatch(changeStatus(index, newStatus));
    },
    selectTest() {
      dispatch(selectTest());
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListArea);
