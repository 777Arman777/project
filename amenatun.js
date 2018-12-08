class Amenatun extends LivingCreature {
    constructor(x, y) {
        super(x, y);
        this.energy = 15;
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
            matrix[newY][newX] = 3
            var ou = new Gishatich(newX, newY)
            gishatichArr.push(ou)
        }
    }
}