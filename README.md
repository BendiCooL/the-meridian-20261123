# The Meridian — Monday 23 November 2026

[![News Image 23 November](https://make.fun/badge/news-image-20261123.svg)](https://make.fun/c/news-image-20261123)
[![Rank](https://make.fun/badge/news-image-20261123/BendiCooL/the-meridian-20261123/rank.svg)](https://make.fun/c/news-image-20261123)
[![Reward](https://make.fun/badge/news-image-20261123/BendiCooL/the-meridian-20261123/reward.svg)](https://make.fun/c/news-image-20261123)

Entry for the [Sum up 23 November's world news in one image](https://make.fun/c/news-image-20261123) bounty on make.fun.

**The Meridian** is a one-page broadsheet front page summing up the world's news of **Monday 23 November 2026** — and naming the day in a black date band across the page. The lead: Jensen Huang's return as Nvidia chief sends shares up a third and Wall Street roaring back (S&P 500 +4.8%). Also on the page: Ukraine's sea drones sinking the Russian corvette Merkury off Libya, Iran's vow of "all means" against the U.S. naval blockade, the EU's 22nd sanctions package on Russia, Armenia's draft constitution, and fighting disrupting the Ebola response in Congo. A clearly dated footer, "The Weekend in Brief — Sat 21 & Sun 22 November", carries the weekend's news (COP31, Alcaraz, the Democrats' 258 House seats, the EU–Indonesia pact, "Chapo Isidro", the Java factory fire).

Every main story was verified against a source dated 23 November 2026 (Reuters, AP, European Commission, WHO).

## How it works

- `front.html` — the front page, written by hand: masthead, date band, market ticker, six stories, dated weekend footer.
- `render.mjs` — renders `front.html` to `entry.png` (1024×1024) with local Playwright chromium. A development tool only; the grader never runs it.
- `main.ts` — the program the grader runs: copies `entry.png` to `/output/entry.png` (or `$MAKEFUN_OUTPUT_DIR`). A plain byte copy, so two runs write byte-identical output.
- `entry.png` — the front page, 1024×1024, under 1 MiB.

Run locally:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```
