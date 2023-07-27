import express from 'express' ;
import cors from 'cors' ;
import imagerouter from './routes/routes.js';
import mongoose from 'mongoose';
// import DBConnection from './database/db.js';
import dotenv from 'dotenv' ;


dotenv.config() ;


const app = express();

app.use(cors()) ; //express ke andar isko enable kar rahe hai . cors ko routing se pahle likhte hai
app.use(express.json());

// app.use(express.urlencoded({ extended: true}));
// app.use(express.json());



const PORT = process.env.PORT || 8000 ;

// DBConnection();
mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => {
        app.listen(PORT, () => console.log(`connected to db and Server started on port ${PORT}`))
    })
    .catch((e) => console.log(e, "error connecting to db!.."));

app.get('/', (req, res) => {
    res.send('Hello, World!');
  });
  app.use('/', imagerouter);
// app.listen(PORT, ()=> console.log(`Server is running on port ${PORT}`)) ;
