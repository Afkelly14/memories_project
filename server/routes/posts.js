import express from 'express';

const router = express.Router();

//https://localhost:5000/posts
router.get('/', (req, res) => {
    res.send('THIS WORKS');
});

export default router;