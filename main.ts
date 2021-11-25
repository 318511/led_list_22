let Y = 0
let X = 2
let X2 = 1
let X3 = 0
let DX1 = 1
let DX2 = 1
let DX3 = 1
basic.forever(function () {
    basic.clearScreen()
    Y = 0
    if (X >= 4) {
        DX1 = -1
    } else if (X <= 0) {
        DX1 = 1
    }
    if (X2 >= 4) {
        DX2 = -1
    } else if (X2 <= 0) {
        DX2 = 1
    }
    if (X3 >= 4) {
        DX3 = -1
    } else if (X3 <= 0) {
        DX3 = 1
    }
    X += DX1
    X2 += DX2
    X3 += DX3
    for (let index = 0; index < 5; index++) {
        led.plotBrightness(X3, Y, 20)
        led.plotBrightness(X2, Y, 60)
        led.plot(X, Y)
        Y += 1
    }
    basic.pause(100)
})
