/**
 * 怪怪的........
 */
let list = [
[
0,
0,
0,
0,
0
],
[
1,
1,
1,
1,
1
],
[
0,
0,
0,
0,
0
],
[
0,
0,
0,
0,
0
],
[
0,
0,
0,
0,
0
]
]
let list2 = [
[
1,
1,
1,
1,
1
],
[
0,
0,
0,
0,
0
],
[
0,
0,
0,
0,
0
],
[
0,
0,
0,
0,
0
],
[
0,
0,
0,
0,
0
]
]
basic.forever(function () {
    for (let Y = 0; Y <= 4; Y++) {
        for (let X = 0; X <= 4; X++) {
            if (list[Y][X] == 1) {
                led.plotBrightness(Y, X, 255)
            } else {
                led.unplot(Y, X)
            }
        }
    }
    list.unshift(list.pop())
    basic.pause(100)
})
basic.forever(function () {
    for (let B = 0; B <= 4; B++) {
        for (let A = 0; A <= 4; A++) {
            if (list2[B][A] == 1) {
                led.plotBrightness(B, A, 100)
            } else {
                led.unplot(B, A)
            }
        }
    }
    list2.unshift(list2.pop())
    basic.pause(100)
})
