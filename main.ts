let sprite = sprites.create(assets.image`sprite2`, SpriteKind.Player)
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . 2 2 2 . . . . . . . . 
    . . . . 2 2 2 2 2 . . . . . . . 
    . . . . 2 f 2 f 2 . . . . . . . 
    . . . . 2 2 2 2 2 . . . . . . . 
    . . . . 2 2 2 2 2 . . . . . . . 
    . . . 2 2 f f f 2 2 . . . . . . 
    . . . 2 2 2 2 2 2 2 . . . . . . 
    . . 2 . 2 2 2 2 2 . 2 . . . . . 
    . 2 2 . . 2 2 2 . . 2 2 . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
for (let index = 0; index < 12; index++) {
    sprite.x += 5
    pause(100)
    sprite.y += 5
    pause(100)
    mySprite.x += -5
    pause(100)
    mySprite.y += -5
    pause(100)
}
