scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    if (key == 1) {
        tiles.setTileAt(tiles.getTileLocation(0, 0), assets.tile`transparency8`)
        tiles.setTileAt(tiles.getTilesByType(assets.tile`myTile3`)._pickRandom(), assets.tile`myTile1`)
        game.splash("congrats " + name)
        game.over(true, effects.smiles)
    }
})
scene.onHitWall(SpriteKind.Player, function (sprite, location) {
    statusbar.value += -1
})
function Start () {
    statusbar = statusbars.create(20, 4, StatusBarKind.Health)
    statusbar.value += 10
    name = game.askForString("what is your name")
    mySprite = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    tiles.setCurrentTilemap(tilemap`level3`)
    scene.cameraFollowSprite(mySprite)
    tiles.placeOnRandomTile(mySprite, assets.tile`transparency8`)
}
statusbars.onZero(StatusBarKind.Health, function (status) {
    game.over(false, effects.slash)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile2`, function (sprite, location) {
    if (key == 1) {
        tiles.setTileAt(location, assets.tile`transparency8`)
        tiles.setTileAt(tiles.getTilesByType(assets.tile`myTile0`)._pickRandom(), assets.tile`myTile2`)
        game.over(false, effects.slash)
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestOpen, function (sprite, location) {
    key = 1
    tiles.setTileAt(location, assets.tile`transparency8`)
    tiles.setTileAt(tiles.getTilesByType(assets.tile`myTile`)._pickRandom(), assets.tile`transparency8`)
})
let mySprite: Sprite = null
let statusbar: StatusBarSprite = null
let name = ""
let key = 0
Start()
