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
    // draw() {
    //     // score
    //     this.game.context.fillStyle = 'black'
    //     this.game.context.fillText('游戏开始,按k开始游戏', 150, 150)
    // }
}
