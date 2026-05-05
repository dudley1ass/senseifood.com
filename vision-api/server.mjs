import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import multer from 'multer';

const app = express();
const port = Number(process.env.PORT || 8787);
const openAiApiKey = process.env.OPENAI_API_KEY;
const PANTRY_TARGETS = [
  'flour',
  'butter',
  'sugar',
  'eggs',
  'baking powder',
  'baking soda',
  'salt',
  'milk',
  'cream',
  'chocolate',
  'yeast',
  'coffee',
  'vanilla',
  'oil',
  'cornstarch',
];

function extractTextOutput(payload) {
  if (typeof payload?.output_text === 'string' && payload.output_text.trim()) {
    return payload.output_text;
  }

  const chunks = payload?.output ?? [];
  for (const chunk of chunks) {
    const content = chunk?.content ?? [];
    for (const item of content) {
      if (typeof item?.text === 'string' && item.text.trim()) return item.text;
    }
  }

  return '{}';
}

app.use(cors());
app.use(express.json({ limit: '10mb' }));

const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 8 * 1024 * 1024 },
});

app.get('/health', (_req, res) => {
  res.json({ ok: true });
});

app.post('/ingredient-vision', upload.single('image'), async (req, res) => {
  try {
    if (!openAiApiKey) {
      return res.status(500).json({ error: 'Missing OPENAI_API_KEY on server.' });
    }
    if (!req.file) {
      return res.status(400).json({ error: 'Missing image file field: image' });
    }

    const mimeType = req.file.mimetype || 'image/jpeg';
    const base64 = req.file.buffer.toString('base64');
    const dataUrl = `data:${mimeType};base64,${base64}`;

    const response = await fetch('https://api.openai.com/v1/responses', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${openAiApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4.1-mini',
        temperature: 0,
        max_output_tokens: 220,
        text: {
          format: {
            type: 'json_schema',
            name: 'ingredient_result',
            schema: {
              type: 'object',
              additionalProperties: false,
              properties: {
                ingredients: {
                  type: 'array',
                  items: { type: 'string' },
                },
              },
              required: ['ingredients'],
            },
            strict: true,
          },
        },
        input: [
          {
            role: 'user',
            content: [
              {
                type: 'input_text',
                text:
                  `Identify visible ingredients from this kitchen/fridge photo. Only return ingredients that match this pantry list when possible: ${PANTRY_TARGETS.join(', ')}. Exclude brands, packaging text, utensils, and non-food items.`,
              },
              {
                type: 'input_image',
                image_url: dataUrl,
              },
            ],
          },
        ],
      }),
    });

    if (!response.ok) {
      const detail = await response.text();
      return res.status(502).json({
        error: 'Vision provider request failed.',
        detail,
      });
    }

    const payload = await response.json();
    const rawText = extractTextOutput(payload);

    let parsed;
    try {
      parsed = JSON.parse(rawText);
    } catch {
      parsed = { ingredients: [] };
    }

    const ingredients = Array.isArray(parsed.ingredients)
      ? [
          ...new Set(
            parsed.ingredients
              .map((x) => String(x).trim().toLowerCase())
              .filter((name) => name && PANTRY_TARGETS.some((target) => name.includes(target)))
          ),
        ]
      : [];

    return res.json({ ingredients });
  } catch (err) {
    return res.status(500).json({
      error: 'Unexpected server error.',
      detail: err instanceof Error ? err.message : String(err),
    });
  }
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Vision API listening on :${port}`);
});
