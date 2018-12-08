class Amenaker extends LivingCreature {
    constructor(x, y) {
        super(x, y);
        this.energy = 8;
    }
    getNewDirections() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    chooseCell(character) {
        this.getNewDirections();
        return super.chooseCell(character);
    }
    mult() {
        var empty = random(this.chooseCell(0))
        if (empty && this.energy > 13) {
            var newX = empty[0]
            var newY = empty[1]
            matrix[newY][newX] = 4
            var am = new Amenaker(newX, newY)
            amenakerArr.push(am)
        }
    }
    move() {
        var empty = random(this.chooseCell(0))
        this.energy -= 2;
        if (empty) {
            var newX = empty[0]
            var newY = empty[1]
            matrix[newY][newX] = 4
            matrix[this.y][this.x] = 0

            this.x = newX
            this.y = newY
        }
    }

    eat() {
        var food = random(this.chooseCell(3))
        if (food) {
            var newX = food[0]
            var newY = food[1]
            matrix[newY][newX] = 4
            matrix[this.y][this.x] = 0

            for (var i in gishatichArr) {

                if (gishatichArr[i].x == newX && gishatichArr[i].y == newY) {
                    gishatichArr.splice(i, 1)
                }
            }
            this.x = newX
            this.y = newY
            this.energy += 3

        }
        var food2 = random(this.chooseCell(2))
        if (food2) {
            var newX = food2[0]
            var newY = food2[1]
            matrix[newY][newX] = 4
            matrix[this.y][this.x] = 0
            for (var i in xotakerArr) {

                if (xotakerArr[i].x == newX && xotakerArr[i].y == newY) {
                    xotakerArr.splice(i, 1)
                }
            }
            this.x = newX
            this.y = newY
            this.energy += 2
        }
        var food3 = random(this.chooseCell(1))
        if (food3) {
            var newX = food3[0]
            var newY = food3[1]
            matrix[newY][newX] = 4
            matrix[this.y][this.x] = 0
            for (var i in grassArr) {

                if (grassArr[i].x == newX && grassArr[i].y == newY) {
                    grassArr.splice(i, 1)
                }
            }
            this.x = newX
            this.y = newY
            this.energy += 1
        }
    }




    die() {
        if (this.energy <= 0) {
            matrix[this.y][this.x] = 0
            for (var i in amenakerArr) {
                if (amenakerArr[i].x == this.x && amenakerArr[i].y == this.y) {
                    amenakerArr.splice(i, 1)
                }
            }
        }
    }
}