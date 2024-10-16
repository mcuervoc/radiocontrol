input.onButtonPressed(Button.A, function () {
    if (Direcion == 0) {
        if (Bloque < 30) {
            Bloque += 10
        } else {
            Bloque = 0
        }
    }
    radio.sendNumber(Bloque + Direcion)
})
input.onButtonPressed(Button.AB, function () {
    Direcion = 0
    Bloque = 0
    radio.sendNumber(0)
})
input.onButtonPressed(Button.B, function () {
    Direcion += 1
})
let Bloque = 0
let Direcion = 0
radio.setGroup(1)
Direcion = 0
Bloque = 0
basic.forever(function () {
    if (Direcion == 0) {
        if (Bloque == 10) {
            images.createImage(`
                . . # # .
                . . . . #
                # # # . #
                # # . . #
                # . # # .
                `).showImage(0)
        } else if (Bloque == 20) {
            images.createImage(`
                . # # . .
                # . . . .
                # . # # #
                # . . # #
                . # # . #
                `).showImage(0)
        } else if (Bloque == 30) {
            images.createImage(`
                # # # # .
                # . . . .
                # # # . .
                # . . . .
                # # # # .
                `).showImage(0)
        } else {
            images.iconImage(IconNames.No).showImage(0)
        }
    } else if (Direcion == 1) {
        images.arrowImage(ArrowNames.North).showImage(0)
    } else if (Direcion == 2) {
        images.arrowImage(ArrowNames.NorthEast).showImage(0)
    } else if (Direcion == 3) {
        images.arrowImage(ArrowNames.East).showImage(0)
    } else if (Direcion == 4) {
        images.arrowImage(ArrowNames.SouthEast).showImage(0)
    } else if (Direcion == 5) {
        images.arrowImage(ArrowNames.South).showImage(0)
    } else if (Direcion == 6) {
        images.arrowImage(ArrowNames.SouthWest).showImage(0)
    } else if (Direcion == 7) {
        images.arrowImage(ArrowNames.West).showImage(0)
    } else if (Direcion == 8) {
        images.arrowImage(ArrowNames.NorthWest).showImage(0)
    } else {
        Direcion = 1
    }
})
