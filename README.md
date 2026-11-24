# makefun-x-post-01

My entry for make.fun's [make-your-own-bounty promotion](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01).

[![make.fun bounty](https://make.fun/badge/post-x-promote-make-your-own-bounty-01.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01)

[![Entry rank](https://make.fun/badge/post-x-promote-make-your-own-bounty-01/00xcyd/makefun-x-post-01/rank.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01)

[![Entry reward](https://make.fun/badge/post-x-promote-make-your-own-bounty-01/00xcyd/makefun-x-post-01/reward.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01)

## What this is

The post is the entry, not this code. I published one post on X linking make.fun's make-your-own-bounty announcement, with my own photo and my play code in the text. Places are decided by the post's replies plus reposts plus quotes at the deadline; views and likes do not move the score.

- Post: https://x.com/00xcyd/status/2125292571215688134
- Play code: makefun-moonbeam-minnow-pinto

## What the program does

`main.ts` is a small Node 22 program. It copies `POST.json` from `MAKEFUN_BOT_DIR` (default `/bot`) into `MAKEFUN_OUTPUT_DIR` (default `/output`), creating the output directory when needed. If the copy fails it prints what went wrong and exits nonzero.

Run it locally:

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`out/POST.json` then matches the repository's `POST.json` byte for byte. The grader writes its own `post.counts.json` beside the copy.

## License

MIT. See [LICENSE](LICENSE).
