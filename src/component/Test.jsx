import React from "react";
import { Button } from "antd";
const TestButton = props => {
  return (
    <Button type="danger" onClick={props.selectTest}>
      {props.num}
    </Button>
  );
};
export default TestButton;
