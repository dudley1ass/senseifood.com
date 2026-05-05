# SenseiFood Vision API

Minimal backend for fridge photo ingredient detection.

## Endpoints

- `GET /health` -> `{ "ok": true }`
- `POST /ingredient-vision` (multipart/form-data)
  - field: `image` (file)
  - response: `{ "ingredients": ["milk", "eggs", "butter"] }`

## Local Run

```bash
cd vision-api
npm install
cp .env.example .env
# set OPENAI_API_KEY
npm run dev
```

Server default URL: `http://localhost:8787`

## Frontend Wiring

Set in frontend env:

```bash
VITE_INGREDIENT_VISION_ENDPOINT=http://localhost:8787/ingredient-vision
```

Then restart the Vite dev server.

## Deploy

Deploy `vision-api` as a separate web service (Render/Railway/Fly/etc), then set:

```bash
VITE_INGREDIENT_VISION_ENDPOINT=https://your-vision-api-domain/ingredient-vision
```
