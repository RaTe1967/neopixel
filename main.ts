let diody = neopixel.create(DigitalPin.P0, 8, NeoPixelMode.RGB)
diody.showRainbow(1, 360)
basic.forever(function on_forever() {
    diody.show()
    diody.rotate(1)
    basic.pause(100)
})
