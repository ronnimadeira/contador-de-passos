input.onButtonPressed(Button.A, function () {
    passos = 0
    basic.showNumber(0)
})
let passos = 0
passos = 0
basic.showNumber(0)
basic.forever(function () {
    if (input.acceleration(Dimension.Strength) > 1500) {
        passos += 1
        basic.showNumber(passos)
    }
})
