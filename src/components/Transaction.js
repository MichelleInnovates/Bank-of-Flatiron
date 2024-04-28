import React from "react";

function Transaction({ date,description,category,amount,onDelete,index}) {
  return (
    <tr>
      <td>{date}</td>
      <td>{description}</td>
      <td>{category}</td>
      <td>{amount}</td>
      <td><button onClick={()=>onDelete(index)}>delete</button></td>
    </tr>
  );
}

export default Transaction;