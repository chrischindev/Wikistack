const express = require('express');
const router = express.Router();
const {Page} = require("../models");
const {addPage, main} = require('../views');

function genSlug(title){
    let regexA = /\s+/g;
    title = title.replace(regexA, "_");
    let regexB = /\W/g;
    title = title.replace(regexB, "");
    return title;
}


router.get('/', (req, res, next) => {
    res.send(main());
});

router.post('/', async (req, res, next) => {
    const page = new Page({
        title: await genSlug(req.body.title),
        content: await genSlug(req.body.content)
      });
    
      // make sure we only redirect *after* our save is complete!
      // note: `.save` returns a promise.
      try {
        await page.save();
        res.redirect('/');
      } catch (error) { next(error) }
    res.json(req.body);
});

router.get('/add', (req, res, next) => {
    res.send(addPage());
});

module.exports = router;