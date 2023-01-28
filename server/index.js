const express = require('express')
const app = express()
const mysql = require('mysql')
const bodyParser= require('body-parser')

const db = mysql.createPool({
    host: 'localhost',
    user:'root',
    password:'ssdd88',
    database:'crud_database',
});

app.use(bodyParser.urlencoded({entended: true}))

app.post('/api/insert', (req, res)=>{

    const movieName = req.body.movieName
    const movieReview = req.body.movieReview

    const sqlInsert = "INSERT INTO movie_reviews (movieName, movieReview) VALUES (?,?);"
    db.query(sqlInsert, [movieName, movieReview], (err,result)=>{
        console.log(result)
    })
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