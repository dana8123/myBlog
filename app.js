const express = require('express');
const app = express();
const port = 3000;
const pug = require('pug');

const handleHome(req,res) => {
  res.send("Hello from home!")
}

app.get("/", handleHome);

app.use(express.urlencoded({extended : false}));
app.use(express.json());
app.use(express.static('public'));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});