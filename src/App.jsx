import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signin from "./Signin.jsx";
import Signup from "./Signup.jsx";
import AppBar from "./Appbar.jsx";
import Addcourse from "./Addcourse.jsx";
import Courses from "./Courses.jsx";
import Course from "./course.jsx";
import axios from "axios";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";

function App() {
  return (
    <div
      style={{ width: "100vw", height: "100vh", backgroundColor: "#eeeeee" }}>
      <RecoilRoot>
        <Router>
          <AppBar></AppBar>
          <Routes>
            <Route path="/addcourse" element={<Addcourse />} />
            <Route path="/course/:courseId" element={<Course />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </Router>
      </RecoilRoot>
    </div>
  );
}

export default App;
