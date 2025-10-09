const express = require('express')
const dotenv = require("dotenv")
const authRouter = require('./routers/authrouter.js')
const filesRouter = require('./routers/filesupload.js')
const bodyParser = require("body-parser");
const app = express()
const port = 3000
const connectDB = require("./models/db.js");
const cors = require('cors');


//middlewares
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//configrations
dotenv.config();

//endpoints

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.use("/auth", authRouter);
app.use("/files", filesRouter);
// ===== Connect DB & Start Server =====
connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(` Server running on port: ${port}`);
    });
  })
  .catch((err) => {
    console.error(" Failed to connect to DB:", err);
  });
