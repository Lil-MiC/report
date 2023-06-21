basic.forever(function () {
  dht11_dht22.queryData(DHTtype.DHT22, DigitalPin.P0, false, true, true);
  basic.showString("T: " + dht11_dht22.readData(dataType.temperature) + " *C");
  console.log(dataType.temperature);
});
