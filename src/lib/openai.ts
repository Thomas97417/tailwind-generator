import OpenAI from "openai";

const openAIKey = process.env.OPENAI_API_KEY;

if(!openAIKey) {
  throw new Error("No OpenAI API key found");
}

export const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});