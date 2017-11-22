var cons = require("../modules/database");

var task = {

    select : function(callback){
        var query_str = "select * from crawl_zone";
        cons.query(query_str, function(error, items, field){
            callback(error, items);
        });
    },
    selectArea : function(area, callback){
        var query_str = "select * from crawl_zone where zone_addr like concat(?, '%')";
        var values = [area];
        cons.query(query_str, values, function(error, items, field){
            callback(error, items);
        });
    },
    insert : function(){

    },
    delete : function(){

    },
    update : function(){

    }
};

module.exports = task;


// // 사용측

// var zoneDao = require("zoneDao");

// var resultSet = zoneDao.select();