// src/EmojiProvider.tsx
import { createContext, useContext, useMemo } from "react";
import { jsx } from "react/jsx-runtime";
var EmojiContext = createContext({
  defaultSize: 32
});
function useEmojiContext() {
  return useContext(EmojiContext);
}
function EmojiProvider({
  children,
  value,
  defaultSize,
  defaultClassName,
  fallback,
  defaultAriaHidden
}) {
  const contextValue = useMemo(() => {
    if (value) return value;
    return {
      defaultSize: defaultSize ?? 32,
      defaultClassName,
      fallback,
      defaultAriaHidden
    };
  }, [value, defaultSize, defaultClassName, fallback, defaultAriaHidden]);
  return /* @__PURE__ */ jsx(EmojiContext.Provider, { value: contextValue, children });
}

// src/Emoji.tsx
import { forwardRef } from "react";

// ../core/src/registry.ts
var EMOJI_REGISTRY = {
  "angel": {
    name: "angel",
    label: "Innocent Angel",
    category: "faces",
    keywords: ["angel", "halo", "innocent", "pure", "saint", "wings", "peace"],
    unicode: "\u{1F607}",
    version: "1.1.0",
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="100%" height="100%" fill="none"><ellipse cx="64" cy="22" rx="36" ry="10" stroke="#FFD166" stroke-width="6" stroke-linecap="round"/><ellipse cx="64" cy="22" rx="36" ry="10" stroke="#FFF3B0" stroke-width="2.5" stroke-linecap="round"/><ellipse cx="28" cy="74" rx="14" ry="9" fill="#FFA3BA" fill-opacity="0.75"/><ellipse cx="100" cy="74" rx="14" ry="9" fill="#FFA3BA" fill-opacity="0.75"/><path d="M34 56 C40 48 50 48 56 56" stroke="#1E1F24" stroke-width="4.5" stroke-linecap="round"/><path d="M72 56 C78 48 88 48 94 56" stroke="#1E1F24" stroke-width="4.5" stroke-linecap="round"/><path d="M52 78 C58 86 70 86 76 78" stroke="#1E1F24" stroke-width="4" stroke-linecap="round"/><path d="M18 52 C6 44 4 64 16 68 Z" fill="#E8F4F8" stroke="#1E1F24" stroke-width="3"/><path d="M110 52 C122 44 124 64 112 68 Z" fill="#E8F4F8" stroke="#1E1F24" stroke-width="3"/></svg>',
    viewBox: "0 0 128 128"
  },
  "angry": {
    name: "angry",
    label: "Angry Steam",
    category: "emotions",
    keywords: ["angry", "mad", "rage", "furious", "annoyed", "steam"],
    unicode: "\u{1F624}",
    version: "1.0.0",
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="100%" height="100%" fill="none"><ellipse cx="26" cy="76" rx="14" ry="9" fill="#FF5964" fill-opacity="0.6"/><ellipse cx="102" cy="76" rx="14" ry="9" fill="#FF5964" fill-opacity="0.6"/><path d="M26 34 L56 46" stroke="#1E1F24" stroke-width="5" stroke-linecap="round"/><path d="M102 34 L72 46" stroke="#1E1F24" stroke-width="5" stroke-linecap="round"/><ellipse cx="44" cy="56" rx="8" ry="10" fill="#1E1F24"/><circle cx="46" cy="54" r="2.5" fill="#FFFFFF"/><ellipse cx="84" cy="56" rx="8" ry="10" fill="#1E1F24"/><circle cx="82" cy="54" r="2.5" fill="#FFFFFF"/><g transform="translate(94, 20) scale(0.7)"><path d="M8 0 Q16 16 32 16" stroke="#E63946" stroke-width="4.5" stroke-linecap="round" fill="none"/><path d="M24 0 Q16 16 0 16" stroke="#E63946" stroke-width="4.5" stroke-linecap="round" fill="none"/><path d="M32 16 Q16 16 8 32" stroke="#E63946" stroke-width="4.5" stroke-linecap="round" fill="none"/><path d="M0 16 Q16 16 24 32" stroke="#E63946" stroke-width="4.5" stroke-linecap="round" fill="none"/></g><path d="M44 80 C44 76 84 76 84 80 C84 90 44 90 44 80 Z" fill="#FFFFFF" stroke="#1E1F24" stroke-width="4.5" stroke-linejoin="round"/><path d="M44 83 L84 83" stroke="#1E1F24" stroke-width="2.5"/><path d="M54 77 L54 89" stroke="#1E1F24" stroke-width="2.5"/><path d="M64 77 L64 89" stroke="#1E1F24" stroke-width="2.5"/><path d="M74 77 L74 89" stroke="#1E1F24" stroke-width="2.5"/><path d="M18 72 C12 68 8 74 12 80 C8 84 14 88 18 84" stroke="#8D99AE" stroke-width="2.5" fill="none" stroke-linecap="round"/><path d="M110 72 C116 68 120 74 116 80 C120 84 114 88 110 84" stroke="#8D99AE" stroke-width="2.5" fill="none" stroke-linecap="round"/></svg>',
    viewBox: "0 0 128 128"
  },
  "applause": {
    name: "applause",
    label: "Clapping Applause",
    category: "gestures",
    keywords: ["clap", "applause", "bravo", "hands", "cheer", "praise"],
    unicode: "\u{1F44F}",
    version: "1.1.0",
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="100%" height="100%" fill="none"><path d="M22 96 L46 64 C52 56 62 62 56 70 L42 98 Z" fill="#FFE5D9" stroke="#1E1F24" stroke-width="4" stroke-linejoin="round"/><path d="M106 96 L82 64 C76 56 66 62 72 70 L86 98 Z" fill="#FFE5D9" stroke="#1E1F24" stroke-width="4" stroke-linejoin="round"/><path d="M48 62 L60 48 C66 42 74 48 68 56 L58 68" fill="#FFE5D9" stroke="#1E1F24" stroke-width="3.5" stroke-linejoin="round"/><path d="M80 62 L68 48 C62 42 54 48 60 56 L70 68" fill="#FFE5D9" stroke="#1E1F24" stroke-width="3.5" stroke-linejoin="round"/><path d="M64 24 L66 32 L74 34 L66 36 L64 44 L62 36 L54 34 L62 32 Z" fill="#FFD166"/><path d="M40 38 L42 42 L46 44 L42 46 L40 50 L38 46 L34 44 L38 42 Z" fill="#FF85A1"/><path d="M88 38 L90 42 L94 44 L90 46 L88 50 L86 46 L82 44 L86 42 Z" fill="#FF85A1"/></svg>',
    viewBox: "0 0 128 128"
  },
  "avocado": {
    name: "avocado",
    label: "Cute Avocado",
    category: "food",
    keywords: ["avocado", "guacamole", "fruit", "green", "healthy", "cute"],
    unicode: "\u{1F951}",
    version: "1.1.0",
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="100%" height="100%" fill="none"><path d="M64 20 C46 20 34 38 34 60 C34 86 44 108 64 108 C84 108 94 86 94 60 C94 38 82 20 64 20 Z" fill="#2D6A4F" stroke="#1E1F24" stroke-width="4.5" stroke-linejoin="round"/><path d="M64 26 C50 26 40 42 40 60 C40 82 48 102 64 102 C80 102 88 82 88 60 C88 42 78 26 64 26 Z" fill="#D8F3DC"/><circle cx="64" cy="74" r="20" fill="#9C6644" stroke="#1E1F24" stroke-width="3.5"/><ellipse cx="54" cy="78" rx="4" ry="2.5" fill="#FFA3BA" fill-opacity="0.9"/><ellipse cx="74" cy="78" rx="4" ry="2.5" fill="#FFA3BA" fill-opacity="0.9"/><circle cx="58" cy="70" r="2.5" fill="#FFFFFF"/><circle cx="70" cy="70" r="2.5" fill="#FFFFFF"/><path d="M61 77 C63 80 65 80 67 77" stroke="#1E1F24" stroke-width="2" stroke-linecap="round"/></svg>',
    viewBox: "0 0 128 128"
  },
  "balloon": {
    name: "balloon",
    label: "Party Balloon",
    category: "fun",
    keywords: ["balloon", "party", "float", "celebrate", "birthday", "red"],
    unicode: "\u{1F388}",
    version: "1.1.0",
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="100%" height="100%" fill="none"><path d="M64 96 C64 104 56 108 64 116 C70 122 62 126 64 128" stroke="#1E1F24" stroke-width="3" stroke-linecap="round" fill="none"/><polygon points="60,94 68,94 64,98" fill="#E63946" stroke="#1E1F24" stroke-width="2.5"/><ellipse cx="64" cy="52" rx="42" ry="46" fill="#FF4D6D" stroke="#1E1F24" stroke-width="4.5"/><path d="M42 26 C34 36 34 56 40 68" stroke="#FFFFFF" stroke-width="5" stroke-linecap="round" stroke-opacity="0.85"/><path d="M96 20 L98 24 L102 26 L98 28 L96 32 L94 28 L90 26 L94 24 Z" fill="#FFD166"/></svg>',
    viewBox: "0 0 128 128"
  },
  "bear": {
    name: "bear",
    label: "Teddy Bear",
    category: "animals",
    keywords: ["bear", "teddy", "cute", "fluffy", "cozy", "brown", "hug"],
    unicode: "\u{1F43B}",
    version: "1.1.0",
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="100%" height="100%" fill="none"><circle cx="34" cy="38" r="18" fill="#C89666" stroke="#1E1F24" stroke-width="4"/><circle cx="34" cy="38" r="10" fill="#E8C39E"/><circle cx="94" cy="38" r="18" fill="#C89666" stroke="#1E1F24" stroke-width="4"/><circle cx="94" cy="38" r="10" fill="#E8C39E"/><circle cx="64" cy="72" r="44" fill="#DDB892" stroke="#1E1F24" stroke-width="4.5"/><ellipse cx="64" cy="80" rx="20" ry="16" fill="#F3E0C8"/><ellipse cx="32" cy="76" rx="9" ry="6" fill="#FF8BA7" fill-opacity="0.75"/><ellipse cx="96" cy="76" rx="9" ry="6" fill="#FF8BA7" fill-opacity="0.75"/><ellipse cx="44" cy="62" rx="6" ry="7" fill="#1E1F24"/><circle cx="46" cy="60" r="2.2" fill="#FFFFFF"/><ellipse cx="84" cy="62" rx="6" ry="7" fill="#1E1F24"/><circle cx="86" cy="60" r="2.2" fill="#FFFFFF"/><ellipse cx="64" cy="74" rx="7" ry="5" fill="#1E1F24"/><path d="M64 79 L64 85" stroke="#1E1F24" stroke-width="3" stroke-linecap="round"/><path d="M56 86 C60 90 68 90 72 86" stroke="#1E1F24" stroke-width="3" stroke-linecap="round"/></svg>',
    viewBox: "0 0 128 128"
  },
  "boba": {
    name: "boba",
    label: "Boba Bubble Tea",
    category: "food",
    keywords: ["boba", "bubbletea", "tea", "drink", "tapioca", "milk", "sweet"],
    unicode: "\u{1F9CB}",
    version: "1.1.0",
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="100%" height="100%" fill="none"><path d="M72 16 L60 60" stroke="#70D6FF" stroke-width="8" stroke-linecap="round"/><path d="M38 48 C38 36 90 36 90 48 Z" fill="#E8F4F8" stroke="#1E1F24" stroke-width="4" stroke-linejoin="round"/><path d="M40 48 L46 104 C47 110 81 110 82 104 L88 48 Z" fill="#FCEADE" stroke="#1E1F24" stroke-width="4.5" stroke-linejoin="round"/><path d="M43 62 L46 103 C47 108 81 108 82 103 L85 62 Z" fill="#DDB892"/><ellipse cx="48" cy="78" rx="6" ry="4" fill="#FFA3BA" fill-opacity="0.8"/><ellipse cx="80" cy="78" rx="6" ry="4" fill="#FFA3BA" fill-opacity="0.8"/><circle cx="56" cy="74" r="3" fill="#1E1F24"/><circle cx="72" cy="74" r="3" fill="#1E1F24"/><path d="M62 78 C64 81 66 81 68 78" stroke="#1E1F24" stroke-width="2" stroke-linecap="round"/><circle cx="52" cy="98" r="4.5" fill="#1E1F24"/><circle cx="64" cy="100" r="4.5" fill="#1E1F24"/><circle cx="76" cy="98" r="4.5" fill="#1E1F24"/><circle cx="58" cy="92" r="4.5" fill="#1E1F24"/><circle cx="70" cy="92" r="4.5" fill="#1E1F24"/></svg>',
    viewBox: "0 0 128 128"
  },
  "bunny": {
    name: "bunny",
    label: "Cute Bunny",
    category: "animals",
    keywords: ["bunny", "rabbit", "cute", "ears", "pet", "hop", "white"],
    unicode: "\u{1F430}",
    version: "1.1.0",
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="100%" height="100%" fill="none"><path d="M42 56 C32 20 40 8 48 10 C56 12 56 34 50 56 Z" fill="#FFFFFF" stroke="#1E1F24" stroke-width="4" stroke-linejoin="round"/><path d="M44 48 C38 24 42 16 46 16 C50 16 50 32 48 48 Z" fill="#FFA3BA"/><path d="M78 56 C72 34 72 12 80 10 C88 8 96 20 86 56 Z" fill="#FFFFFF" stroke="#1E1F24" stroke-width="4" stroke-linejoin="round"/><path d="M80 48 C78 32 78 16 82 16 C86 16 90 24 84 48 Z" fill="#FFA3BA"/><ellipse cx="64" cy="80" rx="44" ry="36" fill="#FFFFFF" stroke="#1E1F24" stroke-width="4.5"/><ellipse cx="32" cy="86" rx="10" ry="6" fill="#FFA3BA" fill-opacity="0.8"/><ellipse cx="96" cy="86" rx="10" ry="6" fill="#FFA3BA" fill-opacity="0.8"/><ellipse cx="46" cy="72" rx="7" ry="9" fill="#1E1F24"/><circle cx="48" cy="69" r="2.8" fill="#FFFFFF"/><ellipse cx="82" cy="72" rx="7" ry="9" fill="#1E1F24"/><circle cx="84" cy="69" r="2.8" fill="#FFFFFF"/><circle cx="64" cy="78" r="3.5" fill="#FF8BA7"/><path d="M56 84 C60 88 64 88 64 84 C64 88 68 88 72 84" stroke="#1E1F24" stroke-width="3" stroke-linecap="round"/></svg>',
    viewBox: "0 0 128 128"
  },
  "cake": {
    name: "cake",
    label: "Birthday Cake",
    category: "food",
    keywords: ["cake", "birthday", "slice", "strawberry", "candle", "sweet", "party"],
    unicode: "\u{1F370}",
    version: "1.1.0",
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="100%" height="100%" fill="none"><path d="M24 82 L96 46 L108 82 L36 112 Z" fill="#FFE5D9" stroke="#1E1F24" stroke-width="4.5" stroke-linejoin="round"/><path d="M28 92 L98 58 L104 68 L32 100 Z" fill="#FF4D6D"/><path d="M22 82 L94 46 L106 46 L108 56 L34 92 Z" fill="#FFFFFF" stroke="#1E1F24" stroke-width="3"/><circle cx="54" cy="62" r="7" fill="#E63946" stroke="#1E1F24" stroke-width="2.5"/><circle cx="80" cy="50" r="7" fill="#E63946" stroke="#1E1F24" stroke-width="2.5"/><rect x="64" y="28" width="6" height="24" rx="2" fill="#70D6FF" stroke="#1E1F24" stroke-width="2.5"/><path d="M67 14 C61 20 63 26 67 28 C71 26 73 20 67 14 Z" fill="#FFB703" stroke="#1E1F24" stroke-width="2"/><circle cx="67" cy="22" r="2.5" fill="#FF5E7E"/></svg>',
    viewBox: "0 0 128 128"
  },
  "cat-cry": {
    name: "cat-cry",
    label: "Crying Cat",
    category: "animals",
    keywords: ["cat", "kitty", "cry", "tears", "sad", "weep", "whimper"],
    unicode: "\u{1F63F}",
    version: "1.1.0",
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="100%" height="100%" fill="none"><path d="M24 48 L36 26 L52 44 Z" fill="#FFE5D9" stroke="#1E1F24" stroke-width="4" stroke-linejoin="round"/><path d="M104 48 L92 26 L76 44 Z" fill="#FFE5D9" stroke="#1E1F24" stroke-width="4" stroke-linejoin="round"/><ellipse cx="64" cy="72" rx="46" ry="38" fill="#FFF0F5" stroke="#1E1F24" stroke-width="4.5"/><path d="M42 62 C40 82 36 94 36 104 C44 104 46 84 46 62 Z" fill="#70D6FF" stroke="#1E1F24" stroke-width="2.5"/><path d="M86 62 C88 82 92 94 92 104 C84 104 82 84 82 62 Z" fill="#70D6FF" stroke="#1E1F24" stroke-width="2.5"/><ellipse cx="44" cy="58" rx="7" ry="8" fill="#1E1F24"/><ellipse cx="84" cy="58" rx="7" ry="8" fill="#1E1F24"/><path d="M56 82 C60 76 68 76 72 82" stroke="#1E1F24" stroke-width="3.5" stroke-linecap="round"/><line x1="20" y1="74" x2="32" y2="76" stroke="#1E1F24" stroke-width="2.5" stroke-linecap="round"/><line x1="108" y1="74" x2="96" y2="76" stroke="#1E1F24" stroke-width="2.5" stroke-linecap="round"/></svg>',
    viewBox: "0 0 128 128"
  },
  "cat-happy": {
    name: "cat-happy",
    label: "Happy Cat",
    category: "animals",
    keywords: ["cat", "kitty", "kitten", "happy", "cute", "whiskers", "pet", "meow"],
    unicode: "\u{1F431}",
    version: "1.1.0",
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="100%" height="100%" fill="none"><path d="M26 44 L40 18 L54 38 Z" fill="#FFE5D9" stroke="#1E1F24" stroke-width="4" stroke-linejoin="round"/><path d="M32 40 L40 24 L48 38 Z" fill="#FF8BA7"/><path d="M102 44 L88 18 L74 38 Z" fill="#FFE5D9" stroke="#1E1F24" stroke-width="4" stroke-linejoin="round"/><path d="M96 40 L88 24 L80 38 Z" fill="#FF8BA7"/><ellipse cx="64" cy="72" rx="46" ry="38" fill="#FFF0F5" stroke="#1E1F24" stroke-width="4.5"/><ellipse cx="32" cy="78" rx="10" ry="6" fill="#FFA3BA" fill-opacity="0.75"/><ellipse cx="96" cy="78" rx="10" ry="6" fill="#FFA3BA" fill-opacity="0.75"/><path d="M38 60 C44 52 52 52 58 60" stroke="#1E1F24" stroke-width="4" stroke-linecap="round"/><path d="M70 60 C76 52 84 52 90 60" stroke="#1E1F24" stroke-width="4" stroke-linecap="round"/><path d="M60 68 L68 68 L64 73 Z" fill="#FF5E7E"/><path d="M52 74 C56 79 64 79 64 74 C64 79 72 79 76 74" stroke="#1E1F24" stroke-width="3.5" stroke-linecap="round"/><line x1="22" y1="70" x2="36" y2="72" stroke="#1E1F24" stroke-width="2.5" stroke-linecap="round"/><line x1="22" y1="80" x2="36" y2="78" stroke="#1E1F24" stroke-width="2.5" stroke-linecap="round"/><line x1="106" y1="70" x2="92" y2="72" stroke="#1E1F24" stroke-width="2.5" stroke-linecap="round"/><line x1="106" y1="80" x2="92" y2="78" stroke="#1E1F24" stroke-width="2.5" stroke-linecap="round"/></svg>',
    viewBox: "0 0 128 128"
  },
  "cat-love": {
    name: "cat-love",
    label: "Love Cat",
    category: "animals",
    keywords: ["cat", "kitty", "love", "heart", "eyes", "cute", "purr"],
    unicode: "\u{1F63B}",
    version: "1.1.0",
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="100%" height="100%" fill="none"><path d="M26 44 L40 18 L54 38 Z" fill="#FFE5D9" stroke="#1E1F24" stroke-width="4" stroke-linejoin="round"/><path d="M32 40 L40 24 L48 38 Z" fill="#FF8BA7"/><path d="M102 44 L88 18 L74 38 Z" fill="#FFE5D9" stroke="#1E1F24" stroke-width="4" stroke-linejoin="round"/><path d="M96 40 L88 24 L80 38 Z" fill="#FF8BA7"/><ellipse cx="64" cy="72" rx="46" ry="38" fill="#FFF0F5" stroke="#1E1F24" stroke-width="4.5"/><ellipse cx="32" cy="78" rx="10" ry="6" fill="#FFA3BA" fill-opacity="0.75"/><ellipse cx="96" cy="78" rx="10" ry="6" fill="#FFA3BA" fill-opacity="0.75"/><path d="M38 52 C32 44 44 38 48 46 C52 38 64 44 58 52 L48 62 Z" fill="#FF3366" stroke="#1E1F24" stroke-width="2.5" stroke-linejoin="round"/><path d="M70 52 C64 44 76 38 80 46 C84 38 96 44 90 52 L80 62 Z" fill="#FF3366" stroke="#1E1F24" stroke-width="2.5" stroke-linejoin="round"/><path d="M52 74 C56 82 72 82 76 74" stroke="#1E1F24" stroke-width="3.5" stroke-linecap="round" fill="#FF5E7E"/><line x1="22" y1="70" x2="34" y2="72" stroke="#1E1F24" stroke-width="2.5" stroke-linecap="round"/><line x1="22" y1="80" x2="34" y2="78" stroke="#1E1F24" stroke-width="2.5" stroke-linecap="round"/><line x1="106" y1="70" x2="94" y2="72" stroke="#1E1F24" stroke-width="2.5" stroke-linecap="round"/><line x1="106" y1="80" x2="94" y2="78" stroke="#1E1F24" stroke-width="2.5" stroke-linecap="round"/></svg>',
    viewBox: "0 0 128 128"
  },
  "celebrate": {
    name: "celebrate",
    label: "Party Popper",
    category: "fun",
    keywords: ["celebrate", "party", "confetti", "woohoo", "cheer", "popper"],
    unicode: "\u{1F389}",
    version: "1.0.0",
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="100%" height="100%" fill="none"><g transform="translate(18, 56) rotate(-25)"><path d="M0 0 L46 22 L22 46 Z" fill="#FFB703" stroke="#1E1F24" stroke-width="4" stroke-linejoin="round"/><path d="M12 6 L6 18" stroke="#FF4D6D" stroke-width="4" stroke-linecap="round"/><path d="M24 12 L12 36" stroke="#4CC9F0" stroke-width="4" stroke-linecap="round"/><path d="M36 18 L24 42" stroke="#80B918" stroke-width="4" stroke-linecap="round"/></g><path d="M68 54 C74 44 84 56 94 42 C100 34 110 40 116 30" stroke="#FF4D6D" stroke-width="4.5" stroke-linecap="round" fill="none"/><path d="M56 36 C64 26 62 14 74 12 C84 10 90 20 102 16" stroke="#4CC9F0" stroke-width="4" stroke-linecap="round" fill="none"/><path d="M84 76 C94 72 98 84 110 80 C116 78 120 86 122 92" stroke="#80B918" stroke-width="3.5" stroke-linecap="round" fill="none"/><circle cx="58" cy="22" r="4.5" fill="#FFB703" stroke="#1E1F24" stroke-width="2"/><circle cx="82" cy="32" r="5" fill="#FF758F" stroke="#1E1F24" stroke-width="2"/><circle cx="78" cy="62" r="4" fill="#70D6FF" stroke="#1E1F24" stroke-width="2"/><circle cx="106" cy="56" r="4.5" fill="#FFB703" stroke="#1E1F24" stroke-width="2"/><polygon points="98,28 102,34 98,40 94,34" fill="#FF4D6D"/><polygon points="64,48 68,54 64,60 60,54" fill="#80B918"/><polygon points="112,70 116,74 112,78 108,74" fill="#70D6FF"/></svg>',
    viewBox: "0 0 128 128"
  },
  "cherry-blossom": {
    name: "cherry-blossom",
    label: "Cherry Blossom Sakura",
    category: "symbols",
    keywords: ["flower", "cherry", "blossom", "sakura", "pink", "spring", "nature", "bloom"],
    unicode: "\u{1F338}",
    version: "1.1.0",
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="100%" height="100%" fill="none"><g transform="translate(64 64)"><path d="M0 -10 C-14 -20 -12 -48 0 -54 C12 -48 14 -20 0 -10 Z" fill="#FFA3BA" stroke="#1E1F24" stroke-width="3.5" stroke-linejoin="round"/><path d="M0 -10 C-14 -20 -12 -48 0 -54 C12 -48 14 -20 0 -10 Z" fill="#FFA3BA" stroke="#1E1F24" stroke-width="3.5" stroke-linejoin="round" transform="rotate(72)"/><path d="M0 -10 C-14 -20 -12 -48 0 -54 C12 -48 14 -20 0 -10 Z" fill="#FFA3BA" stroke="#1E1F24" stroke-width="3.5" stroke-linejoin="round" transform="rotate(144)"/><path d="M0 -10 C-14 -20 -12 -48 0 -54 C12 -48 14 -20 0 -10 Z" fill="#FFA3BA" stroke="#1E1F24" stroke-width="3.5" stroke-linejoin="round" transform="rotate(216)"/><path d="M0 -10 C-14 -20 -12 -48 0 -54 C12 -48 14 -20 0 -10 Z" fill="#FFA3BA" stroke="#1E1F24" stroke-width="3.5" stroke-linejoin="round" transform="rotate(288)"/><circle cx="0" cy="0" r="14" fill="#FFCCD5"/><circle cx="0" cy="0" r="8" fill="#FF758F"/><circle cx="0" cy="-6" r="2" fill="#FFD166"/><circle cx="6" cy="-2" r="2" fill="#FFD166"/><circle cx="4" cy="5" r="2" fill="#FFD166"/><circle cx="-4" cy="5" r="2" fill="#FFD166"/><circle cx="-6" cy="-2" r="2" fill="#FFD166"/></g></svg>',
    viewBox: "0 0 128 128"
  },
  "clown": {
    name: "clown",
    label: "Clown Face",
    category: "fun",
    keywords: ["clown", "circus", "funny", "silly", "costume", "makeup", "joke"],
    unicode: "\u{1F921}",
    version: "1.1.0",
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="100%" height="100%" fill="none"><path d="M42 34 L45 42 L53 43 L47 48 L49 56 L42 51 L35 56 L37 48 L31 43 L39 42 Z" fill="#00BBF9"/><path d="M86 34 L89 42 L97 43 L91 48 L93 56 L86 51 L79 56 L81 48 L75 43 L83 42 Z" fill="#00BBF9"/><ellipse cx="42" cy="56" rx="6" ry="7" fill="#1E1F24"/><circle cx="44" cy="54" r="2" fill="#FFFFFF"/><ellipse cx="86" cy="56" rx="6" ry="7" fill="#1E1F24"/><circle cx="88" cy="54" r="2" fill="#FFFFFF"/><circle cx="64" cy="66" r="13" fill="#E63946" stroke="#1E1F24" stroke-width="3.5"/><circle cx="68" cy="62" r="3.5" fill="#FFFFFF"/><path d="M38 80 C44 104 84 104 90 80 Z" fill="#E63946" stroke="#1E1F24" stroke-width="4" stroke-linejoin="round"/><path d="M44 82 C50 94 78 94 84 82 Z" fill="#FFFFFF"/></svg>',
    viewBox: "0 0 128 128"
  },
  "coffee": {
    name: "coffee",
    label: "Hot Coffee",
    category: "food",
    keywords: ["coffee", "tea", "mug", "latte", "espresso", "morning", "caffeine"],
    unicode: "\u2615",
    version: "1.1.0",
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="100%" height="100%" fill="none"><ellipse cx="64" cy="106" rx="44" ry="10" fill="#E8E2D7" stroke="#1E1F24" stroke-width="4"/><path d="M84 60 C98 60 98 84 84 84" stroke="#1E1F24" stroke-width="5" fill="none"/><path d="M36 50 L40 98 C40 104 88 104 88 98 L92 50 Z" fill="#FFFFFF" stroke="#1E1F24" stroke-width="4.5" stroke-linejoin="round"/><ellipse cx="64" cy="52" rx="26" ry="7" fill="#6F4E37"/><path d="M64 54 C61 50 56 50 54 53 C52 56 57 60 64 63 C71 60 76 56 74 53 C72 50 67 50 64 54 Z" fill="#FFF3B0"/><path d="M54 36 C50 28 58 24 64 28 C70 24 78 28 74 36 L64 44 Z" fill="#FFA3BA" stroke="#1E1F24" stroke-width="2"/></svg>',
    viewBox: "0 0 128 128"
  },
  "confused": {
    name: "confused",
    label: "Confused",
    category: "emotions",
    keywords: ["confused", "puzzled", "huh", "unsure", "derp", "sweat"],
    unicode: "\u{1F615}",
    version: "1.0.0",
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="100%" height="100%" fill="none"><ellipse cx="26" cy="74" rx="14" ry="8" fill="#FFA3BA" fill-opacity="0.6"/><ellipse cx="102" cy="74" rx="14" ry="8" fill="#FFA3BA" fill-opacity="0.6"/><path d="M26 34 C32 26 44 26 52 32" stroke="#1E1F24" stroke-width="4.5" stroke-linecap="round"/><path d="M76 40 C84 42 96 38 102 34" stroke="#1E1F24" stroke-width="4.5" stroke-linecap="round"/><circle cx="40" cy="52" r="10" fill="#FFFFFF" stroke="#1E1F24" stroke-width="3.5"/><circle cx="40" cy="52" r="5" fill="#1E1F24"/><circle cx="42" cy="50" r="1.8" fill="#FFFFFF"/><ellipse cx="88" cy="54" rx="7" ry="9" fill="#1E1F24"/><circle cx="89" cy="51" r="2.5" fill="#FFFFFF"/><path d="M102 24 C100 28 96 34 96 38 C96 42 99 45 103 45 C107 45 110 42 110 38 C110 34 106 28 102 24 Z" fill="#70D6FF" stroke="#1E1F24" stroke-width="2.5" stroke-linejoin="round"/><path d="M44 80 C50 86 58 76 66 84 C74 90 82 78 86 82" stroke="#1E1F24" stroke-width="4.5" stroke-linecap="round"/></svg>',
    viewBox: "0 0 128 128"
  },
  "cool": {
    name: "cool",
    label: "Cool Sunglasses",
    category: "faces",
    keywords: ["cool", "sunglasses", "chill", "awesome", "slick", "shades"],
    unicode: "\u{1F60E}",
    version: "1.0.0",
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="100%" height="100%" fill="none"><ellipse cx="26" cy="80" rx="14" ry="8" fill="#FFA3BA" fill-opacity="0.5"/><ellipse cx="102" cy="80" rx="14" ry="8" fill="#FFA3BA" fill-opacity="0.5"/><path d="M28 32 C36 28 48 30 54 34" stroke="#1E1F24" stroke-width="4.5" stroke-linecap="round"/><path d="M74 34 C80 30 92 28 100 32" stroke="#1E1F24" stroke-width="4.5" stroke-linecap="round"/><g><path d="M56 50 Q64 47 72 50" stroke="#1E1F24" stroke-width="6" stroke-linecap="round"/><path d="M24 45 C24 45 60 44 60 52 C60 68 48 72 32 70 C22 69 22 52 24 45 Z" fill="#1E1F24" stroke="#1E1F24" stroke-width="3" stroke-linejoin="round"/><path d="M30 49 L46 49 L36 65 L26 65 Z" fill="#4CC9F0" fill-opacity="0.45"/><circle cx="52" cy="53" r="2" fill="#FFFFFF"/><path d="M68 52 C68 44 104 45 104 45 C106 52 106 69 96 70 C80 72 68 68 68 52 Z" fill="#1E1F24" stroke="#1E1F24" stroke-width="3" stroke-linejoin="round"/><path d="M76 49 L92 49 L82 65 L72 65 Z" fill="#4CC9F0" fill-opacity="0.45"/><circle cx="98" cy="53" r="2" fill="#FFFFFF"/></g><path d="M48 84 C56 94 76 94 82 82" stroke="#1E1F24" stroke-width="4.5" stroke-linecap="round"/><path d="M108 38 L112 44 L118 48 L112 52 L108 58 L104 52 L98 48 L104 44 Z" fill="#FFD166"/></svg>',
    viewBox: "0 0 128 128"
  },
  "cry": {
    name: "cry",
    label: "Crying Waterfall",
    category: "emotions",
    keywords: ["cry", "tears", "sad", "weep", "waterfall", "sobbing"],
    unicode: "\u{1F62D}",
    version: "1.0.0",
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="100%" height="100%" fill="none"><ellipse cx="22" cy="80" rx="14" ry="8" fill="#FFA3BA" fill-opacity="0.6"/><ellipse cx="106" cy="80" rx="14" ry="8" fill="#FFA3BA" fill-opacity="0.6"/><path d="M26 36 C34 26 44 26 52 34" stroke="#1E1F24" stroke-width="4.5" stroke-linecap="round"/><path d="M76 34 C84 26 94 26 102 36" stroke="#1E1F24" stroke-width="4.5" stroke-linecap="round"/><path d="M28 50 C36 42 46 42 54 50" stroke="#1E1F24" stroke-width="5" stroke-linecap="round"/><path d="M74 50 C82 42 92 42 100 50" stroke="#1E1F24" stroke-width="5" stroke-linecap="round"/><path d="M36 54 C34 70 30 90 32 116 C38 116 46 116 48 116 C46 90 44 70 44 54 Z" fill="#4CC9F0" fill-opacity="0.8" stroke="#1E1F24" stroke-width="3" stroke-linejoin="round"/><path d="M20 102 Q16 98 12 100" stroke="#4CC9F0" stroke-width="3" stroke-linecap="round"/><path d="M22 112 Q16 114 14 118" stroke="#4CC9F0" stroke-width="3" stroke-linecap="round"/><path d="M84 54 C84 70 82 90 80 116 C82 116 90 116 96 116 C98 90 94 70 92 54 Z" fill="#4CC9F0" fill-opacity="0.8" stroke="#1E1F24" stroke-width="3" stroke-linejoin="round"/><path d="M108 102 Q112 98 116 100" stroke="#4CC9F0" stroke-width="3" stroke-linecap="round"/><path d="M106 112 Q112 114 114 118" stroke="#4CC9F0" stroke-width="3" stroke-linecap="round"/><path d="M46 76 C46 76 50 102 64 102 C78 102 82 76 82 76 Z" fill="#E63946" stroke="#1E1F24" stroke-width="4.5" stroke-linejoin="round"/><path d="M52 94 C56 88 72 88 76 94 Z" fill="#FF85A1"/></svg>',
    viewBox: "0 0 128 128"
  },
  "cute-poop": {
    name: "cute-poop",
    label: "Cute Poop",
    category: "fun",
    keywords: ["poop", "cute", "swirl", "funny", "kawaii", "brown"],
    unicode: "\u{1F4A9}",
    version: "1.1.0",
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="100%" height="100%" fill="none"><path d="M64 22 C64 22 72 24 74 30 C76 36 68 40 68 40 C78 40 88 44 88 52 C88 58 82 62 78 64 C90 64 102 70 102 82 C102 96 90 106 64 106 C38 106 26 96 26 82 C26 70 38 64 50 64 C46 62 40 58 40 52 C40 44 50 40 60 40 C60 40 52 36 54 30 C56 24 64 22 64 22 Z" fill="#9C6644" stroke="#1E1F24" stroke-width="4.5" stroke-linejoin="round"/><ellipse cx="40" cy="86" rx="8" ry="5" fill="#FFA3BA" fill-opacity="0.8"/><ellipse cx="88" cy="86" rx="8" ry="5" fill="#FFA3BA" fill-opacity="0.8"/><circle cx="50" cy="74" r="8" fill="#1E1F24"/><circle cx="53" cy="71" r="3" fill="#FFFFFF"/><circle cx="78" cy="74" r="8" fill="#1E1F24"/><circle cx="81" cy="71" r="3" fill="#FFFFFF"/><path d="M56 86 C60 92 68 92 72 86" stroke="#1E1F24" stroke-width="3.5" stroke-linecap="round"/></svg>',
    viewBox: "0 0 128 128"
  },
  "devil": {
    name: "devil",
    label: "Mischievous Devil",
    category: "faces",
    keywords: ["devil", "horns", "evil", "smirk", "mischief", "naughty", "purple"],
    unicode: "\u{1F608}",
    version: "1.1.0",
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="100%" height="100%" fill="none"><path d="M30 36 C24 20 34 16 38 18 C38 28 34 32 30 36 Z" fill="#9D4EDD" stroke="#1E1F24" stroke-width="3.5" stroke-linejoin="round"/><path d="M98 36 C104 20 94 16 90 18 C90 28 94 32 98 36 Z" fill="#9D4EDD" stroke="#1E1F24" stroke-width="3.5" stroke-linejoin="round"/><ellipse cx="28" cy="74" rx="14" ry="9" fill="#FF758F" fill-opacity="0.6"/><ellipse cx="100" cy="74" rx="14" ry="9" fill="#FF758F" fill-opacity="0.6"/><path d="M28 42 L52 50" stroke="#1E1F24" stroke-width="4.5" stroke-linecap="round"/><path d="M100 42 L76 50" stroke="#1E1F24" stroke-width="4.5" stroke-linecap="round"/><ellipse cx="42" cy="58" rx="8" ry="10" fill="#1E1F24"/><circle cx="45" cy="54" r="2.8" fill="#FFFFFF"/><ellipse cx="86" cy="58" rx="8" ry="10" fill="#1E1F24"/><circle cx="89" cy="54" r="2.8" fill="#FFFFFF"/><path d="M46 76 C56 90 74 90 84 76" stroke="#1E1F24" stroke-width="4.5" stroke-linecap="round" fill="#7B2CBF"/><path d="M50 77 L54 84 L58 78" fill="#FFFFFF"/><path d="M72 78 L76 84 L80 77" fill="#FFFFFF"/></svg>',
    viewBox: "0 0 128 128"
  },
  "diamond": {
    name: "diamond",
    label: "Sparkling Diamond",
    category: "objects",
    keywords: ["diamond", "gem", "jewel", "crystal", "sparkle", "precious", "luxury"],
    unicode: "\u{1F48E}",
    version: "1.1.0",
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="100%" height="100%" fill="none"><path d="M38 42 L90 42 L112 62 L16 62 Z" fill="#70D6FF" stroke="#1E1F24" stroke-width="4.5" stroke-linejoin="round"/><path d="M16 62 L64 112 L112 62 Z" fill="#00B4D8" stroke="#1E1F24" stroke-width="4.5" stroke-linejoin="round"/><path d="M38 42 L52 62 L64 112 L76 62 L90 42" stroke="#1E1F24" stroke-width="3.5" stroke-linejoin="round" fill="none"/><path d="M52 62 L76 62" stroke="#1E1F24" stroke-width="3"/><polygon points="52,46 64,46 58,58" fill="#E8F8FF"/><path d="M22 28 L24 34 L30 36 L24 38 L22 44 L20 38 L14 36 L20 34 Z" fill="#FFFFFF"/></svg>',
    viewBox: "0 0 128 128"
  },
  "dizzy": {
    name: "dizzy",
    label: "Spiral Dizzy",
    category: "reactions",
    keywords: ["dizzy", "spiral", "spinning", "faint", "overwhelmed", "woozy"],
    unicode: "\u{1F4AB}",
    version: "1.0.0",
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="100%" height="100%" fill="none"><ellipse cx="26" cy="76" rx="14" ry="9" fill="#FFA3BA" fill-opacity="0.65"/><ellipse cx="102" cy="76" rx="14" ry="9" fill="#FFA3BA" fill-opacity="0.65"/><path d="M28 32 C34 38 42 28 52 34" stroke="#1E1F24" stroke-width="4.5" stroke-linecap="round"/><path d="M76 34 C86 28 94 38 100 32" stroke="#1E1F24" stroke-width="4.5" stroke-linecap="round"/><path d="M42 52 C39 52 37 50 37 47 C37 43 41 40 45 40 C50 40 55 44 55 49 C55 56 49 61 42 61 C33 61 27 54 27 45 C27 34 35 27 45 27" stroke="#1E1F24" stroke-width="3.5" stroke-linecap="round" fill="none"/><path d="M86 52 C83 52 81 50 81 47 C81 43 85 40 89 40 C94 40 99 44 99 49 C99 56 93 61 86 61 C77 61 71 54 71 45 C71 34 79 27 89 27" stroke="#1E1F24" stroke-width="3.5" stroke-linecap="round" fill="none"/><ellipse cx="64" cy="82" rx="7" ry="9" fill="#FF5E7E" stroke="#1E1F24" stroke-width="4"/><polygon points="20,16 23,22 30,22 25,26 27,32 20,28 13,32 15,26 10,22 17,22" fill="#FFB703"/><polygon points="108,16 111,22 118,22 113,26 115,32 108,28 101,32 103,26 98,22 105,22" fill="#FFB703"/></svg>',
    viewBox: "0 0 128 128"
  },
  "dog-puppy": {
    name: "dog-puppy",
    label: "Happy Puppy",
    category: "animals",
    keywords: ["dog", "puppy", "pup", "bark", "woof", "pet", "cute", "ears"],
    unicode: "\u{1F436}",
    version: "1.1.0",
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="100%" height="100%" fill="none"><path d="M34 40 C14 42 12 76 26 84 C34 88 40 76 38 52 Z" fill="#8D6E63" stroke="#1E1F24" stroke-width="4" stroke-linejoin="round"/><path d="M94 40 C114 42 116 76 102 84 C94 88 88 76 90 52 Z" fill="#8D6E63" stroke="#1E1F24" stroke-width="4" stroke-linejoin="round"/><circle cx="64" cy="72" r="42" fill="#D7CCC8" stroke="#1E1F24" stroke-width="4.5"/><ellipse cx="36" cy="78" rx="8" ry="5" fill="#FFA3BA" fill-opacity="0.8"/><ellipse cx="92" cy="78" rx="8" ry="5" fill="#FFA3BA" fill-opacity="0.8"/><ellipse cx="46" cy="62" rx="7" ry="8" fill="#1E1F24"/><circle cx="48" cy="59" r="2.8" fill="#FFFFFF"/><ellipse cx="82" cy="62" rx="7" ry="8" fill="#1E1F24"/><circle cx="84" cy="59" r="2.8" fill="#FFFFFF"/><ellipse cx="64" cy="74" rx="8" ry="6" fill="#1E1F24"/><path d="M54 84 C58 98 70 98 74 84" stroke="#1E1F24" stroke-width="3" fill="#FF5E7E"/></svg>',
    viewBox: "0 0 128 128"
  },
  "drool": {
    name: "drool",
    label: "Drooling / Yummy",
    category: "faces",
    keywords: ["drool", "yummy", "delicious", "hungry", "craving", "tasty"],
    unicode: "\u{1F924}",
    version: "1.1.0",
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="100%" height="100%" fill="none"><ellipse cx="28" cy="74" rx="14" ry="9" fill="#FFA3BA" fill-opacity="0.65"/><ellipse cx="100" cy="74" rx="14" ry="9" fill="#FFA3BA" fill-opacity="0.65"/><path d="M34 54 C40 46 48 46 54 54" stroke="#1E1F24" stroke-width="5" stroke-linecap="round"/><path d="M74 54 C80 46 88 46 94 54" stroke="#1E1F24" stroke-width="5" stroke-linecap="round"/><path d="M44 72 C44 72 52 90 70 90 C78 90 84 82 84 72 Z" fill="#FF5E7E" stroke="#1E1F24" stroke-width="4.5" stroke-linejoin="round"/><path d="M76 86 C82 90 84 102 78 106 C72 106 72 96 76 86 Z" fill="#70D6FF" stroke="#1E1F24" stroke-width="3" stroke-linejoin="round"/></svg>',
    viewBox: "0 0 128 128"
  },
  "duck": {
    name: "duck",
    label: "Rubber Duckling",
    category: "animals",
    keywords: ["duck", "duckling", "quack", "yellow", "rubber", "bird", "beak"],
    unicode: "\u{1F986}",
    version: "1.1.0",
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="100%" height="100%" fill="none"><path d="M64 22 C64 16 58 14 54 18 C58 22 62 26 64 30 Z" fill="#FFD166" stroke="#1E1F24" stroke-width="3"/><circle cx="64" cy="68" r="44" fill="#FFD166" stroke="#1E1F24" stroke-width="4.5"/><ellipse cx="32" cy="74" rx="9" ry="6" fill="#FFA3BA" fill-opacity="0.8"/><ellipse cx="96" cy="74" rx="9" ry="6" fill="#FFA3BA" fill-opacity="0.8"/><circle cx="44" cy="56" r="7" fill="#1E1F24"/><circle cx="46" cy="54" r="2.5" fill="#FFFFFF"/><circle cx="84" cy="56" r="7" fill="#1E1F24"/><circle cx="86" cy="54" r="2.5" fill="#FFFFFF"/><ellipse cx="64" cy="74" rx="22" ry="14" fill="#FB8500" stroke="#1E1F24" stroke-width="4"/><line x1="46" y1="74" x2="82" y2="74" stroke="#1E1F24" stroke-width="3" stroke-linecap="round"/><circle cx="60" cy="70" r="1.5" fill="#944400"/><circle cx="68" cy="70" r="1.5" fill="#944400"/></svg>',
    viewBox: "0 0 128 128"
  },
  "excited": {
    name: "excited",
    label: "Starry Excited",
    category: "emotions",
    keywords: ["excited", "star", "sparkle", "amazed", "hyped", "thrilled"],
    unicode: "\u{1F929}",
    version: "1.0.0",
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="100%" height="100%" fill="none"><ellipse cx="24" cy="74" rx="15" ry="9" fill="#FFA3BA" fill-opacity="0.75"/><ellipse cx="104" cy="74" rx="15" ry="9" fill="#FFA3BA" fill-opacity="0.75"/><path d="M26 28 C34 22 48 24 54 30" stroke="#1E1F24" stroke-width="4.5" stroke-linecap="round"/><path d="M74 30 C80 24 94 22 102 28" stroke="#1E1F24" stroke-width="4.5" stroke-linecap="round"/><g transform="translate(42, 50)"><polygon points="0,-16 4,-4 16,-4 7,4 10,16 0,8 -10,16 -7,4 -16,-4 -4,-4" fill="#FFB703" stroke="#1E1F24" stroke-width="2.5" stroke-linejoin="round"/><circle cx="-1" cy="-4" r="2.5" fill="#FFFFFF"/></g><g transform="translate(86, 50)"><polygon points="0,-16 4,-4 16,-4 7,4 10,16 0,8 -10,16 -7,4 -16,-4 -4,-4" fill="#FFB703" stroke="#1E1F24" stroke-width="2.5" stroke-linejoin="round"/><circle cx="-1" cy="-4" r="2.5" fill="#FFFFFF"/></g><path d="M42 72 C42 72 46 96 64 96 C82 96 86 72 86 72 Z" fill="#FF4D6D" stroke="#1E1F24" stroke-width="4.5" stroke-linejoin="round"/><path d="M52 90 C56 84 72 84 76 90 Z" fill="#FF85A1"/><path d="M16 38 L18 42 L22 44 L18 46 L16 50 L14 46 L10 44 L14 42 Z" fill="#FFD166"/><path d="M112 36 L114 40 L118 42 L114 44 L112 48 L110 44 L106 42 L110 40 Z" fill="#FFD166"/></svg>',
    viewBox: "0 0 128 128"
  },
  "fingers-crossed": {
    name: "fingers-crossed",
    label: "Fingers Crossed",
    category: "gestures",
    keywords: ["fingers", "crossed", "luck", "hope", "wish", "goodluck"],
    unicode: "\u{1F91E}",
    version: "1.1.0",
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="100%" height="100%" fill="none"><path d="M44 108 L44 80 L76 80 L76 108 Z" fill="#FFE5D9" stroke="#1E1F24" stroke-width="4.5" stroke-linejoin="round"/><path d="M46 76 L46 32 C46 24 56 24 56 32 L56 76" fill="#FFE5D9" stroke="#1E1F24" stroke-width="4.5" stroke-linejoin="round"/><path d="M64 76 L48 28 C46 20 58 18 64 24 L74 76" fill="#FFE5D9" stroke="#1E1F24" stroke-width="4.5" stroke-linejoin="round"/><path d="M38 78 C30 76 28 84 38 90 L44 90" stroke="#1E1F24" stroke-width="4" stroke-linecap="round" fill="#FFE5D9"/><path d="M74 68 C82 68 82 76 74 76" stroke="#1E1F24" stroke-width="3.5" fill="#FFE5D9"/><path d="M26 28 L28 34 L34 36 L28 38 L26 44 L24 38 L18 36 L24 34 Z" fill="#FFD166"/></svg>',
    viewBox: "0 0 128 128"
  },
  "fire": {
    name: "fire",
    label: "Lit Fire",
    category: "symbols",
    keywords: ["fire", "flame", "lit", "hot", "trending", "burn"],
    unicode: "\u{1F525}",
    version: "1.0.0",
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="100%" height="100%" fill="none"><path d="M64 12 C64 12 76 28 72 44 C76 38 84 34 88 40 C98 50 106 68 106 84 C106 106 88 120 64 120 C40 120 22 106 22 84 C22 66 32 50 46 36 C48 50 56 52 56 42 C56 26 64 12 64 12 Z" fill="#FF5400" stroke="#1E1F24" stroke-width="4.5" stroke-linejoin="round"/><path d="M64 36 C64 36 74 50 72 62 C76 56 82 54 84 60 C90 70 94 80 94 92 C94 108 80 116 64 116 C48 116 34 108 34 92 C34 78 42 66 52 54 C54 64 60 66 60 58 C60 46 64 36 64 36 Z" fill="#FF9E00"/><path d="M64 66 C64 66 70 76 68 84 C72 80 76 80 78 84 C80 90 82 96 82 102 C82 110 74 114 64 114 C54 114 46 110 46 102 C46 94 52 86 58 78 C58 84 62 86 62 80 C62 72 64 66 64 66 Z" fill="#FFD000"/><circle cx="28" cy="44" r="3.5" fill="#FFD000"/><circle cx="100" cy="48" r="3" fill="#FFD000"/></svg>',
    viewBox: "0 0 128 128"
  },
  "fist-bump": {
    name: "fist-bump",
    label: "Fist Bump",
    category: "gestures",
    keywords: ["fist", "bump", "punch", "bro", "together", "solid", "power"],
    unicode: "\u{1F44A}",
    version: "1.1.0",
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="100%" height="100%" fill="none"><circle cx="64" cy="64" r="38" fill="#FFE5D9" stroke="#1E1F24" stroke-width="4.5"/><path d="M38 52 C38 42 48 42 48 52" stroke="#1E1F24" stroke-width="4" stroke-linecap="round"/><path d="M48 48 C48 38 60 38 60 48" stroke="#1E1F24" stroke-width="4" stroke-linecap="round"/><path d="M60 48 C60 38 72 38 72 48" stroke="#1E1F24" stroke-width="4" stroke-linecap="round"/><path d="M72 52 C72 42 82 42 82 52" stroke="#1E1F24" stroke-width="4" stroke-linecap="round"/><path d="M38 74 C34 60 56 60 76 66 C80 72 74 80 64 80 Z" fill="#FFD8BE" stroke="#1E1F24" stroke-width="3.5" stroke-linejoin="round"/><circle cx="64" cy="64" r="48" stroke="#FFD166" stroke-width="3" stroke-dasharray="8 6"/></svg>',
    viewBox: "0 0 128 128"
  },
  "frog-coffee": {
    name: "frog-coffee",
    label: "Frog Sipping Coffee",
    category: "animals",
    keywords: ["frog", "coffee", "tea", "sip", "cozy", "relax", "morning"],
    unicode: "\u2615",
    version: "1.1.0",
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="100%" height="100%" fill="none"><path d="M24 64 C24 44 32 38 42 38 C48 38 52 42 56 46 C60 46 68 46 72 46 C76 42 80 38 86 38 C96 38 104 44 104 64 C104 90 92 108 64 108 C36 108 24 90 24 64 Z" fill="#AACC00" stroke="#1E1F24" stroke-width="4.5" stroke-linejoin="round"/><circle cx="44" cy="38" r="14" fill="#AACC00" stroke="#1E1F24" stroke-width="4"/><circle cx="44" cy="36" r="6.5" fill="#1E1F24"/><circle cx="46" cy="34" r="2.2" fill="#FFFFFF"/><circle cx="84" cy="38" r="14" fill="#AACC00" stroke="#1E1F24" stroke-width="4"/><circle cx="84" cy="36" r="6.5" fill="#1E1F24"/><circle cx="86" cy="34" r="2.2" fill="#FFFFFF"/><ellipse cx="34" cy="68" rx="8" ry="5" fill="#FF8BA7" fill-opacity="0.75"/><ellipse cx="94" cy="68" rx="8" ry="5" fill="#FF8BA7" fill-opacity="0.75"/><rect x="48" y="74" width="32" height="26" rx="6" fill="#F8F9FA" stroke="#1E1F24" stroke-width="3.5"/><path d="M80 80 C88 80 88 90 80 90" stroke="#1E1F24" stroke-width="3" fill="none"/><path d="M56 68 C56 62 60 62 60 56" stroke="#ADB5BD" stroke-width="2.5" stroke-linecap="round"/><path d="M68 68 C68 60 72 60 72 54" stroke="#ADB5BD" stroke-width="2.5" stroke-linecap="round"/></svg>',
    viewBox: "0 0 128 128"
  },
  "frog-cry": {
    name: "frog-cry",
    label: "Weeping Frog",
    category: "animals",
    keywords: ["frog", "cry", "tears", "sad", "sobbing", "doodle"],
    unicode: "\u{1F62D}",
    version: "1.0.0",
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="100%" height="100%" fill="none"><path d="M24 64 C24 44 32 38 42 38 C48 38 52 42 56 46 C60 46 68 46 72 46 C76 42 80 38 86 38 C96 38 104 44 104 64 C104 90 92 108 64 108 C36 108 24 90 24 64 Z" fill="#AACC00" stroke="#1E1F24" stroke-width="4.5" stroke-linejoin="round"/><circle cx="44" cy="38" r="14" fill="#AACC00" stroke="#1E1F24" stroke-width="4"/><path d="M36 38 C40 32 48 32 52 38" stroke="#1E1F24" stroke-width="4.5" stroke-linecap="round"/><circle cx="84" cy="38" r="14" fill="#AACC00" stroke="#1E1F24" stroke-width="4"/><path d="M76 38 C80 32 88 32 92 38" stroke="#1E1F24" stroke-width="4.5" stroke-linecap="round"/><path d="M38 46 C32 58 24 74 24 94 C30 94 36 94 38 94 C36 74 42 58 46 46 Z" fill="#4CC9F0" fill-opacity="0.8" stroke="#1E1F24" stroke-width="2.5"/><circle cx="18" cy="80" r="3.5" fill="#4CC9F0"/><path d="M90 46 C96 58 104 74 104 94 C98 94 92 94 90 94 C92 74 86 58 82 46 Z" fill="#4CC9F0" fill-opacity="0.8" stroke="#1E1F24" stroke-width="2.5"/><circle cx="110" cy="80" r="3.5" fill="#4CC9F0"/><ellipse cx="32" cy="74" rx="7" ry="5" fill="#FF8BA7" fill-opacity="0.75"/><ellipse cx="96" cy="74" rx="7" ry="5" fill="#FF8BA7" fill-opacity="0.75"/><path d="M44 70 C44 70 48 94 64 94 C80 94 84 70 84 70 Z" fill="#E63946" stroke="#1E1F24" stroke-width="4" stroke-linejoin="round"/><path d="M50 86 C56 82 72 82 78 86 Z" fill="#FF85A1"/></svg>',
    viewBox: "0 0 128 128"
  },
  "frog-dance": {
    name: "frog-dance",
    label: "Dancing Frog",
    category: "animals",
    keywords: ["frog", "dance", "party", "groove", "fun", "celebration"],
    unicode: "\u{1F57A}",
    version: "1.1.0",
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="100%" height="100%" fill="none"><path d="M22 28 L24 34 L30 36 L24 38 L22 44 L20 38 L14 36 L20 34 Z" fill="#FFD166"/><path d="M106 28 L108 34 L114 36 L108 38 L106 44 L104 38 L98 36 L104 34 Z" fill="#FFD166"/><g transform="rotate(-6 64 64)"><path d="M24 64 C24 44 32 38 42 38 C48 38 52 42 56 46 C60 46 68 46 72 46 C76 42 80 38 86 38 C96 38 104 44 104 64 C104 90 92 108 64 108 C36 108 24 90 24 64 Z" fill="#AACC00" stroke="#1E1F24" stroke-width="4.5" stroke-linejoin="round"/><circle cx="44" cy="38" r="14" fill="#AACC00" stroke="#1E1F24" stroke-width="4"/><circle cx="44" cy="36" r="6.5" fill="#1E1F24"/><circle cx="46" cy="34" r="2.2" fill="#FFFFFF"/><circle cx="84" cy="38" r="14" fill="#AACC00" stroke="#1E1F24" stroke-width="4"/><circle cx="84" cy="36" r="6.5" fill="#1E1F24"/><circle cx="86" cy="34" r="2.2" fill="#FFFFFF"/><ellipse cx="34" cy="68" rx="8" ry="5" fill="#FF8BA7" fill-opacity="0.8"/><ellipse cx="94" cy="68" rx="8" ry="5" fill="#FF8BA7" fill-opacity="0.8"/><path d="M44 70 C44 70 52 90 64 90 C76 90 84 70 84 70 Z" fill="#FF5E7E" stroke="#1E1F24" stroke-width="3.5"/></g></svg>',
    viewBox: "0 0 128 128"
  },
  "frog-happy": {
    name: "frog-happy",
    label: "Happy Frog",
    category: "animals",
    keywords: ["frog", "happy", "cute", "toad", "green", "mascot", "ribbit"],
    unicode: "\u{1F438}",
    version: "1.0.0",
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="100%" height="100%" fill="none"><path d="M24 64 C24 44 32 38 42 38 C48 38 52 42 56 46 C60 46 68 46 72 46 C76 42 80 38 86 38 C96 38 104 44 104 64 C104 90 92 108 64 108 C36 108 24 90 24 64 Z" fill="#AACC00" stroke="#1E1F24" stroke-width="4.5" stroke-linejoin="round"/><path d="M40 82 C40 70 50 64 64 64 C78 64 88 70 88 82 C88 98 78 104 64 104 C50 104 40 98 40 82 Z" fill="#E9F5DB"/><circle cx="44" cy="38" r="14" fill="#AACC00" stroke="#1E1F24" stroke-width="4"/><circle cx="44" cy="36" r="6.5" fill="#1E1F24"/><circle cx="46" cy="34" r="2.2" fill="#FFFFFF"/><circle cx="84" cy="38" r="14" fill="#AACC00" stroke="#1E1F24" stroke-width="4"/><circle cx="84" cy="36" r="6.5" fill="#1E1F24"/><circle cx="86" cy="34" r="2.2" fill="#FFFFFF"/><ellipse cx="34" cy="68" rx="8" ry="5" fill="#FF8BA7" fill-opacity="0.75"/><ellipse cx="94" cy="68" rx="8" ry="5" fill="#FF8BA7" fill-opacity="0.75"/><path d="M42 66 C42 66 48 88 64 88 C80 88 86 66 86 66 Z" fill="#E63946" stroke="#1E1F24" stroke-width="4" stroke-linejoin="round"/><path d="M52 82 C56 76 72 76 76 82 Z" fill="#FF85A1"/><path d="M24 74 C16 70 12 60 16 54 C20 48 24 56 26 62" stroke="#1E1F24" stroke-width="3.5" stroke-linecap="round" fill="#AACC00"/><path d="M104 74 C112 70 116 60 112 54 C108 48 104 56 102 62" stroke="#1E1F24" stroke-width="3.5" stroke-linecap="round" fill="#AACC00"/></svg>',
    viewBox: "0 0 128 128"
  },
  "frog-love": {
    name: "frog-love",
    label: "Frog in Love",
    category: "animals",
    keywords: ["frog", "love", "heart", "crush", "cute", "ribbit", "holding"],
    unicode: "\u{1F438}",
    version: "1.1.0",
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="100%" height="100%" fill="none"><path d="M24 64 C24 44 32 38 42 38 C48 38 52 42 56 46 C60 46 68 46 72 46 C76 42 80 38 86 38 C96 38 104 44 104 64 C104 90 92 108 64 108 C36 108 24 90 24 64 Z" fill="#AACC00" stroke="#1E1F24" stroke-width="4.5" stroke-linejoin="round"/><path d="M40 82 C40 70 50 64 64 64 C78 64 88 70 88 82 C88 98 78 104 64 104 C50 104 40 98 40 82 Z" fill="#E9F5DB"/><circle cx="44" cy="38" r="14" fill="#AACC00" stroke="#1E1F24" stroke-width="4"/><circle cx="84" cy="38" r="14" fill="#AACC00" stroke="#1E1F24" stroke-width="4"/><path d="M44 34 C40 28 48 24 50 30 C52 24 60 28 56 34 L50 42 Z" fill="#FF3366" stroke="#1E1F24" stroke-width="1.8" transform="translate(-6 -2) scale(1.1)"/><path d="M84 34 C80 28 88 24 90 30 C92 24 100 28 96 34 L90 42 Z" fill="#FF3366" stroke="#1E1F24" stroke-width="1.8" transform="translate(-6 -2) scale(1.1)"/><ellipse cx="34" cy="68" rx="8" ry="5" fill="#FF8BA7" fill-opacity="0.85"/><ellipse cx="94" cy="68" rx="8" ry="5" fill="#FF8BA7" fill-opacity="0.85"/><path d="M64 72 C56 58 72 50 78 58 C84 50 100 58 92 72 L78 88 Z" fill="#FF4D6D" stroke="#1E1F24" stroke-width="3.5" stroke-linejoin="round" transform="translate(-14 10) scale(0.9)"/></svg>',
    viewBox: "0 0 128 128"
  },
  "ghost": {
    name: "ghost",
    label: "Friendly Ghost",
    category: "fun",
    keywords: ["ghost", "boo", "cute", "spooky", "halloween", "spirit", "floating"],
    unicode: "\u{1F47B}",
    version: "1.1.0",
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="100%" height="100%" fill="none"><path d="M64 24 C40 24 30 42 30 68 C30 92 32 104 40 100 C48 96 52 104 60 100 C68 96 72 104 80 100 C88 96 92 104 98 100 C100 88 98 68 98 68 C98 42 88 24 64 24 Z" fill="#F8F9FA" stroke="#1E1F24" stroke-width="4.5" stroke-linejoin="round"/><ellipse cx="42" cy="66" rx="8" ry="5" fill="#FFA3BA" fill-opacity="0.8"/><ellipse cx="86" cy="66" rx="8" ry="5" fill="#FFA3BA" fill-opacity="0.8"/><path d="M30 64 C20 60 18 72 28 74" stroke="#1E1F24" stroke-width="4" stroke-linecap="round" fill="#F8F9FA"/><path d="M98 64 C108 60 110 72 100 74" stroke="#1E1F24" stroke-width="4" stroke-linecap="round" fill="#F8F9FA"/><circle cx="50" cy="52" r="6" fill="#1E1F24"/><circle cx="52" cy="50" r="2.2" fill="#FFFFFF"/><circle cx="78" cy="52" r="6" fill="#1E1F24"/><circle cx="80" cy="50" r="2.2" fill="#FFFFFF"/><ellipse cx="64" cy="68" rx="6" ry="8" fill="#FF5E7E" stroke="#1E1F24" stroke-width="3.5"/></svg>',
    viewBox: "0 0 128 128"
  },
  "gift": {
    name: "gift",
    label: "Gift Box",
    category: "objects",
    keywords: ["gift", "present", "box", "ribbon", "birthday", "surprise", "holiday"],
    unicode: "\u{1F381}",
    version: "1.1.0",
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="100%" height="100%" fill="none"><rect x="28" y="58" width="72" height="50" rx="8" fill="#FF4D6D" stroke="#1E1F24" stroke-width="4.5"/><rect x="22" y="46" width="84" height="16" rx="6" fill="#FF758F" stroke="#1E1F24" stroke-width="4.5"/><rect x="58" y="46" width="12" height="62" fill="#FFD166" stroke="#1E1F24" stroke-width="3"/><rect x="28" y="76" width="72" height="12" fill="#FFD166" stroke="#1E1F24" stroke-width="3"/><path d="M64 46 C52 34 38 34 46 44 C52 50 64 46 64 46 Z" fill="#FFD166" stroke="#1E1F24" stroke-width="3.5" stroke-linejoin="round"/><path d="M64 46 C76 34 90 34 82 44 C76 50 64 46 64 46 Z" fill="#FFD166" stroke="#1E1F24" stroke-width="3.5" stroke-linejoin="round"/><circle cx="64" cy="46" r="5" fill="#FFB703" stroke="#1E1F24" stroke-width="2.5"/><path d="M106 32 L108 36 L112 38 L108 40 L106 44 L104 40 L100 38 L104 36 Z" fill="#FFD166"/></svg>',
    viewBox: "0 0 128 128"
  },
  "handshake": {
    name: "handshake",
    label: "Handshake Deal",
    category: "gestures",
    keywords: ["handshake", "deal", "agree", "partner", "friendship", "collab"],
    unicode: "\u{1F91D}",
    version: "1.1.0",
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="100%" height="100%" fill="none"><path d="M16 48 L36 48 L56 68 L44 80 L28 66 L16 66 Z" fill="#FFE5D9" stroke="#1E1F24" stroke-width="4" stroke-linejoin="round"/><rect x="16" y="44" width="14" height="26" rx="4" fill="#70D6FF" stroke="#1E1F24" stroke-width="3.5"/><path d="M112 48 L92 48 L72 68 L84 80 L100 66 L112 66 Z" fill="#FFE5D9" stroke="#1E1F24" stroke-width="4" stroke-linejoin="round"/><rect x="98" y="44" width="14" height="26" rx="4" fill="#FFD166" stroke="#1E1F24" stroke-width="3.5"/><path d="M48 64 L64 78 L80 64 L64 52 Z" fill="#FFD8BE" stroke="#1E1F24" stroke-width="3.5" stroke-linejoin="round"/><path d="M64 24 L66 30 L72 32 L66 34 L64 40 L62 34 L56 32 L62 30 Z" fill="#FFD166"/></svg>',
    viewBox: "0 0 128 128"
  },
  "happy": {
    name: "happy",
    label: "Happy",
    category: "faces",
    keywords: ["happy", "smile", "joy", "cheerful", "positive", "smiling", "blush"],
    unicode: "\u{1F60A}",
    version: "1.0.0",
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="100%" height="100%" fill="none"><ellipse cx="28" cy="74" rx="14" ry="9" fill="#FFA3BA" fill-opacity="0.65"/><ellipse cx="100" cy="74" rx="14" ry="9" fill="#FFA3BA" fill-opacity="0.65"/><path d="M30 36 C36 30 48 30 54 35" stroke="#1E1F24" stroke-width="4.5" stroke-linecap="round"/><path d="M74 35 C80 30 92 30 98 36" stroke="#1E1F24" stroke-width="4.5" stroke-linecap="round"/><ellipse cx="42" cy="54" rx="9" ry="11" fill="#1E1F24"/><circle cx="45" cy="51" r="3.5" fill="#FFFFFF"/><circle cx="39" cy="57" r="1.8" fill="#FFFFFF"/><ellipse cx="86" cy="54" rx="9" ry="11" fill="#1E1F24"/><circle cx="89" cy="51" r="3.5" fill="#FFFFFF"/><circle cx="83" cy="57" r="1.8" fill="#FFFFFF"/><circle cx="64" cy="67" r="2.2" fill="#1E1F24"/><path d="M46 76 C52 92 76 92 82 76" stroke="#1E1F24" stroke-width="4.5" stroke-linecap="round" fill="#FF5E7E"/><path d="M52 82 C58 80 70 80 76 82" stroke="#FFFFFF" stroke-width="2.5" stroke-linecap="round"/></svg>',
    viewBox: "0 0 128 128"
  },
  "heart-hands": {
    name: "heart-hands",
    label: "Heart Hands",
    category: "gestures",
    keywords: ["heart", "hands", "love", "gesture", "cute", "kpop", "adore"],
    unicode: "\u{1FAF6}",
    version: "1.1.0",
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="100%" height="100%" fill="none"><path d="M24 78 C20 64 26 48 38 42 C48 38 56 46 64 56 C72 46 80 38 90 42 C102 48 108 64 104 78 C98 94 76 104 64 108 C52 104 30 94 24 78 Z" fill="#FFE5D9" stroke="#1E1F24" stroke-width="4.5" stroke-linejoin="round"/><path d="M64 62 C58 54 48 54 44 62 C40 70 52 82 64 90 C76 82 88 70 84 62 C80 54 70 54 64 62 Z" fill="#FF4D6D" stroke="#1E1F24" stroke-width="3" stroke-linejoin="round"/><path d="M38 42 C42 50 44 62 44 70" stroke="#1E1F24" stroke-width="3.5" stroke-linecap="round"/><path d="M90 42 C86 50 84 62 84 70" stroke="#1E1F24" stroke-width="3.5" stroke-linecap="round"/><ellipse cx="64" cy="74" rx="6" ry="6" fill="#FF85A1"/></svg>',
    viewBox: "0 0 128 128"
  },
  "heart": {
    name: "heart",
    label: "Sparkling Heart",
    category: "love",
    keywords: ["heart", "love", "like", "sparkle", "favorite", "red"],
    unicode: "\u{1F496}",
    version: "1.0.0",
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="100%" height="100%" fill="none"><g transform="translate(64, 62) scale(1.15)"><path d="M0,18 A16,16 0 0,0 -30,-12 A16,16 0 0,0 -48,18 Q-48,44 0,72 Q48,44 48,18 A16,16 0 0,0 30,-12 A16,16 0 0,0 0,18 Z" transform="translate(0, -26)" fill="#FF2A6D" stroke="#1E1F24" stroke-width="4.5" stroke-linejoin="round"/><path d="M-34 -14 C-42 -4 -42 12 -38 24" stroke="#FFFFFF" stroke-width="4.5" stroke-linecap="round"/><circle cx="-24" cy="-18" r="3" fill="#FFFFFF"/></g><polygon points="106,18 109,24 116,24 111,28 113,34 106,30 99,34 101,28 96,24 103,24" fill="#FFD166"/><polygon points="20,84 22,88 28,88 24,91 25,96 20,93 15,96 16,91 12,88 18,88" fill="#FFD166"/></svg>',
    viewBox: "0 0 128 128"
  },
  "hundred": {
    name: "hundred",
    label: "100 Points",
    category: "symbols",
    keywords: ["100", "hundred", "score", "perfect", "points", "grade", "fire"],
    unicode: "\u{1F4AF}",
    version: "1.1.0",
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="100%" height="100%" fill="none"><g transform="rotate(-12 64 64)"><path d="M26 44 L38 34 L38 88 L26 88" stroke="#E63946" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" fill="none"/><ellipse cx="62" cy="62" rx="14" ry="24" stroke="#E63946" stroke-width="8" fill="none"/><ellipse cx="98" cy="62" rx="14" ry="24" stroke="#E63946" stroke-width="8" fill="none"/><line x1="20" y1="98" x2="114" y2="98" stroke="#E63946" stroke-width="6" stroke-linecap="round"/><line x1="24" y1="108" x2="110" y2="108" stroke="#E63946" stroke-width="6" stroke-linecap="round"/></g></svg>',
    viewBox: "0 0 128 128"
  },
  "ice-cream": {
    name: "ice-cream",
    label: "Soft Serve Ice Cream",
    category: "food",
    keywords: ["icecream", "cone", "softserve", "sweet", "dessert", "summer", "treat"],
    unicode: "\u{1F366}",
    version: "1.1.0",
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="100%" height="100%" fill="none"><path d="M42 66 L64 116 L86 66 Z" fill="#DDB892" stroke="#1E1F24" stroke-width="4.5" stroke-linejoin="round"/><line x1="48" y1="76" x2="78" y2="88" stroke="#B08968" stroke-width="2.5"/><line x1="56" y1="92" x2="72" y2="98" stroke="#B08968" stroke-width="2.5"/><path d="M34 66 C34 56 46 54 64 54 C82 54 94 56 94 66 C94 72 34 72 34 66 Z" fill="#FFA3BA" stroke="#1E1F24" stroke-width="4" stroke-linejoin="round"/><path d="M40 54 C40 44 50 42 64 42 C78 42 88 44 88 54 Z" fill="#FFF3B0" stroke="#1E1F24" stroke-width="4" stroke-linejoin="round"/><path d="M48 42 C48 26 64 16 68 22 C68 28 68 34 80 42 Z" fill="#B7E4C7" stroke="#1E1F24" stroke-width="4" stroke-linejoin="round"/><line x1="52" y1="48" x2="58" y2="48" stroke="#FF5E7E" stroke-width="3" stroke-linecap="round"/><line x1="72" y1="50" x2="78" y2="48" stroke="#70D6FF" stroke-width="3" stroke-linecap="round"/><line x1="62" y1="36" x2="68" y2="34" stroke="#FFD166" stroke-width="3" stroke-linecap="round"/><circle cx="64" cy="14" r="3" fill="#FF5E7E"/></svg>',
    viewBox: "0 0 128 128"
  },
  "laugh": {
    name: "laugh",
    label: "Laughing",
    category: "faces",
    keywords: ["laugh", "lol", "haha", "joy", "giggle", "happy", "fun"],
    unicode: "\u{1F606}",
    version: "1.0.0",
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="100%" height="100%" fill="none"><ellipse cx="26" cy="74" rx="15" ry="9" fill="#FFA3BA" fill-opacity="0.7"/><ellipse cx="102" cy="74" rx="15" ry="9" fill="#FFA3BA" fill-opacity="0.7"/><path d="M28 32 C36 26 48 26 56 32" stroke="#1E1F24" stroke-width="4.5" stroke-linecap="round"/><path d="M72 32 C80 26 92 26 100 32" stroke="#1E1F24" stroke-width="4.5" stroke-linecap="round"/><path d="M30 52 C36 42 48 42 54 52" stroke="#1E1F24" stroke-width="5" stroke-linecap="round"/><path d="M74 52 C80 42 92 42 98 52" stroke="#1E1F24" stroke-width="5" stroke-linecap="round"/><path d="M38 70 C38 70 42 100 64 100 C86 100 90 70 90 70 Z" fill="#E63946" stroke="#1E1F24" stroke-width="4.5" stroke-linejoin="round"/><path d="M50 94 C56 86 72 86 78 94 C74 99 64 100 50 94 Z" fill="#FF85A1"/><path d="M42 70 Q64 74 86 70" stroke="#FFFFFF" stroke-width="5" stroke-linecap="round"/></svg>',
    viewBox: "0 0 128 128"
  },
  "love": {
    name: "love",
    label: "Heart Eyes",
    category: "love",
    keywords: ["love", "heart", "crush", "adore", "infatuation", "affection", "cute"],
    unicode: "\u{1F60D}",
    version: "1.0.0",
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="100%" height="100%" fill="none"><ellipse cx="26" cy="78" rx="16" ry="10" fill="#FF758F" fill-opacity="0.6"/><ellipse cx="102" cy="78" rx="16" ry="10" fill="#FF758F" fill-opacity="0.6"/><path d="M28 32 C36 26 48 28 54 34" stroke="#1E1F24" stroke-width="4.5" stroke-linecap="round"/><path d="M74 34 C80 28 92 26 100 32" stroke="#1E1F24" stroke-width="4.5" stroke-linecap="round"/><g transform="translate(42, 52) scale(0.95)"><path d="M0,6 A6,6 0 0,0 -12,-6 A6,6 0 0,0 -24,6 Q-24,18 0,30 Q24,18 24,6 A6,6 0 0,0 12,-6 A6,6 0 0,0 0,6 Z" transform="translate(0, -10)" fill="#FF2A6D" stroke="#1E1F24" stroke-width="3.5" stroke-linejoin="round"/><circle cx="-6" cy="-4" r="2.5" fill="#FFFFFF"/></g><g transform="translate(86, 52) scale(0.95)"><path d="M0,6 A6,6 0 0,0 -12,-6 A6,6 0 0,0 -24,6 Q-24,18 0,30 Q24,18 24,6 A6,6 0 0,0 12,-6 A6,6 0 0,0 0,6 Z" transform="translate(0, -10)" fill="#FF2A6D" stroke="#1E1F24" stroke-width="3.5" stroke-linejoin="round"/><circle cx="-6" cy="-4" r="2.5" fill="#FFFFFF"/></g><path d="M48 80 C52 96 76 96 80 80" stroke="#1E1F24" stroke-width="4.5" stroke-linecap="round" fill="#FF5E7E"/><path d="M68 88 Q72 102 66 102 Q60 102 64 88" fill="#4CC9F0" fill-opacity="0.85" stroke="#1E1F24" stroke-width="2.5"/></svg>',
    viewBox: "0 0 128 128"
  },
  "mind-blown": {
    name: "mind-blown",
    label: "Mind Blown",
    category: "reactions",
    keywords: ["mindblown", "explode", "shock", "brain", "unbelievable", "boom"],
    unicode: "\u{1F92F}",
    version: "1.0.0",
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="100%" height="100%" fill="none"><g transform="translate(64, 28)"><path d="M-36 6 C-46 6 -48 -10 -36 -16 C-40 -26 -24 -30 -14 -24 C-6 -34 16 -34 22 -24 C32 -30 46 -24 44 -12 C52 -6 48 8 36 6 Z" fill="#FF9E00" stroke="#1E1F24" stroke-width="3.5" stroke-linejoin="round"/><path d="M-26 4 C-34 4 -36 -8 -26 -12 C-30 -20 -18 -22 -10 -18 C-4 -26 12 -26 18 -18 C24 -22 36 -18 34 -8 C40 -4 38 6 28 4 Z" fill="#FFD000"/><circle cx="-28" cy="-22" r="2.5" fill="#FF5400"/><circle cx="28" cy="-24" r="2.5" fill="#FF5400"/><circle cx="0" cy="-28" r="3" fill="#E63946"/></g><ellipse cx="26" cy="86" rx="14" ry="9" fill="#FFA3BA" fill-opacity="0.6"/><ellipse cx="102" cy="86" rx="14" ry="9" fill="#FFA3BA" fill-opacity="0.6"/><circle cx="42" cy="62" r="13" fill="#FFFFFF" stroke="#1E1F24" stroke-width="4"/><circle cx="42" cy="62" r="5" fill="#1E1F24"/><circle cx="44" cy="60" r="2" fill="#FFFFFF"/><circle cx="86" cy="62" r="13" fill="#FFFFFF" stroke="#1E1F24" stroke-width="4"/><circle cx="86" cy="62" r="5" fill="#1E1F24"/><circle cx="88" cy="60" r="2" fill="#FFFFFF"/><path d="M48 88 C48 88 52 108 64 108 C76 108 80 88 80 88 Z" fill="#E63946" stroke="#1E1F24" stroke-width="4.5" stroke-linejoin="round"/><path d="M54 102 C58 98 70 98 74 102 Z" fill="#FF85A1"/></svg>',
    viewBox: "0 0 128 128"
  },
  "money-face": {
    name: "money-face",
    label: "Money Face",
    category: "faces",
    keywords: ["money", "dollar", "cash", "rich", "wealth", "tongue", "green"],
    unicode: "\u{1F911}",
    version: "1.1.0",
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="100%" height="100%" fill="none"><ellipse cx="28" cy="74" rx="14" ry="9" fill="#FFA3BA" fill-opacity="0.65"/><ellipse cx="100" cy="74" rx="14" ry="9" fill="#FFA3BA" fill-opacity="0.65"/><text x="42" y="62" font-family="system-ui, sans-serif" font-weight="900" font-size="28" fill="#2B9348" text-anchor="middle" stroke="#1E1F24" stroke-width="1.5">$</text><text x="86" y="62" font-family="system-ui, sans-serif" font-weight="900" font-size="28" fill="#2B9348" text-anchor="middle" stroke="#1E1F24" stroke-width="1.5">$</text><path d="M44 76 C44 76 52 92 64 92 C76 92 84 76 84 76 Z" fill="#1E1F24"/><path d="M54 84 C54 98 74 98 74 84 Z" fill="#55A630" stroke="#1E1F24" stroke-width="3"/><line x1="64" y1="84" x2="64" y2="94" stroke="#2B9348" stroke-width="2"/></svg>',
    viewBox: "0 0 128 128"
  },
  "moon": {
    name: "moon",
    label: "Crescent Moon",
    category: "symbols",
    keywords: ["moon", "crescent", "night", "sleep", "dream", "stars", "evening"],
    unicode: "\u{1F319}",
    version: "1.1.0",
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="100%" height="100%" fill="none"><path d="M78 20 C50 20 30 42 30 70 C30 96 50 116 78 116 C64 104 56 86 56 68 C56 50 64 32 78 20 Z" fill="#FFD166" stroke="#1E1F24" stroke-width="4.5" stroke-linejoin="round"/><ellipse cx="44" cy="74" rx="7" ry="4.5" fill="#FFA3BA" fill-opacity="0.85"/><path d="M40 60 C44 54 52 54 56 60" stroke="#1E1F24" stroke-width="4" stroke-linecap="round"/><path d="M48 76 C52 80 56 80 60 76" stroke="#1E1F24" stroke-width="3" stroke-linecap="round"/><path d="M96 34 L98 40 L104 42 L98 44 L96 50 L94 44 L88 42 L94 40 Z" fill="#70D6FF"/><path d="M88 78 L90 82 L94 84 L90 86 L88 90 L86 86 L82 84 L86 82 Z" fill="#FF85A1"/></svg>',
    viewBox: "0 0 128 128"
  },
  "music-note": {
    name: "music-note",
    label: "Musical Notes",
    category: "symbols",
    keywords: ["music", "note", "song", "melody", "sound", "tune", "audio"],
    unicode: "\u{1F3B5}",
    version: "1.1.0",
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="100%" height="100%" fill="none"><ellipse cx="36" cy="92" rx="14" ry="10" fill="#FF4D6D" stroke="#1E1F24" stroke-width="4.5" transform="rotate(-20 36 92)"/><ellipse cx="88" cy="78" rx="14" ry="10" fill="#FFD166" stroke="#1E1F24" stroke-width="4.5" transform="rotate(-20 88 78)"/><line x1="46" y1="88" x2="46" y2="28" stroke="#1E1F24" stroke-width="5" stroke-linecap="round"/><line x1="98" y1="74" x2="98" y2="14" stroke="#1E1F24" stroke-width="5" stroke-linecap="round"/><polygon points="44,28 100,14 100,24 44,38" fill="#1E1F24"/><polygon points="44,44 100,30 100,38 44,52" fill="#1E1F24"/><circle cx="22" cy="46" r="3.5" fill="#70D6FF"/><circle cx="108" cy="54" r="3.5" fill="#06D6A0"/></svg>',
    viewBox: "0 0 128 128"
  },
  "panda": {
    name: "panda",
    label: "Cute Panda",
    category: "animals",
    keywords: ["panda", "bear", "bamboo", "black", "white", "cute", "fluffy"],
    unicode: "\u{1F43C}",
    version: "1.1.0",
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="100%" height="100%" fill="none"><circle cx="34" cy="38" r="16" fill="#1E1F24"/><circle cx="94" cy="38" r="16" fill="#1E1F24"/><circle cx="64" cy="72" r="44" fill="#FFFFFF" stroke="#1E1F24" stroke-width="4.5"/><ellipse cx="44" cy="62" rx="14" ry="12" fill="#1E1F24" transform="rotate(-15 44 62)"/><circle cx="44" cy="60" r="4.5" fill="#FFFFFF"/><circle cx="46" cy="58" r="1.5" fill="#1E1F24"/><ellipse cx="84" cy="62" rx="14" ry="12" fill="#1E1F24" transform="rotate(15 84 62)"/><circle cx="84" cy="60" r="4.5" fill="#FFFFFF"/><circle cx="82" cy="58" r="1.5" fill="#1E1F24"/><ellipse cx="32" cy="80" rx="9" ry="6" fill="#FFA3BA" fill-opacity="0.8"/><ellipse cx="96" cy="80" rx="9" ry="6" fill="#FFA3BA" fill-opacity="0.8"/><path d="M60 76 L68 76 L64 81 Z" fill="#1E1F24"/><path d="M58 84 C62 88 66 88 66 84 C66 88 70 88 74 84" stroke="#1E1F24" stroke-width="3" stroke-linecap="round"/></svg>',
    viewBox: "0 0 128 128"
  },
  "party": {
    name: "party",
    label: "Party Mascot",
    category: "fun",
    keywords: ["party", "hat", "horn", "festive", "birthday", "celebration"],
    unicode: "\u{1F973}",
    version: "1.0.0",
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="100%" height="100%" fill="none"><g transform="translate(68, 8) rotate(15)"><polygon points="0,0 -20,40 20,40" fill="#4CC9F0" stroke="#1E1F24" stroke-width="3.5" stroke-linejoin="round"/><path d="M-10 20 L10 20" stroke="#FFD166" stroke-width="3.5"/><path d="M-15 30 L15 30" stroke="#FF4D6D" stroke-width="3.5"/><circle cx="0" cy="-2" r="5" fill="#FFB703" stroke="#1E1F24" stroke-width="2.5"/></g><ellipse cx="26" cy="74" rx="14" ry="9" fill="#FFA3BA" fill-opacity="0.7"/><ellipse cx="102" cy="74" rx="14" ry="9" fill="#FFA3BA" fill-opacity="0.7"/><path d="M30 52 C36 44 46 44 52 52" stroke="#1E1F24" stroke-width="4.5" stroke-linecap="round"/><path d="M76 52 C82 44 92 44 98 52" stroke="#1E1F24" stroke-width="4.5" stroke-linecap="round"/><g transform="translate(64, 80)"><path d="M-6 0 L-26 12 C-34 16 -38 10 -34 4 C-30 -2 -14 0 -6 0" fill="#FFB703" stroke="#1E1F24" stroke-width="3.5" stroke-linejoin="round"/><circle cx="-32" cy="8" r="5" fill="#FF4D6D" stroke="#1E1F24" stroke-width="2.5"/></g><path d="M48 80 C54 90 74 90 80 80" stroke="#1E1F24" stroke-width="4.5" stroke-linecap="round"/><circle cx="20" cy="38" r="3.5" fill="#FF4D6D"/><circle cx="106" cy="34" r="3.5" fill="#80B918"/><polygon points="28,24 30,28 34,28 31,31 32,35 28,33 24,35 25,31 22,28 26,28" fill="#FFD166"/></svg>',
    viewBox: "0 0 128 128"
  },
  "peace": {
    name: "peace",
    label: "Peace / Victory Sign",
    category: "gestures",
    keywords: ["peace", "victory", "two", "fingers", "vsign", "chill", "cool"],
    unicode: "\u270C\uFE0F",
    version: "1.1.0",
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="100%" height="100%" fill="none"><path d="M42 108 L42 76 C42 66 52 66 52 76 L52 82 C52 72 62 72 62 82 L62 88 C62 78 72 78 72 88 L72 108 Z" fill="#FFE5D9" stroke="#1E1F24" stroke-width="4.5" stroke-linejoin="round"/><path d="M42 76 L42 30 C42 22 52 22 52 30 L52 76" fill="#FFE5D9" stroke="#1E1F24" stroke-width="4.5" stroke-linejoin="round"/><path d="M54 76 L66 26 C68 18 78 22 76 30 L64 76" fill="#FFE5D9" stroke="#1E1F24" stroke-width="4.5" stroke-linejoin="round"/><path d="M38 78 C30 76 26 84 36 90 L46 90" stroke="#1E1F24" stroke-width="4" stroke-linecap="round" fill="#FFE5D9"/><path d="M92 24 L94 30 L100 32 L94 34 L92 40 L90 34 L84 32 L90 30 Z" fill="#FFD166"/></svg>',
    viewBox: "0 0 128 128"
  },
  "piggy": {
    name: "piggy",
    label: "Cute Piggy",
    category: "animals",
    keywords: ["pig", "piggy", "pink", "oink", "snout", "cute", "pet"],
    unicode: "\u{1F437}",
    version: "1.1.0",
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="100%" height="100%" fill="none"><path d="M26 44 L40 24 L48 44 Z" fill="#FFA3BA" stroke="#1E1F24" stroke-width="4" stroke-linejoin="round"/><path d="M102 44 L88 24 L80 44 Z" fill="#FFA3BA" stroke="#1E1F24" stroke-width="4" stroke-linejoin="round"/><circle cx="64" cy="72" r="44" fill="#FFCCD5" stroke="#1E1F24" stroke-width="4.5"/><ellipse cx="30" cy="76" rx="9" ry="6" fill="#FF758F" fill-opacity="0.8"/><ellipse cx="98" cy="76" rx="9" ry="6" fill="#FF758F" fill-opacity="0.8"/><circle cx="44" cy="62" r="6" fill="#1E1F24"/><circle cx="46" cy="60" r="2.2" fill="#FFFFFF"/><circle cx="84" cy="62" r="6" fill="#1E1F24"/><circle cx="86" cy="60" r="2.2" fill="#FFFFFF"/><ellipse cx="64" cy="78" rx="16" ry="12" fill="#FFA3BA" stroke="#1E1F24" stroke-width="3.5"/><ellipse cx="58" cy="78" rx="3.5" ry="5" fill="#1E1F24"/><ellipse cx="70" cy="78" rx="3.5" ry="5" fill="#1E1F24"/></svg>',
    viewBox: "0 0 128 128"
  },
  "pizza": {
    name: "pizza",
    label: "Pizza Slice",
    category: "food",
    keywords: ["pizza", "slice", "cheese", "pepperoni", "italian", "food", "fastfood"],
    unicode: "\u{1F355}",
    version: "1.1.0",
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="100%" height="100%" fill="none"><path d="M28 32 C50 18 78 18 100 32 L64 112 Z" fill="#FFB703" stroke="#1E1F24" stroke-width="4.5" stroke-linejoin="round"/><path d="M26 32 C50 16 78 16 102 32 C96 40 32 40 26 32 Z" fill="#CB997E" stroke="#1E1F24" stroke-width="4" stroke-linejoin="round"/><path d="M32 38 C50 32 78 32 96 38" stroke="#E63946" stroke-width="4" stroke-linecap="round"/><circle cx="50" cy="54" r="8" fill="#D62828" stroke="#1E1F24" stroke-width="2.5"/><circle cx="78" cy="54" r="8" fill="#D62828" stroke="#1E1F24" stroke-width="2.5"/><circle cx="64" cy="78" r="8" fill="#D62828" stroke="#1E1F24" stroke-width="2.5"/><rect x="58" y="44" width="6" height="4" rx="1.5" fill="#52B788" transform="rotate(20 58 44)"/><rect x="74" y="70" width="6" height="4" rx="1.5" fill="#52B788" transform="rotate(-30 74 70)"/><path d="M46 70 C46 80 52 80 52 70" fill="#FFD166" stroke="#1E1F24" stroke-width="2.5"/></svg>',
    viewBox: "0 0 128 128"
  },
  "pleading": {
    name: "pleading",
    label: "Pleading Puppy Eyes",
    category: "emotions",
    keywords: ["pleading", "puppy", "eyes", "beg", "please", "cute", "sparkle"],
    unicode: "\u{1F97A}",
    version: "1.1.0",
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="100%" height="100%" fill="none"><ellipse cx="28" cy="80" rx="15" ry="9" fill="#FFA3BA" fill-opacity="0.7"/><ellipse cx="100" cy="80" rx="15" ry="9" fill="#FFA3BA" fill-opacity="0.7"/><path d="M30 36 C38 42 48 42 54 36" stroke="#1E1F24" stroke-width="4.5" stroke-linecap="round"/><path d="M74 36 C80 42 90 42 98 36" stroke="#1E1F24" stroke-width="4.5" stroke-linecap="round"/><ellipse cx="42" cy="58" rx="16" ry="18" fill="#1E1F24"/><circle cx="48" cy="50" r="7.5" fill="#FFFFFF"/><circle cx="36" cy="66" r="3.8" fill="#FFFFFF"/><circle cx="46" cy="68" r="2.2" fill="#FFFFFF"/><ellipse cx="86" cy="58" rx="16" ry="18" fill="#1E1F24"/><circle cx="92" cy="50" r="7.5" fill="#FFFFFF"/><circle cx="80" cy="66" r="3.8" fill="#FFFFFF"/><circle cx="90" cy="68" r="2.2" fill="#FFFFFF"/><path d="M54 88 C58 84 70 84 74 88" stroke="#1E1F24" stroke-width="4.5" stroke-linecap="round"/><path d="M98 72 C104 76 104 84 98 86 C94 86 92 80 98 72 Z" fill="#70D6FF" stroke="#1E1F24" stroke-width="2.5"/></svg>',
    viewBox: "0 0 128 128"
  },
  "pointing-right": {
    name: "pointing-right",
    label: "Pointing Right",
    category: "gestures",
    keywords: ["point", "right", "finger", "index", "direction", "there"],
    unicode: "\u{1F449}",
    version: "1.1.0",
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="100%" height="100%" fill="none"><path d="M20 54 L20 86 L50 86 C64 86 64 74 64 74 L98 74 C106 74 106 62 98 62 L56 62 C56 54 48 54 38 54 Z" fill="#FFE5D9" stroke="#1E1F24" stroke-width="4.5" stroke-linejoin="round"/><path d="M54 74 C60 74 60 84 54 84" stroke="#1E1F24" stroke-width="3.5"/><path d="M44 74 C50 74 50 84 44 84" stroke="#1E1F24" stroke-width="3.5"/><path d="M38 54 C46 54 48 64 42 68" stroke="#1E1F24" stroke-width="3.5"/><line x1="106" y1="62" x2="116" y2="58" stroke="#FF85A1" stroke-width="3.5" stroke-linecap="round"/><line x1="108" y1="68" x2="120" y2="68" stroke="#FFD166" stroke-width="3.5" stroke-linecap="round"/><line x1="106" y1="74" x2="116" y2="78" stroke="#FF85A1" stroke-width="3.5" stroke-linecap="round"/></svg>',
    viewBox: "0 0 128 128"
  },
  "pray": {
    name: "pray",
    label: "Praying / Folded Hands",
    category: "gestures",
    keywords: ["pray", "folded", "hands", "thanks", "gratitude", "please", "namaste"],
    unicode: "\u{1F64F}",
    version: "1.1.0",
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="100%" height="100%" fill="none"><path d="M40 108 L58 54 C60 46 64 46 64 54 L64 108 Z" fill="#FFE5D9" stroke="#1E1F24" stroke-width="4" stroke-linejoin="round"/><path d="M88 108 L70 54 C68 46 64 46 64 54 L64 108 Z" fill="#FFE5D9" stroke="#1E1F24" stroke-width="4" stroke-linejoin="round"/><path d="M52 86 C46 80 44 88 50 94" stroke="#1E1F24" stroke-width="3.5" stroke-linecap="round"/><path d="M76 86 C82 80 84 88 78 94" stroke="#1E1F24" stroke-width="3.5" stroke-linecap="round"/><rect x="36" y="104" width="24" height="10" rx="3" fill="#3A86FF" stroke="#1E1F24" stroke-width="3"/><rect x="68" y="104" width="24" height="10" rx="3" fill="#3A86FF" stroke="#1E1F24" stroke-width="3"/><path d="M64 20 L64 32" stroke="#FFD166" stroke-width="3.5" stroke-linecap="round"/><path d="M44 26 L52 36" stroke="#FFD166" stroke-width="3.5" stroke-linecap="round"/><path d="M84 26 L76 36" stroke="#FFD166" stroke-width="3.5" stroke-linecap="round"/></svg>',
    viewBox: "0 0 128 128"
  },
  "puke": {
    name: "puke",
    label: "Sick / Puking",
    category: "emotions",
    keywords: ["puke", "sick", "vomit", "gross", "ill", "green", "nauseous"],
    unicode: "\u{1F92E}",
    version: "1.1.0",
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="100%" height="100%" fill="none"><ellipse cx="64" cy="46" rx="36" ry="18" fill="#70E000" fill-opacity="0.3"/><path d="M34 50 L48 56 L34 62" stroke="#1E1F24" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M94 50 L80 56 L94 62" stroke="#1E1F24" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M48 76 C48 76 50 112 64 112 C78 112 80 76 80 76 Z" fill="#70E000" stroke="#1E1F24" stroke-width="4" stroke-linejoin="round"/><circle cx="58" cy="94" r="3" fill="#38B000"/><circle cx="70" cy="100" r="2.5" fill="#38B000"/><circle cx="42" cy="102" r="3.5" fill="#70E000" stroke="#1E1F24" stroke-width="2"/><circle cx="86" cy="104" r="3.5" fill="#70E000" stroke="#1E1F24" stroke-width="2"/></svg>',
    viewBox: "0 0 128 128"
  },
  "rainbow": {
    name: "rainbow",
    label: "Rainbow & Cloud",
    category: "symbols",
    keywords: ["rainbow", "cloud", "colorful", "sky", "pride", "weather", "magic"],
    unicode: "\u{1F308}",
    version: "1.1.0",
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="100%" height="100%" fill="none"><path d="M24 92 C24 48 42 28 64 28 C86 28 104 48 104 92" stroke="#FF4D6D" stroke-width="12" stroke-linecap="round"/><path d="M34 92 C34 56 47 40 64 40 C81 40 94 56 94 92" stroke="#FFD166" stroke-width="10"/><path d="M42 92 C42 64 52 50 64 50 C76 50 86 64 86 92" stroke="#06D6A0" stroke-width="8"/><path d="M48 92 C48 70 55 58 64 58 C73 58 80 70 80 92" stroke="#118AB2" stroke-width="6"/><path d="M16 96 C16 88 24 82 32 84 C36 76 46 76 50 82 C56 82 60 88 58 96 Z" fill="#FFFFFF" stroke="#1E1F24" stroke-width="3.5" stroke-linejoin="round"/><path d="M70 96 C70 88 78 82 86 84 C90 76 100 76 104 82 C110 82 114 88 112 96 Z" fill="#FFFFFF" stroke="#1E1F24" stroke-width="3.5" stroke-linejoin="round"/></svg>',
    viewBox: "0 0 128 128"
  },
  "ramen": {
    name: "ramen",
    label: "Ramen Bowl",
    category: "food",
    keywords: ["ramen", "noodles", "soup", "bowl", "japanese", "delicious", "egg"],
    unicode: "\u{1F35C}",
    version: "1.1.0",
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="100%" height="100%" fill="none"><line x1="28" y1="20" x2="108" y2="44" stroke="#DDB892" stroke-width="4.5" stroke-linecap="round"/><line x1="30" y1="28" x2="110" y2="52" stroke="#DDB892" stroke-width="4.5" stroke-linecap="round"/><ellipse cx="64" cy="62" rx="42" ry="14" fill="#E76F51"/><path d="M40 58 C46 52 50 64 56 58 C62 52 66 64 72 58" stroke="#FFE49E" stroke-width="4.5" stroke-linecap="round" fill="none"/><ellipse cx="46" cy="60" rx="9" ry="7" fill="#FFFFFF"/><circle cx="46" cy="60" r="4.5" fill="#FB8500"/><circle cx="82" cy="60" r="7" fill="#FFFFFF"/><path d="M80 58 C84 58 84 62 80 62" stroke="#FF5E7E" stroke-width="2" fill="none"/><path d="M22 62 C22 96 40 108 64 108 C88 108 106 96 106 62 Z" fill="#E63946" stroke="#1E1F24" stroke-width="4.5" stroke-linejoin="round"/><ellipse cx="64" cy="62" rx="42" ry="10" stroke="#1E1F24" stroke-width="4.5" fill="none"/><rect x="52" y="106" width="24" height="6" rx="2" fill="#E63946" stroke="#1E1F24" stroke-width="3"/></svg>',
    viewBox: "0 0 128 128"
  },
  "rocket": {
    name: "rocket",
    label: "Launching Rocket",
    category: "objects",
    keywords: ["rocket", "launch", "space", "ship", "fast", "blastoff", "crypto", "to-the-moon"],
    unicode: "\u{1F680}",
    version: "1.1.0",
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="100%" height="100%" fill="none"><path d="M42 86 C32 108 48 116 52 108 C56 120 72 120 76 108 C80 116 96 108 86 86 Z" fill="#FB8500" stroke="#1E1F24" stroke-width="3" stroke-linejoin="round"/><path d="M52 86 C48 100 58 106 64 98 C70 106 80 100 76 86 Z" fill="#FFD166"/><path d="M40 70 L24 88 L42 88 Z" fill="#E63946" stroke="#1E1F24" stroke-width="4" stroke-linejoin="round"/><path d="M88 70 L104 88 L86 88 Z" fill="#E63946" stroke="#1E1F24" stroke-width="4" stroke-linejoin="round"/><path d="M64 16 C48 36 44 68 44 88 L84 88 C84 68 80 36 64 16 Z" fill="#F8F9FA" stroke="#1E1F24" stroke-width="4.5" stroke-linejoin="round"/><path d="M64 16 C56 26 52 38 52 42 L76 42 C76 38 72 26 64 16 Z" fill="#E63946" stroke="#1E1F24" stroke-width="3.5" stroke-linejoin="round"/><circle cx="64" cy="60" r="11" fill="#70D6FF" stroke="#1E1F24" stroke-width="3.5"/><circle cx="67" cy="57" r="3.5" fill="#FFFFFF"/></svg>',
    viewBox: "0 0 128 128"
  },
  "rolling-eyes": {
    name: "rolling-eyes",
    label: "Rolling Eyes",
    category: "reactions",
    keywords: ["rolling", "eyes", "whatever", "bored", "annoyed", "sigh", "eyeroll"],
    unicode: "\u{1F644}",
    version: "1.1.0",
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="100%" height="100%" fill="none"><ellipse cx="28" cy="76" rx="14" ry="8" fill="#FFA3BA" fill-opacity="0.5"/><ellipse cx="100" cy="76" rx="14" ry="8" fill="#FFA3BA" fill-opacity="0.5"/><path d="M32 32 C40 30 50 34 54 36" stroke="#1E1F24" stroke-width="4" stroke-linecap="round"/><path d="M74 36 C78 34 88 30 96 32" stroke="#1E1F24" stroke-width="4" stroke-linecap="round"/><ellipse cx="44" cy="54" rx="12" ry="14" fill="#FFFFFF" stroke="#1E1F24" stroke-width="4"/><circle cx="44" cy="46" r="6" fill="#1E1F24"/><circle cx="46" cy="44" r="2" fill="#FFFFFF"/><ellipse cx="84" cy="54" rx="12" ry="14" fill="#FFFFFF" stroke="#1E1F24" stroke-width="4"/><circle cx="84" cy="46" r="6" fill="#1E1F24"/><circle cx="86" cy="44" r="2" fill="#FFFFFF"/><path d="M48 84 C56 82 72 86 80 84" stroke="#1E1F24" stroke-width="4.5" stroke-linecap="round"/></svg>',
    viewBox: "0 0 128 128"
  },
  "sad": {
    name: "sad",
    label: "Sad Pout",
    category: "emotions",
    keywords: ["sad", "pout", "down", "unhappy", "sorrow", "frown"],
    unicode: "\u{1F97A}",
    version: "1.0.0",
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="100%" height="100%" fill="none"><ellipse cx="26" cy="74" rx="14" ry="9" fill="#FFA3BA" fill-opacity="0.65"/><ellipse cx="102" cy="74" rx="14" ry="9" fill="#FFA3BA" fill-opacity="0.65"/><path d="M30 40 C38 32 48 30 56 36" stroke="#1E1F24" stroke-width="4.5" stroke-linecap="round"/><path d="M72 36 C80 30 90 32 98 40" stroke="#1E1F24" stroke-width="4.5" stroke-linecap="round"/><ellipse cx="44" cy="54" rx="12" ry="14" fill="#1E1F24"/><circle cx="41" cy="48" r="4.5" fill="#FFFFFF"/><circle cx="49" cy="58" r="2.5" fill="#FFFFFF"/><path d="M36 60 C40 64 48 64 52 60" stroke="#70D6FF" stroke-width="2.5" stroke-linecap="round"/><ellipse cx="84" cy="54" rx="12" ry="14" fill="#1E1F24"/><circle cx="81" cy="48" r="4.5" fill="#FFFFFF"/><circle cx="89" cy="58" r="2.5" fill="#FFFFFF"/><path d="M76 60 C80 64 88 64 92 60" stroke="#70D6FF" stroke-width="2.5" stroke-linecap="round"/><path d="M48 88 C54 78 74 78 80 88" stroke="#1E1F24" stroke-width="4.5" stroke-linecap="round"/><path d="M60 94 Q64 92 68 94" stroke="#1E1F24" stroke-width="2.5" stroke-linecap="round"/></svg>',
    viewBox: "0 0 128 128"
  },
  "scream": {
    name: "scream",
    label: "Screaming Shock",
    category: "reactions",
    keywords: ["scream", "shocked", "fear", "panic", "omg", "munch", "horror"],
    unicode: "\u{1F631}",
    version: "1.1.0",
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="100%" height="100%" fill="none"><ellipse cx="44" cy="50" rx="12" ry="14" fill="#FFFFFF" stroke="#1E1F24" stroke-width="4.5"/><circle cx="44" cy="50" r="5" fill="#1E1F24"/><ellipse cx="84" cy="50" rx="12" ry="14" fill="#FFFFFF" stroke="#1E1F24" stroke-width="4.5"/><circle cx="84" cy="50" r="5" fill="#1E1F24"/><ellipse cx="64" cy="30" rx="34" ry="12" fill="#70D6FF" fill-opacity="0.35"/><ellipse cx="64" cy="82" rx="14" ry="24" fill="#1E1F24"/><ellipse cx="64" cy="94" rx="8" ry="8" fill="#FF5E7E"/><path d="M22 60 C18 72 20 86 28 92 C32 86 32 72 28 60 Z" fill="#FFE5D9" stroke="#1E1F24" stroke-width="3.5"/><path d="M106 60 C110 72 108 86 100 92 C96 86 96 72 100 60 Z" fill="#FFE5D9" stroke="#1E1F24" stroke-width="3.5"/></svg>',
    viewBox: "0 0 128 128"
  },
  "shy": {
    name: "shy",
    label: "Shy Blush",
    category: "emotions",
    keywords: ["shy", "blush", "bashful", "flustered", "cute", "crush", "sweet"],
    unicode: "\u{1F633}",
    version: "1.1.0",
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="100%" height="100%" fill="none"><ellipse cx="32" cy="74" rx="16" ry="11" fill="#FF6B8B" fill-opacity="0.8"/><ellipse cx="96" cy="74" rx="16" ry="11" fill="#FF6B8B" fill-opacity="0.8"/><ellipse cx="44" cy="56" rx="8" ry="10" fill="#1E1F24"/><circle cx="42" cy="52" r="3.2" fill="#FFFFFF"/><ellipse cx="88" cy="56" rx="8" ry="10" fill="#1E1F24"/><circle cx="86" cy="52" r="3.2" fill="#FFFFFF"/><path d="M56 82 C60 86 68 86 72 82" stroke="#1E1F24" stroke-width="4.5" stroke-linecap="round"/><path d="M48 94 C46 90 48 84 56 86 C64 88 66 94 62 98 Z" fill="#FFE5D9" stroke="#1E1F24" stroke-width="3"/><path d="M22 36 C18 30 26 24 30 28 C34 24 42 30 38 36 L30 44 Z" fill="#FF4D6D"/></svg>',
    viewBox: "0 0 128 128"
  },
  "skull": {
    name: "skull",
    label: "Cute Skull",
    category: "symbols",
    keywords: ["skull", "dead", "skeleton", "spooky", "kawaii", "halloween"],
    unicode: "\u{1F480}",
    version: "1.1.0",
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="100%" height="100%" fill="none"><path d="M30 60 C30 36 44 22 64 22 C84 22 98 36 98 60 C98 74 90 82 82 84 L82 98 C82 102 78 106 74 106 L54 106 C50 106 46 102 46 98 L46 84 C38 82 30 74 30 60 Z" fill="#F8F9FA" stroke="#1E1F24" stroke-width="4.5" stroke-linejoin="round"/><ellipse cx="38" cy="74" rx="7" ry="4" fill="#FFA3BA" fill-opacity="0.85"/><ellipse cx="90" cy="74" rx="7" ry="4" fill="#FFA3BA" fill-opacity="0.85"/><circle cx="48" cy="58" r="11" fill="#1E1F24"/><circle cx="50" cy="55" r="3.5" fill="#FFFFFF"/><circle cx="80" cy="58" r="11" fill="#1E1F24"/><circle cx="82" cy="55" r="3.5" fill="#FFFFFF"/><path d="M64 70 C62 67 60 67 59 69 C58 71 60 74 64 76 C68 74 70 71 69 69 C68 67 66 67 64 70 Z" fill="#1E1F24"/><line x1="56" y1="92" x2="56" y2="106" stroke="#1E1F24" stroke-width="3" stroke-linecap="round"/><line x1="64" y1="92" x2="64" y2="106" stroke="#1E1F24" stroke-width="3" stroke-linecap="round"/><line x1="72" y1="92" x2="72" y2="106" stroke="#1E1F24" stroke-width="3" stroke-linecap="round"/></svg>',
    viewBox: "0 0 128 128"
  },
  "sleepy": {
    name: "sleepy",
    label: "Sleepy / Zzz",
    category: "faces",
    keywords: ["sleepy", "tired", "sleep", "zzz", "bedtime", "nap", "bubble"],
    unicode: "\u{1F634}",
    version: "1.0.0",
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="100%" height="100%" fill="none"><ellipse cx="26" cy="74" rx="14" ry="8" fill="#FFA3BA" fill-opacity="0.6"/><ellipse cx="102" cy="74" rx="14" ry="8" fill="#FFA3BA" fill-opacity="0.6"/><path d="M30 38 C36 34 46 36 52 40" stroke="#1E1F24" stroke-width="4.5" stroke-linecap="round"/><path d="M76 40 C82 36 92 34 98 38" stroke="#1E1F24" stroke-width="4.5" stroke-linecap="round"/><path d="M32 54 C38 58 46 58 52 54" stroke="#1E1F24" stroke-width="4.5" stroke-linecap="round"/><path d="M76 54 C82 58 90 58 96 54" stroke="#1E1F24" stroke-width="4.5" stroke-linecap="round"/><circle cx="70" cy="70" r="14" fill="#70D6FF" fill-opacity="0.6" stroke="#1E1F24" stroke-width="3"/><circle cx="66" cy="66" r="4" fill="#FFFFFF" fill-opacity="0.8"/><circle cx="74" cy="74" r="2" fill="#FFFFFF" fill-opacity="0.8"/><path d="M48 80 C54 84 62 84 66 80" stroke="#1E1F24" stroke-width="4.5" stroke-linecap="round"/><path d="M96 22 L106 22 L96 32 L106 32" stroke="#4CC9F0" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M108 10 L114 10 L108 16 L114 16" stroke="#4CC9F0" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    viewBox: "0 0 128 128"
  },
  "smug": {
    name: "smug",
    label: "Smug / Heh",
    category: "faces",
    keywords: ["smug", "sly", "clever", "heh", "confident", "grin"],
    unicode: "\u{1F60F}",
    version: "1.0.0",
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="100%" height="100%" fill="none"><ellipse cx="26" cy="74" rx="14" ry="8" fill="#FFA3BA" fill-opacity="0.6"/><ellipse cx="102" cy="74" rx="14" ry="8" fill="#FFA3BA" fill-opacity="0.6"/><path d="M28 28 C36 22 48 24 54 30" stroke="#1E1F24" stroke-width="4.5" stroke-linecap="round"/><path d="M74 34 C80 34 92 32 98 36" stroke="#1E1F24" stroke-width="4.5" stroke-linecap="round"/><path d="M32 52 C36 46 48 46 54 52" stroke="#1E1F24" stroke-width="4.5" stroke-linecap="round"/><ellipse cx="44" cy="53" rx="6" ry="6" fill="#1E1F24"/><circle cx="46" cy="51" r="2" fill="#FFFFFF"/><path d="M34 54 Q44 58 52 54" stroke="#1E1F24" stroke-width="2.5"/><path d="M74 52 C80 46 92 46 96 52" stroke="#1E1F24" stroke-width="4.5" stroke-linecap="round"/><ellipse cx="86" cy="53" rx="6" ry="6" fill="#1E1F24"/><circle cx="88" cy="51" r="2" fill="#FFFFFF"/><path d="M76 54 Q86 58 94 54" stroke="#1E1F24" stroke-width="2.5"/><path d="M48 80 C60 80 82 86 86 68" stroke="#1E1F24" stroke-width="4.5" stroke-linecap="round"/><path d="M84 68 C86 66 90 70 86 74" stroke="#1E1F24" stroke-width="3" stroke-linecap="round"/></svg>',
    viewBox: "0 0 128 128"
  },
  "sparkles": {
    name: "sparkles",
    label: "Magic Sparkles",
    category: "symbols",
    keywords: ["sparkles", "magic", "glitter", "shine", "stars", "sparkle", "clean"],
    unicode: "\u2728",
    version: "1.1.0",
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="100%" height="100%" fill="none"><path d="M64 16 C64 42 76 54 102 54 C76 54 64 66 64 92 C64 66 52 54 26 54 C52 54 64 42 64 16 Z" fill="#FFD166" stroke="#1E1F24" stroke-width="4" stroke-linejoin="round"/><path d="M28 22 C28 34 34 40 46 40 C34 40 28 46 28 58 C28 46 22 40 10 40 C22 40 28 34 28 22 Z" fill="#70D6FF" stroke="#1E1F24" stroke-width="3" stroke-linejoin="round"/><path d="M96 74 C96 86 102 92 114 92 C102 92 96 98 96 110 C96 98 90 92 78 92 C90 92 96 86 96 74 Z" fill="#FF758F" stroke="#1E1F24" stroke-width="3" stroke-linejoin="round"/></svg>',
    viewBox: "0 0 128 128"
  },
  "starry": {
    name: "starry",
    label: "Golden Star",
    category: "symbols",
    keywords: ["star", "sparkle", "gold", "favorite", "shine", "badge"],
    unicode: "\u2B50",
    version: "1.0.0",
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="100%" height="100%" fill="none"><g transform="translate(64, 64) scale(1.1)"><path d="M0,-46 L13,-14 L46,-10 L22,12 L29,46 L0,28 L-29,46 L-22,12 L-46,-10 L-13,-14 Z" fill="#FFB703" stroke="#1E1F24" stroke-width="4.5" stroke-linejoin="round"/><ellipse cx="-11" cy="2" rx="3.5" ry="4.5" fill="#1E1F24"/><circle cx="-10" cy="0" r="1.5" fill="#FFFFFF"/><ellipse cx="11" cy="2" rx="3.5" ry="4.5" fill="#1E1F24"/><circle cx="12" cy="0" r="1.5" fill="#FFFFFF"/><ellipse cx="-18" cy="8" rx="4" ry="2.5" fill="#FF758F" fill-opacity="0.8"/><ellipse cx="18" cy="8" rx="4" ry="2.5" fill="#FF758F" fill-opacity="0.8"/><path d="M-6 10 C-3 16 3 16 6 10" stroke="#1E1F24" stroke-width="3" stroke-linecap="round"/></g><circle cx="20" cy="26" r="3.5" fill="#FFD166"/><circle cx="108" cy="30" r="3" fill="#FFD166"/><polygon points="104,96 107,102 113,102 108,105 110,111 104,107 98,111 100,105 95,102 101,102" fill="#FFD166"/></svg>',
    viewBox: "0 0 128 128"
  },
  "sun": {
    name: "sun",
    label: "Smiling Sun",
    category: "symbols",
    keywords: ["sun", "sunny", "sunshine", "summer", "weather", "warm", "bright"],
    unicode: "\u2600\uFE0F",
    version: "1.1.0",
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="100%" height="100%" fill="none"><path d="M64 12 L64 24" stroke="#FFB703" stroke-width="6" stroke-linecap="round"/><path d="M64 104 L64 116" stroke="#FFB703" stroke-width="6" stroke-linecap="round"/><path d="M12 64 L24 64" stroke="#FFB703" stroke-width="6" stroke-linecap="round"/><path d="M104 64 L116 64" stroke="#FFB703" stroke-width="6" stroke-linecap="round"/><path d="M28 28 L36 36" stroke="#FFB703" stroke-width="6" stroke-linecap="round"/><path d="M92 92 L100 100" stroke="#FFB703" stroke-width="6" stroke-linecap="round"/><path d="M28 100 L36 92" stroke="#FFB703" stroke-width="6" stroke-linecap="round"/><path d="M92 36 L100 28" stroke="#FFB703" stroke-width="6" stroke-linecap="round"/><circle cx="64" cy="64" r="36" fill="#FFD166" stroke="#1E1F24" stroke-width="4.5"/><ellipse cx="44" cy="70" rx="7" ry="4.5" fill="#FFA3BA" fill-opacity="0.85"/><ellipse cx="84" cy="70" rx="7" ry="4.5" fill="#FFA3BA" fill-opacity="0.85"/><circle cx="50" cy="58" r="5" fill="#1E1F24"/><circle cx="52" cy="56" r="2" fill="#FFFFFF"/><circle cx="78" cy="58" r="5" fill="#1E1F24"/><circle cx="80" cy="56" r="2" fill="#FFFFFF"/><path d="M56 70 C60 76 68 76 72 70" stroke="#1E1F24" stroke-width="3.5" stroke-linecap="round"/></svg>',
    viewBox: "0 0 128 128"
  },
  "surprised": {
    name: "surprised",
    label: "Surprised",
    category: "reactions",
    keywords: ["surprised", "gasp", "shock", "wow", "omg", "eyes"],
    unicode: "\u{1F62E}",
    version: "1.0.0",
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="100%" height="100%" fill="none"><ellipse cx="22" cy="74" rx="14" ry="9" fill="#FFA3BA" fill-opacity="0.6"/><ellipse cx="106" cy="74" rx="14" ry="9" fill="#FFA3BA" fill-opacity="0.6"/><path d="M26 24 C34 18 48 18 56 24" stroke="#1E1F24" stroke-width="4.5" stroke-linecap="round"/><path d="M72 24 C80 18 94 18 102 24" stroke="#1E1F24" stroke-width="4.5" stroke-linecap="round"/><circle cx="40" cy="48" r="14" fill="#FFFFFF" stroke="#1E1F24" stroke-width="4"/><circle cx="40" cy="48" r="5.5" fill="#1E1F24"/><circle cx="42" cy="46" r="2" fill="#FFFFFF"/><circle cx="88" cy="48" r="14" fill="#FFFFFF" stroke="#1E1F24" stroke-width="4"/><circle cx="88" cy="48" r="5.5" fill="#1E1F24"/><circle cx="90" cy="46" r="2" fill="#FFFFFF"/><path d="M18 42 L22 44" stroke="#1E1F24" stroke-width="3" stroke-linecap="round"/><path d="M106 44 L110 42" stroke="#1E1F24" stroke-width="3" stroke-linecap="round"/><ellipse cx="64" cy="84" rx="11" ry="15" fill="#FF5E7E" stroke="#1E1F24" stroke-width="4.5"/><path d="M58 88 C60 92 68 92 70 88" stroke="#FF85A1" stroke-width="3" stroke-linecap="round"/></svg>',
    viewBox: "0 0 128 128"
  },
  "sweat-smile": {
    name: "sweat-smile",
    label: "Nervous Sweat Smile",
    category: "faces",
    keywords: ["sweat", "nervous", "smile", "awkward", "relief", "oops", "whew"],
    unicode: "\u{1F605}",
    version: "1.1.0",
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="100%" height="100%" fill="none"><ellipse cx="28" cy="74" rx="14" ry="9" fill="#FFA3BA" fill-opacity="0.65"/><ellipse cx="100" cy="74" rx="14" ry="9" fill="#FFA3BA" fill-opacity="0.65"/><path d="M96 28 C108 40 108 50 98 54 C88 54 86 42 96 28 Z" fill="#70D6FF" stroke="#1E1F24" stroke-width="3.5" stroke-linejoin="round"/><path d="M30 38 C36 34 46 36 52 42" stroke="#1E1F24" stroke-width="4.5" stroke-linecap="round"/><path d="M76 42 C82 36 92 34 98 38" stroke="#1E1F24" stroke-width="4.5" stroke-linecap="round"/><path d="M34 56 C40 48 48 48 54 56" stroke="#1E1F24" stroke-width="5" stroke-linecap="round"/><path d="M74 56 C80 48 88 48 94 56" stroke="#1E1F24" stroke-width="5" stroke-linecap="round"/><path d="M42 74 C48 94 80 94 86 74 Z" fill="#FFFFFF" stroke="#1E1F24" stroke-width="4.5" stroke-linejoin="round"/><line x1="42" y1="78" x2="86" y2="78" stroke="#1E1F24" stroke-width="3" stroke-linecap="round"/><line x1="64" y1="74" x2="64" y2="88" stroke="#1E1F24" stroke-width="2.5" stroke-linecap="round"/></svg>',
    viewBox: "0 0 128 128"
  },
  "thinking": {
    name: "thinking",
    label: "Thinking",
    category: "emotions",
    keywords: ["thinking", "ponder", "curious", "hmm", "question", "wonder"],
    unicode: "\u{1F914}",
    version: "1.0.0",
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="100%" height="100%" fill="none"><ellipse cx="26" cy="72" rx="13" ry="8" fill="#FFA3BA" fill-opacity="0.5"/><ellipse cx="102" cy="72" rx="13" ry="8" fill="#FFA3BA" fill-opacity="0.5"/><path d="M30 30 C36 24 48 26 54 34" stroke="#1E1F24" stroke-width="4.5" stroke-linecap="round"/><path d="M74 38 C80 34 92 36 98 40" stroke="#1E1F24" stroke-width="4.5" stroke-linecap="round"/><ellipse cx="44" cy="48" rx="9" ry="11" fill="#1E1F24"/><circle cx="46" cy="43" r="3.5" fill="#FFFFFF"/><ellipse cx="88" cy="48" rx="9" ry="11" fill="#1E1F24"/><circle cx="90" cy="43" r="3.5" fill="#FFFFFF"/><circle cx="64" cy="65" r="2.2" fill="#1E1F24"/><path d="M50 78 C56 74 68 76 74 82" stroke="#1E1F24" stroke-width="4.5" stroke-linecap="round"/><g transform="translate(68, 76)"><path d="M4 14 C12 6 24 10 24 22 C24 30 14 36 2 34 C-6 33 -10 26 -6 20 C-4 18 0 18 4 14 Z" fill="#FFE5D9" stroke="#1E1F24" stroke-width="3.5"/><path d="M-2 18 C-1 8 8 10 12 18" stroke="#1E1F24" stroke-width="3" stroke-linecap="round"/><path d="M8 12 C14 8 20 12 20 18" stroke="#1E1F24" stroke-width="3" stroke-linecap="round"/></g></svg>',
    viewBox: "0 0 128 128"
  },
  "thumbs-down": {
    name: "thumbs-down",
    label: "Thumbs Down",
    category: "gestures",
    keywords: ["thumbsdown", "disagree", "no", "dislike", "bad"],
    unicode: "\u{1F44E}",
    version: "1.0.0",
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="100%" height="100%" fill="none"><g transform="translate(18, 14)"><path d="M26 68 C26 84 36 96 46 96 C52 96 56 90 54 80 L50 62 L68 62 C76 62 82 58 82 50 C82 46 78 42 74 40 C80 38 84 34 82 28 C82 24 78 20 72 18 C76 16 78 12 76 6 C74 2 68 0 58 0 L26 0 C18 0 12 6 12 14 L12 54 C12 62 18 68 26 68 Z" fill="#FFE5D9" stroke="#1E1F24" stroke-width="4.5" stroke-linejoin="round"/><path d="M52 42 L74 42" stroke="#1E1F24" stroke-width="4" stroke-linecap="round"/><path d="M50 22 L72 22" stroke="#1E1F24" stroke-width="4" stroke-linecap="round"/><path d="M12 54 L2 54 C0 54 0 0 2 0 L12 0" fill="#FF758F" stroke="#1E1F24" stroke-width="4.5" stroke-linejoin="round"/><path d="M78 88 C76 92 72 98 72 102 C72 106 75 109 79 109 C83 109 86 106 86 102 C86 98 82 92 78 88 Z" fill="#70D6FF" stroke="#1E1F24" stroke-width="2"/></g></svg>',
    viewBox: "0 0 128 128"
  },
  "thumbs-up": {
    name: "thumbs-up",
    label: "Thumbs Up",
    category: "gestures",
    keywords: ["thumbsup", "agree", "yes", "like", "approve", "good"],
    unicode: "\u{1F44D}",
    version: "1.0.0",
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="100%" height="100%" fill="none"><g transform="translate(18, 14)"><path d="M26 38 C26 22 36 10 46 10 C52 10 56 16 54 26 L50 44 L68 44 C76 44 82 48 82 56 C82 60 78 64 74 66 C80 68 84 72 82 78 C82 82 78 86 72 88 C76 90 78 94 76 100 C74 104 68 106 58 106 L26 106 C18 106 12 100 12 92 L12 52 C12 44 18 38 26 38 Z" fill="#FFE5D9" stroke="#1E1F24" stroke-width="4.5" stroke-linejoin="round"/><path d="M52 64 L74 64" stroke="#1E1F24" stroke-width="4" stroke-linecap="round"/><path d="M50 84 L72 84" stroke="#1E1F24" stroke-width="4" stroke-linecap="round"/><path d="M12 52 L2 52 C0 52 0 106 2 106 L12 106" fill="#4CC9F0" stroke="#1E1F24" stroke-width="4.5" stroke-linejoin="round"/><path d="M60 4 Q68 -2 76 2" stroke="#FFB703" stroke-width="4" stroke-linecap="round"/><path d="M84 16 Q92 14 96 22" stroke="#FFB703" stroke-width="4" stroke-linecap="round"/></g></svg>',
    viewBox: "0 0 128 128"
  },
  "wave": {
    name: "wave",
    label: "Waving Hand",
    category: "gestures",
    keywords: ["wave", "hello", "hi", "goodbye", "greet", "hand"],
    unicode: "\u{1F44B}",
    version: "1.0.0",
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="100%" height="100%" fill="none"><path d="M18 28 C14 36 14 46 18 54" stroke="#FFB703" stroke-width="4.5" stroke-linecap="round"/><path d="M28 20 C20 34 20 54 28 68" stroke="#FFB703" stroke-width="4.5" stroke-linecap="round"/><g transform="translate(36, 18) rotate(12)"><path d="M12 60 C8 56 4 48 2 40 C0 32 6 28 12 34 C16 38 20 44 24 50" stroke="#1E1F24" stroke-width="4.5" fill="#FFE5D9"/><path d="M24 50 L24 20 C24 12 32 12 32 20 L32 46 L34 14 C34 6 42 6 42 14 L42 46 L44 18 C44 10 52 10 52 18 L52 48 L54 26 C54 18 62 18 62 26 L62 58 C62 76 54 90 38 92 C24 94 14 80 14 66 Z" fill="#FFE5D9" stroke="#1E1F24" stroke-width="4.5" stroke-linejoin="round"/><path d="M28 64 C36 72 48 70 54 62" stroke="#1E1F24" stroke-width="3" stroke-linecap="round"/></g></svg>',
    viewBox: "0 0 128 128"
  },
  "wink": {
    name: "wink",
    label: "Winking",
    category: "faces",
    keywords: ["wink", "playful", "cheeky", "flirt", "joke"],
    unicode: "\u{1F609}",
    version: "1.0.0",
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="100%" height="100%" fill="none"><ellipse cx="28" cy="74" rx="14" ry="9" fill="#FFA3BA" fill-opacity="0.65"/><ellipse cx="100" cy="74" rx="14" ry="9" fill="#FFA3BA" fill-opacity="0.65"/><path d="M30 34 C36 28 48 30 54 36" stroke="#1E1F24" stroke-width="4.5" stroke-linecap="round"/><path d="M74 36 C80 30 92 28 98 34" stroke="#1E1F24" stroke-width="4.5" stroke-linecap="round"/><ellipse cx="42" cy="54" rx="9" ry="11" fill="#1E1F24"/><circle cx="45" cy="51" r="3.5" fill="#FFFFFF"/><circle cx="39" cy="57" r="1.8" fill="#FFFFFF"/><path d="M74 54 Q86 64 98 54" stroke="#1E1F24" stroke-width="5" stroke-linecap="round"/><path d="M96 52 L103 48" stroke="#1E1F24" stroke-width="3.5" stroke-linecap="round"/><circle cx="64" cy="66" r="2.2" fill="#1E1F24"/><path d="M46 76 Q64 92 82 76" stroke="#1E1F24" stroke-width="4.5" stroke-linecap="round"/><path d="M66 82 C66 94 78 94 78 82" fill="#FF758F" stroke="#1E1F24" stroke-width="3"/></svg>',
    viewBox: "0 0 128 128"
  },
  "yawn": {
    name: "yawn",
    label: "Yawning / Tired",
    category: "faces",
    keywords: ["yawn", "sleepy", "tired", "bedtime", "exhausted", "nap"],
    unicode: "\u{1F971}",
    version: "1.1.0",
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="100%" height="100%" fill="none"><ellipse cx="28" cy="74" rx="14" ry="9" fill="#FFA3BA" fill-opacity="0.6"/><ellipse cx="100" cy="74" rx="14" ry="9" fill="#FFA3BA" fill-opacity="0.6"/><path d="M34 50 L48 56 L34 62" stroke="#1E1F24" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M94 50 L80 56 L94 62" stroke="#1E1F24" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round"/><ellipse cx="64" cy="80" rx="14" ry="18" fill="#1E1F24"/><ellipse cx="64" cy="88" rx="8" ry="6" fill="#FF5E7E"/><path d="M52 86 C52 74 62 72 74 74 C78 78 78 86 70 90 Z" fill="#FFE5D9" stroke="#1E1F24" stroke-width="3.5" stroke-linejoin="round"/></svg>',
    viewBox: "0 0 128 128"
  }
};
var EMOJI_LIST = Object.values(EMOJI_REGISTRY);
var EMOJI_NAMES = Object.keys(EMOJI_REGISTRY);

