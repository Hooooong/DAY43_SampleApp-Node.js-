var express = require("express")
var app = express()

// gallery, user 
var zone = require("./routes/zone");
var car = require("./routes/car");

// uri 요청에 따라 모듈을 분기해준다.
app.use("/zone", zone)
app.use("/car", car)

// public 디렉토리 아래에 정적 이미지 파일(image, video... etc)을 읽어서 넘겨준다,
app.use("/static",express.static("public")); // "/aaaa 와 같이 써줄수도 있다. 안쓰게 되면 그냥 주소로 넘어간다."


app.listen(8080,function(){
    console.log("server is running...")
});