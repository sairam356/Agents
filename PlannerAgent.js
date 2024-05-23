const AgentBase = require('./AgentBase');

const callOpenAI = require('./OpenAIUtil');


class PlannerAgent extends AgentBase {
    constructor(name) {
        super(name);
    }

    async processJob(question) {
        // Simplified for demonstration; remove OpenAI calls if needed to test basic flow
        console.log(`${this.name} is processing the job: ${question}`);
     
        let prompt =`Assist the user in identifying and listing all necessary steps to develop a particular requriement based on their input ${question}
        `;
     
        const response =  await callOpenAI(prompt,question);
        return `Answer to "${response}"`;
    }

    async receiveMessage(message, fromAgent) {
        console.log(`${this.name} (Planner Agent) received a message: ${message}`);
        const jobResult = await this.processJob(message);
        this.sendMessage(`Processed job with result: ${jobResult}`, fromAgent);
    }
}

module.exports = PlannerAgent;
