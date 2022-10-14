input.onButtonPressed(Button.A, function on_button_pressed_a() {
    priklad_1()
})
function tocici_kruh() {
    diody.showRainbow(1, 360)
    for (let index = 0; index < 10; index++) {
        diody.show()
        diody.rotate(1)
        basic.pause(100)
    }
}

input.onButtonPressed(Button.AB, function on_button_pressed_ab() {
    diody.clear()
    basic.pause(500)
    diody.showRainbow(1, 360)
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    tocici_kruh()
})
function priklad_1() {
    for (let index2 = 0; index2 < 24; index2++) {
        diody.setPixelColor(index2, neopixel.colors(NeoPixelColors.Blue))
        diody.show()
        basic.pause(50)
        diody.setPixelColor(index2, neopixel.rgb(16, 16, 16))
        diody.show()
    }
}

let diody : neopixel.Strip = null
diody = neopixel.create(DigitalPin.P0, 8, NeoPixelMode.RGB)
