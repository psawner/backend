// backend/server.js
/*import express from "express";
import cors from "cors";
import dotenv from "dotenv";  // ✅ Import dotenv
import { GoogleGenAI } from "@google/genai";

const app = express();
app.use(express.json());
app.use(cors()); // Allow frontend access

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

app.post("/ask", async (req, res) => {
  try {
    const { question } = req.body;
    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: question,
    });
    res.json({ answer: response.text });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

*/


import express from "express";
import cors from "cors";
import dotenv from "dotenv";  // ✅ Import dotenv
import { GoogleGenAI } from "@google/genai";

dotenv.config();  // ✅ Load .env variables

const app = express();
app.use(express.json());
app.use(cors()); // Allow frontend access

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

app.post("/ask", async (req, res) => {
  try {
    const { question } = req.body;
    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: question,
    });
    res.json({ answer: response.text });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Something went wrong!" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


















