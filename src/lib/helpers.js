export async function sentimentAnalysis(data) {
  const res = await fetch(
    'https://router.huggingface.co/hf-inference/models/nlptown/bert-base-multilingual-uncased-sentiment',
    {
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_HF_API_KEY}`,
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(data),
    }
  );

  const result = await res.json();
  return result;
}
