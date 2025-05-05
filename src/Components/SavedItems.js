import React from "react";

export default function SavedItems({ data, deleteData, index ,editing}) {
  return (
    <tr>
      <th scope="row">{index + 1}</th>
      <td>{data.name}</td>
      <td>{data.email}</td>
      <td>{data.age}</td>
      <td>
        <button className="btn btn-danger" onClick={() => deleteData(index)}>
          Delete
        </button>
      </td>
      <td>
        <button className="btn btn-warning" onClick={() => editing(index)}>
          Update
        </button>
      </td>
    </tr>
  );
}
