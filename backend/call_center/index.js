const express = require('express');
const mongodb = require('mongodb');
const redis = require('redis');

const app = express();
const MongoClient = mongodb.MongoClient;
const redisClient = redis.createClient({
    host: 'redis',
    port: 6379
});

const mongoUrl = 'mongodb://mongo:27017';
let db;

MongoClient.connect(mongoUrl, { useUnifiedTopology: true }, (err, client) => {
    if (err) {
        console.error(err);
        process.exit(1);
    }
    db = client.db('mydatabase');
    console.log('Connected to MongoDB');
});

app.get('/', (req, res) => {
    res.send('Hello, Node.js!');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});