input.onGesture(Gesture.Shake, function () {
    step += 1
})
let step = 0
basic.forever(function () {
    if (input.lightLevel() < 10) {
        basic.showIcon(IconNames.Heart)
    } else {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
})
basic.forever(function () {
    basic.showNumber(step)
})
