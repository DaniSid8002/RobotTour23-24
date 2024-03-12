input.onButtonPressed(Button.A, function () {
    motion.setPowers(MotorPower.ON)
})
basic.forever(function () {
    while (input.runningTime() < 5000) {
        basic.showNumber(2)
        motion.setPowers(MotorPower.ON)
        motion.driveStraight(5)
    }
    while (input.runningTime() == 5000) {
        basic.showNumber(3)
        motion.setPowers(MotorPower.OFF)
    }
    motion.setPowers(MotorPower.OFF)
    while (input.runningTime() > 5000 && input.runningTime() < 10500) {
        basic.showNumber(4)
        motion.setPowers(MotorPower.ON)
        motion.turnRight(5)
    }
    basic.showNumber(5)
    basic.pause(1000)
    // motion.turnRight(10)
    // while (input.runningTime() < 500) {
    // motion.driveStraight(10)
    // }
    basic.pause(1000)
})
