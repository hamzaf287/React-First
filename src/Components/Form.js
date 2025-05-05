import React, { useEffect, useState } from "react";
import SavedItems from "./SavedItems";
export default function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
  });
  const [savedData, setSavedData] = useState([]);
  useEffect(() => {
    const storedData = localStorage.getItem("data");
    if (storedData) {
      setSavedData(JSON.parse(storedData));
    }
  }, []);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  function handleSubmit(e) {
    e.preventDefault();
    const updatedData = [...savedData, formData];
    setSavedData(updatedData);
    setFormData({ name: "", email: "", age: "" });
    localStorage.setItem("data", JSON.stringify(updatedData));
  }

  function deleteData(index) {
    const updatedData = savedData.filter((_, i) => i !== index);
    setSavedData(updatedData);
    localStorage.setItem("data", JSON.stringify(updatedData));
  }

  return (
    <div className="container-fluid row mt-5">
      <div className="col">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="mail" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="mail"
              name="email"
              aria-describedby="emailHelp"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="age" className="form-label">
              Age
            </label>
            <input
              type="number"
              className="form-control"
              id="age"
              name="age"
              value={formData.age}
              onChange={handleChange}
              min="0"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
      <div className="col ">
        {savedData.map((data, index) => (
          <SavedItems
            key={index}
            data={data}
            deleteData={deleteData}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}
