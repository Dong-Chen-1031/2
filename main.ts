radio.onReceivedValue(function (name, value) {
    basic.showIcon(IconNames.Yes)
    if (name == "ture") {
        pins.servoWritePin(AnalogPin.P1, 90)
        pins.servoWritePin(AnalogPin.P2, 0)
        basic.pause(2000)
        pins.servoWritePin(AnalogPin.P1, 0)
        pins.servoWritePin(AnalogPin.P2, 90)
        basic.showNumber(value)
    } else if (name == "false") {
    	
    }
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
radio.setGroup(4)
basic.forever(function () {
	
})