
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getFitnessAdvice = async (query: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: [
        {
          text: `You are the AI Fitness Coach for "NEXT Fitness II" located in Kecskemét, Hungary. 
          Provide energetic, professional, and encouraging fitness or nutrition advice. 
          Keep responses concise (under 150 words). 
          If asked about the gym, mention we are at Rezgő u. 1.
          
          User query: ${query}`
        }
      ],
      config: {
        temperature: 0.7,
        topP: 0.9,
      }
    });
    return response.text || "Sorry, I'm having trouble connecting to my fitness database. Let's try again!";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I am currently resting between sets. Please ask again in a moment!";
  }
};
