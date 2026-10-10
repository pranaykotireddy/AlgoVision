# 🚀 AlgoVision

> A full-stack DSA learning platform with a multi-language code playground, AI-powered tutor, and interactive 3D algorithm visualizations.

[![Status](https://img.shields.io/badge/status-active-success)]()
[![License](https://img.shields.io/badge/license-MIT-blue)]()
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen)]()

---

## ✨ Features

- 💻 **Code Playground** — Write, run, and test code in 7+ languages (Python, C++, Java, JavaScript, C, Go, Rust) with real-time stdin/stdout
- 🤖 **AI Tutor** — ChatGPT-style assistant that explains your code step-by-step with markdown rendering and real-world analogies
- 🎨 **3D Visualizations** — Watch sorting, trees, and graph algorithms come alive in interactive 3D *(in progress)*
- 📚 **Learn Hub** — Topic-wise DSA content with code examples and interview notes *(planned)*
- 🔐 **Secure Backend** — API keys held server-side, never exposed to the browser

---

## 🛠️ Tech Stack

**Frontend**
- ⚛️ React 18 + Vite
- 🎨 Tailwind CSS
- 🔀 React Router v6
- 🎬 Framer Motion
- 💻 Monaco Editor (VS Code engine)
- 📝 React Markdown + remark-gfm

**Backend**
- 🟢 Node.js + Express
- 🔑 dotenv for environment variables
- 🧠 Groq API (Llama 3.3 / GPT-OSS) — blazing fast LLM inference

**Code Execution**
- ⚙️ Piston API — free, no key needed, 40+ languages

**Planned**
- 🎮 Three.js + React Three Fiber (3D visualizations)
- 🗄️ MongoDB (user progress)
- 🔐 JWT auth

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- A free Groq API key: [console.groq.com/keys](https://console.groq.com/keys)

### 1. Clone the repo

```bash
git clone https://github.com/pranaykotireddy/AlgoVision.git
cd AlgoVision
```

### 2. Set up the backend

```bash
cd backend
npm install
```

Create a `.env` file (copy from `.env.example`):

```
GROQ_API_KEY=your_real_key_here
PORT=5000
```

Start the backend:

```bash
npm run dev
```

You should see:
```
🚀 Backend running on http://localhost:5000
🔑 Groq key loaded: YES
✅ N models available
```

### 3. Set up the frontend (new terminal)

```bash
cd frontend
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

---

## 📂 Project Structure

```
AlgoVision/
├── backend/
│   ├── routes/
│   │   └── chat.js           # Groq LLM proxy
│   ├── server.js
│   ├── .env.example
│   └── package.json
│
└── frontend/
    ├── src/
    │   ├── components/       # Navbar, EditorPanel, OutputPanel, ChatPanel
    │   ├── pages/            # Home, Playground, Learn, Visualizer
    │   ├── data/             # Language configs
    │   ├── utils/            # runCode (Piston), askAI (backend)
    │   ├── App.jsx
    │   └── main.jsx
    └── package.json
```

---

## 🎯 Usage

### Code Playground

1. Open `/playground`
2. Pick a language from the dropdown
3. Write or paste code
4. Click **Run** to execute
5. Use the **stdin** box for program input

### AI Tutor

1. In the same Playground page
2. Click **"Explain my code"** to get a step-by-step explanation
3. Or type any DSA question in the chat: *"What is Big O notation?"*

---

## 🗺️ Roadmap

- [x] **Phase 1** — Foundation (React + Vite + Tailwind + Routing)
- [x] **Phase 2** — Code playground (Monaco + Piston API)
- [x] **Phase 3** — AI tutor (Groq + Node backend + markdown UI)
- [ ] **Phase 4** — 3D algorithm visualizations (Three.js)
- [ ] **Phase 5** — Learn hub with DSA topics
- [ ] **Phase 6** — User accounts + progress tracking (JWT + MongoDB)
- [ ] **Phase 7** — Deploy (Vercel + Render) + custom domain

---

## 🧠 How the AI Tutor Works

```
┌─────────────┐      POST /api/chat      ┌──────────────┐
│   React     │ ───────────────────────► │   Express    │
│  (browser)  │                          │   (Node)     │
└─────────────┘                          └──────┬───────┘
                                                │
                                                │ Groq API call
                                                │ (with secret key)
                                                ▼
                                         ┌──────────────┐
                                         │  Groq LLM    │
                                         │  (Llama 3.3) │
                                         └──────────────┘
```

**Security:** The API key lives only in `backend/.env` and never reaches the browser.

---

## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first.

---

## 📜 License

MIT © [Pranay Kotireddy](https://github.com/pranaykotireddy)

---

## 🙏 Acknowledgements

- [Monaco Editor](https://microsoft.github.io/monaco-editor/)
- [Piston API](https://github.com/engineer-man/piston)
- [Groq](https://groq.com/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Three Fiber](https://docs.pmnd.rs/react-three-fiber)
