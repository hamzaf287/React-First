import React from 'react'

export default function EditFrom(props) {
  return (
    <div>
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
    </div>
  )
}
    