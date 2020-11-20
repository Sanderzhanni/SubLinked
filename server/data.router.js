'use strict';
const express = require("express");
const router = express.Router();
const snoowrap = require('snoowrap');
require("dotenv").config();

const r = new snoowrap({
    userAgent: process.env.REDDIT_USER_AGENT,
    clientId: process.env.REDDIT_CLIENT_ID,
    clientSecret: process.env.REDDIT_CLIENT_SECRET,
    refreshToken: process.env.REDDIT_REFRESH_TOKEN
});

const getSubredditData = async (sub, num) => {
    const data = [sub];
    const subreddit = r.getSubreddit(sub);
    try{
         await subreddit.fetch();
    }catch (e) {
        return;
    }
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

    return data;
}

//['subname', [{author: 'name', comments: [string]}]]

router.get('/:subredditName/:postCount', async (req, res) => {
    try{
        const subredditName = req.params.subredditName;
        const postCount = req.params.postCount;
        const data = await getSubredditData(subredditName, postCount);
        if(!data) res.send(false);
        res.status(200).send(data);
    }catch (e) {
        res.status(500);
    }

})

module.exports = router;
