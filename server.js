const express = require('express');
const locationData = require('./location.json');
const restaurantData = require('./restarurants.json');
const mealtimeData = require('./mealtime.json');


const app = express();
const port = 4700;

app.get("/locations", (req, res) => {
    res.send(locationData);
});

app.get("/restaurants", (req, res) => {
    res.send(restaurantData);
});

app.get("/mealtypes", (req, res) => {
    res.send(mealtimeData);
});


app.listen(port, () =>{
    console.log(`Restaurant app listening on port ${port}!`);
});