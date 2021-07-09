controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
        doubleJump = true
        jump = true
    } else {
        doubleJump = false
    }
    jumperupper()
})
function attemptJump2 () {
    let hero: Sprite = null
    // else if: either fell off a ledge, or double jumping
    if (hero.isHittingTile(CollisionDirection.Bottom)) {
        hero.vy = -4 * level2dumb
    } else if (doubleJump) {
        level = -3 * level2dumb
        // Good double jump
        if (hero.vy >= -40) {
            level = -4.5 * level2dumb
            hero.startEffect(effects.trail, 500)
            scene.cameraShake(2, 250)
        }
        hero.vy = level
        doubleJump = false
    }
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . b 5 5 b . . . . . . . . . 
        . . . . b b b b b b . . . . . . 
        . . . b 5 5 5 5 5 b b . . . . . 
        . . b 5 5 5 5 5 5 5 b b b b b . 
        . . b 5 5 5 5 5 5 5 5 b 5 d b . 
        . . f 4 d 5 f 1 d 5 b 5 5 b . . 
        . . c 4 4 5 f f 1 b 5 5 d b . . 
        . b 4 4 4 4 b f d 5 5 5 b d b b 
        b 4 4 4 4 4 4 5 b 5 5 d c d d b 
        . b 5 5 5 5 5 5 5 b c c d d d c 
        . b 5 5 5 5 5 5 5 d d d d d b c 
        . b d 5 5 5 5 5 d d d d d d c . 
        . . b b 5 5 5 d d d d d b c . . 
        . . . b b c c c c c c c c . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . b 5 b . . . . . . . . . . 
        . . . . b 5 b . . . . . . . . . 
        . . . . b b b b b b . . . . . . 
        . . . b 5 5 5 5 5 b b . . . . . 
        . . b 5 5 5 5 5 5 5 b b b b b . 
        . . b 5 5 5 5 5 5 5 5 b 5 d b . 
        . . f 4 d 5 f 1 d 5 b 5 5 b . . 
        . . c 4 4 5 f f 1 b 5 5 d b . . 
        b 4 4 4 4 4 b f d 5 5 5 b d b b 
        . b 4 4 4 4 4 5 b 5 5 d c d d b 
        . b 5 5 5 5 5 5 5 b c c d d d c 
        . b 5 5 5 5 5 5 5 d d d d d b c 
        . b d 5 5 5 5 5 d d d d d d c . 
        . . b b 5 5 5 d d d d d b c . . 
        . . . b b c c c c c c c c . . . 
        `,img`
        . . . b 5 b . . . . . . . . . . 
        . . . . b 5 b . . . . . . . . . 
        . . . . . c b . . . . . . . . . 
        . . . . b b b b b b . . . . . . 
        . . . b 5 5 5 5 5 b b . . . . . 
        . . f d 5 5 f 1 d 5 b b . . . . 
        . . c 4 d 5 f f 1 5 5 b . . . . 
        . . 4 4 d d b f d 5 5 b . . . . 
        b 4 4 4 4 4 5 5 5 d b b d d d b 
        . b 4 4 4 4 4 5 5 b 5 5 5 d b b 
        . . b 5 5 5 5 5 d 5 5 5 5 c d b 
        . b 5 5 5 5 5 5 b 5 5 d c d d c 
        . b 5 5 5 5 5 5 5 b c c d d b c 
        . b d 5 5 5 5 5 d d d d d d c . 
        . . b b 5 5 5 d d d d d b c . . 
        . . . b b c c c c c c c c . . . 
        `,img`
        . . . b 5 b . . . . . . . . . . 
        . . . . b 5 b . . . . . . . . . 
        . . . . b b b b b b . . . . . . 
        . . . b 5 5 5 5 5 b b . . . . . 
        . . c 4 d 5 f 1 d 5 b b . . . . 
        b 4 4 4 d d f f 1 5 5 b . . . . 
        . b 4 4 4 4 b f d 5 5 b . . . . 
        . . b 4 4 4 4 5 5 5 5 d b . . . 
        . . b 5 5 5 5 5 5 5 5 d d b . . 
        . b 5 5 5 5 5 5 5 5 d d d d b . 
        . b 5 5 5 5 5 5 5 b b b d d d b 
        . b 5 5 5 5 5 5 c d 5 5 b d d c 
        . b 5 5 5 5 5 5 d c d 5 d b b c 
        . b d 5 5 5 5 5 d d c b 5 5 b . 
        . . b b 5 5 5 d d d d c c c b b 
        . . . b b c c c c c c c c . . . 
        `,img`
        . . . b 5 b . . . . . . . . . . 
        . . . . b 5 b . . . . . . . . . 
        . . . . b b b b b b . . . . . . 
        . . . b 5 5 5 5 5 b b . . . . . 
        . . c 4 d 5 f 1 d 5 b b . . . . 
        b 4 4 4 d d f f 1 5 5 b . . . . 
        . b 4 4 4 4 b f d 5 5 b . . . . 
        . . b 4 4 4 4 5 5 5 5 d b . . . 
        . . b 5 5 5 5 5 5 5 d d d b b . 
        . b 5 5 5 5 5 5 5 b b b d d d b 
        . b 5 5 5 5 5 5 c d 5 5 b d d c 
        . b 5 5 5 5 5 5 d c d 5 d b b c 
        . b 5 5 5 5 5 5 d d c b 5 5 b c 
        . b d 5 5 5 5 5 d d d c c c b b 
        . . b b 5 5 5 d d d c c . . . . 
        . . . b b c c c c c . . . . . . 
        `,img`
        . . . b 5 b . . . . . . . . . . 
        . . . . b 5 b . . . . . . . . . 
        . . . . b b b b b b . . . . . . 
        . . . b 5 5 5 5 5 b b . . . . . 
        . . f d 5 5 f 1 d 5 b b . . . . 
        . . c 4 d 5 f f 1 5 5 b . . . . 
        . . 4 4 d d b f d 5 5 b . . . . 
        b 4 4 4 4 4 5 5 5 5 5 d b b b . 
        . b 4 4 4 4 4 5 5 d b b d d d b 
        . . b 5 5 5 5 5 5 b 5 5 5 d b b 
        . b 5 5 5 5 5 5 d 5 5 5 5 c d c 
        . b 5 5 5 5 5 5 b 5 5 d c d b c 
        . b d 5 5 5 5 5 d b c c d d c . 
        . . b b 5 5 5 d d d d d b c . . 
        . . . b b c c c c c c c c . . . 
        . . . . . . . . . . . . . . . . 
        `],
    200,
    false
    )
})
function jumperupper () {
    if (jump == true) {
        if (doubleJump == true) {
            mySprite.vy = -70
        } else {
            mySprite.vy = -50
            jump = false
        }
    }
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleBlueCrystal, function (sprite, location) {
    music.magicWand.play()
    projectile = sprites.createProjectileFromSprite(img`
        8 8 8 8 8 8 
        8 8 8 8 8 8 
        8 8 8 8 8 8 
        8 8 8 8 8 8 
        8 8 8 8 8 8 
        8 8 8 8 8 8 
        `, mySprite, 10, 50)
    pause(2000)
    levelComplete()
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite, location) {
    if (level == 1) {
        game.splash("Use the up arrow twice", "to double jump!")
        tiles.setTileAt(tiles.getTileLocation(4, 13), sprites.dungeon.chestOpen)
    }
    if (level == 2) {
        level2dumb = 0
        game.splash("The map is bigger now!", "Move left and right more to explore it")
        tiles.setTileAt(tiles.getTileLocation(1, 31), sprites.dungeon.chestOpen)
        pause(10000)
        level2dumb += 1
        if (level2dumb == 1) {
            game.splash("More pathways - not all are necessary", "But you may find treasure exploring!")
            tiles.setTileAt(tiles.getTileLocation(19, 22), sprites.dungeon.chestOpen)
        }
    }
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . b 5 5 b . . . 
        . . . . . . b b b b b b . . . . 
        . . . . . b b 5 5 5 5 5 b . . . 
        . b b b b b 5 5 5 5 5 5 5 b . . 
        . b d 5 b 5 5 5 5 5 5 5 5 b . . 
        . . b 5 5 b 5 d 1 f 5 d 4 f . . 
        . . b d 5 5 b 1 f f 5 4 4 c . . 
        b b d b 5 5 5 d f b 4 4 4 4 b . 
        b d d c d 5 5 b 5 4 4 4 4 4 4 b 
        c d d d c c b 5 5 5 5 5 5 5 b . 
        c b d d d d d 5 5 5 5 5 5 5 b . 
        . c d d d d d d 5 5 5 5 5 d b . 
        . . c b d d d d d 5 5 5 b b . . 
        . . . c c c c c c c c b b . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . b 5 b . . . 
        . . . . . . . . . b 5 b . . . . 
        . . . . . . b b b b b b . . . . 
        . . . . . b b 5 5 5 5 5 b . . . 
        . b b b b b 5 5 5 5 5 5 5 b . . 
        . b d 5 b 5 5 5 5 5 5 5 5 b . . 
        . . b 5 5 b 5 d 1 f 5 d 4 f . . 
        . . b d 5 5 b 1 f f 5 4 4 c . . 
        b b d b 5 5 5 d f b 4 4 4 4 4 b 
        b d d c d 5 5 b 5 4 4 4 4 4 b . 
        c d d d c c b 5 5 5 5 5 5 5 b . 
        c b d d d d d 5 5 5 5 5 5 5 b . 
        . c d d d d d d 5 5 5 5 5 d b . 
        . . c b d d d d d 5 5 5 b b . . 
        . . . c c c c c c c c b b . . . 
        `,img`
        . . . . . . . . . . b 5 b . . . 
        . . . . . . . . . b 5 b . . . . 
        . . . . . . . . . b c . . . . . 
        . . . . . . b b b b b b . . . . 
        . . . . . b b 5 5 5 5 5 b . . . 
        . . . . b b 5 d 1 f 5 5 d f . . 
        . . . . b 5 5 1 f f 5 d 4 c . . 
        . . . . b 5 5 d f b d d 4 4 . . 
        b d d d b b d 5 5 5 4 4 4 4 4 b 
        b b d 5 5 5 b 5 5 4 4 4 4 4 b . 
        b d c 5 5 5 5 d 5 5 5 5 5 b . . 
        c d d c d 5 5 b 5 5 5 5 5 5 b . 
        c b d d c c b 5 5 5 5 5 5 5 b . 
        . c d d d d d d 5 5 5 5 5 d b . 
        . . c b d d d d d 5 5 5 b b . . 
        . . . c c c c c c c c b b . . . 
        `,img`
        . . . . . . . . . . b 5 b . . . 
        . . . . . . . . . b 5 b . . . . 
        . . . . . . b b b b b b . . . . 
        . . . . . b b 5 5 5 5 5 b . . . 
        . . . . b b 5 d 1 f 5 d 4 c . . 
        . . . . b 5 5 1 f f d d 4 4 4 b 
        . . . . b 5 5 d f b 4 4 4 4 b . 
        . . . b d 5 5 5 5 4 4 4 4 b . . 
        . . b d d 5 5 5 5 5 5 5 5 b . . 
        . b d d d d 5 5 5 5 5 5 5 5 b . 
        b d d d b b b 5 5 5 5 5 5 5 b . 
        c d d b 5 5 d c 5 5 5 5 5 5 b . 
        c b b d 5 d c d 5 5 5 5 5 5 b . 
        . b 5 5 b c d d 5 5 5 5 5 d b . 
        b b c c c d d d d 5 5 5 b b . . 
        . . . c c c c c c c c b b . . . 
        `,img`
        . . . . . . . . . . b 5 b . . . 
        . . . . . . . . . b 5 b . . . . 
        . . . . . . b b b b b b . . . . 
        . . . . . b b 5 5 5 5 5 b . . . 
        . . . . b b 5 d 1 f 5 d 4 c . . 
        . . . . b 5 5 1 f f d d 4 4 4 b 
        . . . . b 5 5 d f b 4 4 4 4 b . 
        . . . b d 5 5 5 5 4 4 4 4 b . . 
        . b b d d d 5 5 5 5 5 5 5 b . . 
        b d d d b b b 5 5 5 5 5 5 5 b . 
        c d d b 5 5 d c 5 5 5 5 5 5 b . 
        c b b d 5 d c d 5 5 5 5 5 5 b . 
        c b 5 5 b c d d 5 5 5 5 5 5 b . 
        b b c c c d d d 5 5 5 5 5 d b . 
        . . . . c c d d d 5 5 5 b b . . 
        . . . . . . c c c c c b b . . . 
        `,img`
        . . . . . . . . . . b 5 b . . . 
        . . . . . . . . . b 5 b . . . . 
        . . . . . . b b b b b b . . . . 
        . . . . . b b 5 5 5 5 5 b . . . 
        . . . . b b 5 d 1 f 5 5 d f . . 
        . . . . b 5 5 1 f f 5 d 4 c . . 
        . . . . b 5 5 d f b d d 4 4 . . 
        . b b b d 5 5 5 5 5 4 4 4 4 4 b 
        b d d d b b d 5 5 4 4 4 4 4 b . 
        b b d 5 5 5 b 5 5 5 5 5 5 b . . 
        c d c 5 5 5 5 d 5 5 5 5 5 5 b . 
        c b d c d 5 5 b 5 5 5 5 5 5 b . 
        . c d d c c b d 5 5 5 5 5 d b . 
        . . c b d d d d d 5 5 5 b b . . 
        . . . c c c c c c c c b b . . . 
        . . . . . . . . . . . . . . . . 
        `],
    200,
    false
    )
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.vy += 10
})
function levelComplete () {
    level += 1
    pause(200)
    fireworks()
    if (level == 2) {
        info.setScore(0)
        tiles.setTilemap(tilemap`level1`)
        tiles.placeOnRandomTile(mySprite, sprites.dungeon.collectibleInsignia)
        game.splash("LEVEL 2")
    } else if (level == 3) {
        info.setLife(3)
    } else if (level == 4) {
        tiles.setTilemap(tilemap`level2`)
    } else if (false) {
    	
    } else {
        game.over(true)
    }
}
function fireworks () {
	
}
let projectile: Sprite = null
let level2dumb = 0
let jump = false
let doubleJump = false
let level = 0
let mySprite: Sprite = null
scene.setBackgroundImage(img`
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999111111999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999991111111119999999911199911111111999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999991111199911111111111999911111111111111111119999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999111111111911111111111199111111111111111111119999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999991111111111111111111111199111111111111111111111999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999991111111111111111111111119111111111111111111111199999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999991111111111111111111111111111111111111111111111199999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999991111111111111111111111111111111111111111111111199999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999991111111111111111111111111111111111111111111111199999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999111111111111111111111111111111111111111111111199999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999911111111111111111111111111111111111111111111ddd999999999999999999999999999999999999999999999999999999
    999999999999999999999999999999999999999999999999999999999999111111111111111111111111111111111111111111d11ddd9999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999991111111111111111111111111111111111111111111111111d99999999999999999999999999999999999999ddddddd9999999
    99999999999999999999999999999999999999999999999999999999911111111111111111111111111111111111111111111111111dd99999999999999999999999999999999999dd1111111d999999
    999999999999999999999999999999999999999999999999999999991111111111111111ddddd1111111111111111111111111111111d999999999999999999999999999999999dd1111111111dd9999
    99999999999999999999999999999999999999999999999999999999111111111111111d1111dd111111111111111111111111111111d99999999999999999999999999999999d1111111111111dd999
    9999999999999999999999999999999999999999999999999999999911111111111111d111111d11111111111111111111111111111d99999999999999999999999999999999dd11111111111111d991
    9999999999999999999999999999999999999999999999999999999911111111111111d1111d1d1111111111111111111111111111dd99999999999999999999999999999999d111111111111111d911
    999999999999999999999999dddddddd99999999999999999999999911111111111111dd111ddd111111111111111991111111111dd99999999999999999999999999999999d11111111111111111d11
    9999999999999999999dddddd111111dd99999999999999999999999911111111111111d111dd1111dd1111111119999911111ddd9999999999999999999999999999999999d111111111dddd1111d11
    999999999999999999dd1111111111111dd999999999999999999999911111111111111d11111111dd1d1111111199999999999999999999999999999999999999999999999d111111111d11d1111d11
    999999999999999999d1111111111111111d99999999999999999999991111111111111dddd1111dd9911111119999999999999999999999999999999999999999999999999d111111111d1111111d11
    99999999999999999dd1111111111111111d99999999999999999999999911111111111999dddddd99991111199999999999999999999999999999999999999999999999999d111111111d1111111d11
    99999999999999999d1111111111ddddd111d911111119999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999d111111111d1111111d11
    9999999999999999d11111111111d111dd11d1111111111999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999111111111d1111111d11
    9999999999999999d1111111111d11111d11d11111111111199999999999999999999999999999999999999999999999999999999999999999999999999999999999999991111111111111d11111d111
    9999999999999999d1111111111d11d11d11d111111111111119999999999999999999999999999999999999999999999999999999999999999999999999999999999991111111111111111ddddd1111
    9999999999999999d1111111111d111dd111d111111111111111999999999999999999999999999999999999999999999999999999999999999999999999999999999911111111111111111111111111
    9999999999111111d1111111111d11111111d111111111111111199999999999999999999999999999999999999999999999999999999999999999999999999999999911111111111111111111111111
    999999991111111111111111111d11111111d111111111111111199999999999999999999999999999999999999999999999999999999999999999999999999999999911111111111111111111111111
    9999999111111111111111111111dd111ddd1111111111111111199999999999999999999999999999999999999999999999999999999999999999999999999999999911111111111111111111111111
    999999911111111111111111111111ddd1111111111111111111199999999999999999999999999999999999999999999999999999999999999999999999999999999991111111111111111111111111
    9999991111111111111111111111111111111111111111111111119999999999999999999999999999999999999999999999999999999999999999999999999999999999111111111111111111111111
    9999991111111111111111111111111111111111111111111111119999999999999999999999999999999999999999999999999999999999999999999999999999999999991111111111111111111111
    9999991111111111111111111111111111111111111111111111111999999999999999999999999999999999999999999999999999999999999999999999999999999999911111111111111111111111
    9999999111111111111111111111111111111111111111111111111199999999999999999999999999999999999999999999999999999999999999999999999999999991111111111111111111111111
    9999991111111111111111111111111111111111111111111111111199999999999999999999999999999999999999999999999999999999999999999999999999999911111111111111111111111111
    9999911111111111111111111111111111111111111111111111111119999999999999999999999999999999999999999999999999999999999999999999999999999911111111111111111111111111
    9999911111111111111111111111111111111111111111111111111119999999999999999999999999999999999999999999999999999999999999999999999999999911111111111111111111111111
    9999911111111111111111111111111111111111111111111111111119999999999999999999999999999999999999999999999999999999999999999999999999999911111111111111111111111111
    9999911111111111111111111111111111111111111111111111111119999999999999999999999999999999999999999999999999999999999999999999999999999911111111111111111111111111
    9999991111111111111111111111111111111111111111111111111199999999999999999999999999999999999999999999999999999999999999999999999999999991111111111111111111111111
    9999999999111111111111111111111111111111111111199999999999999999999999999999999999999999999999999999999999999999999999999999999999999999911111111111111111111111
    9999999999999111111111111111111111111119999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999911111111199111111111
    9999999999999999999911111111111111119999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999911119999911111111
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999991111
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999991
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ddddddd9999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999dd111111dddd999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999dd111111111111d99999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999111111111999999999999dd11111111111111ddd99999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999911111111111111999999999d11111111111111111ddd999999999999999999999999
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999911111111111111119999999dd1111111111111111111d999999999999999999999999
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999111111111111111111999999d11111111111111111111dd99999999999999999999999
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999991111111111111111111199999d1111111dddd1111111111d99999999999999999999999
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999911111111111111111111119999d111111d111dd111111111d99999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999911111111111111111111111199dd11111dd1111d111111111199999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999911111111111111111111111199d111111d111111d11111111119999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999911111111111111111111111119d111111d111111d11111111119999999999999999999999
    99999999999999999999999999999999999999911111999999999999999999999999999999999999999999111111111111111111111111111d111111dd11111d11111111119999999999999999999999
    99999999999999999999999999999999999999111111199999999999999999999999999999999999999991111111111111111111111111111d1111111ddd111d11111111111999999999999999999999
    999999999999999999999999999999999999911111111199999999999999999999999999999999999999111111111111111111111111111111d11111111111d111111111111999999999999999999999
    999999999999999999999999999999999999111111111199999999999999999999999999999999999999111111111111111111111111111111d11111111111d111111111111999999999999999999999
    999999999999999999999999999999999991111111111119ddddddd999999999999999999999999999991111111111111111111111111111111d1111111111d111111111111999999999999999999999
    99999999999999999999999999999999999111111111111dd111111dd99999999999999999999999999911111111111111111111111111111111dd11111111d111111111111999999999999999999999
    99999999999999999999999999999999991111111111111111111111d99999999999999999999999ddddd111111111111111111111111111111111ddd1111d1111111111111999999999999999999999
    99999999999999999999999999999999911111111111111111111111d99999999999999999999dddd111ddd1111111111111111111111111111111111dddd11111111111111999999999999999999999
    99999999999999999999999999999999911111111111111111111111d999999999999999999ddd11111111dd111111111111111111111111111111111111111111111111111999911111999999999999
    9999999999999999999999999999991111111111dddd1111111111111d1111999999999999dd11111111111d111111111111111111111111111111111111111111111111111991111111119999999999
    999999999999999999999999999999111111111d111dd1111111111111111119999999999dd111111dd1111d111111111111111111111111111111111111111111111111111911111111111999999999
    99999999999999999999999999999911111111d11111d1111111111111111119999999999d1111111ddd111d111111111111111111111111111111111111111111111111111111111111111199999999
    99999999999999999999999999999911111111d11111d1111111111111111119999999999d1111111d11111d111111111111111111111111111111111111111111111111111111111111111199999999
    99999999999999999999999999999911111111d111d1d1111111111111111119999999999d1111111d11111d111111111111111111111111111111111111111111111111111111111111111119999999
    99999999999999999999999999999911111111dd11ddd1111111111111111199999999999d11111111d111dd111111111111111111111111111111111111111111111111111111111111111119999999
    999999999999999999999999999999911111199d111111111111111111111999999999999d11111111ddddd1111111111111111111111111111111111111111111111111111111111111111119999999
    999999999999999999999999999999999999999d1111111dd111111111199999999999999dd1111111111111111111111111111111111111111111111111111111111111111111111111111111999999
    9999999999999999999999999999999999999999dd11111d99911111119999999999999999d1111111111111111111111111111111111111111111111111111111111111111111111111111111999999
    99911111999999999999999999999999999999999dddddd9999999999999999999999999999d111111111111111111111111111111111111111111111111111111111111111111111111111111999999
    1111111119999999999999999999999999999999999999999999999999999999999999999999d11111111111111111111111111111111111111111111111111111111111111111111111111111999999
    1111111111999999999999999999999999999999999999999999999999999999999999999999dd1111111111111111111111111111111111111111111111111111111111111111111111111111199999
    1111111111199999999999999999999999999999999999999999999999999999999999999111111111111111111111111111111111111111111111111111111111111111111111111111111111199999
    1111111111119999999999999999999999999999999999999999999999999999999999111111111111111111111111111111111111111111111111111111111111111111111111111111111111199999
    1111111111119999999999999999999999999999999999999999999999999999999999111111111111111111111111111111111111111111111111111111111111111111111111111111111111199999
    1111111111119999999999999999999999999999999999999999999999999999999999111111111111111111111111111111111111111111111111111111111111111111111111111111111111199999
    1111111111119999999999999999999999999999999999999999999999999999999991111111111111111111111111111111111111111111111111111111111111111111111111111111111111999999
    1111111111111991111111119999999999999999999999999999999999999999999991111111111111111111111111111111111111111111111111111111111111111111111111111111111111999999
    11111111111119111111111111999999999999999999999999999999999999999999911111111111111111111111111111111111111111111111111ddddd11111111111111ddddd33311111119999999
    1111111111111111111111111119999999999999999999999999999999999999999999111111111111111111111111111111111111111111111111d11111d111111111111dd111111331111111999999
    111111111111111111111111111999999999999999999999999999999999999999999999111111111111111111111111111111111111111111111d111111d111111111111d1111111131111111199999
    111111111111111111111111111999999999999999999999999999999999999999999999911111111111111111111111111111111111111111111d111111d1111111111dd11111111113111111119999
    1111111111111111111111111119ddddd999999999999999999999999999999999999999999999911111111111111111111111111111111111111d11111dd11111111dd1111111111111111111119999
    111111111111111111111111111dd111dd99999999999999999999999999999999999999999999991111111111111111111111111111111111111d11111111111111d111111111111111111111119999
    11111111111111111111111111dd11111ddd999999999999999999999999999999999999999999999111111111111111111111111111111111111d1111111111111d1111111111111111111111199999
    11111111111111111111111111d11dd1111d999999999999999999999999999999999999999999999111111111111111111111111111111111111d111111111111dd111111dddddddd11111111999999
    11111111111111111111111111dd11d1111d9999999999999999999999999999999999999999999999111111111111111111111111111111111111ddd111111ddd1111111dd999999999999999999999
    111111111111111111111111111ddd11111d9999999999999999999999999999999999999999999999911111111111111111111111111111111111111dddddd111111111dd9999999999999999999999
    11111111111111111111111111111111111d9999999999999999999999999999999999999999999999991111111111111111111111111111111111111111111111111dddd99999999999999999999999
    11111111111111111111111111111111111d99999999999999999999999999999999999999999999999991111111111111111111111111111111111111111111111ddd99999999999999999999999999
    11111111111111111111111111111111111d11119999999999999999999999999999999999999999999999111111111111111111199999dd11111111111111111ddd9999999999999999999999999999
    1111111111111111111111111111111111111111199999999999999999999999999999999999999999999991111111111111119999999999dddddd111111ddddd9999999999999999999999999999999
    1111111111111111111111111111111111111111199999999999999999999999999999999999999999999999999111111119999999999999999999ddddddd99999999999999999999999999999999999
    1111111111111111111111111111111111111111199999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    1111111111111111111111111111111111111111199999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    1111111111111111111111111111111111111111199999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    1111111111111111111111111111111111111111999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    1111111111111111111111111111111111111111999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    1111111111111111111111111111111111911119999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9111111111111111111111111111111119999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9991111111111111111111111111111199999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999111119999111111111999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999991111199999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    `)
