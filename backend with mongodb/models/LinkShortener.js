const mongoose = require("mongoose"); 

const LinkShortenerSchema = new mongoose.Schema ({
    originalUrl: {
      type: String,
      required: true  
    },
    shortUrl: {
      type: String
    }
  }, {
    versionKey: false
});

const LinkShortener = mongoose.model("LinkShortener", LinkShortenerSchema);

module.exports = LinkShortener;