class SceneEnd extends SceneClass {
    constructor(game) {
        super(game)

        game.registerAction('r', function() {
            var s = new SceneTitle(game)
            game.replaceScene(s)
        })
    }

    draw() {
        // background
        this.game.context.fillStyle = '#554'
        this.game.context.fillRect(0, 0, 400, 600)

        // score
        this.game.context.fillStyle = 'black'
        this.game.context.fillText('游戏结束,按r返回标题界面', 150, 150)
    }
}
