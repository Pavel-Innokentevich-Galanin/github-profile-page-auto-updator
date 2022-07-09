const fs = require("fs");

module.exports = function saveFile(path, text) {
  fs.writeFile(path, text, function (err) {
    if (err) {
      console.log(err);
    }
  });
};
