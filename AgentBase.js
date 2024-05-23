class AgentBase {
    constructor(name) {
        this.name = name;
    }

    sendMessage(message, toAgent) {
        console.log(`${this.name} sends message to ${toAgent.name}: ${message}`);
        toAgent.receiveMessage(message, this);
    }

    receiveMessage(message, fromAgent) {
      //  console.log(`${this.name} received message from ${fromAgent.name}: ${message}`);
    }
}

module.exports = AgentBase;
