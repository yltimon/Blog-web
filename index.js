import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public")); // Serve static files from the public folder

app.get("/", (req, res) => {
    res.render("index.ejs", 
    );
});


app.listen(port, () => {
    console.log(`Sever is listening at http://localhost:${port}`)
    });