'use strict';
const express = require("express");
const router = express.Router();
const cache = require('memory-cache');
const snoowrap = require('snoowrap');
const subredditData = require('./database.js');
const {authMiddleware} = require('./auth.middleware');
require("dotenv").config();

const r = new snoowrap({
    userAgent: process.env.REDDIT_USER_AGENT,
    clientId: process.env.REDDIT_CLIENT_ID,
    clientSecret: process.env.REDDIT_CLIENT_SECRET,
    refreshToken: process.env.REDDIT_REFRESH_TOKEN
});

// https://medium.com/the-node-js-collection/simple-server-side-cache-for-express-js-with-node-js-45ff296ca0f0
const cache_middleware = (duration) => {
    return (req, res, next) => {
        const key = '__express__' + req.originalUrl || req.url;
        const cachedData = cache.get(key);
        if (cachedData) {
            res.send(cachedData)
        } else {
            res.sendResponse = res.send;
            res.send = (data) => {
                cache.put(key, data, duration * 1000)
                res.sendResponse(data);
            }
            next();
        }
    }
}
// Return data object
//['subname', {author: 'name', comments: [string]}]
const getSubredditData = async (sub, num) => {
    const data = [sub];
    await r.getSubreddit(sub)
        .getNew({limit: parseInt(num)})
        .then(listing => {
            return Promise.all(listing.map(s => s.expandReplies({limit: Infinity, depth: 0})))
        })
        .then(replies => {
            replies.forEach(s => {
                const comments = []
                s.comments.forEach(c => {
                    comments.push(c.author.name)
                })
                const post = {
                    author: null,
                    comments: []
                }
                post.author = s.author.name;
                post.comments = comments;
                data.push(post);
            })
        })
        .catch( err => {
            //console.log(err)
        })

    return data;
}

router.get('/', authMiddleware, (req, res) => {
    try{
        res.status(200).send(subredditData);
    }
    catch (e) {
        console.log(e);
        res.status(500);
    }

});

// cached for 90 seconds derived from average (posts / seconds)
router.get('/:subredditName/:postCount', authMiddleware, cache_middleware(90), async (req, res) => {
    try {
        const subredditName = req.params.subredditName;
        const postCount = req.params.postCount;
        // Dont allow over 100 posts
        if(postCount > 100) return res.status(500).send(false);
        const data = await getSubredditData(subredditName, postCount);
        // If its nor a valid subreddit name sends false
        if (data.length < 2) return res.send(false);
        res.status(200).send(data);
    } catch (e) {
        res.status(500);
    }
})

module.exports = router;
