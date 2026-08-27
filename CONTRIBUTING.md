# Contributing to Kimo SVG Emoji Library

Thank you for your interest in contributing to Kimo!

## Workflow for Adding New Emojis

1. **Draw or Export SVG**: Ensure the SVG is sized in a `0 0 128 128` viewBox.
2. **Save SVG Asset**: Save to `packages/assets/svg/<name>.svg` (use kebab-case, e.g. `sparkle-cat.svg`).
3. **Register Metadata**: Add an entry to `packages/assets/metadata/emojis.json`.
4. **Generate Code**:
   ```bash
   pnpm generate
   ```
5. **Validate & Test**:
   ```bash
   pnpm validate
   pnpm test
   ```
6. **Open a Pull Request**: Submit your PR with a screenshot preview of the new emoji.

## Coding Guidelines

- Use TypeScript with strict typing.
- Ensure all SVGs pass accessibility checks.
- Keep bundle sizes minimal.
