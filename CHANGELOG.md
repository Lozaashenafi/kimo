# Changelog

All notable changes to this project will be documented in this file.

## [1.1.0] - 2026-08-27

### Added & Changed
- Renamed project and scoped packages to **Kimo** (`@kimo-emoji/core` and `@kimo-emoji/react`).
- Expanded emoji library to **79 handcrafted vector SVG emojis** spanning 7 categories:
  - 28 Faces (happy, love, starry, melt, dizzy, pleading, angel, devil, robot, alien, etc.)
  - 10 Gestures & Hands (thumbs-up, heart-hands, peace, clap, wave, fist-bump, pointing, etc.)
  - 10 Animals & Creatures (frog expressions, cat face, puppy face, panda, bear, bunny, duck, pig)
  - 11 Objects & Symbols (party popper, sparkles, heart, broken-heart, fire, 100, crown, trophy, medal, star, bulb)
  - 7 Food & Treats (boba, coffee, pizza, cake, donut, ice-cream, burger)
  - 7 Nature & Weather (sun, moon, rainbow, cloud-rain, lightning, flower, mushroom)
  - 6 Activity & Gaming (controller, dice, palette, music-notes, headphones, soccer)
- Expanded interactive playground, explorer search keywords, and full TypeScript typings.

## [1.0.0] - 2026-08-27

### Added
- Initial release of `@kimo-emoji/core` and `@kimo-emoji/react`.
- Handcrafted vector SVG emojis inspired by cute expressive character art.
- Framework-independent core engine with search, category filters, and vanilla DOM renderer.
- Polymorphic React `<Emoji />` and individual tree-shakeable named components (`<Happy />`, `<FrogHappy />`, etc.).
- `<EmojiProvider>` context for application-wide defaults.
- Zero-runtime overhead with accessible screen reader support.
- Interactive documentation website with real-time emoji explorer, sandbox, and code generators.
- Automated code generator (`pnpm generate`) and asset validator (`pnpm validate`).
