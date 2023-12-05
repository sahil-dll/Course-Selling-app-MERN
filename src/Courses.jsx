import { useDebugValue, useEffect, useState } from "react";
import Card from "@mui/material/Card";
import { Typography } from "@mui/material";
function Courses() {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    function callback2(data) {
      setCourses(data.courses);
      //   console.log(data);
    }
    function callback1(res) {
      res.json().then(callback2);
    }
    fetch("http://localhost:3000/admin/courses", {
      method: "GET",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    }).then(callback1);
  }, []);
  return (
    <div
      style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
      {courses.map((course) => (
        <Course course={course}></Course>
      ))}
    </div>
  );
}
export function Course(props) {
  return (
    <Card
      style={{
        border: "2px solid black",
        margin: 10,
        width: 300,
        minHeight: 200,
      }}>
      <Typography variant="h5" textAlign={"center"}>
        {props.course.title}
      </Typography>
      <Typography variant="subtitle1">{props.course.description}</Typography>
      <img src={props.course.image} style={{ minWidth: 300 }}></img>
    </Card>
  );
}

export default Courses;
