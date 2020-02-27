const express = require("express");
const nanoid = require("nanoid");
const LinkShortener = require("../models/LinkShortener");
const router = express.Router();

const checkKey = async key => {
  const query = await LinkShortener.find({ shortUrl: key });
  return query.length === 0 ? key : checkKey(nanoid(6));
};

router.get("/", async (req, res) => {
  const links = await LinkShortener.find();
  res.send(links);
});

router.get("/:shortUrl", async (req, res) => {
  const link = await LinkShortener.find({ shortUrl: req.params.shortUrl });
  if (link.length === 0) {
    res.status(404).send({ link: "Not Found" });
  } else {
    res.status(301).redirect(link[0].originalUrl);
  }
});

router.post("/links", async (req, res) => {
  let link = new LinkShortener(req.body);
  link.shortUrl = await checkKey(nanoid(6));
  try {
    await link.save();
    res.send(link);
  } catch (e) {
    res.status(422).send(e);
  }
});

module.exports = router;
