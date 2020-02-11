let myImage1 = images.createImage(`
# . # . # . # . # .
. # . # . # . # . #
. . . . . . . . . .
# . # . # . # . # .
. # . # . # . # . #
`)
let myImage2 = images.createImage(`
# . . . # . # . # .
. # . . . # . # . #
# . # . . . # . # .
. # . # . . . # . #
# . # . # . . . # .
`)
let myImage3 = images.createImage(`
# # # . . . # # # .
. # # # . . . # # #
. . # # # . . . # #
. . . # # # . . . #
# . . . # # # . . .
`)
let myImage4 = images.createImage(`
# # # . . . # # # .
. # # # # # # # . .
. . # # # # # . . .
. . . # # # . . . .
. . # # # # # . . .
`)
let myImage5 = images.createImage(`
# # # # . . # # # #
# . # # . . # # . #
# . . # # # # . . #
# # # # # # # # # #
# . . # # # # . . #
`)
let awake: boolean = true
let screenFoos = [screen1, screen2, screen3, screen4, screen5]
let gestures = [Gesture.Shake, Gesture.LogoDown, Gesture.LogoUp, Gesture.TiltLeft,
Gesture.TiltRight]

let gest: Gesture = Gesture.Shake

input.onGesture(Gesture.LogoUp, function () {
    gest = Gesture.LogoUp
})
input.onGesture(Gesture.LogoDown, function () {
    gest = Gesture.LogoDown
})
input.onGesture(Gesture.Shake, function () {
    gest = Gesture.Shake
})
input.onGesture(Gesture.TiltLeft, function () {
    gest = Gesture.TiltLeft
})
input.onGesture(Gesture.TiltRight, function () {
    gest = Gesture.TiltRight
})
function screen1() {
    for (let x = 0; x < 6; x++) {
        myImage1.showImage(x)
    }
    basic.clearScreen()
}
function screen2() {
    for (let x = 0; x < 6; x++) {
        myImage2.showImage(x)
    }
    basic.clearScreen()
}
function screen3() {
    for (let x = 0; x < 6; x++) {
        myImage3.showImage(x)
    }
    basic.clearScreen()
}
function screen4() {
    for (let x = 0; x < 5; x++) {
        myImage4.showImage(x)
    }
    basic.clearScreen()
}
function screen5() {
    for (let x = 0; x < 6; x++) {
        myImage5.showImage(x)
    }
    basic.clearScreen()
}
input.onButtonPressed(Button.B, function () {
    awake = true
})


basic.forever(function () {

    if (awake) {
        basic.showString("Hello!")
        awake = !awake
    } else {
        input.onButtonPressed(Button.A, function () {
            screenFoos[gestures.indexOf(gest)]()
        })
    }
})
