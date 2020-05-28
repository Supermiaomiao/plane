// var loadLevel = function(game, n) {
//   let a = n - 1
//   let level = levels[a]
//   let blocks = []
//   if (level !== undefined) {
//       for (let i = 0; i < level.length; i++) {
//         let p = level[i]
//         let block = Block(game, p)
//         blocks.push(block)
//       }
//   }
//   return blocks
// }

var fps = 60
// var blocks = loadLevel(game, 1)


var enableDebugMode = function(enable, game) {
    if (!enable) {
        return
    }

    window.addEventListener('keydown', function(event) {
        let k = event.key
        // console.log('keydown', event.key);
        if (k == 'p') {
            game.pause()
        } else if('1234567'.includes(k)) {
            // blocks = loadLevel(game, Number(k))
        }
    })
    // 控制速度
    let input = document.querySelector('#id-input-speed')
    input.addEventListener('input', function(event) {
        var target = event.target
        fps = Number(target.value)

    })

}

var __main = function() {

var images = {
    bullet: 'imgs/bullet.png',
    enemy_bullet: 'imgs/enemy_bullet.png',
    // cloud: 'img/cloud.png',
    player: 'imgs/player.png',
    sky: 'imgs/sky.png',
    enemy0: 'imgs/enemy0.png',
    enemy1: 'imgs/enemy1.png',
    enemy2: 'imgs/enemy2.png',
    fire: 'imgs/fire2.png',
}

var game = new Game(images, function(g) {

    var scene = new SceneTitle(game)
    return scene

    // game.update = function() {
    //     scene.update()
    // }
    //
    //
    // game.draw = function() {
    //     scene.draw()
    // }

})

enableDebugMode(true, game)


}

__main()
