/* Tailwind CDN configuration — must be loaded AFTER the Tailwind CDN script. */
tailwind.config = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        surface: "#f8fafc",
        "surface-dim": "#f1f5f9",
        "surface-container-lowest": "#ffffff",
        "surface-container-low": "#ffffff",
        "surface-container": "#f8fafc",
        "surface-container-high": "#f1f5f9",
        "surface-container-highest": "#e2e8f0",
        "surface-variant": "#e2e8f0",
        primary: "#0891b2",
        "primary-container": "#0e7490",
        "on-primary": "#ffffff",
        "on-primary-container": "#ecfeff",
        secondary: "#059669",
        "secondary-container": "#d1fae5",
        "on-secondary": "#ffffff",
        tertiary: "#d97706",
        "tertiary-container": "#fef3c7",
        "on-tertiary": "#ffffff",
        "on-surface": "#0f172a",
        "on-surface-variant": "#475569",
        outline: "#64748b",
        "outline-variant": "#cbd5e1",
        "surface-tint": "#0284c7"
      },
      borderRadius: {
        DEFAULT: "0.375rem",
        lg: "0.5rem",
        xl: "0.75rem",
        "2xl": "1rem",
        full: "9999px"
      },
      spacing: {
        "space-xs": "0.25rem",
        "space-sm": "0.5rem",
        "space-md": "1rem",
        "space-lg": "1.5rem",
        "space-xl": "2.5rem",
        gutter: "1.5rem",
        margin: "3rem",
        "gutter-mobile": "1rem",
        "margin-mobile": "1.25rem",
        88: "22rem" /* used by sm:w-88 / sm:h-88 on the hero avatar */
      },
      fontFamily: {
        "headline-lg": ["Geist", "sans-serif"],
        "headline-lg-mobile": ["Geist", "sans-serif"],
        "headline-md": ["Geist", "sans-serif"],
        "title-sm": ["Geist", "sans-serif"],
        "display-xl": ["Geist", "sans-serif"],
        "label-sm": ["JetBrains Mono", "monospace"],
        "body-lg": ["Geist", "sans-serif"],
        "body-md": ["Geist", "sans-serif"],
        "display-xl-mobile": ["Geist", "sans-serif"],
        "code-terminal": ["JetBrains Mono", "monospace"]
      },
      fontSize: {
        "headline-lg": ["2rem", { lineHeight: "2.5rem", letterSpacing: "-0.02em", fontWeight: "600" }],
        "headline-lg-mobile": ["1.5rem", { lineHeight: "2rem", letterSpacing: "-0.01em", fontWeight: "600" }],
        "headline-md": ["1.25rem", { lineHeight: "1.75rem", letterSpacing: "-0.01em", fontWeight: "600" }],
        "title-sm": ["1rem", { lineHeight: "1.5rem", letterSpacing: "0", fontWeight: "500" }],
        "display-xl": ["3.5rem", { lineHeight: "4rem", letterSpacing: "-0.03em", fontWeight: "700" }],
        "label-sm": ["0.6875rem", { lineHeight: "1rem", letterSpacing: "0.08em", fontWeight: "600" }],
        "body-lg": ["0.9375rem", { lineHeight: "1.6rem", letterSpacing: "-0.01em", fontWeight: "400" }],
        "body-md": ["0.8125rem", { lineHeight: "1.45rem", letterSpacing: "0", fontWeight: "400" }],
        "display-xl-mobile": ["2.25rem", { lineHeight: "2.75rem", letterSpacing: "-0.02em", fontWeight: "700" }],
        "code-terminal": ["0.8125rem", { lineHeight: "1.35rem", letterSpacing: "0.02em", fontWeight: "500" }]
      }
    }
  }
};
