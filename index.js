
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const helmet = require("helmet");
const morgan = require("morgan");
// const UserDetail = require("./Models/userModels");
require("dotenv").config();
const PORT = process.env.PORT || 4000;
const cors = require("cors");
const userRoutes = require("./backend/routes/userRoutes");
const  navRoutes  = require("./backend/routes/navRoutes");

// connect to mongodb 

const connectDb = async function () {
  try {
    await mongoose
      .connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
    return console.log("MongoDB Connected...");
  } catch (err) {
    return console.log(err);
  }
};

// Default route
app.get("/",(req,res)=>{
  // res.send(`we are live on ${PORT}`);
  res.redirect('/sign-in');
});

connectDb();
app.use(express.json());
app.use(cors("http://localhost:4000"));
app.use(express.static('task'));
app.use(helmet());
app.use(morgan("common"));
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('public'));
app.use("/user",userRoutes);
app.use('/',navRoutes);

app.listen(PORT, () => {
  console.log(`server running on port no ${PORT}!!!!!!`);
});

