const path = require("path");
const express = require("express");
const multer = require("multer");

const app = express();
const port = 8000;
const upload = multer({ dest: "uploads/" });

app.set("view engine", "ejs"); // Set view engine to EJS
app.set("views", path.resolve("./views"));
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
    return res.render("homepage.ejs"); // Specify the EJS file extension
});

app.post("/upload", upload.single("profileImage"), (req, res) => {
    console.log(req.body);
    console.log(req.file);
    return res.redirect("/");
});

app.listen(port, () => {
    console.log("server started at port 8000");
});
