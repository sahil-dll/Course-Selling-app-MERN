import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useState } from "react";
import axios from "axios";
function Signup() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
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
              onClick={async () => {
                const response = await axios.post(
                  "http://localhost:3000/admin/signup",
                  {
                    username: email,
                    password: password,
                  }
                );
                let data = response.data;
                localStorage.setItem("token", data.token);
                window.location = "/";
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
