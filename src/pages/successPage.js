import React from "react";
import Input from "../component/Input";

function SuccessMsg(props) {
  return (
    <div className="successMsg">SuccessFully Registered..!{props.detail}</div>
  );
}

export default SuccessMsg;
