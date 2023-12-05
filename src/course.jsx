import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNavigate, useParams } from "react-router-dom";
import { useDebugValue, useEffect, useState } from "react";
import Card from "@mui/material/Card";
import TextField from "@mui/material/TextField";
import {
  atom,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";
function Course() {
  let { courseId } = useParams();
  //   const [courses, setCourses] = useState([]);-->converted to below line

  const setCourses = useSetRecoilState(coursesState);

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
    <div>
      <CourseCard courseId={courseId} />
      <UpdateCard courseId={courseId} />
    </div>
  );
}

function UpdateCard(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const course = props.course;
  const [courses, setCourses] = useRecoilState(coursesState);
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Card variant={"outlined"} style={{ width: 400, padding: 20 }}>
        <Typography>Update Course Details</Typography>
        <TextField
          fullWidth
          label="title"
          variant="outlined"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <TextField
          fullWidth
          label="description"
          variant="outlined"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
        <TextField
          fullWidth
          label="Image Link"
          variant="outlined"
          onChange={(e) => {
            setImage(e.target.value);
          }}
        />
        <Button
          variant="contained"
          onClick={() => {
            function callback2(data) {
              //   alert("course Updated");
              //here call the array of courses again with all things same but the ith element having new title , desc,and iamge link
              let updatedCourses = [];
              for (let i = 0; i < courses.length; i++) {
                if (courses[i].id == props.courseId) {
                  updatedCourses.push({
                    id: props.courseId,
                    title: title,
                    description: description,
                    image: image,
                  });
                } else {
                  updatedCourses.push(courses[i]);
                }
              }
              setCourses(updatedCourses);
            }
            function callback1(res) {
              res.json().then(callback2);
            }

            fetch("http://localhost:3000/admin/courses/" + props.courseId, {
              method: "PUT",
              body: JSON.stringify({
                title: title,
                description: description,
                image: image,
                published: true,
              }),
              headers: {
                "Content-type": "application/json",
                Authorization: "Bearer " + localStorage.getItem("token"),
              },
            }).then(callback1);
          }}>
          Update course
        </Button>
      </Card>
    </div>
  );
}

function CourseCard(props) {
  //   const course = props.course;
  const courses = useRecoilValue(coursesState);
  let course = null;
  for (let i = 0; i < courses.length; i++) {
    if (courses[i].id == props.courseId) {
      course = courses[i];
    }
  }

  if (!course) {
    return <div>Loading...</div>;
  }
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
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
        <img src={course.image} style={{ minWidth: 300 }}></img>
      </Card>
    </div>
  );
}
export default Course;

const coursesState = atom({
  key: "coursesState", // unique ID (with respect to other atoms/selectors)
  default: "", // default value (aka initial value)
});
