import React from "react";

export default function SavedItems({data,deleteData,index}) {
  return (
    <div>
      <h4>Saved Data</h4>
        <div className="container" key={index}>
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
        </div>
    </div>
  );
}
