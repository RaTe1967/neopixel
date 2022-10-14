input.onButtonPressed(Button.A, function () {
    tocici_kruh()
})
function tocici_kruh () {
    for (let pořadí = 0; pořadí <= 80; pořadí++) {
        diody.show()
        diody.rotate(1)
        basic.pause(100)
    }
}
input.onButtonPressed(Button.B, function () {
    priklad_1()
})
function priklad_1 () {
    for (let index = 0; index <= 7; index++) {
        diody.setPixelColor(index, neopixel.colors(NeoPixelColors.Blue))
        diody.show()
        basic.pause(50)
        diody.setPixelColor(index, neopixel.rgb(16, 16, 16))
        diody.show()
    }
}
let diody: neopixel.Strip = null
diody = neopixel.create(DigitalPin.P0, 8, NeoPixelMode.RGB)
diody.showRainbow(1, 360)
