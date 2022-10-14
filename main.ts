function jezdici_dioda () {
    for (let index2 = 0; index2 <= 7; index2++) {
        diody.setPixelColor(index2, neopixel.colors(NeoPixelColors.Yellow))
        diody.show()
        basic.pause(100)
        diody.setPixelColor(index2, neopixel.rgb(16, 16, 16))
        diody.show()
    }
}
input.onButtonPressed(Button.A, function () {
    jezdici_dioda()
})
function tocici_kruh () {
    diody.showRainbow(1, 360)
    for (let index = 0; index < 10; index++) {
        diody.show()
        diody.rotate(1)
        basic.pause(100)
    }
}
input.onButtonPressed(Button.AB, function () {
    diody.showRainbow(1, 360)
})
input.onButtonPressed(Button.B, function () {
    tocici_kruh()
})
let diody: neopixel.Strip = null
diody = neopixel.create(DigitalPin.P0, 8, NeoPixelMode.RGB)
