import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useState } from "react";
import axios from "axios";

function Addcourse() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState(0);
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
            <TextField
              fullWidth
              label="Price"
              variant="outlined"
              onChange={(p) => {
                setPrice(p.target.value);
              }}
            />
            <Button
              variant="contained"
              onClick={async () => {
                await axios.post(
                  "http://localhost:3000/admin/courses",
                  {
                    title: title,
                    description: description,
                    image: image,
                    published: true,
                    price: price,
                  },
                  {
                    headers: {
                      Authorization: "Bearer " + localStorage.getItem("token"),
                    },
                  }
                );
                alert("ADMIN COURSE CREATED !");
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
