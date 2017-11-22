var express = require("express")
var router = express.Router()

var dao = require("../dao/carDao");

// ROOT : /car 읽기
router.get("/", function(req, res, callback){
    res.send("404 not found");
});

router.get('/:zone_id', function(req, res, callback){
    // /:값
    // path 추출 : req.params.값
    // ?name=뿌;
    // ? 추출 : req.params.name
    var result = {
        code : "",
        msg : "",
        count : "",
        carData : []
    };

    dao.selectArea(req.params.zone_id, function(error, items){
        if(error){
            result.code = "501";
            result.msg = error;
        } else{
            result.code = "200";
            result.msg = "success";
            result.count = items.length;
            result.carData = items;
        }
        
        res.json(result);
        //res.send(JSON.stringify(result));
    });
});


module.exports = router;