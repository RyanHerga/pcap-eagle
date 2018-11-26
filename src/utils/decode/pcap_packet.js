var EthernetPacket = require("./ethernet_packet");


function PcapHeader(raw_header) {
    // Prototype function - Disregard
}

function PcapPacket(emitter) {
    this.link_type = null;
    this.pcap_header = null;
    this.payload = null;
    this.emitter = emitter;
}

PcapPacket.prototype.decode = function (packetBuf) {
    var buf = packetBuf;
    this.payload = new EthernetPacket(this.emitter).decode(buf, 0);
    return this;
};

PcapPacket.prototype.toString = function () {
    return this.link_type + " " + this.payload;
};

module.exports = PcapPacket;