mySprite = sprites.create(img`
    . . . . . . . . . . b 5 b . . . 
    . . . . . . . . . b 5 b . . . . 
    . . . . . . . . . b c . . . . . 
    . . . . . . b b b b b b . . . . 
    . . . . . b b 5 5 5 5 5 b . . . 
    . . . . b b 5 d 1 f 5 5 d f . . 
    . . . . b 5 5 1 f f 5 d 4 c . . 
    . . . . b 5 5 d f b d d 4 4 . . 
    b d d d b b d 5 5 5 4 4 4 4 4 b 
    b b d 5 5 5 b 5 5 4 4 4 4 4 b . 
    b d c 5 5 5 5 d 5 5 5 5 5 b . . 
    c d d c d 5 5 b 5 5 5 5 5 5 b . 
    c b d d c c b 5 5 5 5 5 5 5 b . 
    . c d d d d d d 5 5 5 5 5 d b . 
    . . c b d d d d d 5 5 5 b b . . 
    . . . c c c c c c c c b b . . . 
    `, SpriteKind.Player)
tiles.setTilemap(tilemap`level5`)
tiles.placeOnRandomTile(mySprite, sprites.dungeon.collectibleInsignia)
scene.cameraFollowSprite(mySprite)
mySprite.ay = 100
controller.moveSprite(mySprite, 50, 0)
pause(500)
game.splash("LEVEL 1", "Jump to the top with buttons!")
level = 1
