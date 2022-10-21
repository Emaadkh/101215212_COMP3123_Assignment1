const express = require("express");
const mongoose = require("mongoose");
const userRouter = require("./routes/users");
const employeeRouter = require("./routes/employees");

const app = express();
app.use(express.json());



app.use("/api", userRouter);
app.use("/api/emp", employeeRouter);

const SERVER_PORT = 3000
mongoose.Promise = global.Promise;

mongoose
  .connect("mongodb+srv://Emaadkh:Emad2572@cluster0.f2ujd7x.mongodb.net/comp3123_assigment1?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Successfully connected to the database mongoDB Atlas Server");
  })
  .catch((err) => {
    console.log("Could not connect to the database. Exiting now...", err);
    process.exit();
  });
app.get("/", (req, res) => {
  res.send("<h1>Welcome to Home Page of Company - Assignment One</h1>");
});

app.listen(SERVER_PORT, () => {
  console.log(`Server is listening on port http://localhost:${SERVER_PORT}`);
});
