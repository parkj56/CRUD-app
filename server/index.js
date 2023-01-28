const express = require('express');
const app = express();
const mysql = require('mysql');
const bodyParser= require('body-parser');
const cors = require('cors');

const db = mysql.createPool({
    host: 'localhost',
    user:'root',
    password:'password',
    database:'crud_database',
});

app.get('/api/get', (req, res)=>{
    const sqlSelect = "SELECT * FROM movie_reviews"
    db.query(sqlSelect, (err,result)=>{
        res.send(result);
    });
})

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}))

app.post('/api/insert', (req, res)=>{

    const movieName = req.body.movieName
    const movieReview = req.body.movieReview

    const sqlInsert = "INSERT INTO movie_reviews (movieName, movieReview) VALUES (?,?);"
    db.query(sqlInsert, [movieName, movieReview], (err,result)=>{
        console.log(result)
    });
});


// used to test the database
// app.get("/",(req, res)=>{

//     const sqlInsert = "INSERT INTO movie_reviews (movieName, movieReview) VALUES ('inseption','good movie');"
//     db.query(sqlInsert, (err, result)=> {
//         res.send("hello world");
//     })
    
// });

app.listen(3001,()=>{
    console.log('running on port 3001')
});