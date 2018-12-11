var grassArr = require("./grass.js");
var xotakerArr = require("./xotaker.js");
var gishatichArr = require("./gishatich.js.js");
var amenakerArr = require("./amenaker.js");
var jurArr = require("./jur.js");
var amenatunArr = require("./amenatun.js");
var gishtunArr = require("./gishtun.js");
var xotatunArr = require("./xotatun.js");
var m = Math.round((Math.random() * 55) + 5)
var n = Math.round((Math.random() * 55) + 5)
var matrix = []
function getRandInt(max) {
    return Math.round(Math.random() * Math.floor(max))
}
for (var y = 0; y < m; y++) {
    matrix.push([])
    for (var x = 0; x < n; x++) {
        matrix[y].push(getRandInt(8))
    }
} console.log(matrix)
for (var y = 0; y < matrix.length; y++) {
    for (var x = 0; x < matrix[y].length; x++) {
        if (matrix[y][x] == 1) {
            var gr = new Grass(x, y)
            grassArr.push(gr)
        }
        else if (matrix[y][x] == 2) {
            var xt = new Xotaker(x, y)
            xotakerArr.push(xt)
        }
        else if (matrix[y][x] == 3) {
            var xt = new Gishatich(x, y)
            gishatichArr.push(xt)
        }
        else if (matrix[y][x] == 4) {
            var am = new Amenaker(x, y)
            amenakerArr.push(am)
        }
        else if (matrix[y][x] == 5) {
            var jr = new Jur(x, y)
            jurArr.push(jr)
        }
        else if (matrix[y][x] == 6) {
            var pt = new Amenatun(x, y)
            amenatunArr.push(pt)
        }
        else if (matrix[y][x] == 7) {
            var pt = new Gishtun(x, y)
            gishtunArr.push(pt)
        }
        else if (matrix[y][x] == 8) {
            var pt = new Xotatun(x, y)
            xotatunArr.push(pt)
        }
    }
}
function drawServerayin() {
    for (var i in grassArr) {
        grassArr[i].mult()
    }
    for (var i in xotakerArr) {
        xotakerArr[i].eat()
        xotakerArr[i].move()
        xotakerArr[i].mult()
        xotakerArr[i].die()
    }
    for (var i in gishatichArr) {
        gishatichArr[i].eat()
        gishatichArr[i].move()
        gishatichArr[i].mult()
        gishatichArr[i].die()
    }
    for (var i in amenakerArr) {
        amenakerArr[i].eat()
        amenakerArr[i].move()
        amenakerArr[i].mult()
        amenakerArr[i].die()
    }
    for (var i in jurArr) {
        jurArr[i].mult()
    }
    for (var i in amenatunArr) {
        amenatunArr[i].mult()
    }
    for (var i in gishtunArr) {
        gishtunArr[i].mult()
    }
    for (var i in xotatunArr) {
        xotatunArr[i].mult()
    }
}
setInterval(drawServerayin, 1000)