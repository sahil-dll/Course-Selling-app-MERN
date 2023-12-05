import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useState } from "react";

function Addcourse() {
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [image, setImage] = useState([]);
  return (
    <>
      <div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Card variant={"outlined"} style={{ width: 400, padding: 20 }}>
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
                  alert("course added");
                }
                function callback1(res) {
                  res.json().then(callback2);
                }

                fetch("http://localhost:3000/admin/courses", {
                  method: "POST",
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
              Add course
            </Button>
          </Card>
        </div>
      </div>
    </>
  );
}
export default Addcourse;