// ../core/src/emoji.ts
function getEmoji(name) {
  return EMOJI_REGISTRY[name] || null;
}

// src/Emoji.tsx
import { Fragment, jsx as jsx2, jsxs } from "react/jsx-runtime";
function getSvgInner(svgContent) {
  const match = svgContent.match(/<svg[^>]*>([\s\S]*?)<\/svg>/i);
  return match ? match[1] : svgContent;
}
var Emoji = forwardRef(function Emoji2({
  name,
  size,
  width,
  height,
  className,
  "aria-label": ariaLabel,
  "aria-hidden": ariaHidden,
  title,
  fallback,
  style,
  animated,
  ...restProps
}, ref) {
  const context = useEmojiContext();
  const emoji = getEmoji(name);
  const finalSize = size ?? context.defaultSize ?? 32;
  const finalWidth = width ?? finalSize;
  const finalHeight = height ?? finalSize;
  const classes = [
    "kimo-emoji",
    animated ? "kimo-emoji-animated" : "",
    context.defaultClassName,
    className
  ].filter(Boolean).join(" ");
  const isAriaHidden = ariaHidden !== void 0 ? ariaHidden : context.defaultAriaHidden;
  const label = ariaLabel || (emoji ? emoji.label : `Emoji ${name}`);
  if (!emoji) {
    if (process.env.NODE_ENV !== "production") {
      console.warn(`[kimo-emoji] Unknown emoji "${name}". Please check the emoji name or update the library.`);
    }
    if (fallback !== void 0) {
      return /* @__PURE__ */ jsx2(Fragment, { children: fallback });
    }
    if (context.fallback !== void 0) {
      return /* @__PURE__ */ jsx2(Fragment, { children: context.fallback });
    }
    return /* @__PURE__ */ jsxs(
      "svg",
      {
        ref,
        viewBox: "0 0 128 128",
        width: finalWidth,
        height: finalHeight,
        className: classes,
        style: { display: "inline-block", verticalAlign: "middle", ...style },
        role: isAriaHidden ? void 0 : "img",
        "aria-label": isAriaHidden ? void 0 : label,
        "aria-hidden": isAriaHidden,
        ...restProps,
        children: [
          title && !isAriaHidden && /* @__PURE__ */ jsx2("title", { children: title }),
          /* @__PURE__ */ jsx2("rect", { width: "128", height: "128", rx: "28", fill: "#F3F4F6", stroke: "#E5E7EB", strokeWidth: "4" }),
          /* @__PURE__ */ jsx2(
            "text",
            {
              x: "64",
              y: "74",
              textAnchor: "middle",
              fontSize: "40",
              fontWeight: "bold",
              fill: "#9CA3AF",
              fontFamily: "system-ui, -apple-system, sans-serif",
              children: "?"
            }
          )
        ]
      }
    );
  }
  const innerSvg = getSvgInner(emoji.svg);
  return /* @__PURE__ */ jsx2(
    "svg",
    {
      ref,
      viewBox: emoji.viewBox || "0 0 128 128",
      width: finalWidth,
      height: finalHeight,
      className: classes,
      style: {
        display: "inline-block",
        verticalAlign: "middle",
        overflow: "visible",
        ...style
      },
      role: isAriaHidden ? void 0 : "img",
      "aria-label": isAriaHidden ? void 0 : label,
      "aria-hidden": isAriaHidden,
      dangerouslySetInnerHTML: {
        __html: title && !isAriaHidden ? `<title>${title}</title>${innerSvg}` : innerSvg
      },
      ...restProps
    }
  );
});
Emoji.displayName = "Emoji";

