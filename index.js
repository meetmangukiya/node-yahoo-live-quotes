const WebSocket = require("isomorphic-ws");
const protobuf = require("protobufjs");
require("./__finStreamer-proto")(protobuf);

const getQuotesFor = (symbols, cb) => {
  const ws = new WebSocket("wss://streamer.finance.yahoo.com/");

  ws.onopen = () => {
    console.log(`subscribing to ${symbols}`);
    ws.send(JSON.stringify({ subscribe: symbols }));
  };

  ws.onmessage = data => {
    const PricingData = protobuf.roots.default.quotefeeder.PricingData;
    const decodedData = PricingData.decode(Buffer.from(data, "base64"));
    const decodedObject = PricingData.toObject(decodedData);
    cb(decodedObject);
  };
};

module.exports = { getQuotesFor };
