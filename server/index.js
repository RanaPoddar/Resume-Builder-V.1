const express = require('express')
const cors = require('cors');
const pdf = require('html-pdf');
const pdfSample = require('./pdf-sample');


const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get("/", (req, res) => {
    res.send("hello from Server ")
})


app.post("/create-pdf", (req, res) => {
    pdf.create(pdfSample(req.body) , {})
    .toFile("Resume.pdf", (err) => {
        if(err) {
            res.send(Promise.reject())
            console.log(err);
        }
        res.send(Promise.resolve());
        console.log("Success");
    });
});

app.get("/fetch-pdf", (req, res) => {
    res.sendFile(`${__dirname}/Resume.pdf`)
});

app.use(express.static("../client/build"));

app.listen(4000, ()=> {
    console.log("Server is Running at port 4000");
})