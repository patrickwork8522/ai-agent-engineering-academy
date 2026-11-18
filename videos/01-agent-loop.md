# Original video lesson 01 — What actually happens inside an AI agent?

**Status:** Script and storyboard ready; no recorded voiceover or rendered video exists yet.  
**Target duration:** 6–7 minutes.  
**Audience:** Absolute beginner.  
**Format:** Voiceover + animated diagrams from the Academy's playground.

| Time | Visual direction | Voiceover |
|---|---|---|
| 0:00–0:40 | A user types “Why did my ETL job fail?” into a friendly interface. | "Imagine asking a colleague why yesterday's data pipeline failed. A good colleague won't simply guess; they'll inspect the evidence. We can teach an AI-powered program to follow a similar controlled process." |
| 0:40–1:20 | Split screen: chatbot answer vs agent with tools. | "A language model generates text. An agent is a program that may use a model to choose actions. Those actions could include reading a status record, searching a runbook, or asking a clarifying question." |
| 1:20–2:10 | Show five nodes: request → decision → tool → observation → answer. Highlight each as narrated. | "Here's the basic loop. We give the system a goal. The model proposes the next step. The host application validates that proposal, runs an allowed tool, and returns an observation. The process may repeat before a final answer." |
| 2:10–3:10 | Zoom into model's JSON-like proposed tool call, then show a lock on the tool registry. | "The model cannot safely grant itself new permissions. Your application must decide which tools exist, which parameters are valid, and what the user has actually authorized. A webpage or document doesn't get to rewrite those rules." |
| 3:10–4:30 | Screen recording plan: select ETL scenario in `academy/index.html`, click Next decision five times. | "Let's run a miniature example. A user asks about failed jobs. Our simulator selects a read-only job-status tool, observes two synthetic failures, and drafts recommended checks. Notice that it never restarts the jobs—the user only asked for an explanation." |
| 4:30–5:20 | On screen, branch diagram: fixed workflow vs exploratory agent. | "Does every automation need an agent? No. If your steps are known—download, validate, upload—a conventional workflow is usually simpler and cheaper. Agents are interesting when the next action depends on information discovered along the way." |
| 5:20–6:00 | Show a malicious runbook instruction crossed out; approval gate remains locked. | "A useful agent also needs boundaries: time limits, step limits, narrow permissions, logs and human approval before important side effects. An impressive demo is not yet a dependable service." |
| 6:00–6:30 | A quiz appears in the academy. | "Your challenge: the user wants yesterday's failures. Should the agent send email, restart every job, or read job status first? Choose the safest useful action in the playground." |

## Producer checklist

- Record the actual browser simulation only after verifying the current UI.
- Use original diagrams and music with appropriate rights; avoid third-party copyrighted music.
- Export an MP4 with readable captions and a text transcript.
- Keep narration terminology aligned with the lesson's source code.
- Review the finished video for factual and visual accuracy before publishing.

## Viewer exercise

1. Open the Academy's Agent Playground.
2. Run the ETL example one step at a time.
3. Identify which step was selected by a simulated model and which was enforced by the host program.
4. Explain why a read-only tool is sufficient for this request.
