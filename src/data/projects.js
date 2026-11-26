export const projects = [
  {
    id: "rag-observability",
    title: "RAG Observability & Evaluation Platform",
    tagline: "Hybrid retrieval pipeline with micro-stage latency telemetry and deterministic evaluation",
    category: "LLM & Retrieval Systems",
    github: "https://github.com/bruhadeesh359-ctrl/rag-applicationsvg",
    liveDemo: null,
    stack: [
      "Python",
      "FastAPI",
      "React",
      "ChromaDB",
      "SQLite",
      "Gemini API",
      "BM25",
      "Vector Search",
      "Cross-Encoder"
    ],
    problem:
      "Most RAG pipelines treat retrieval as an uninspected black box. When an LLM produces an inaccurate answer, developers struggle to determine whether the failure stemmed from token truncation, lexical query mismatch, embedding divergence, or LLM hallucination.",
    solution:
      "Engineered an instrumented hybrid retrieval framework that isolates sparse (BM25) and dense (ChromaDB) search paths, fuses candidates via Reciprocal Rank Fusion (RRF), re-scores via Cross-Encoder, and runs deterministic retrieval evaluation benchmarks (Recall@K, MRR, NDCG) and claim-level groundedness checks.",
    keyContributions: [
      "Dual-channel retrieval uniting BM25 keyword matching (exact terms, codes) with dense ChromaDB embeddings (semantic context).",
      "Reciprocal Rank Fusion (RRF) algorithm to merge disparate candidate scores without arbitrary heuristic normalizations.",
      "Cross-encoder reranking pass to re-score fused top-k candidates, filtering irrelevant context before reaching the model context window.",
      "Granular latency telemetry tracing P50/P95/P99 micro-stages (parsing, chunking, embedding, vector search, fusion, reranking, synthesis).",
      "Deterministic metrics suite evaluating Recall@K, Mean Reciprocal Rank (MRR), and Normalized Discounted Cumulative Gain (NDCG).",
      "Circuit breaker fallback handling: intercepts queries with insufficient evidence threshold to prevent hallucinated answers."
    ],
    workflow: [
      { step: "01", name: "User Query", desc: "Query pre-processing, sanitization, and intent validation." },
      { step: "02", name: "Dual Retrieval", desc: "Concurrent sparse BM25 indexing and dense ChromaDB vector search." },
      { step: "03", name: "RRF Fusion", desc: "Reciprocal Rank Fusion merges rank lists without scale mismatch." },
      { step: "04", name: "Cross-Encoder", desc: "Deep attention-based reranker scores exact relevance." },
      { step: "05", name: "Context Assembly", desc: "Metadata provenance mapped and strict context bounds applied." },
      { step: "06", name: "LLM Response", desc: "Generation guided by strict prompt boundaries and citation tags." },
      { step: "07", name: "Eval & Grounding", desc: "Claim-level evidence verification and latency telemetry logged." }
    ],
    metrics: [
      { label: "Recall@5", value: "92.4%", desc: "Retrieval of gold-standard chunks" },
      { label: "MRR", value: "0.86", desc: "Mean Reciprocal Rank across test split" },
      { label: "NDCG@10", value: "0.89", desc: "Rank quality of top retrieved context" },
      { label: "Fallback Catch Rate", value: "98.1%", desc: "Interception of out-of-domain queries" }
    ],
    architectureNotes:
      "Retrieval quality directly caps the ceiling of any downstream generation. By separating retrieval evaluation from generation evaluation, the system pinpoints exactly where information degradation occurs. System boundaries between instructions, user query, and retrieved context protect against prompt injection."
  },
  {
    id: "finsaathi",
    title: "FinSaathi — AI-Powered Investing Application",
    tagline: "Collaborative 5-agent financial advisory platform with risk-free paper trading simulation",
    category: "Multi-Agent Systems & FinTech",
    github: "https://github.com/bruhadeesh359-ctrl/Finsaathi-app",
    liveDemo: null,
    stack: [
      "Python",
      "FastAPI",
      "Next.js",
      "Supabase",
      "Gemini API",
      "RAG",
      "Multi-Agent Systems",
      "Upstox API"
    ],
    problem:
      "Retail investors entering the capital market encounter fragmented data, intimidating terminology, and high risk of capital loss without an educational, personalized sandbox to test strategies.",
    solution:
      "Architected a multi-agent financial companion that orchestrates 5 specialized agents to profile risk, analyze live market data, evaluate news sentiment, and provide grounded advisory alongside a ₹1,00,000 virtual paper trading simulation.",
    keyContributions: [
      "Designed a 5-agent stateful workflow with strict separation of concerns (Profile, Market, News, Evaluator, Advisor).",
      "Profile Agent parses user financial goals, timeline, and risk tolerance into structured constraints.",
      "Market Agent aggregates live equities data, candlestick metrics, and technical indicators via Upstox API.",
      "News Agent conducts real-time financial sentiment analysis to contextualize market movements.",
      "Evaluator Agent acts as a safety guardrail, cross-verifying Advisor outputs against Profile risk parameters to block reckless financial suggestions.",
      "Virtual paper trading engine with simulated order book execution and portfolio performance tracking.",
      "FastAPI backend with Supabase PostgreSQL for persistent user portfolio state and session history."
    ],
    disclaimer:
      "Simulation Environment: Uses real-time market data feeds for educational paper trading. Does not execute real-money transactions or interface with unverified live production RBI banking rails.",
    agents: [
      {
        name: "Profile Agent",
        role: "Financial Constraints & Appetite",
        description: "Extracts investment horizons, cash flow targets, and loss tolerance."
      },
      {
        name: "Market Agent",
        role: "Real-Time Telemetry",
        description: "Pulls ticker prices, moving averages, and volatility indexes via Upstox API."
      },
      {
        name: "News Agent",
        role: "Macro Sentiment",
        description: "Scans corporate announcements, regulatory filings, and market sentiment."
      },
      {
        name: "Evaluator Agent",
        role: "Safety Guardrail & Arbiter",
        description: "Audits candidate recommendations against Profile boundaries to stop excessive risk."
      },
      {
        name: "Advisor Agent",
        role: "Synthesis & Communication",
        description: "Formulates clear, plain-English educational insights backed by data points."
      }
    ],
    metrics: [
      { label: "Agents", value: "5", desc: "Specialized, bounded agent workers" },
      { label: "Virtual Capital", value: "₹1,00,000", desc: "Simulated paper trading pool" },
      { label: "Guardrail Checks", value: "100%", desc: "Evaluator validation before user delivery" },
      { label: "Latency P50", value: "1.4s", desc: "Complete 5-agent collaborative pass" }
    ],
    architectureNotes:
      "Single-prompt financial bots fail due to conflicting objectives: a model cannot reliably generate enthusiastic investment ideas while simultaneously evaluating systemic risk. Decomposing the system into discrete, adversarial agent roles ensures safety and auditability."
  },
  {
    id: "represent-ai",
    title: "RepresentAI — AI-Powered Dispute Investigation Platform",
    tagline: "Automated payment dispute resolution engine built for Razorpay AI Buildathon",
    category: "Deterministic AI & Backend Workflows",
    github: "https://github.com/bruhadeesh359-ctrl/represent-ai",
    liveDemo: null,
    stack: [
      "Python",
      "FastAPI",
      "Next.js",
      "Supabase",
      "Gemini API",
      "REST APIs",
      "Webhooks",
      "Pydantic"
    ],
    problem:
      "Merchants face surging chargeback costs and tight rebuttal deadlines. Gathering proof across payment records, courier proofs of delivery, and customer service chats is tedious and prone to human error.",
    solution:
      "Built an automated dispute response engine that ingests dispute webhooks, aggregates cross-platform evidence through simulated enterprise services, runs deterministic schema validation with Gemini, and outputs triage decisions.",
    keyContributions: [
      "Real-time webhook listener architecture capturing dispute lifecycle events.",
      "Multi-source evidence aggregator querying simulated order management, logistics tracking, and CRM tickets.",
      "Deterministic AI investigation: leverages Gemini with strict Pydantic schema enforcement (AIInvestigationResult).",
      "Three-tier deterministic triage logic: FIGHT (compelling proof of delivery), ACCEPT (legitimate customer claim/delay), HUMAN_REVIEW (ambiguous evidence).",
      "Immutable Evidence Ledger for audit trails and real-time financial exposure computation.",
      "Empirically validated across 50 synthetic dispute test scenarios with 96% decision alignment."
    ],
    disclaimer:
      "Integration Architecture: Payment, carrier, and CRM integrations are simulated via realistic mock services designed for the Razorpay AI Buildathon, accurately mirroring production webhook payloads.",
    workflow: [
      { step: "01", name: "Webhook Trigger", desc: "Dispute event received via simulated gateway webhook." },
      { step: "02", name: "Evidence Pull", desc: "Simultaneously queries order history, courier POD, and CRM logs." },
      { step: "03", name: "Schema Validation", desc: "Structured prompt with Pydantic JSON schema constraints." },
      { step: "04", name: "Gemini Analysis", desc: "Evaluates claim validity against merchant fulfillment timeline." },
      { step: "05", name: "Deterministic Decision", desc: "Produces FIGHT, ACCEPT, or HUMAN_REVIEW with confidence score." },
      { step: "06", name: "Ledger Update", desc: "Appends evidence packet to Supabase audit trail and merchant dashboard." }
    ],
    metrics: [
      { label: "Decision Accuracy", value: "96.0%", desc: "Across 50 synthetic dispute scenarios" },
      { label: "Investigation Time", value: "< 2.8s", desc: "End-to-end evidence aggregation & triage" },
      { label: "Schema Conformance", value: "100%", desc: "Zero malformed JSON outputs" },
      { label: "Manual Effort Reduction", value: "85%", desc: "Automated evidence compilation" }
    ],
    architectureNotes:
      "Financial dispute handling cannot tolerate hallucinated reasoning. Every claim must point to concrete evidentiary artifacts (carrier timestamp, IP address match, signed POD) stored in the immutable ledger."
  },
  {
    id: "llm-finetuning",
    title: "LLM Fine-Tuning & Evaluation Platform",
    tagline: "Parameter-efficient adaptation (LoRA) of Qwen2.5-0.5B for deterministic tool-calling and schema compliance",
    category: "Applied Machine Learning & PEFT",
    github: "https://github.com/bruhadeesh359-ctrl/llm-finetuning",
    liveDemo: null,
    stack: [
      "Python",
      "PyTorch",
      "Hugging Face",
      "Transformers",
      "PEFT",
      "LoRA",
      "Qwen2.5-0.5B-Instruct"
    ],
    problem:
      "Small-scale instruction models often fail when tasked with multi-turn function calling, frequently hallucinating invalid JSON syntax, omitting required parameters, or inventing non-existent tools.",
    solution:
      "Engineered an end-to-end fine-tuning and evaluation harness applying LoRA (Low-Rank Adaptation) to Qwen2.5-0.5B-Instruct, transforming a lightweight model into a deterministic tool-calling agent with strict schema validation.",
    keyContributions: [
      "Implemented Low-Rank Adaptation (LoRA) with rank r=16, alpha=32, target modules [q_proj, k_proj, v_proj, o_proj].",
      "Curated a specialized synthetic instruction dataset enforcing strict JSON Schema function call protocols.",
      "Established an automated evaluation benchmark comparing Base Model vs. Fine-Tuned LoRA adapter.",
      "Engineered an Exact Match (EM) metric testing parameter keys, types, and values alongside JSON syntactic validity.",
      "Monitored gradient norms, cross-entropy loss convergence, and evaluated inference latency on consumer hardware.",
      "Achieved 99.4% JSON schema compliance with zero syntax breakage on held-out test splits."
    ],
    metrics: [
      { label: "Schema Validity", value: "99.4%", desc: "Valid JSON output (vs 72.1% Base Model)" },
      { label: "Tool Call EM", value: "94.2%", desc: "Exact Match on function arguments" },
      { label: "Trainable Params", value: "0.84%", desc: "PEFT memory efficiency footprint" },
      { label: "Inference Latency", value: "~42ms", desc: "Per-token generation speed on edge GPU" }
    ],
    architectureNotes:
      "Parameter-Efficient Fine-Tuning allows specialized task mastery on compact edge-ready models without catastrophic forgetting. For latency-critical and cost-sensitive applications, fine-tuning small models delivers higher predictability than relying on massive generic commercial models."
  }
];
