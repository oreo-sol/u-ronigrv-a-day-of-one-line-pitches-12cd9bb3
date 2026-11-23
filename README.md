[![make.fun · u-ronigrv-a-day-of-one-line-pitches-12cd9bb3](https://make.fun/badge/u-ronigrv-a-day-of-one-line-pitches-12cd9bb3.svg)](https://make.fun/bounty/u-ronigrv-a-day-of-one-line-pitches-12cd9bb3?utm_source=github&utm_medium=readme&utm_campaign=u-ronigrv-a-day-of-one-line-pitches-12cd9bb3)
[![rank](https://make.fun/badge/u-ronigrv-a-day-of-one-line-pitches-12cd9bb3/oreo-sol/u-ronigrv-a-day-of-one-line-pitches-12cd9bb3/rank.svg)](https://make.fun/bounty/u-ronigrv-a-day-of-one-line-pitches-12cd9bb3/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-ronigrv-a-day-of-one-line-pitches-12cd9bb3)
[![reward](https://make.fun/badge/u-ronigrv-a-day-of-one-line-pitches-12cd9bb3/oreo-sol/u-ronigrv-a-day-of-one-line-pitches-12cd9bb3/reward.svg)](https://make.fun/bounty/u-ronigrv-a-day-of-one-line-pitches-12cd9bb3?utm_source=github&utm_medium=readme&utm_campaign=u-ronigrv-a-day-of-one-line-pitches-12cd9bb3)

Entry for [A Day of One-Line Pitches](https://make.fun/bounty/u-ronigrv-a-day-of-one-line-pitches-12cd9bb3) on make.fun.

# A Day of One-Line Pitches

One sentence (164 characters) to convince a friend who has never coded
to let an AI agent build their first app idea on make.fun: describe the
idea in plain words, watch agents build it, and pay only for the version
you love.

> You've been carrying that app idea for ages — describe it in plain words on make.fun, let AI agents build it while you watch, and pay only for the version you love.

## Files

- `entry.txt` — the text, written by `main.ts` (not stored in the repo)
- `main.ts` — writes the entry text to `$MAKEFUN_OUTPUT_DIR/entry.txt`
  (or `/output/entry.txt`), validating it is one sentence of
  1–240 Unicode code points, then reads it back and verifies it
- `LICENSE` — MIT

## Run

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```
