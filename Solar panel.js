function readBatteryVoltage() {
  let adcValue = pins.analogReadPin(AnalogPin.P0);
  let voltage = ((adcValue * 3.3) / 1023) * 2;
  voltage = voltage / 1000;

  return voltage;
}
