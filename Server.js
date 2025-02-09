import express from "express";
import bodyParser from "body-parser";
import env from "dotenv";
env.config();
const port = process.env.PORT || 3000;
const app = express();

app.set('view angine', 'ejs');
app.use(express.urlencoded({extended: true}))
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"))

app.get("/", (req, res) => {
    res.render("home.ejs");
})

app.post("/secret", (req, res) => {
    const harga = req.body.harga;
    console.log(harga);
    res.render("secret.ejs", {harga: harga});
})

app.get("/slot", (req, res) => {
    res.render("slot.ejs");
})

app.post("/tambah", (req, res) => {
    const angka1 = parseInt(req.body.angka1);
    const angka2 = parseInt(req.body.angka2);
    const angka3 = parseInt(angka1 + angka2);
    res.render("home.ejs", {hasil: angka3});
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})