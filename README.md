# elo-assign-sandbox

Scratch repo for prototyping elo's `/assign` loop: one bead, one Issue branch, one PR.
Nothing here is real software.

- `app.js`, `index.html`: a toy page. Tests: `node --test`.
- `.github/workflows/ci.yml`: the `test` check on every PR, then a `preview` job that
  reports a per-PR environment (`pr-<n>`) whose URL serves `index.html` at the PR head SHA.
- Simulation labels: `sim:slow` (test sleeps 20 min), `sim:no-deploy` (no environment).
- `main` is protected like elo's: PR required, squash only, no force-push, no deletion, no bypass.
- Beads: prefix `sbx`, shared Dolt server, database `elo_assign_sandbox`.
<!-- smoke -->
