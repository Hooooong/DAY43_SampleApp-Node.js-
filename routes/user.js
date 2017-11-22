var express = require("express")
var router = express.Router()

// ROOT : /user 읽기
router.get("/", function(req, res, callback){
    res.send("respeond from user select");
});

// /user 쓰기
router.post("/", function(req, res){
    res.send("respeond from user write");
});

// /user 수정
router.put("/",function(req,res){
    res.send("respeond from user update");
});

// /user 삭제
router.delete("/", function(req, res){
    res.send("respeond from user delete");
});

module.exports = router;