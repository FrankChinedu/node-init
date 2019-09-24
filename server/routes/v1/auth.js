const express = require('express');

const router = express.Router();

router.get('/login', (req, res) => {
  return res.jsend({ message: 'tested' })
})

module.exports = router;