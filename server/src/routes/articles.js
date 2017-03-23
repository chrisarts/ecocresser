import express from 'express';

import Article from '../models/article';
import authenticate from '../middlewares/authenticate';

let router = express.Router();

router.post('/create', authenticate, (req, res) => {
    const {
        title,
        content,
        category,
        date,
        outstanding,
        active
    } = req.body;
    let media = JSON.stringify(req.body.media);
    Article.forge({
        title,
        content,
        media,
        category,
        date,
        outstanding,
        active
    }, { hasTimestamps: true })
        .save()
        .then(article => res.json({ success: true }))
        .catch(err => res.status(500).json({ error: err }));
});

router.post('/all', authenticate, (req, res) => {
    Article.fetchAll()
        .then(articles => res.json({ articles }))
        .catch(err => res.status(500).json({ error: err }));
});

router.post('/all/limit', authenticate, (req, res) => {
    Article.query(qb =>{
        qb.limit(req.body.limit)
    }).fetchAll()
        .then(articles => res.json({ articles }))
        .catch(err => res.status(500).json({ error: err }));
});

router.post('/all/limit', authenticate, (req, res) => {
    Article.query(qb =>{
        qb.limit(req.body.limit)
    }).fetchAll()
        .then(articles => res.json({ articles }))
        .catch(err => res.status(500).json({ error: err }));
});

export default router;