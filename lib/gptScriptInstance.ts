import { GPTScript } from "@gptscript-ai/gptscript";

// Check the actual method or property used for model configuration in your library
const g = new GPTScript({
    APIKey: process.env.OPENAI_API_KEY,
    DefaultModel: "gpt-3.5-turbo", // Example: using modelVersion instead of model
});

export default g;
