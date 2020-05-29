class SceneTitle extends SceneClass {
    constructor(game) {
        super(game)
        var label = Label.new(game, '按k开始游戏')
        this.addElement(label)
        game.registerAction('k', function() {
            var s = new Scene(game)
            game.replaceScene(s)
        })
    }
    draw() {
        var ctx = this.game.context
        // score
        ctx.fillStyle = '#bd9b8f'
        ctx.fillRect(0, 0, 400, 600)
        ctx.fillStyle = 'white'
        ctx.font = '12px monospace'
        ctx.fillText('按k开始游戏', 165, 150)
    }
}
