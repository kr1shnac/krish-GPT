import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: "class",
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
                // Fire Palette
                "fire-red": "#ff2a00",
                "fire-orange": "#ff7b00",
                "fire-yellow": "#ffea00",
                "fire-crimson": "#cc0000",
                "fire-ember": "#ff5722",
                // Dark Palette
                "dark-ash": "#1a1a1a",
                "dark-void": "#0a0a0a",
                coal: "#0d0d0d",
                "charcoal": "#1e1e1e",
                // Accent
                "lava": "#e63900",
                "molten": "#ff4500",
                card: {
                    DEFAULT: "hsl(var(--card))",
                    foreground: "hsl(var(--card-foreground))",
                },
                popover: {
                    DEFAULT: "hsl(var(--popover))",
                    foreground: "hsl(var(--popover-foreground))",
                },
                primary: {
                    DEFAULT: "hsl(var(--primary))",
                    foreground: "hsl(var(--primary-foreground))",
                },
                secondary: {
                    DEFAULT: "hsl(var(--secondary))",
                    foreground: "hsl(var(--secondary-foreground))",
                },
                muted: {
                    DEFAULT: "hsl(var(--muted))",
                    foreground: "hsl(var(--muted-foreground))",
                },
                accent: {
                    DEFAULT: "hsl(var(--accent))",
                    foreground: "hsl(var(--accent-foreground))",
                },
                destructive: {
                    DEFAULT: "hsl(var(--destructive))",
                    foreground: "hsl(var(--destructive-foreground))",
                },
                border: "hsl(var(--border))",
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
                chart: {
                    "1": "hsl(var(--chart-1))",
                    "2": "hsl(var(--chart-2))",
                    "3": "hsl(var(--chart-3))",
                    "4": "hsl(var(--chart-4))",
                    "5": "hsl(var(--chart-5))",
                },
                sidebar: {
                    DEFAULT: "hsl(var(--sidebar))",
                    foreground: "hsl(var(--sidebar-foreground))",
                    primary: "hsl(var(--sidebar-primary))",
                    "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
                    accent: "hsl(var(--sidebar-accent))",
                    "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
                    border: "hsl(var(--sidebar-border))",
                    ring: "hsl(var(--sidebar-ring))",
                },
            },
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },
            fontFamily: {
                sans: ["var(--font-geist-sans)"],
                mono: ["var(--font-geist-mono)"],
                bungee: ["var(--font-bungee)", "cursive"],
                orbitron: ["var(--font-orbitron)", "sans-serif"],
            },
            keyframes: {
                flicker: {
                    "0%, 100%": { opacity: "1" },
                    "20%": { opacity: "0.85" },
                    "40%": { opacity: "0.95" },
                    "60%": { opacity: "0.75" },
                    "80%": { opacity: "0.92" },
                },
                shake: {
                    "0%, 100%": { transform: "translateX(0)" },
                    "10%, 30%, 50%, 70%, 90%": { transform: "translateX(-2px)" },
                    "20%, 40%, 60%, 80%": { transform: "translateX(2px)" },
                },
                float: {
                    "0%": { transform: "translateY(0) scale(1)", opacity: "0" },
                    "10%": { opacity: "1" },
                    "90%": { opacity: "0.6" },
                    "100%": { transform: "translateY(-100vh) scale(0.3)", opacity: "0" },
                },
                pulseFire: {
                    "0%, 100%": { boxShadow: "0 0 15px #ff2a00, 0 0 30px #ff7b0060" },
                    "50%": { boxShadow: "0 0 25px #ff2a00, 0 0 50px #ff7b0080" },
                },
                glowPulse: {
                    "0%, 100%": { textShadow: "0 0 10px #ff2a00, 0 0 20px #ff7b0060" },
                    "50%": { textShadow: "0 0 20px #ff2a00, 0 0 40px #ff7b0080, 0 0 60px #ffea0030" },
                },
                borderGlow: {
                    "0%, 100%": { borderColor: "rgba(255,42,0,0.3)" },
                    "50%": { borderColor: "rgba(255,123,0,0.6)" },
                },
                subtleFloat: {
                    "0%, 100%": { transform: "translateY(0)" },
                    "50%": { transform: "translateY(-8px)" },
                },
            },
            animation: {
                flicker: "flicker 2s infinite",
                shake: "shake 0.5s ease-in-out",
                float: "float 4s infinite ease-in-out",
                "pulse-fire": "pulseFire 2s infinite",
                "glow-pulse": "glowPulse 2s infinite",
                "border-glow": "borderGlow 2s infinite",
                "subtle-float": "subtleFloat 4s ease-in-out infinite",
            },
        },
    },
    plugins: [require("tailwindcss-animate")],
};

export default config;
