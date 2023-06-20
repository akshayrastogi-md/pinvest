const OpenAI = require("openai-api");
const openai = new OpenAI(process.env.OPENAI_API_KEY);

export default async (req, res) => {
  const beforePromt = ``;
  const afterPromt = ``;
  const breakPoint = `\n\n'''\n\n`;

  let prompt = `${beforePromt} ${breakPoint} ${req.body.name} ${breakPoint} ${afterPromt}`;

  const gptResponse = await openai.complete({
    engine: "text-davinci-003",
    prompt: `${prompt}`,
    maxTokens: 4000,
    temperature: 1,
    topP: 1,
    presencePenalty: 0,
    frequencyPenalty: 0.5,
    bestOf: 1,
    n: 1,
  });

  res.status(200).json({ text: `${gptResponse.data.choices[0].text}` });
};
// model: "text-davinci-002",
