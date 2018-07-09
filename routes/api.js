var express = require('express');
var router = express.Router();


function constructWhoAmIMessage(req) {
    const ipaddress = req.ip;
    const language = req.get("Accept-Language") || "unknown";
    const software = req.get("User-Agent");

    return {
        ipaddress, language, software
    };
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send("FCC API Project: Request Header Parser Microservice");
});

router.get('/whoami', (req, res, next) => {
    res.json(
        constructWhoAmIMessage(req)
    );
});

module.exports = router;
