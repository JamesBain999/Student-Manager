// StudentList.js
import React, { useState } from "react";
import Student from "./Student";
import AddStudentForm from "./AddStudentForm";

const StudentList = () => {
  const [students, setStudents] = useState([]);
  const [locationFilter, setLocationFilter] = useState("All");

  const handleFilterStudents = (filter) => {
    setLocationFilter(filter);
  };

  const handleReverseList = () => {
    setStudents([...students].reverse());
  };

  const handleDeleteStudent = (index) => {
    const updatedStudents = [...students];
    updatedStudents.splice(index, 1);
    setStudents(updatedStudents);
  };

  const filteredStudents = students.filter(
    (student) => locationFilter === "All" || student.location === locationFilter
  );

  return (
    <div>
      <h2>Student List</h2>
      <div>
        <button onClick={() => handleFilterStudents("NZ")}>Filter NZ</button>
        <button onClick={() => handleFilterStudents("AU")}>Filter AU</button>
        <button onClick={() => handleFilterStudents("All")}>Show All</button>
        <button onClick={handleReverseList}>Reverse List</button>
      </div>
      <ul>
        {filteredStudents.map((student, index) => (
          <div key={index}>
            <Student {...student} />
            <button onClick={() => handleDeleteStudent(index)}>Delete</button>
          </div>
        ))}
      </ul>
      <AddStudentForm setStudents={setStudents} />
    </div>
  );
};

export default StudentList;
