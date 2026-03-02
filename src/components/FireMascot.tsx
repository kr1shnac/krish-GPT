"use client";

import React from "react";

/**
 * A pure CSS pixel-art Minecraft-style fire demon character.
 * Each "pixel" is a div in a grid. The character is 16x20 pixels.
 */

const _ = "transparent";
const R = "#ff2a00"; // fire red
const O = "#ff7b00"; // fire orange
const Y = "#ffea00"; // fire yellow
const D = "#1a1a1a"; // dark
const G = "#333333"; // dark gray
const W = "#ffffff"; // white (eyes)
const C = "#cc0000"; // crimson
const L = "#ff4500"; // lava
const B = "#0d0d0d"; // black

// 16 columns x 20 rows pixel grid
const PIXEL_MAP: string[][] = [
    // Row 0-1: Fire crown
    [_, _, _, _, _, Y, O, Y, _, Y, O, _, _, _, _, _],
    [_, _, _, _, Y, O, R, O, Y, O, R, Y, _, _, _, _],
    // Row 2-3: Head top
    [_, _, _, _, O, R, C, R, R, C, R, O, _, _, _, _],
    [_, _, _, O, D, D, D, D, D, D, D, D, O, _, _, _],
    // Row 4-5: Face with eyes
    [_, _, _, D, D, W, W, D, D, W, W, D, D, _, _, _],
    [_, _, _, D, D, Y, W, D, D, Y, W, D, D, _, _, _],
    // Row 6-7: Lower face
    [_, _, _, D, D, D, D, D, D, D, D, D, D, _, _, _],
    [_, _, _, D, D, R, R, R, R, R, R, D, D, _, _, _],
    // Row 8-9: Neck & shoulders
    [_, _, _, _, D, G, D, D, D, D, G, D, _, _, _, _],
    [_, _, O, D, G, G, G, D, D, G, G, G, D, O, _, _],
    // Row 10-11: Torso
    [_, _, L, D, G, R, G, G, G, G, R, G, D, L, _, _],
    [_, _, _, D, G, G, R, R, R, R, G, G, D, _, _, _],
    // Row 12-13: Lower torso
    [_, _, _, D, G, G, G, D, D, G, G, G, D, _, _, _],
    [_, _, _, D, D, G, G, D, D, G, G, D, D, _, _, _],
    // Row 14-15: Belt/waist
    [_, _, _, _, D, D, R, R, R, R, D, D, _, _, _, _],
    [_, _, _, _, D, D, D, D, D, D, D, D, _, _, _, _],
    // Row 16-17: Legs
    [_, _, _, _, D, D, D, _, _, D, D, D, _, _, _, _],
    [_, _, _, _, D, G, D, _, _, D, G, D, _, _, _, _],
    // Row 18-19: Feet
    [_, _, _, D, D, G, D, _, _, D, G, D, D, _, _, _],
    [_, _, _, D, D, D, D, _, _, D, D, D, D, _, _, _],
];

interface FireMascotProps {
    size?: number; // pixel size multiplier
    className?: string;
}

export function FireMascot({ size = 4, className = "" }: FireMascotProps) {
    const cols = PIXEL_MAP[0].length;
    const rows = PIXEL_MAP.length;

    return (
        <div className={`relative inline-block ${className}`}>
            {/* Glow behind character */}
            <div
                className="absolute inset-0 blur-xl opacity-50"
                style={{
                    background: "radial-gradient(circle, rgba(255,42,0,0.4), rgba(255,123,0,0.2), transparent 70%)",
                    transform: "scale(1.5)",
                }}
            />

            {/* Pixel Grid */}
            <div
                className="relative"
                style={{
                    display: "grid",
                    gridTemplateColumns: `repeat(${cols}, ${size}px)`,
                    gridTemplateRows: `repeat(${rows}, ${size}px)`,
                    imageRendering: "pixelated",
                }}
            >
                {PIXEL_MAP.flatMap((row, y) =>
                    row.map((color, x) => (
                        <div
                            key={`${y}-${x}`}
                            style={{
                                width: size,
                                height: size,
                                backgroundColor: color === _ ? "transparent" : color,
                                boxShadow:
                                    color === Y
                                        ? `0 0 ${size}px ${Y}`
                                        : color === O
                                            ? `0 0 ${size * 0.8}px ${O}80`
                                            : color === R || color === L
                                                ? `0 0 ${size * 0.5}px ${R}60`
                                                : "none",
                            }}
                        />
                    ))
                )}
            </div>

            {/* Flame particles around the character */}
            {[...Array(8)].map((__, i) => (
                <div
                    key={`particle-${i}`}
                    className="absolute rounded-full"
                    style={{
                        width: size * 0.8,
                        height: size * 0.8,
                        background: [Y, O, R, L][i % 4],
                        top: `${10 + Math.random() * 30}%`,
                        left: `${-10 + Math.random() * 120}%`,
                        animation: `ember-rise ${2 + Math.random() * 3}s linear infinite`,
                        animationDelay: `${Math.random() * 2}s`,
                        boxShadow: `0 0 ${size}px ${[Y, O, R, L][i % 4]}`,
                        "--drift": `${(Math.random() - 0.5) * 30}px`,
                    } as React.CSSProperties}
                />
            ))}
        </div>
    );
}
