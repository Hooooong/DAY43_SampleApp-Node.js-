var express = require("express")
var router = express.Router();

var dao = require("../dao/zoneDao");

// ROOT : /zone 읽기
router.get('/', function(req, res, callback){
    
    var result = {
        code : "",
        msg : "",
        count : "",
        data : []
    };

    // zoneDao로 쿼리를 실행시킨 결과를 반환
    dao.select(function(error, items){
        if(error){
            result.code = "501";
            result.msg = error;
        } else{
            result.code = "200";
            result.msg = "success";
            result.count = items.length;
            result.data = items;
        }
        
        res.send(JSON.stringify(result));
    })
});

router.get("/:area", function(req, res, callback){

    // /:값
    // path 추출 : req.params.값
    // ?name=뿌;
    // ? 추출 : req.params.name
    var area = req.params.area;

    var result = {
        code : "",
        msg : "",
        count : "",
        data : []
    };

    dao.selectArea(area, function(error, items){
        if(error){
            result.code = "501";
            result.msg = error;
        } else{
            result.code = "200";
            result.msg = "success";
            result.count = items.length;
            result.data = items;
        }
        
        res.json(result);
        //res.send(JSON.stringify(result));
    });
});

// /user 쓰기
router.post("/", function(req, res){
    res.send("respeond from zone write");
});

// /user 수정
router.put("/",function(req,res){
    res.send("respeond from zone update");
});

// /user 삭제
router.delete("/", function(req, res){
    res.send("respeond from zone delete");
});

module.exports = router;