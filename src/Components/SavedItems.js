import React from "react";

export default function SavedItems({ data, deleteData, index }) {
  return (
          <tr>
            <th scope="row">{index+1}</th>
            <td>{data.name}</td>
            <td>{data.email}</td>
            <td>{data.age}</td>
            <td> 
              <button className="btn btn-danger" onClick={() =>deleteData(index)}>Delete</button>
            </td>
          </tr>
      /*<div className="container" key={index}>
        <p>
          <strong>Name:</strong> {data.name}
        </p>
        <p>
          <strong>Email:</strong> {data.email}
        </p>
        <p>
          <strong>Age:</strong> {data.age}
        </p>
        <hr />
        <button className="btn btn-danger" onClick={() => deleteData(index)}>
          Delete
        </button>
      </div>*/
  );
}
