// Student.js
import React from "react";

const Student = ({ name, location }) => {
  const avatarUrl = `https://robohash.org/${name}`;

  return (
    <li>
      <img src={avatarUrl} alt={`Avatar of ${name}`} />
      <div>
        <p>Name: {name}</p>
        <p>Location: {location}</p>
      </div>
    </li>
  );
};

export default Student;
