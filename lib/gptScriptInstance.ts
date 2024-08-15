import { GPTScript } from "@gptscript-ai/gptscript";
import Configuration from "openai";

// Correctly configure the API with the configuration object
const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});


// If you need the GPTScript instance
const g = new GPTScript({
    APIKey: process.env.OPENAI_API_KEY,
});

export { g };
