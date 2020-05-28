class SceneClass {
    constructor(game) {
        this.game = game
        this.elements = []
        this.debugModeEnabled = true
    }

    addElement(element) {
        // 在子类中拿到父类的方法
        element.scene = this
        this.elements.push(element)
    }

    removeElement(element) {
        element.scene = this
        let i = this.elements.findIndex(e => e === element)
        i && this.elements.splice(i, 1)
    }

    draw() {
        for(let e of this.elements) {
            if (e.alive === undefined || e.alive === true) {
                e.draw()
            }
        }
        // for (var i = 0; i < this.elements.length; i++) {
        //     let element = this.elements[i]
        //     this.game.drawImage(element)
        // }
    }

    update() {
        for (var i = 0; i < this.elements.length; i++) {
            let element = this.elements[i]
            if(element.update) {element.update()}
            if (this.debugModeEnabled) {
                e.debug && e.debug()
            }
        }
    }
}
