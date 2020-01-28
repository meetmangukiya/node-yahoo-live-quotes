const WebSocket = require("isomorphic-ws");
const protobuf = require("protobufjs");
require("./__finStreamer-proto")(protobuf);

const base64ToArray = (base64) => {
  var binaryString = atob(base64);
  var len = binaryString.length;
  var bytes = new Uint8Array(len);
  for (var i = 0; i < len; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes;
};

const getQuotesFor = (symbols, cb) => {
  const ws = new WebSocket("wss://streamer.finance.yahoo.com/");

  ws.onopen = () => {
    console.log(`subscribing to ${symbols}`);
    ws.send(JSON.stringify({ subscribe: symbols }));
  };

  ws.onmessage = data => {
    const PricingData = protobuf.roots.default.quotefeeder.PricingData;
    let decodedObject = null;

    if (typeof process === 'object')
      decodedData = PricingData.decode(Buffer.from(data, "base64"));
    else
      decodedData = PricingData.decode(base64ToArray(data));
    decodedObject = PricingData.toObject(decodedData);
    cb(decodedObject);
  };

  return ws;
};

module.exports = { getQuotesFor };
