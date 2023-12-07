const express = require("express");
const mongoose = require("mongoose");
const adminRouter = require("./routes/admin");
const userRouter = require("./routes/user");
const app = express();
const cors = require("cors");
app.use(express.json());
app.use(cors());

app.use("/admin", adminRouter);
app.use("/user", userRouter);
app.get("/", (req, res) => res.json({ msg: "Hello world After placements" }));

// Connect to MongoDB
// DONT MISUSE THIS THANKYOU!!
mongoose.connect(
  "mongodb+srv://sahilcodes23:87avqldWivwVbewM@cluster0.nbxfu7p.mongodb.net/",
  { useNewUrlParser: true, useUnifiedTopology: true, dbName: "Courses" }
);

app.listen(3000, () => console.log("Server running on port 3000"));
