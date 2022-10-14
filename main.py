diody = neopixel.create(DigitalPin.P0, 8, NeoPixelMode.RGB)
diody.show_rainbow(1, 360)

def priklad_1():
    for index in range(24):
        diody.set_pixel_color(index, neopixel.colors(NeoPixelColors.BLUE))
        diody.show()
        basic.pause(50)
        diody.set_pixel_color(index, neopixel.rgb(16, 16, 16))
        diody.show()

def on_forever():
    diody.show()
    diody.rotate(1)
    basic.pause(100)
basic.forever(on_forever)
