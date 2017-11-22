var express = require("express")
var router = express.Router()

// ROOT : /gallery
router.get("/", function(req, res, next){
    res.send("respeond from gallery root")
});

// exports를 통해서 위에서 정의된 변수에 접근할 수 있게 해준다.
module.exports = router;