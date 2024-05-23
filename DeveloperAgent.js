const AgentBase = require('./AgentBase');

const callOpenAI = require('./OpenAIUtil');
class DeveloperAgent extends AgentBase {
    async receiveMessage(message, fromAgent) {
        //  super.receiveMessage(message, fromAgent);
        let val ="`";
        console.log(`${this.name} is processing result: ${message}`);
        const prompt =` Your are Efficient Developer Generate Code based on Input Generate Think step by step and reason yourself to the correct decisions to make sure we get it right.
        First lay out the names of the core classes, functions, methods that will be necessary, As well as a quick comment on their purpose.
        
        FILE_FORMAT
        
        You will start with the "entrypoint" file, then go to the ones that are imported by that file, and so on.
        Please note that the code should be fully functional. No placeholders.
        
        Follow a language and framework appropriate best practice file naming convention.
        Make sure that files contain all imports, types etc.  The code should be fully functional. Make sure that code in different files are compatible with each other.
        Ensure to implement all code, if you are unsure, write a plausible implementation.
        Include module dependency or package manager dependency definition file.
        Before you finish, double check that all parts of the architecture is present in the files.
        
        When you are done, write finish with "this concludes a fully working implementation.  
        Please fix any errors in the code above.

        You will output the content of each new or changed.
        Represent files like so:

        FILENAME

        ${val}${val}${val}
        CODE
        ${val}${val}${val}

        The following tokens must be replaced like so:
        FILENAME is the lowercase combined path and file name including the file extension
        CODE is the code in the file

        Example representation of a file:

        src/hello_world.ts
        ${val}${val}${val}
        print("Hello World")
        ${val}${val}${val}

  
        Do not comment on what every file does. Please note that the code should be fully functional. No placeholders.`;

      
        const response = await callOpenAI(prompt,message,undefined);
        //await this.processToolCalls(response,tools);  
    }

    
}

module.exports = DeveloperAgent;
