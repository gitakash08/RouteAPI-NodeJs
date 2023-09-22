
const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require("dotenv");
const cors = require("cors");

let result = dotenv.config();
if (result.error) {
  throw result.error;
}

const app = express();
app.use(cors());
app.options('*', cors());

app.use(bodyParser.json({ limit: "2048mb" }));
app.use(bodyParser.urlencoded({ limit: "2048mb", extended: true }));
app.use(bodyParser.json());

const {getApi, getFirstVertex, getSecondVertex, getRouteUsingVertex} = require('./Controller/API');

app.get('/', getApi); 
app.get('/akashApi/getFirstVertex', getFirstVertex);
app.get('/akashApi/getSecondVertex', getSecondVertex);
app.get('/akashApi/getRouteUsingVertex', getRouteUsingVertex);


const port = process.env.PORT;
app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});
