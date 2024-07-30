const express= require("express")
const app = express();
require("dotenv").config();
require("./config/mongoDB-connection.js")
const authRoute = require("./routes/auth.js");
const userRoute = require("./routes/user.js");
const cookie = require("cookie-parser");
const postRoute = require("./routes/post.js");
const carRoute = require("./routes/categories.js");
const upload = require("./config/multer.js");

app.use(cookie());

app.use(express.json());
app.use(express.urlencoded({extended:false}));


app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/category", carRoute);

app.post("/api/upload", upload.single("file"), (req,res)=>{
    res.status(200).json("file has been uploaded");
})

app.listen(8080, ()=>{
    console.log("server is running fine");
})