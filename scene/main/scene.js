const config = {
    player_speed: 10,
    bullet_speed: 2,
    enemy_bullet_speed: -5,
    fire_cooldown: 9,
    enemy_shot_range: 100,
    my_shot_range: 150,
    player_life: 50,
}

class Bullet extends GuaImage {
    constructor(game, role) {
        if (role === 'enemy') {
            super(game, 'enemy_bullet')
        } else {
            super(game, 'bullet')
        }
        this.setup(role)
    }

    setup(role) {
        this.role = role
        if (this.role === 'player') {
            this.speed = config.bullet_speed
            this.range = config.my_shot_range
        } else if (this.role === 'enemy') {
            this.speed = -5
            this.range = config.enemy_shot_range
        }
        this.distance = 0
    }

    update() {
        this.y -= this.speed
        this.distance++
        if (this.distance >= this.range) {
            this.scene.removeElement(this)
        }
    }
}

class Player extends GuaImage {
    constructor(game) {
        super(game, 'player')
        this.setup()
    }

    setup() {
        this.speed = 10
        this.cooldown = 0
        this.life = config.player_life
        this.alive = true
    }

    update() {
        this.speed = config.player_speed
        if (this.cooldown > 0) {
            this.cooldown--
        }

        let bullets = this.scene.elements.filter(e => e.role === 'enemy')
        for (var i = 0; i < bullets.length; i++) {
            let b = bullets[i]
            if (this.collide(b)) {
                // this.kill()
                this.scene.removeElement(b)
            }
        }
    }

    kill() {
        this.life--
        var ps = new ParticleSystem(this.game, this.x + this.w / 2, this.y + this.h / 2)
        this.scene.addElement(ps)
        if (this.life < 1) {
            this.alive = true
            this.scene.removeElement(this)
            var end = new SceneEnd(this.game)
            this.game.replaceScene(end)
        }
    }

    collide(bullet) {
        if (!this.alive) {return}
        return( this.alive && (rectInsects(this, bullet) || rectInsects(bullet, this)))
    }

    fire() {
        if (this.cooldown == 0) {
            this.cooldown = config.fire_cooldown
            var x = this.x + this.w / 2
            var y = this.y
            var b = new Bullet(this.game, 'player')
            b.x = x
            b.y = y
            this.scene.addElement(b)
        }
    }

    moveLeft() {
        this.x -= this.speed
        if (this.x < 0) {
            this.x = 0
        }
    }

    moveRight() {
        this.x += this.speed
        if (this.x > 400 - this.w) {
            this.x = 400 - this.w
        }
    }

    moveUp() {
        this.y -= this.speed
        if (this.y < 0) {
            this.y = 0
        }
    }

    moveDown() {
        this.y += this.speed
        if (this.y > 600 - this.h) {
            this.y = 600 - this.h
        }
    }
}

class Enemy extends GuaImage {
    constructor(game) {
        var type = randomBetween(0, 2)
        var name = 'enemy' + type
        super(game, name)
        this.life = type * 4 + 4
        this.setup()
    }

    setup() {
        this.speed = randomBetween(2, 5)
        this.x = randomBetween(0, 350)
        this.y = -randomBetween(0, 200)
        this.alive = true
        this.cooldown = 0
        this.bullets = []
        this.maxCollide = 1
    }

    update() {
        this.y += this.speed
        if (this.y > 600) {
            this.setup()
        }

        if (this.cooldown > 0) {
            this.cooldown--
        }

        this.fire()

        // 碰到玩家发的子弹敌机减命, 碰到的那颗子弹移除
        let bullets = this.scene.elements.filter(e => e.role === 'player')
        for (var i = 0; i < bullets.length; i++) {
            let b = bullets[i]
            if (this.collide(b)) {
                this.kill()
                this.scene.removeElement(b)
            }
        }

        // 敌机碰撞玩家, 玩家爆炸效果并减条命
        let player = this.scene.player
        if (this.collide(player)) {
            if (this.maxCollide < 1) {
                return
            }
            player.kill()
            console.log('life', player.life);
            this.maxCollide--
            let ps = new ParticleSystem(this.game)
            ps.x = player.x + player.w / 2
            ps.y = player.y + player.h / 2
            this.scene.addElement(ps)

        }
    }

    collide(bullet) {
        if (!this.alive) {return}
        return( this.alive && (rectInsects(this, bullet) || rectInsects(bullet, this)))
    }

    removeBullets() {
        for (var i = 0; i < this.bullets.length; i++) {
            let b = this.bullets[i]
            this.scene.removeElement(b)
        }
    }

    kill() {
        this.life--
        var ps = new ParticleSystem(this.game)
        ps.x = this.x + this.w / 2
        ps.y = this.y + this.h / 2
        this.scene.addElement(ps)
        if (this.life < 1) {
            this.removeBullets()
            this.alive = false
        }
    }

    fire() {
        if (this.cooldown == 0) {
            this.cooldown = config.fire_cooldown
            var x = this.x + this.w / 2
            var y = this.y + this.h
            var b = new Bullet(this.game, 'enemy')
            this.bullets.push(b)
            b.x = x
            b.y = y
            this.scene.addElement(b)
        }
    }

}

class Cloud extends GuaImage {
    constructor(game) {
        super(game, 'cloud')
        this.setup()
    }

    setup() {
        this.speed = 1
        this.x = randomBetween(0, 350)
        this.y = -randomBetween(0, 200)
    }

    update() {
        this.y += this.speed
        if (this.y > 600) {
            this.setup()
        }
    }
}

class Scene extends SceneClass {
    constructor(game) {
        super(game)
        this.setup()
        this.setupInputs()
    }

    setup() {
        var game = this.game
        this.numberOfEnemies = 10
        this.bg1 = new GuaImage(game, 'sky')
        this.bg2 = new GuaImage(game, 'sky')
        this.bg1.y = -600

        // this.cloud = new GuaImage(game)

        this.player = new Player(game)
        this.player.x = 150
        this.player.y = 550

        this.addElement(this.bg1)
        this.addElement(this.bg2)
        this.addElement(this.player)

        // add enemies
        this.addEnemies()
        // var ps = new ParticleSystem(game)
        // this.addElement(ps)
    }

    addEnemies() {
        var es = []
        for (var i = 0; i < this.numberOfEnemies; i++) {
            var e = new Enemy(this.game)
            es.push(e)
            this.addElement(e)
        }
        this.enemies = es
    }

    setupInputs() {
        var g = this.game
        g.registerAction('a', event => {
            this.player.moveLeft()
        })
        g.registerAction('d', event => {
            this.player.moveRight()
        })
        g.registerAction('w', event => {
            this.player.moveUp()
        })
        g.registerAction('s', event => {
            this.player.moveDown()
        })
        g.registerAction('j', event => {
            this.player.fire()
        })
    }

    draw() {
        super.draw()
        this.game.context.fillStyle = 'black'
        this.game.context.fillText(`blood:${this.player.life}`, 350, 570)
    }

    update() {
        super.update()
        this.bg1.y += 1
        this.bg2.y += 1
        if (this.bg1.y >= 600) {
            this.bg1.y = -600
        }
        if (this.bg2.y >= 600) {
            this.bg2.y = -600
        }

        // var label = new Label(this.game, `blood:${this.player.life}`)
        // this.addElement(label)
    }
}
