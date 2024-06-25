const express = require('express');
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 5000;
const NEWS_API_KEY = 'ec48b2493593467a8947d0253d2786a2';

app.use(express.json());

app.get('/api/news/:topic', async (req, res) => {
    const topic = req.params.topic;
    try {
        const response = await axios.get(`https://newsapi.org/v2/everything?q=${topic}&apiKey=${NEWS_API_KEY}`);
        res.json(response.data);
    } catch (error) {
        res.status(500).send('Error fetching news');
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
