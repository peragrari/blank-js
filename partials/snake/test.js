describe('Snake', function() {
    describe('- description', function() {
        it('this is a coding exo from MeilleurDevFrance2016 (Snake)')
        it('http://www.isograd.com/FR/solutionconcours.php')
    })
    describe('- tests', function() {
        it('test using input1.txt and output1.txt', function () {
            var snake = new Snake(3, 5)
            snake.moves(['D','D','D','B','G'])
            assert.deepEqual([5, 0], snake.tail())
        })
        it('test using input2.txt and output2.txt', function () {
            var snake = new Snake(15, 25)
            snake.moves(['B','D','D','D','H','D','D','D','D','B','D','B','G','G','B','B','B','D','H','D','D','B','D','H','H'])
            assert.deepEqual([22, 1], snake.tail())
        })
        it('test using input3.txt and output3.txt : 50 moves and final tail is (6, 0)', function () {
            var snake = new Snake(5, 50)
            snake.moves(['D','D','B','B','B','D','H','H','G','G','H','D','D','D','B','D','B','D','D','H','G','G','B','D','B','G','G','B','B','G','G','H','G','B','B','G','H','G','H','H','H','D','H','H','D','D','D','D','B','B'])
            assert.deepEqual([6, 0], snake.tail())
        })
        it('test 4 using input4.txt and output4.txt : 100 moves and final tail is (12, 26)', function () {
            var snake = new Snake(3, 100)
            snake.moves(['B','G','B','G','B','B','B','B','B','D','B','B','B','D','D','H','D','B','B','B','B','D','B','G','H','D','H','D','H','D','H','G','H','D','B','D','B','B','B','D','H','D','B','B','B','B','G','H','H','D','B','G','G','H','G','B','B','B','D','D','D','B','G','G','B','B','B','B','G','G','H','D','B','D','D','H','D','B','B','G','G','G','B','D','B','G','H','D','B','D','D','D','D','D','H','G','B','B','B','G'])
            assert.deepEqual([12, 26], snake.tail())
        })
    })
})
