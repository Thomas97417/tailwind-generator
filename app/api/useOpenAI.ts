import type { NextApiRequest, NextApiResponse } from 'next'
import { initializeOpenAI } from '@/src/lib/openai'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { apiKey } = req.body;
    const openai = initializeOpenAI(apiKey);
    // Use `openai` to make API calls

    // Send a response back to the client
    res.json({ message: 'API key received and processed' });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}