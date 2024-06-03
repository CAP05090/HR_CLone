import React from 'react';
import style from "./message.module.css";

const PopMessage = ({ testCase }) => {
  return (
    <div className={style.modal}>
      {testCase.success ? (
      <ul>
        <h1 style={{ backgroundColor:"green"}}>{testCase.message}</h1>
        <p>Got Output:</p>
        <li>{testCase.output?.join(", ")}</li>
        <p>Expected Output: </p>
        <li>{testCase.expected?.join(", ")}</li>
      </ul>
    ) : (
      <ul>
        <h1 style={{backgroundColor:"red"}}>{testCase.message}</h1>
        <p>Got Output:</p>
        <li>{testCase.output?.join(", ")}</li>
        <p>Expected Output: </p>
        <li>{testCase.expected?.join(", ")}</li>
      </ul>
    )}
    </div>
  );
};
export default PopMessage;


// def rev(st):
//     print(st[::-1])
// rev(input())
