import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useDebugValue, useEffect, useState } from "react";

function Appbar() {
  const navigate = useNavigate();
  const [userEmail, setuserEmail] = useState(null);

  useEffect(() => {
    function callback2(data) {
      // console.log(data);
      if (data.username) {
        setuserEmail(data.username);
      }
    }
    function callback1(res) {
      res.json().then(callback2);
    }
    fetch("http://localhost:3000/admin/me", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    }).then(callback1);
  }, []);

  if (userEmail) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          paddingTop: 5,
          padding: 10,
        }}>
        <div>
          <Typography>Coursera</Typography>
        </div>
        <div style={{ display: "flex" }}>
          <div style={{ marginRight: 10, display: "flex" }}>
            <div style={{ marginRight: 10 }}>
              <Button
                onClick={() => {
                  navigate("/addcourse");
                }}>
                Add Course
              </Button>
            </div>
            <div style={{ marginRight: 10 }}>
              <Button
                onClick={() => {
                  navigate("/courses");
                }}>
                Courses
              </Button>
            </div>
            <Button
              variant="contained"
              onClick={() => {
                // window.location = "/signup";
                localStorage.setItem("token", null);
                window.location = "/";
                // navigate("/signup");
                // history.push("/signup"); depriciated now in router dom 6
              }}>
              Log Out
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        paddingTop: 5,
        padding: 10,
      }}>
      <div>
        <Typography>Coursera</Typography>
      </div>
      <div style={{ display: "flex" }}>
        <div style={{ marginRight: 10 }}>
          <Button
            variant="contained"
            onClick={() => {
              // window.location = "/signup";
              navigate("/signup");
              // history.push("/signup"); depriciated now in router dom 6
            }}>
            Sign up
          </Button>
        </div>
        <div>
          <Button
            variant="contained"
            onClick={() => {
              // window.location = "/signin";
              // history.push("/signin");
              navigate("/signin");
            }}>
            Sign in
          </Button>
        </div>
      </div>
    </div>
  );
}
export default Appbar;
