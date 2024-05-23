// OpenAIUtil.ts
const {OpenAI} = require('openai');


async function callOpenAI(prompt, message,toolData) {

    try {
        const messages = [{
            role: "system",
            content: prompt,
        }, { role: "user", content: message }];
        
        const openai = new OpenAI({
            apiKey:"<>",
            dangerouslyAllowBrowser: true,
        });

        
        const options = {
            model: 'gpt-3.5-turbo',
            temperature: 0.2,
            messages
           
        };

        if(toolData!=null || toolData!=undefined){
            options.tools = toolData;
        }

        let result = await openai.chat.completions.create(options);


        return result.choices[0]?.message.content || "No response";
    } catch (error) {
        console.error('OpenAI API error:', error);
        return "Error in calling OpenAI API";
    }
}



module.exports = callOpenAI;
