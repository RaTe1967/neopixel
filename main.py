def on_button_pressed_a():
    priklad_1()
input.on_button_pressed(Button.A, on_button_pressed_a)

def tocici_kruh():
    diody.show_rainbow(1, 360)
    for index in range(10):
        diody.show()
        diody.rotate(1)
        basic.pause(100)

def on_button_pressed_ab():
    diody.clear()
    basic.pause(500)
    diody.show_rainbow(1, 360)
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    tocici_kruh()
input.on_button_pressed(Button.B, on_button_pressed_b)

def priklad_1():
    for index2 in range(24):
        diody.set_pixel_color(index2, neopixel.colors(NeoPixelColors.BLUE))
        diody.show()
        basic.pause(50)
        diody.set_pixel_color(index2, neopixel.rgb(16, 16, 16))
        diody.show()
diody: neopixel.Strip = None
diody = neopixel.create(DigitalPin.P0, 8, NeoPixelMode.RGB)