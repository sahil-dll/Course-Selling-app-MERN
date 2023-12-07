import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import axios from "axios";
import { useState } from "react";
function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
              onChange={(eve) => {
                setEmail(eve.target.value);
              }}
              fullWidth
              id="outlined-basic"
              label="Email"
              variant="outlined"
            />
            <br></br>
            <br></br>
            <TextField
              onChange={(even) => {
                setPassword(even.target.value);
              }}
              fullWidth
              id="outlined-basic"
              label="Password"
              variant="outlined"
              type="password"
            />
            <br></br>
            <br></br>
            <Button
              variant="contained"
              size={"large"}
              onClick={async () => {
                const res = await axios.post(
                  "http://localhost:3000/admin/login",
                  {
                    username: email,
                    password: password,
                  },
                  {
                    headers: {
                      "Content-Type": "application/json",
                    },
                  }
                );
                const data = res.data;
                localStorage.setItem("token", data.token);
                window.location("/");
              }}>
              SignIn
            </Button>
          </Card>
        </div>
      </div>
    </>
  );
}
export default Signin;
