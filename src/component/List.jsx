import React from "react";
import { Button } from "antd";
import { TODO, ALLDONE } from "../constants";

const ItemList = props => {
  //console.log(props);

  const change = (index, nowStatus) => {
    let newState = nowStatus === TODO ? ALLDONE : TODO;
    props.changeStatus(index, newState);
  };
  return (
    <div>
      {props.itemlist.map((i, index) => {
        return (
          <p key={index}>
            {i[0]}
            <Button
              type="primary"
              onClick={() => {
                change(i[2], props.property);
              }}
            >
              {props.property === TODO ? "done" : "Not yet"}
            </Button>
          </p>
        );
      })}
    </div>
  );
};
export default ItemList;
