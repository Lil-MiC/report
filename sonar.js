let item = 0;
basic.forever(function () {
  item = sonar.ping(DigitalPin.P0, DigitalPin.P1, PingUnit.Centimeters);
  console.log(item);
  basic.showNumber(item);
});
