import express from "express";

const app = express();


const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("Hello World!");
});

// get a list of 5 ninjas from naruto
app.get("/api/ninjas", (req, res) => {
    const ninjas = [
        { name: "naruto", rank: "genin" },
        { name: "sasuke", rank: "genin" },
        { name: "sakura", rank: "genin" },
        { name: "kakashi", rank: "jonin" },
        { name: "iruka", rank: "chunin" },
    ];
    res.send(ninjas);
});



app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});