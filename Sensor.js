let moistureValue = 0;
let moistureThreshold = 500;
basic.forever(function () {
  moistureValue = pins.analogReadPin(AnalogPin.P0);
  if (moistureValue < moistureThreshold) {
    basic.showNumber(1);
  } else {
    basic.showNumber(0);
  }
  basic.pause(1000);
});
