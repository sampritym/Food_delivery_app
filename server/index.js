

const express = require('express')
const cors = require('cors');

const app = express()
const port = 3000
const mongoDB=require("./db")
mongoDB();

app.use(cors());

app.get('/', (req, res) => {
  
})


app.use(express.json())

app.use('/api',require('./Routes/NewUser'));
app.use('/api',require('./Routes/LoginUser'));
app.use('/api',require('./Routes/Food'));
app.use('/api',require('./Routes/OrderDetails'));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});