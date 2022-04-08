radio.onReceivedValue(function (name, value) {
    if (name == "ture") {
        basic.showIcon(IconNames.Yes)
        pins.servoWritePin(AnalogPin.P1, 0)
        pins.servoWritePin(AnalogPin.P2, 180)
        basic.showNumber(value)
    } else if (name == "false") {
        pins.servoWritePin(AnalogPin.P1, 90)
        pins.servoWritePin(AnalogPin.P2, 90)
    }
    basic.clearScreen()
})
pins.servoWritePin(AnalogPin.P1, 90)
pins.servoWritePin(AnalogPin.P2, 90)
radio.setGroup(4)
basic.showIcon(IconNames.Yes)
basic.pause(5000)
basic.clearScreen()
basic.forever(function () {
	
})
