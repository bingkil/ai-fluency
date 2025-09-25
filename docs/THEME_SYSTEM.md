# Infographic Theme System

A flexible, maintainable theme system for infographic mini-sites using CSS custom properties.

## � Theme Showcase

**Preview all themes visually:** Open `theme-showcase.html` in your browser to see live previews of all available themes with sample content, color palettes, and use case recommendations.

## �🏗️ Architecture Overview

### File Structure
```
assets/
├── themes/
│   ├── base-theme.css           # Core theme foundation
│   ├── dark-knight.css          # Dark Knight theme (current)
│   ├── ocean-breeze.css         # Ocean theme example
│   ├── sunset-glow.css          # Warm theme example
│   └── themes.json              # Theme registry
├── infographic-styles.css       # Base component styles
└── infographic-scripts.js       # JavaScript functionality
```

### Implementation Strategy

1. **Base Theme System**: Core CSS variables and component structures
2. **Individual Themes**: Override base variables with theme-specific values
3. **Theme Registry**: JSON catalog of available themes with metadata
4. **Easy Integration**: Simple HTML link tag to apply themes

## 🎭 Theme Anatomy

Each theme defines:
- **Color Palettes**: Light/dark mode color schemes
- **Typography**: Font families, sizes, weights
- **Brand Colors**: Primary, secondary, accent colors
- **Component Variants**: Card styles, button appearances
- **Visual Effects**: Shadows, gradients, borders

## 🚀 Usage

### In HTML
```html
<!-- Apply Dark Knight theme -->
<link rel="stylesheet" href="../assets/themes/dark-knight.css">
<link rel="stylesheet" href="../assets/infographic-styles.css">
```

### Theme Selection
```html
<!-- Choose your theme -->
<link rel="stylesheet" href="../assets/themes/[THEME-NAME].css">
<link rel="stylesheet" href="../assets/infographic-styles.css">
```

## 📋 Available Themes

### 1. Dark Knight (Professional Tech)
- **Aesthetic**: Professional, sophisticated, tech-focused
- **Colors**: Deep blues, elegant grays, Google brand colors
- **Use Cases**: Corporate courses, technical content, professional development

### 2. Ocean Breeze (Coming Soon)
- **Aesthetic**: Fresh, clean, calming
- **Colors**: Ocean blues, sea greens, sandy neutrals
- **Use Cases**: Wellness, productivity, learning content

### 3. Sunset Glow (Coming Soon)
- **Aesthetic**: Warm, energetic, creative
- **Colors**: Oranges, pinks, warm purples
- **Use Cases**: Creative workshops, design courses, artistic content

## 🔧 Creating New Themes

1. Copy `base-theme.css` as starting point
2. Override CSS custom properties
3. Test with existing components
4. Add to theme registry
5. Update documentation

---

*This theme system ensures visual consistency while providing creative flexibility for different content types and brand expressions.*