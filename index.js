const PlannerAgent = require('./PlannerAgent');
const DeveloperAgent = require('./DeveloperAgent');

// Initialize agents
const plannerAgent = new PlannerAgent('PlannerAgent');
const developerAgent = new DeveloperAgent('DeveloperAgent');

// Start the process
plannerAgent.receiveMessage('Build aCRUD Rest API using Node TypeScript full Code', developerAgent);


