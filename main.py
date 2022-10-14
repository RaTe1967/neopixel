item = neopixel.create(DigitalPin.P0, 8, NeoPixelMode.RGB)
item.show_rainbow(1, 360)

def on_forever():
    item.show()
    item.rotate(1)
    basic.pause(100)
basic.forever(on_forever)
