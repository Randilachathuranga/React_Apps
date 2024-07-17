const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

//import routes
const postRoutes = require('./routes/posts')

// app midddleware, it means it can convert json to js format when came some req
app.use(bodyParser.json());
//cors midlware
app.use(cors());

app.use(postRoutes)

const PORT = 8000;
const DBURL = "mongodb+srv://randila:randila1212@cluster0.i9obxtn.mongodb.net/"

mongoose.connect(DBURL)
.then(()=>{
  console.log("Db connected");
})
.catch(()=>{
  console.log("DB connection error",Error);
})


app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
});
