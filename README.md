# SenseiFood Hub

The central hub for SenseiFood.com - connecting all 5 food science tools: CookieSensei, CakeSensei, PieSensei, IceCreamSensei, and BeanSensei.

## 🚀 Quick Start

### Local Development

```bash
# Install dependencies
npm install
# or
pnpm install

# Run development server
npm run dev
# or
pnpm dev

# Open http://localhost:5173
```

### Build for Production

```bash
# Build the project
npm run build
# or
pnpm build

# Preview production build
npm run preview
# or
pnpm preview
```

## 📦 Project Structure

```
senseifood.com/
├── index.html              # Entry HTML file
├── package.json            # Dependencies and scripts
├── vite.config.ts          # Vite configuration
├── render.yaml             # Render deployment config
├── public/
│   └── _redirects          # SPA routing config
├── src/
│   ├── main.tsx            # JavaScript entry point
│   ├── app/
│   │   ├── App.tsx         # Main app component
│   │   ├── Root.tsx        # Root layout
│   │   ├── routes.tsx      # React Router configuration
│   │   ├── components/     # Reusable components
│   │   └── pages/          # Page components
│   └── styles/             # Global styles
└── README.md
```

## 🌐 Deployment to Render

### Option 1: Using render.yaml (Recommended)

1. Push your code to GitHub
2. Go to [Render Dashboard](https://dashboard.render.com/)
3. Click "New +" → "Blueprint"
4. Connect your GitHub repository
5. Render will automatically detect `render.yaml` and configure everything

### Option 2: Manual Setup

1. Go to [Render Dashboard](https://dashboard.render.com/)
2. Click "New +" → "Static Site"
3. Connect your GitHub repository (`https://github.com/dudley1ass/senseifood.com`)
4. Configure the following settings:

   **Build Settings:**
   - **Build Command:** `npm install && npm run build`
   - **Publish Directory:** `dist`
   - **Node Version:** 22.22.0 (or leave default)

5. Click "Create Static Site"

### Environment Variables

No environment variables needed for this static site.

## 🔗 Subdomain Structure

The hub links to these subdomains (configure in Render + Namecheap):

- **Hub:** `senseifood.com` (this repo)
- **CookieSensei:** `cookiesensei.senseifood.com`
- **CakeSensei:** `cakesensei.senseifood.com`
- **PieSensei:** `piesensei.senseifood.com`
- **IceCreamSensei:** `icecreamsensei.senseifood.com`
- **BeanSensei:** `beansensei.senseifood.com`

## 📄 Pages

- **Home** (`/`) - Main landing page with all tools
- **Articles:**
  - `/articles/why-cookies-spread`
  - `/articles/brown-sugar-vs-white-sugar`
  - `/articles/why-ice-cream-gets-icy`
  - `/articles/why-coffee-tastes-bitter`
  - `/articles/coffee-extraction-science`
  - `/articles/why-cakes-collapse`

## 🛠 Tech Stack

- **Framework:** React 18.3.1
- **Build Tool:** Vite 6.3.5
- **Styling:** Tailwind CSS 4.1.12
- **Routing:** React Router 7.13.0
- **Icons:** Lucide React
- **UI Components:** Radix UI + shadcn/ui

## 📝 License

Private - All rights reserved

## 🤝 Support

For issues or questions, contact the SenseiFood team.
