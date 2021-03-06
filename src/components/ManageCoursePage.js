import React, { useState } from "react";
import CourseForm from "./CourseForm";

const ManageCoursePage = (props) => {
  const [course, setCourse] = useState({
    id: null,
    slug: "",
    title: "",
    authroId: null,
    category: "",
  });

  function handleChange({ target }) {
    const updatedCourse = { ...course, [target.name]: target.value };
    setCourse(updatedCourse);
  }
  return (
    <>
      <h2>Manage Course</h2>
      <CourseForm course={course} onChange={handleChange} />
    </>
  );
};

export default ManageCoursePage;
