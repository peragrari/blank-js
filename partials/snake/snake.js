var Snake = function(N, p) {
    this.positions = []
    this.length = N
    this.moved = 0
    for (var i = 0; i < N; i++) {
        this.positions.push([i, 0])
    }
}

var snake = function(N, p) {
    return new Snake(N, p)
}

Snake.prototype.moves = function(moves) {
    var nextHead = this.positions[this.length-1].slice(0)
    switch (moves[0]) {
        case 'D': nextHead[0]++; break
        case 'G': nextHead[0]--; break
        case 'H': nextHead[1]--; break
        case 'B': nextHead[1]++; break
    }
    if (nextHead[0]>=0 && nextHead[1]>=0 && !R.contains(nextHead, this.positions)) {
        this.positions.push(nextHead)
        this.positions = this.positions.slice(1)
        this.moved ++
    }
    if (moves.length == 1) {
        return this
    } else {
        var nextMoves = moves.slice(1)
        return this.moves(nextMoves)
    }
}

Snake.prototype.tail = function() {
    return this.positions[0]
}
