class SceneEditor extends SceneClass {
    constructor(game, levels) {
        super(game)
        this.i = 1
        this.levels = levels
        this.blocks = loadLevel(game, 1)
        // 按s保存并回到游戏开始界面
        game.registerAction('s', function() {
            var s = new SceneTitle(game)
            game.replaceScene(s)
        })
        // 按ESC取消编辑内容回到游戏开始界面
        game.registerAction('Escape', function() {
            window.levels = [
              [
                [0, 0, 1]
              ],
              [
                [0, 0, 1],
                [100, 100, 1],
              ],
              [
                [50, 30, ],
                [100, 100, 2],
                [200, 100, ]
              ],
            ]
            var s = new SceneTitle(game)
            game.replaceScene(s)
        })

        // 切换要编辑的关卡
        window.addEventListener('keydown', event => {
            let k = event.key
            if('1234567'.includes(k)) {
                this.blocks = loadLevel(game, Number(k))
                this.i = Number(k)
            }
        })

        // 双击删除或添加砖块
        game.context.canvas.addEventListener('dblclick', event => {
            // console.log('🍊', 'dblclick')
            var x = event.offsetX
            var y = event.offsetY
            for (let i = 0; i < this.blocks.length; i++) {
                let block = this.blocks[i]
                if (pointInRect(x, y, block)) {
                    let block = this.blocks[i]
                    block.alive = false
                    window.levels[this.i - 1].splice(i, 1)
                }
            }
            let p = [x, y, 1]
            let newBlock = Block(game, p)
            this.blocks[this.blocks.length] = newBlock
            if (this.blocks.length === 0) {
                window.levels[this.i - 1][0] = p
                return
            }
            window.levels[this.i - 1][this.blocks.length - 1] = p
        })
    }

    drawBlock() {
        for (let i = 0; i < this.blocks.length; i++) {
            let block = this.blocks[i]
            if (block.alive) {
                this.game.drawImage(block)
            }
        }
    }

    // 添加砖块
    addBlock() {
        this.block
    }

    update() {
        let self = this

        this.game.context.canvas.addEventListener('mousedown', function(event) {
            var x = event.offsetX
            var y = event.offsetY
            for (let i = 0; i < self.blocks.length; i++) {
                let block = self.blocks[i]
                if (pointInRect(x, y, block)) {
                    block.dragable = true
                }
            }
        })

        this.game.context.canvas.addEventListener('mousemove', function(event) {
            var x = event.offsetX
            var y = event.offsetY
            for (let i = 0; i < self.blocks.length; i++) {
                let block = self.blocks[i]
                let level = self.levels[i]
                if (block.dragable) {
                    block.x = x
                    block.y = y
                    levels[self.i - 1][i][0] = x
                    levels[self.i - 1][i][1] = y
                }
            }
        })

        this.game.context.canvas.addEventListener('mouseup', function(event) {
            for (var i = 0; i < self.blocks.length; i++) {
                let block = self.blocks[i]
                block.dragable = false
            }
        })

        // window.addEventListener('keydown', function(event) {
        //     let k = event.key
        //     // console.log('keydown', event.key);
        //     if('1234567'.includes(k)) {
        //         self.blocks = loadLevel(self.game, Number(k))
        //         self.i = Number(k)
        //     }
        // })

        // 双击删除或添加砖块
        // this.game.context.canvas.addEventListener('dblclick', function(event) {
        //     // console.log('🍊', 'dblclick')
        //     var x = event.offsetX
        //     var y = event.offsetY
        //     for (let i = 0; i < self.blocks.length; i++) {
        //         let block = self.blocks[i]
        //         if (pointInRect(x, y, block)) {
        //             let block = self.blocks[i]
        //             block.alive = false
        //             levels[self.i - 1].splice(i, 1)
        //         }
        //     }
        //     let p = [x, y, 1]
        //     let newBlock = Block(self.game, p)
        //     // log('🙏', newBlock, self.blocks)
        //     self.blocks[self.blocks.length] = newBlock
        //     // levels[self.i - 1].push(p)
        // })
    }

    draw() {
        this.game.context.fillText(`编辑关卡${this.i}`, 180, 20)
        this.drawBlock()
    }
}
