# ✳ Agent Atlas — AI Agent Learning Academy

> **Explore widely. Build thoughtfully. Learn once, use your skills everywhere.**

A self-paced, browser-first academy for understanding the AI agent ecosystem, evaluating real opportunities, building no-code automations, developing Python agents, and launching useful products.

**[Read the complete first lesson on GitHub](lessons/f-agent.md)** · **[Open its interactive version](academy/lessons/f-agent.html)** · **[Browse six learning tracks](courses/STUDY-PLAN.md)**

This repository is readable directly in GitHub without downloading a ZIP. GitHub displays Markdown lessons and exercises natively. Interactive HTML pages need a browser or GitHub Pages hosting; GitHub's source-file view does not run JavaScript. No server, API key, paid model or backend is required for the self-contained simulations.

**Publishing status:** one fully rebuilt lesson (`f-agent`) is complete. The remaining course guides and 12 short checkpoints are **first-edition scaffolds**, not yet lessons of equivalent educational depth. Their study-hour totals are targets for the full curriculum, not hours of currently complete material.

## What's inside?

| Area | Experience | Status |
|---|---|---|
| Discover | Choose what to explore, no rigid order | ✅ Interactive |
| Learning Paths | Six paths with reusable modules | ✅ 13 interactive checkpoints + 30 textbook lessons |
| Agent Playground | Inspect step-by-step decision and tool trace | ✅ Three simulated scenarios |
| Knowledge checks | Immediate feedback, completion gating | ✅ Ten-question graded assessment in `f-agent`; one-question checks elsewhere need rebuilding |
| Progress | XP and course trophies stored in browser | ✅ Local device only |
| Case Studies | Guided inspections of real open-source projects | ✅ Six references |
| Videos | Original narration scripts and storyboards | 📝 Production-ready drafts, **not MP4s** |
| Python labs | Framework-free tools and safe exercises | ✅ Starter lab |
| Course textbooks | Six Markdown/HTML track guides | 🟡 Reference foundation; content needs deeper lesson-by-lesson development |
| Deep lessons | Full teaching, design labs, solutions, assessment, field trip, storyboard | ✅ `f-agent` complete; remaining modules queued |

The site clearly distinguishes **simulations** from actual AI model executions. Market examples are learning prompts, not verified current market-size estimates.

## Course pathways

| Course | Estimated active study | Prerequisites and modules | Outcome |
|---|---:|---|---|
| AI Foundations | 8–12 hours | Model, agent, tools, safety | Foundation Pathfinder |
| AI Agent Market & Business | 20–30 hours | Shared core + market and validation | Market Explorer |
| No-Code Agent Builder | 25–40 hours | Shared core + workflows and prototype | Automation Builder |
| Agent Engineering | 60–90 hours | Shared core + Python, RAG and evaluations | Agent Engineer |
| Multi-Agent Architecture | 35–55 hours | Technical shared modules + orchestration | Agent Architect |
| Launch an AI Product | 30–50 hours | Shared business skills + MVP launch | AI Founder |

Estimated course durations include future deeper exercises and references; the current first release provides introductory modules, plus one genuinely complete 90–115 minute lesson. New material can be added without duplicating core lessons.

## Suggested first 30 minutes

1. Read [Agent vs chatbot vs workflow](lessons/f-agent.md) and write down your choice for the retail ETL case.
2. Open its [interactive demonstration](academy/lessons/f-agent.html), if running the HTML in a browser or through GitHub Pages.
3. Complete its ten-question assessment and one design exercise; aim for at least 8/10.
4. Visit **My progress** to see your score and trophy progress.
5. Open **Case studies** and try the architecture detective checklist with one real project.

## Repo map

```text
academy/
  index.html       Browser experience and accessible navigation
  styles.css       Responsive dark/light design
  data.js          Canonical course/module metadata, quizzes and scenarios
  app.js           Routing, simulation, quizzes and local progress
  books/           Browser-readable course textbooks
  lessons/         Deep interactive lessons, beginning with f-agent.html
courses/           Six canonical course guides in Markdown
lessons/           Deep Markdown lessons with worked solutions and source links
docs/
  architecture.md  Learning model, skill graph and roadmap
  resources.md     Official reading/video sources and maintenance notes
labs/
  tool-dispatch/   Safe Python tool dispatch exercise
videos/
  01-agent-loop.md Original 6-minute video narration and scene-by-scene storyboard
```

## How shared learning works

Each module has a stable ID (`f-agent`, `f-tools`, `b-market`, etc.). Courses reference these IDs rather than duplicating lesson text. Completion is stored once in browser `localStorage` and recognized in every course that references the module. Course trophies are earned when all referenced modules are complete. The deep `f-agent` lesson adds an Explorer badge and shares the same stored module ID. This is **local progress**, not a verified certificate or synchronized account.

## Run locally

Open `academy/index.html` directly in a modern browser. This static build does not use a bundler or remote dependencies. The Python lab uses Python 3.10+ and the standard library only.

## GitHub Pages deployment

GitHub Pages can publish from repository root `/` or `/docs` (depending on repository and account settings), not directly from arbitrary subdirectories in branch mode. A simple approach is to copy the contents of `academy/` to repository `/docs/` and choose Settings → Pages → Deploy from branch → `main` → `/docs`. Alternatively use a GitHub Actions workflow to publish `academy/` as the Pages artifact. Pages availability and public visibility depend on the GitHub plan and repository privacy settings—review them before enabling it. Do not put secrets in the site; everything served by Pages should be treated as publicly accessible unless access control is explicitly configured.

## Safety and learning principles

- All playground records are synthetic and self-contained.
- No production database, email or messaging tools are wired into the browser.
- A model may **propose** a tool action; only authorized host code executes it.
- Do not include confidential workplace data or credentials in demos.
- Check vendor documentation, pricing, licensing and source repositories for current details.
- Do not claim a course trophy is externally accredited.

## Next release priorities

1. Add deeper lesson pages with video walkthrough recordings and transcripts.
2. Add no-code walkthroughs for n8n/Dify and a cost calculator.
3. Add a live, opt-in backend lab with provider-neutral configuration.
4. Add more real-world demo walkthroughs, unit tests, and optional cross-device progress.

## Attribution

Original academy text, simulations and source are prepared for this course. Third-party projects remain owned by their original authors; their repository links are learning references, not endorsements or included source copies.
