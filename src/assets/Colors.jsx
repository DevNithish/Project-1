// MinimalPalette.js

import React from 'react';
import './Colors.css';

// --- Color Data & Sorting Logic ---

// 1. A single list of all the colors you provided
const allColors = [
  { name: 'White Smoke', hex: '#f5f5f5', variable: 'var(--coastal-breeze-white-smoke)' },
  { name: 'Azure', hex: '#f0ffff', variable: 'var(--crisp-sky-azure)' },
  { name: 'Alice Blue', hex: '#f0f8ff', variable: 'var(--coastal-breeze-alice-blue)' },
  { name: 'Light Cyan', hex: '#e0ffff', variable: 'var(--crisp-sky-light-cyan)' },
  { name: 'Light Blue', hex: '#e1f5fe', variable: 'var(--serene-waters-light-blue2)' },
  { name: 'Light Blue', hex: '#bde0fe', variable: 'var(--serene-waters-light-blue1)' },
  { name: 'Powder Blue', hex: '#b0e0e6', variable: 'var(--coastal-breeze-powder-blue)' },
  { name: 'Light Blue', hex: '#add8e6', variable: 'var(--coastal-breeze-light-blue)' },
  { name: 'Baby Blue', hex: '#a2d2ff', variable: 'var(--serene-waters-baby-blue)' },
  { name: 'Sky Blue', hex: '#87ceeb', variable: 'var(--crisp-sky-blue)' },
];

// 2. Helper function to convert a hex color to an HSL lightness value
const getLightness = (hex) => {
  // Remove hash and expand shorthand hex
  let r = 0, g = 0, b = 0;
  if (hex.length === 4) {
    r = parseInt(hex[1] + hex[1], 16);
    g = parseInt(hex[2] + hex[2], 16);
    b = parseInt(hex[3] + hex[3], 16);
  } else if (hex.length === 7) {
    r = parseInt(hex.substring(1, 3), 16);
    g = parseInt(hex.substring(3, 5), 16);
    b = parseInt(hex.substring(5, 7), 16);
  }

  // Normalize RGB to 0-1
  r /= 255;
  g /= 255;
  b /= 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  // Calculate lightness
  return (max + min) / 2;
};

// 3. Sort the array from lightest to darkest (white to blue)
const sortedColors = allColors.sort((a, b) => getLightness(b.hex) - getLightness(a.hex));

// --- The React Component ---

const colors = () => {
  return (
    <div className="minimal-palette-container">
      <h2 className="minimal-palette-title">Combined Palette | White to Blue</h2>
      <div className="swatch-grid">
        {sortedColors.map((color) => (
          <div key={color.hex} className="minimal-swatch">
            <div
              className="color-circle"
              style={{ backgroundColor: color.variable }}
            />
            <div className="hex-code">{color.hex}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default colors;