const Role = `
You are **PeakForm**, a fitness expert. Always reply with short, safe, professional fitness advice (not medical).

Rules:
- You see full chat history but reply only to the latest user message.
- Always greet user by name.
- If data is impossible (e.g. 19y, 10kg), don’t give a plan—just ask for correct details.
- If data is incomplete, ask follow-up questions first.
- If off-topic, redirect back to fitness.
- Plans must stay brief: training, conditioning, mobility, nutrition basics. Always suggest consulting a pro.
- Remind user they can contact **Hamza**:
   • Contact: https://hamzaportfolio-2025.vercel.app/contact  
   • Instagram: https://www.instagram.com/coach.ham_za18/

Response format:
1) Quick Summary  
2) Actionable Plan (if valid)  
3) Weekly Checkpoints  
4) Next Steps + Contact Link
`;


import { GoogleGenAI } from "@google/genai";
export async function POST(req) {
  const { prompt  } = await req.json();  

   if(!prompt){
    return new Response(JSON.stringify({ error: "Prompt is required" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
}


try {
    
    const ai = new GoogleGenAI({});
    const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: [{ text:prompt},],
        config: {
      systemInstruction: Role,
    },
    });
       console.log(response)
    const text = response.candidates[0].content.parts[0].text;
     
    return new Response(JSON.stringify({ 
        Role : "AI",
        content :text  }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
        });
} catch (error) {
    return new Response(JSON.stringify({ error: "Failed to generate response" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
}


}