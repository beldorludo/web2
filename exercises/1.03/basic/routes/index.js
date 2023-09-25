const express = require('express');
const app = express();
app.use(express.json());

const movies = [
  {
    id: 1,
    title: 'Movie 1',
    duration: 120,
    budget: 50,
    link: 'https://www.example.com/movie1',
  },
  {
    id: 2,
    title: 'Movie 2',
    duration: 150,
    budget: 60,
    link: 'https://www.example.com/movie2',
  },
  // ... Ajoutez d'autres films si nécessaire
];


module.exports = router;
