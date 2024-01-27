// AddStudentForm.js
import React, { useState } from "react";

const AddStudentForm = ({ setStudents }) => {
  const [formData, setFormData] = useState({ name: "", location: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form validation logic here
    setStudents((prevStudents) => [...prevStudents, formData]);
    setFormData({ name: "", location: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Student</h2>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </label>
      <label>
        Location:
        <select
          name="location"
          value={formData.location}
          onChange={handleChange}
        >
          <option value="">Select Location</option>
          <option value="NZ">NZ</option>
          <option value="AU">AU</option>
        </select>
      </label>
      <button type="submit">Add Student</button>
    </form>
  );
};

export default AddStudentForm;
