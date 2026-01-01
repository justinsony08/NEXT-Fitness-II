
import { GoogleGenAI } from "@google/genai";

// Standard check for API_KEY
const apiKey = typeof process !== 'undefined' ? process.env.API_KEY : '';

export const getFitnessAdvice = async (query: string) => {
  if (!apiKey) {
    return "The AI Coach is currently offline (API Key missing). Please check with the administrator.";
  }

  try {
    const ai = new GoogleGenAI({ apiKey: apiKey });
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
    return response.text || "Sorry, I'm having trouble connecting. Let's try again!";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I am currently resting between sets. Please ask again in a moment!";
  }
};
