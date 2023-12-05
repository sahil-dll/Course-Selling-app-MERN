import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useState } from "react";

function Signup() {
  const [email, setEmail] = useState();
  const [passwords, setPassword] = useState();
  return (
    <>
      <div>
        <div
          style={{
            paddingTop: 150,
            marginBottom: 10,
            display: "flex",
            justifyContent: "center",
          }}>
          <Typography variant="h6">
            Welcome to Coursera. Sign up below
          </Typography>
        </div>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <Card variant={"outlined"} style={{ width: 400, padding: 20 }}>
            <TextField
              onChange={(e) => setEmail(e.target.value)}
              fullWidth
              label="Email"
              variant="outlined"
            />
            <br></br>
            <br></br>
            <TextField
              onChange={(p) => setPassword(p.target.value)}
              fullWidth
              label="Password"
              variant="outlined"
              type="password"
            />
            <br></br>
            <br></br>
            <Button
              variant="contained"
              onClick={() => {
                function callback2(data) {
                  // console.log(data);
                  localStorage.setItem("token", data.token);
                  window.location = "/";
                }
                function callback1(res) {
                  res.json().then(callback2);
                }

                fetch("http://localhost:3000/admin/signup", {
                  method: "POST",
                  body: JSON.stringify({
                    username: email,
                    password: passwords,
                  }),
                  headers: {
                    "Content-type": "application/json",
                  },
                }).then(callback1);
              }}>
              SignUp
            </Button>
          </Card>
        </div>
      </div>
    </>
  );
}
export default Signup;
