const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const externalLinksSchema = new mongoose.Schema({
  key: String,
  title: String,
  href: String,
});

const ExternalLinks = mongoose.model('ExternalLinks', externalLinksSchema);

// Ваш код подключения к MongoDB и инициализации Express

// Маршрут для получения всех ссылок
router.get('/', async (req, res) => {
  try {
    const externalLinks = await ExternalLinks.find();
    if (externalLinks.length > 0) {
      const links = {};
      externalLinks.forEach(item => {
        links[item.title] = { title: item.title, href: item.href };
      });
      res.json(links);
    } else {
      res.status(404).json({ error: 'No externalLinks links found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;