// src/generated-icons.tsx
import { forwardRef as forwardRef2 } from "react";
import { jsx as jsx3 } from "react/jsx-runtime";
var Angel = forwardRef2((props, ref) => {
  return /* @__PURE__ */ jsx3(Emoji, { name: "angel", ref, ...props });
});
Angel.displayName = "Angel";
var Angry = forwardRef2((props, ref) => {
  return /* @__PURE__ */ jsx3(Emoji, { name: "angry", ref, ...props });
});
Angry.displayName = "Angry";
var Applause = forwardRef2((props, ref) => {
  return /* @__PURE__ */ jsx3(Emoji, { name: "applause", ref, ...props });
});
Applause.displayName = "Applause";
var Avocado = forwardRef2((props, ref) => {
  return /* @__PURE__ */ jsx3(Emoji, { name: "avocado", ref, ...props });
});
Avocado.displayName = "Avocado";
var Balloon = forwardRef2((props, ref) => {
  return /* @__PURE__ */ jsx3(Emoji, { name: "balloon", ref, ...props });
});
Balloon.displayName = "Balloon";
var Bear = forwardRef2((props, ref) => {
  return /* @__PURE__ */ jsx3(Emoji, { name: "bear", ref, ...props });
});
Bear.displayName = "Bear";
var Boba = forwardRef2((props, ref) => {
  return /* @__PURE__ */ jsx3(Emoji, { name: "boba", ref, ...props });
});
Boba.displayName = "Boba";
var Bunny = forwardRef2((props, ref) => {
  return /* @__PURE__ */ jsx3(Emoji, { name: "bunny", ref, ...props });
});
Bunny.displayName = "Bunny";
var Cake = forwardRef2((props, ref) => {
  return /* @__PURE__ */ jsx3(Emoji, { name: "cake", ref, ...props });
});
Cake.displayName = "Cake";
var CatCry = forwardRef2((props, ref) => {
  return /* @__PURE__ */ jsx3(Emoji, { name: "cat-cry", ref, ...props });
});
CatCry.displayName = "CatCry";
var CatHappy = forwardRef2((props, ref) => {
  return /* @__PURE__ */ jsx3(Emoji, { name: "cat-happy", ref, ...props });
});
CatHappy.displayName = "CatHappy";
var CatLove = forwardRef2((props, ref) => {
  return /* @__PURE__ */ jsx3(Emoji, { name: "cat-love", ref, ...props });
});
CatLove.displayName = "CatLove";
var Celebrate = forwardRef2((props, ref) => {
  return /* @__PURE__ */ jsx3(Emoji, { name: "celebrate", ref, ...props });
});
Celebrate.displayName = "Celebrate";
var CherryBlossom = forwardRef2((props, ref) => {
  return /* @__PURE__ */ jsx3(Emoji, { name: "cherry-blossom", ref, ...props });
});
CherryBlossom.displayName = "CherryBlossom";
var Clown = forwardRef2((props, ref) => {
  return /* @__PURE__ */ jsx3(Emoji, { name: "clown", ref, ...props });
});
Clown.displayName = "Clown";
var Coffee = forwardRef2((props, ref) => {
  return /* @__PURE__ */ jsx3(Emoji, { name: "coffee", ref, ...props });
});
Coffee.displayName = "Coffee";
var Confused = forwardRef2((props, ref) => {
  return /* @__PURE__ */ jsx3(Emoji, { name: "confused", ref, ...props });
});
Confused.displayName = "Confused";
var Cool = forwardRef2((props, ref) => {
  return /* @__PURE__ */ jsx3(Emoji, { name: "cool", ref, ...props });
});
Cool.displayName = "Cool";
var Cry = forwardRef2((props, ref) => {
  return /* @__PURE__ */ jsx3(Emoji, { name: "cry", ref, ...props });
});
Cry.displayName = "Cry";
var CutePoop = forwardRef2((props, ref) => {
  return /* @__PURE__ */ jsx3(Emoji, { name: "cute-poop", ref, ...props });
});
CutePoop.displayName = "CutePoop";
var Devil = forwardRef2((props, ref) => {
  return /* @__PURE__ */ jsx3(Emoji, { name: "devil", ref, ...props });
});
Devil.displayName = "Devil";
var Diamond = forwardRef2((props, ref) => {
  return /* @__PURE__ */ jsx3(Emoji, { name: "diamond", ref, ...props });
});
Diamond.displayName = "Diamond";
var Dizzy = forwardRef2((props, ref) => {
  return /* @__PURE__ */ jsx3(Emoji, { name: "dizzy", ref, ...props });
});
Dizzy.displayName = "Dizzy";
var DogPuppy = forwardRef2((props, ref) => {
  return /* @__PURE__ */ jsx3(Emoji, { name: "dog-puppy", ref, ...props });
});
DogPuppy.displayName = "DogPuppy";
var Drool = forwardRef2((props, ref) => {
  return /* @__PURE__ */ jsx3(Emoji, { name: "drool", ref, ...props });
});
Drool.displayName = "Drool";
var Duck = forwardRef2((props, ref) => {
  return /* @__PURE__ */ jsx3(Emoji, { name: "duck", ref, ...props });
});
Duck.displayName = "Duck";
var Excited = forwardRef2((props, ref) => {
  return /* @__PURE__ */ jsx3(Emoji, { name: "excited", ref, ...props });
});
Excited.displayName = "Excited";
var FingersCrossed = forwardRef2((props, ref) => {
  return /* @__PURE__ */ jsx3(Emoji, { name: "fingers-crossed", ref, ...props });
});
FingersCrossed.displayName = "FingersCrossed";
var Fire = forwardRef2((props, ref) => {
  return /* @__PURE__ */ jsx3(Emoji, { name: "fire", ref, ...props });
});
Fire.displayName = "Fire";
var FistBump = forwardRef2((props, ref) => {
  return /* @__PURE__ */ jsx3(Emoji, { name: "fist-bump", ref, ...props });
});
FistBump.displayName = "FistBump";
var FrogCoffee = forwardRef2((props, ref) => {
  return /* @__PURE__ */ jsx3(Emoji, { name: "frog-coffee", ref, ...props });
});
FrogCoffee.displayName = "FrogCoffee";
var FrogCry = forwardRef2((props, ref) => {
  return /* @__PURE__ */ jsx3(Emoji, { name: "frog-cry", ref, ...props });
});
FrogCry.displayName = "FrogCry";
var FrogDance = forwardRef2((props, ref) => {
  return /* @__PURE__ */ jsx3(Emoji, { name: "frog-dance", ref, ...props });
});
FrogDance.displayName = "FrogDance";
var FrogHappy = forwardRef2((props, ref) => {
  return /* @__PURE__ */ jsx3(Emoji, { name: "frog-happy", ref, ...props });
});
FrogHappy.displayName = "FrogHappy";
var FrogLove = forwardRef2((props, ref) => {
  return /* @__PURE__ */ jsx3(Emoji, { name: "frog-love", ref, ...props });
});
FrogLove.displayName = "FrogLove";
var Ghost = forwardRef2((props, ref) => {
  return /* @__PURE__ */ jsx3(Emoji, { name: "ghost", ref, ...props });
});
Ghost.displayName = "Ghost";
var Gift = forwardRef2((props, ref) => {
  return /* @__PURE__ */ jsx3(Emoji, { name: "gift", ref, ...props });
});
Gift.displayName = "Gift";
var Handshake = forwardRef2((props, ref) => {
  return /* @__PURE__ */ jsx3(Emoji, { name: "handshake", ref, ...props });
});
Handshake.displayName = "Handshake";
var Happy = forwardRef2((props, ref) => {
  return /* @__PURE__ */ jsx3(Emoji, { name: "happy", ref, ...props });
});
Happy.displayName = "Happy";
var HeartHands = forwardRef2((props, ref) => {
  return /* @__PURE__ */ jsx3(Emoji, { name: "heart-hands", ref, ...props });
});
HeartHands.displayName = "HeartHands";
var Heart = forwardRef2((props, ref) => {
  return /* @__PURE__ */ jsx3(Emoji, { name: "heart", ref, ...props });
});
Heart.displayName = "Heart";
var Hundred = forwardRef2((props, ref) => {
  return /* @__PURE__ */ jsx3(Emoji, { name: "hundred", ref, ...props });
});
Hundred.displayName = "Hundred";
var IceCream = forwardRef2((props, ref) => {
  return /* @__PURE__ */ jsx3(Emoji, { name: "ice-cream", ref, ...props });
});
IceCream.displayName = "IceCream";
var Laugh = forwardRef2((props, ref) => {
  return /* @__PURE__ */ jsx3(Emoji, { name: "laugh", ref, ...props });
});
Laugh.displayName = "Laugh";
var Love = forwardRef2((props, ref) => {
  return /* @__PURE__ */ jsx3(Emoji, { name: "love", ref, ...props });
});
Love.displayName = "Love";
var MindBlown = forwardRef2((props, ref) => {
  return /* @__PURE__ */ jsx3(Emoji, { name: "mind-blown", ref, ...props });
});
MindBlown.displayName = "MindBlown";
var MoneyFace = forwardRef2((props, ref) => {
  return /* @__PURE__ */ jsx3(Emoji, { name: "money-face", ref, ...props });
});
MoneyFace.displayName = "MoneyFace";
var Moon = forwardRef2((props, ref) => {
  return /* @__PURE__ */ jsx3(Emoji, { name: "moon", ref, ...props });
});
Moon.displayName = "Moon";
var MusicNote = forwardRef2((props, ref) => {
  return /* @__PURE__ */ jsx3(Emoji, { name: "music-note", ref, ...props });
});
MusicNote.displayName = "MusicNote";
var Panda = forwardRef2((props, ref) => {
  return /* @__PURE__ */ jsx3(Emoji, { name: "panda", ref, ...props });
});
Panda.displayName = "Panda";
var Party = forwardRef2((props, ref) => {
  return /* @__PURE__ */ jsx3(Emoji, { name: "party", ref, ...props });
});
Party.displayName = "Party";
var Peace = forwardRef2((props, ref) => {
  return /* @__PURE__ */ jsx3(Emoji, { name: "peace", ref, ...props });
});
Peace.displayName = "Peace";
var Piggy = forwardRef2((props, ref) => {
  return /* @__PURE__ */ jsx3(Emoji, { name: "piggy", ref, ...props });
});
Piggy.displayName = "Piggy";
var Pizza = forwardRef2((props, ref) => {
  return /* @__PURE__ */ jsx3(Emoji, { name: "pizza", ref, ...props });
});
Pizza.displayName = "Pizza";
var Pleading = forwardRef2((props, ref) => {
  return /* @__PURE__ */ jsx3(Emoji, { name: "pleading", ref, ...props });
});
Pleading.displayName = "Pleading";
var PointingRight = forwardRef2((props, ref) => {
  return /* @__PURE__ */ jsx3(Emoji, { name: "pointing-right", ref, ...props });
});
PointingRight.displayName = "PointingRight";
var Pray = forwardRef2((props, ref) => {
  return /* @__PURE__ */ jsx3(Emoji, { name: "pray", ref, ...props });
});
Pray.displayName = "Pray";
var Puke = forwardRef2((props, ref) => {
  return /* @__PURE__ */ jsx3(Emoji, { name: "puke", ref, ...props });
});
Puke.displayName = "Puke";
var Rainbow = forwardRef2((props, ref) => {
  return /* @__PURE__ */ jsx3(Emoji, { name: "rainbow", ref, ...props });
});
Rainbow.displayName = "Rainbow";
var Ramen = forwardRef2((props, ref) => {
  return /* @__PURE__ */ jsx3(Emoji, { name: "ramen", ref, ...props });
});
Ramen.displayName = "Ramen";
var Rocket = forwardRef2((props, ref) => {
  return /* @__PURE__ */ jsx3(Emoji, { name: "rocket", ref, ...props });
});
Rocket.displayName = "Rocket";
var RollingEyes = forwardRef2((props, ref) => {
  return /* @__PURE__ */ jsx3(Emoji, { name: "rolling-eyes", ref, ...props });
});
RollingEyes.displayName = "RollingEyes";
var Sad = forwardRef2((props, ref) => {
  return /* @__PURE__ */ jsx3(Emoji, { name: "sad", ref, ...props });
});
Sad.displayName = "Sad";
var Scream = forwardRef2((props, ref) => {
  return /* @__PURE__ */ jsx3(Emoji, { name: "scream", ref, ...props });
});
Scream.displayName = "Scream";
var Shy = forwardRef2((props, ref) => {
  return /* @__PURE__ */ jsx3(Emoji, { name: "shy", ref, ...props });
});
Shy.displayName = "Shy";
var Skull = forwardRef2((props, ref) => {
  return /* @__PURE__ */ jsx3(Emoji, { name: "skull", ref, ...props });
});
Skull.displayName = "Skull";
var Sleepy = forwardRef2((props, ref) => {
  return /* @__PURE__ */ jsx3(Emoji, { name: "sleepy", ref, ...props });
});
Sleepy.displayName = "Sleepy";
var Smug = forwardRef2((props, ref) => {
  return /* @__PURE__ */ jsx3(Emoji, { name: "smug", ref, ...props });
});
Smug.displayName = "Smug";
var Sparkles = forwardRef2((props, ref) => {
  return /* @__PURE__ */ jsx3(Emoji, { name: "sparkles", ref, ...props });
});
Sparkles.displayName = "Sparkles";
var Starry = forwardRef2((props, ref) => {
  return /* @__PURE__ */ jsx3(Emoji, { name: "starry", ref, ...props });
});
Starry.displayName = "Starry";
var Sun = forwardRef2((props, ref) => {
  return /* @__PURE__ */ jsx3(Emoji, { name: "sun", ref, ...props });
});
Sun.displayName = "Sun";
var Surprised = forwardRef2((props, ref) => {
  return /* @__PURE__ */ jsx3(Emoji, { name: "surprised", ref, ...props });
});
Surprised.displayName = "Surprised";
var SweatSmile = forwardRef2((props, ref) => {
  return /* @__PURE__ */ jsx3(Emoji, { name: "sweat-smile", ref, ...props });
});
SweatSmile.displayName = "SweatSmile";
var Thinking = forwardRef2((props, ref) => {
  return /* @__PURE__ */ jsx3(Emoji, { name: "thinking", ref, ...props });
});
Thinking.displayName = "Thinking";
var ThumbsDown = forwardRef2((props, ref) => {
  return /* @__PURE__ */ jsx3(Emoji, { name: "thumbs-down", ref, ...props });
});
ThumbsDown.displayName = "ThumbsDown";
var ThumbsUp = forwardRef2((props, ref) => {
  return /* @__PURE__ */ jsx3(Emoji, { name: "thumbs-up", ref, ...props });
});
ThumbsUp.displayName = "ThumbsUp";
var Wave = forwardRef2((props, ref) => {
  return /* @__PURE__ */ jsx3(Emoji, { name: "wave", ref, ...props });
});
Wave.displayName = "Wave";
var Wink = forwardRef2((props, ref) => {
  return /* @__PURE__ */ jsx3(Emoji, { name: "wink", ref, ...props });
});
Wink.displayName = "Wink";
var Yawn = forwardRef2((props, ref) => {
  return /* @__PURE__ */ jsx3(Emoji, { name: "yawn", ref, ...props });
});
Yawn.displayName = "Yawn";
export {
  Angel,
  Angry,
  Applause,
  Avocado,
  Balloon,
  Bear,
  Boba,
  Bunny,
  Cake,
  CatCry,
  CatHappy,
  CatLove,
  Celebrate,
  CherryBlossom,
  Clown,
  Coffee,
  Confused,
  Cool,
  Cry,
  CutePoop,
  Devil,
  Diamond,
  Dizzy,
  DogPuppy,
  Drool,
  Duck,
  Emoji,
  EmojiProvider,
  Excited,
  FingersCrossed,
  Fire,
  FistBump,
  FrogCoffee,
  FrogCry,
  FrogDance,
  FrogHappy,
  FrogLove,
  Ghost,
  Gift,
  Handshake,
  Happy,
  Heart,
  HeartHands,
  Hundred,
  IceCream,
  Laugh,
  Love,
  MindBlown,
  MoneyFace,
  Moon,
  MusicNote,
  Panda,
  Party,
  Peace,
  Piggy,
  Pizza,
  Pleading,
  PointingRight,
  Pray,
  Puke,
  Rainbow,
  Ramen,
  Rocket,
  RollingEyes,
  Sad,
  Scream,
  Shy,
  Skull,
  Sleepy,
  Smug,
  Sparkles,
  Starry,
  Sun,
  Surprised,
  SweatSmile,
  Thinking,
  ThumbsDown,
  ThumbsUp,
  Wave,
  Wink,
  Yawn,
  useEmojiContext
};
