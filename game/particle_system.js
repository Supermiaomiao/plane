class Particle extends GuaImage {
    constructor(game) {
        super(game, 'fire')
        this.setup()
    }
    setup() {
        this.life = 20
    }
    init(x, y, vx, vy) {
        this.x = x
        this.y = y
        this.vx = vx
        this.vy = vy
    }
    update() {
        this.life--
        this.x += this.vx
        this.y += this.vy
        var factor = 0.01
        this.vx += factor * this.vx
        this.vy += factor * this.vy
    }
}

class ParticleSystem {
    constructor(game, x, y) {
        this.game = game
        this.setup(x, y)
    }
    setup(x, y) {
        this.duration = 25
        this.x = x || 150
        this.y = y || 200
        this.numberOfParticles = 100
        this.particles = []
    }
    update() {
        this.duration--
        // if (this.duration < 0) {
        //     // 实际应该在scene_class.js中增加删除功能, 在此处删除小火花组
        // }
        // 添加小火花
        if (this.particles.length < this.numberOfParticles) {
            var p = new Particle(this.game)
            // 设置初始化坐标
            var s = 2
            var vx = randomBetween(-s, s)
            var vy = randomBetween(-s, s)
            p.init(this.x, this.y, vx, vy)
            this.particles.push(p)
        }

        // 更新所有的小火花
        for (var p of this.particles) {
            p.update()
        }

        // 删除死掉的小火花
        // this.particles = this.particles.filter(p => p.life > 0)
    }

    draw() {
        if(this.duration < 0) {
            // TODO, 应该从scene中删除自己
            this.scene.removeElement(this)
            return
        }
        for (var p of this.particles) {
            p.draw()
        }
    }
}
