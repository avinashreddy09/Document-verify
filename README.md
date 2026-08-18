# 🔍 DocuVerify

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white"/>
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white"/>
  <img src="https://img.shields.io/badge/FastAPI-009688?style=for-the-badge&logo=fastapi&logoColor=white"/>
  <img src="https://img.shields.io/badge/PyTorch-EE4C2C?style=for-the-badge&logo=pytorch&logoColor=white"/>
  <img src="https://img.shields.io/badge/TailwindCSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white"/>
  <img src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white"/>
</p>

> AI-assisted PDF forgery and identity-document verification tool — built for HR/hiring ops teams who need a fast, explainable first-pass check on candidate documents before they reach payroll.

---

## 📌 Project Overview

Upload a PDF and DocuVerify runs it through **four independent forensic checks**, returning a structured, explainable breakdown — not a single opaque "fake/real" score. Built as the Acdyon Technologies Frontend Challenge (Track 2 — Premium Home Page), extended with a working document-analysis backend so the product-showcase section is a **real interactive demo** rather than a static mockup.

---

## 🔬 How It Works

| Stage | What It Checks | Technique |
|---|---|---|
| **1. Metadata & Structure** | Creation/modification timestamp mismatches, producer software inconsistencies, object/font injection anomalies | `pikepdf` / `PyMuPDF` |
| **2. Visual Tampering** | Spliced/edited image regions, compression artifact inconsistencies | Error Level Analysis (ELA) + EfficientNet-B4 + Grad-CAM |
| **3. Text/Font Consistency** | Character spacing irregularities, baseline misalignment, font mismatches within fields | PaddleOCR |
| **4. Aggregation** | Combines findings into a per-check breakdown with plain-English reasons | Rule-based aggregation — no black-box scoring |

> ⚠️ **Honesty note:** DocuVerify reports *"no anomalies detected in the checks performed"* — never *"verified authentic."* It discloses exactly which checks ran, does not claim guaranteed accuracy, and has no fabricated benchmark statistics. See [Limitations](#-limitations) below.

---

## 🛠️ Tech Stack

### Frontend
- **Next.js 15** (App Router) + **TypeScript**
- **Tailwind CSS** — theme fully driven by CSS variables, complete light/dark mode
- **Framer Motion** — scroll reveals, hover-lift micro-interactions
- **next-themes** — dark mode persistence
- **lucide-react** — icons

### Backend
- **FastAPI** (Python)
- **pikepdf / PyMuPDF** — PDF metadata & structural parsing
- **pdf2image, Pillow, opencv-python** — page rendering & Error Level Analysis
- **EfficientNet-B4** (PyTorch) — visual tamper classification
- **PaddleOCR** — text extraction & consistency checks

### Deployment
- **Frontend:** Vercel
- **Backend:** Render *(Python/ML dependencies need a dedicated service)*

---

## 📁 Project Structure

```
docuverify/
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── globals.css
│   └── components/
│       ├── navbar.tsx
│       ├── hero.tsx
│       ├── hero-background.tsx
│       ├── tech-marquee.tsx
│       ├── verify-demo.tsx        # PDF upload + results UI
│       ├── features.tsx
│       ├── footer.tsx
│       └── theme-provider.tsx
├── backend/
│   ├── main.py                    # FastAPI app — /analyze endpoint
│   ├── stage1_metadata.py
│   ├── stage2_visual.py
│   ├── stage3_ocr.py
│   ├── stage4_aggregate.py
│   └── requirements.txt
├── public/
│   └── videos/                    # Hero background footage
├── DECISIONS.md
└── README.md
```

---

## ⚙️ Getting Started

### Prerequisites
- Node.js 18+
- Python 3.10+

### Frontend

```bash
git clone https://github.com/avinashreddy09/docuverify.git
cd docuverify

npm install
npm run dev
# → http://localhost:3000
```

### Backend

```bash
cd backend
python -m venv venv
source venv/bin/activate        # Windows: venv\Scripts\activate
pip install -r requirements.txt
uvicorn main:app --reload
# → http://localhost:8000
```

### Environment Variables

Create a `.env.local` in the root:

```env
NEXT_PUBLIC_API_URL=http://localhost:8000
```

In production, set `NEXT_PUBLIC_API_URL` to your deployed Render backend URL.

| Variable | Where | Purpose |
|---|---|---|
| `NEXT_PUBLIC_API_URL` | Frontend `.env.local` | Base URL of the FastAPI backend |

---

## 🔌 API Reference

### POST `/analyze`

Upload a PDF for forensic analysis.

```bash
curl -X POST http://localhost:8000/analyze \
  -F "file=@candidate_document.pdf"
```

```json
{
  "overall_verdict": "anomalies_detected",
  "checks": {
    "metadata": {
      "status": "anomaly",
      "reason": "Modification timestamp post-dates creation by 3 days; producer software mismatch"
    },
    "visual": {
      "status": "clean",
      "reason": "No spliced regions detected; ELA artifacts consistent with original compression"
    },
    "text_font": {
      "status": "anomaly",
      "reason": "Font mismatch in DOB field; baseline misalignment in name section"
    },
    "aggregation": {
      "checks_run": ["metadata", "visual", "text_font"],
      "anomaly_count": 2
    }
  }
}
```

---

## ⚠️ Limitations

Being upfront about what this tool does **not** do:

- This is a **heuristic + single-model first-pass check**, not a legal or forensic-grade authentication service
- No formally validated accuracy benchmark exists for this specific pipeline — the EfficientNet-B4 model was trained on a prior project's dataset, not a purpose-built benchmark
- **Error Level Analysis** is a well-established but imperfect technique — it can produce false positives on documents that were legitimately re-compressed or re-scanned
- OCR-based consistency checks depend on document quality and language; performance degrades on low-resolution scans
- This tool should **support, not replace**, human review of sensitive hiring documents

---

## 🏗️ Design Decisions

See [`DECISIONS.md`](./DECISIONS.md) for the full writeup on:
- Ingestion & architecture trade-offs
- What was cut for time
- Where AI tools were used during development and what was personally verified afterward

---

## 👨‍💻 Author

**Avinash Reddy**

[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/avinashreddy09)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/avinashreddy09/)
[![Portfolio](https://img.shields.io/badge/Portfolio-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://avinash-reddy-portfolio.vercel.app/)
[![Gmail](https://img.shields.io/badge/Gmail-EA4335?style=for-the-badge&logo=gmail&logoColor=white)](mailto:avinashreddydonthireddy2006@gmail.com)

---

<div align="center">

**Built with ❤️ by Avinash Reddy**

If you found this useful, please ⭐ star the repo!

</div>
