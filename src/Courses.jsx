import { useDebugValue, useEffect, useState } from "react";
import Card from "@mui/material/Card";
import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
function Courses() {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    function callback2(data) {
      setCourses(data.courses);
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
        <Course key={course._id} course={course} />
      ))}
    </div>
  );
}
export function Course({ course }) {
  const navigate = useNavigate();
  return (
    <Card
      style={{
        border: "2px solid black",
        margin: 10,
        width: 300,
        minHeight: 200,
      }}>
      <Typography variant="h5" textAlign={"center"}>
        {course.title}
      </Typography>
      <Typography variant="subtitle1">{course.description}</Typography>
      <img src={course.imageLink} style={{ minWidth: 300 }}></img>
      <div style={{ display: "flex", justifyContent: "center", marginTop: 20 }}>
        <Button
          variant="contained"
          size="large"
          onClick={() => {
            navigate("/course/" + course._id);
          }}>
          Edit
        </Button>
      </div>
    </Card>
  );
}

export default Courses;
