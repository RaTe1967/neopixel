diody = neopixel.create(DigitalPin.P0, 8, NeoPixelMode.RGB)
diody.show_rainbow(1, 360)

def on_forever():
    diody.show()
    diody.rotate(1)
    basic.pause(100)
basic.forever(on_forever)
