input.onButtonPressed(Button.A, function on_button_pressed_a() {
    jedna_dioda_kruh()
})
function tocici_duha() {
    diody.showRainbow(1, 360)
    for (let index = 0; index < 10; index++) {
        diody.show()
        diody.rotate(1)
        basic.pause(100)
    }
}

function jedna_dioda_kruh() {
    for (let index2 = 0; index2 < 24; index2++) {
        diody.setPixelColor(index2, neopixel.colors(NeoPixelColors.Blue))
        diody.show()
        basic.pause(50)
        diody.setPixelColor(index2, neopixel.rgb(16, 16, 16))
        diody.show()
    }
}

input.onButtonPressed(Button.AB, function on_button_pressed_ab() {
    rozsvit_duhu(false)
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    tocici_duha()
})
function rozsvit_duhu(zhasni: boolean) {
    diody.showRainbow(1, 360)
    if (zhasni) {
        basic.pause(100)
        diody.clear()
        diody.show()
    }
    
}

let diody : neopixel.Strip = null
diody = neopixel.create(DigitalPin.P0, 8, NeoPixelMode.RGB)
rozsvit_duhu(true)
