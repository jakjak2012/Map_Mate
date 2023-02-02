const express = require('express');
const cors = require('cors')
const app = express();
app.use(cors())
require('./routes/map.routes')(app);
app.listen(8000, () => {
    console.log("You are now listening at port 8000")
})