const router = require('express').Router();
let GuestBookPost = require('../models/guestBookPost.model');

router.route('/').get((req, res) => {
  GuestBookPost.find()
    .then(posts => res.json(posts))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const name = req.body.name;
  const message = req.body.message;

  const newPost = new GuestBookPost({
    name,
    message,
  });

  newPost.save()
  .then(() => res.json('Wpis dodany'))
  .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;