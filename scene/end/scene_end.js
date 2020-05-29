class SceneEnd extends SceneClass {
    constructor(game) {
        super(game)

        game.registerAction('r', function() {
            var s = new SceneTitle(game)
            game.replaceScene(s)
        })
    }

    draw() {
        var ctx = this.game.context
        // background
        ctx.fillStyle = '#bd9b8f'
        ctx.fillRect(0, 0, 400, 600)

        // 提示
        ctx.fillStyle = 'white'
        ctx.font = '12px monospace'
        ctx.fillText('游戏结束,按r返回标题界面', 130, 150)
    }
}
