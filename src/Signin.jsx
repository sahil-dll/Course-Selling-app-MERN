import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

function Signin() {
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
              fullWidth
              id="outlined-basic"
              label="Email"
              variant="outlined"
            />
            <br></br>
            <br></br>
            <TextField
              fullWidth
              id="outlined-basic"
              label="Password"
              variant="outlined"
              type="password"
            />
            <br></br>
            <br></br>
            <Button variant="contained">SignIn</Button>
          </Card>
        </div>
      </div>
    </>
  );
}
export default Signin;
