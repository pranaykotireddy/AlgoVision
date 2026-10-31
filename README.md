# 🚀 AlgoVision

> A full-stack **DSA learning platform** with AI code tracing, 3D algorithm visualization, multi-language code execution, and interactive AI tutoring.

![AlgoVision Banner](https://img.shields.io/badge/AlgoVision-Learn_DSA_Visually-7c3aed?style=for-the-badge)

[![React](https://img.shields.io/badge/React-18-61dafb?logo=react&logoColor=white)](https://react.dev)
[![Node.js](https://img.shields.io/badge/Node.js-Express-339933?logo=node.js&logoColor=white)](https://nodejs.org)
[![Groq](https://img.shields.io/badge/Groq-LLaMA_3.3-ff6b35)](https://groq.com)
[![Three.js](https://img.shields.io/badge/Three.js-3D_Visualization-000000?logo=three.js&logoColor=white)](https://threejs.org)
[![License](https://img.shields.io/badge/License-MIT-green)](./LICENSE)

---

## ✨ Features

### 🎨 3D Algorithm Visualizations (10 Types)
- **Sorting Race** — Watch bars animate through bubble, selection, insertion sort
- **Array Blocks** — Interactive 3D representation of any array
- **Sliding Window** — Visual window that slides across the array
- **Two Pointers** — Yellow and red pointers move toward each other
- **Binary Search** — Watch elements eliminate until the target is found
- **HashMap Buckets** — 3D bucket visualization of hash collisions
- **Kadane's Algorithm** — Positive/negative bars for running sum
- **Linked List Reversal** — Rotate and reverse node pointers in 3D
- **Recursion Call Stack** — See the stack grow as functions recurse
- **Stack Push/Pop** — Watch elements enter and leave a 3D stack

### 🧠 AI Code Tracer
Write Python code, click **Trace**, and watch it execute line-by-line. The AI (Groq LLaMA 3.3) simulates the code and returns every frame with:
- Line being executed
- Current variables
- Array state
- Console output

### 💻 Multi-Language Code Playground
- Write, run, and debug in **7 languages**: Python, JavaScript, C++, Java, C, Go, Rust
- Monaco Editor (VS Code in the browser)
- Run code and view real-time output

### 🤖 AI Tutor
- **Explain My Code** — Line-by-line explanations from Groq AI
- **Explain Any Topic** — Ask about Big O, recursion, DP, etc.
- **Chat with AI** — Persistent conversation with context

### 📚 Learn Hub (45 DSA Topics)
- Beginner → Expert roadmap
- Each topic includes:
  - Deep theory
  - Multi-language code examples
  - Practice problems (Easy / Medium / Hard)
  - Interview notes
  - GeeksforGeeks links

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| **Frontend** | React 18, Vite, Tailwind CSS v3 |
| **Routing** | React Router v6 |
| **Animations** | Framer Motion |
| **Code Editor** | Monaco Editor (VS Code engine) |
| **3D Rendering** | Three.js, React Three Fiber, Drei |
| **Code Execution** | OnlineCompiler.io API |
| **AI** | Groq API (LLaMA 3.3 70B) |
| **Backend** | Node.js, Express |
| **Code Tracer** | AI-powered execution simulation |
| **Deployment** | Vercel (frontend), Render (backend) |

---

## 🚀 Getting Started

### Prerequisites
- **Node.js 18+**
- **Groq API Key** (free at [console.groq.com](https://console.groq.com))
- **OnlineCompiler.io API Key** (free at [onlinecompiler.io](https://onlinecompiler.io))

### 1. Clone the repo

```bash
git clone https://github.com/pranaykotireddy/AlgoVision.git
cd AlgoVision


AlgoVision/
├── backend/
│   ├── routes/
│   │   ├── chat.js         # AI chat
│   │   ├── explain.js      # Line-by-line code explanation
│   │   ├── extract.js      # AI array extraction
│   │   ├── run.js          # Code execution (OnlineCompiler)
│   │   ├── trace.js        # Python tracer (sys.settrace)
│   │   └── visualize.js    # AI code simulator
│   ├── server.js
│   ├── .env
│   └── package.json
│
└── frontend/
    ├── src/
    │   ├── components/
    │   │   ├── Navbar.jsx
    │   │   ├── EditorPanel.jsx
    │   │   ├── OutputPanel.jsx
    │   │   ├── ChatPanel.jsx
    │   │   ├── MiniCompiler.jsx
    │   │   ├── CodeScene3D.jsx
    │   │   ├── DSAScene3D.jsx
    │   │   └── ErrorBoundary.jsx
    │   ├── pages/
    │   │   ├── Home.jsx
    │   │   ├── Playground.jsx
    │   │   ├── Learn.jsx
    │   │   ├── TopicDetail.jsx
    │   │   └── Visualizer.jsx
    │   ├── data/
    │   │   ├── languages.js
    │   │   ├── topics1.js
    │   │   ├── topics2.js
    │   │   ├── topics3.js
    │   │   ├── topics4.js
    │   │   ├── topics5.js
    │   │   ├── topics6.js
    │   │   └── topics7.js
    │   ├── utils/
    │   │   ├── runCode.js
    │   │   ├── askAI.js
    │   │   └── sortingAlgorithms.js
    │   ├── App.jsx
    │   ├── main.jsx
    │   └── index.css
    └── package.json