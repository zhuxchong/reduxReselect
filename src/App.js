import React from "react";
import "antd/dist/antd.css";
import { Provider } from "react-redux";
import store from "./store";
import ListArea from "./container/listArea";
const App = props => {
  return (
    <div>
      <Provider store={store}>
        <ListArea />
      </Provider>
    </div>
  );
};

export default App;

// const mapStateToProps = state => {
//   return {
//     item1: state.item1,
//     item2: state.item2
//   };
// };
