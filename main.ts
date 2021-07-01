input.onButtonPressed(Button.A, function () {
    soundExpression.mysterious.playUntilDone()
})
input.onGesture(Gesture.Shake, function () {
    music.playTone(262, music.beat(BeatFraction.Whole))
})
