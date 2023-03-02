input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    Num1 += 1
    basic.showNumber(Num1)
})
input.onButtonPressed(Button.AB, function () {
    basic.clearScreen()
    Tubes += Num1 * Num2
    basic.showNumber(Tubes)
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    Num2 += 1
    basic.showNumber(Num2)
})
let Tubes = 0
let Num2 = 0
let Num1 = 0
Num1 = 0
Num2 = 0
Tubes = 0
