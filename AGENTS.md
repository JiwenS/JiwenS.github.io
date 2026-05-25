# Agent Working Rules

## Documentation Source of Truth

- Treat the `docs/` directory as the source of truth for product, brand, UI/UX, engineering, and human decisions.
- Before changing behavior, content structure, visual language, architecture, deployment behavior, or other project direction, review the relevant documents under `docs/`.
- If it is unclear which document applies, start with `docs/README.md` and follow its directory guidance and governance rules.
- Prefer documented project rules over assumptions. If code and docs disagree, do not silently choose one side.

## Code And Documentation Consistency

- After completing code changes requested by the user, check whether the changed behavior, structure, UI, architecture, or workflow remains consistent with the relevant `docs/` guidance.
- If code and documentation are consistent, mention that the consistency check was completed in the final response when relevant.
- If code and documentation are inconsistent, introduce HITL before resolving the mismatch:
  - Notify the user of the specific differences between the code change and the documented source of truth.
  - Ask the user to choose whether to update the code, update the documentation, or record an explicit exception.
  - Do not make source-of-truth documentation changes on behalf of the user without human confirmation.
- When a human decision resolves a conflict, exception, or reusable precedent, record or propose a decision record under `docs/decisions/` following `docs/README.md`.
