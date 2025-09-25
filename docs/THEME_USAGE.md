# Theme System Usage Guide

This guide explains how to use the AI Fluency Infographic Theme System with direct theme linking.

## 🎨 Visual Theme Preview

**See all themes in action:** Open `theme-showcase.html` in your browser to preview all available themes with sample content and choose the perfect one for your infographic.

## Quick Start

### 1. Basic Theme Application

To apply a theme to a new infographic, add these to your HTML `<head>`:

```html
<!-- Base styles -->
<link rel="stylesheet" href="../assets/infographic-styles.css">

<!-- Direct Theme Link -->
<link id="theme-stylesheet" rel="stylesheet" href="../assets/themes/[THEME-NAME].css">
```

### 2. CSS Variables Support

Add fallback CSS variables for basic dark/light mode support:

```html
<style>
  :root {
    --card-bg: #ffffff;
    --border-color: #e5e7eb;
    --text-primary: #111827;
    --text-secondary: #6b7280;
    --text-tertiary: #9ca3af;
    --primary-color: #2563eb;
    --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    --bg-primary: #ffffff;
    --bg-secondary: #f9fafb;
    --bg-tertiary: #f3f4f6;
  }
  
  [data-theme="dark"] {
    --card-bg: #1f2937;
    --border-color: #374151;
    --text-primary: #f9fafb;
    --text-secondary: #d1d5db;
    --text-tertiary: #9ca3af;
    --bg-primary: #111827;
    --bg-secondary: #1f2937;
    --bg-tertiary: #374151;
  }
</style>
```

## Available Themes

### Dark Knight (Professional)
- **File**: `dark-knight.css`
- **Use Cases**: Corporate courses, technical content, professional development
- **Colors**: Blue/Google brand palette
- **Style**: Clean, professional, corporate-friendly

### Ocean Breeze (Fresh & Calming)
- **File**: `ocean-breeze.css`
- **Use Cases**: Wellness content, productivity courses, learning platforms
- **Colors**: Ocean blues and cyans
- **Style**: Clean, calming, fresh

### Sunset Glow (Creative & Energetic)
- **File**: `sunset-glow.css`
- **Use Cases**: Creative workshops, design courses, artistic content
- **Colors**: Warm oranges, reds, and pinks
- **Style**: Creative, energetic, artistic

### Forest Sage (Natural & Eco-friendly)
- **File**: `forest-sage.css`
- **Use Cases**: Environmental content, sustainability courses, nature topics
- **Colors**: Natural greens and earth tones
- **Style**: Organic, sustainable, grounded

## Direct Theme Linking Approach

Instead of using JavaScript theme switching, we use direct CSS linking for better performance and simplicity:

### Creating Theme Variants

For each infographic, create multiple versions with different themes:

```
infographics/
├── my-course-dark-knight.html      # Dark Knight theme
├── my-course-ocean-breeze.html     # Ocean Breeze theme  
├── my-course-sunset-glow.html      # Sunset Glow theme
└── my-course-forest-sage.html      # Forest Sage theme
```

### Theme Selection

Users access different themed versions directly:
- `my-course-dark-knight.html` - Professional Google-branded theme
- `my-course-ocean-breeze.html` - Fresh, calming blue theme
- `my-course-sunset-glow.html` - Creative, energetic warm theme
- `my-course-forest-sage.html` - Natural, eco-friendly green theme

## Creating New Themes

### 1. Create Theme CSS File

```css
/* my-theme.css */
@import url("base-theme.css");

:root {
  /* Override CSS custom properties */
  --primary-color: #your-color;
  --accent-color: #your-accent;
  /* ... more customizations */
}

/* Add theme-specific styles */
.hero-section {
  /* Custom hero styling */
}
```

### 2. Register in themes.json

```json
{
  "id": "my-theme",
  "name": "My Theme",
  "description": "A custom theme description",
  "category": "Custom",
  "primaryColor": "#your-color",
  "file": "my-theme.css",
  "tags": ["custom", "unique"],
  "useCases": ["Your use case"],
  "features": ["Theme features"]
}
```

## CSS Custom Properties Reference

The base theme system provides these key variables:

### Colors
- `--primary-color` - Main brand color
- `--accent-color` - Secondary accent color  
- `--bg-primary` - Main background
- `--text-primary` - Main text color

### Spacing & Layout
- `--spacing-xs` through `--spacing-5xl` - Consistent spacing scale
- `--container-max-width` - Maximum content width
- `--section-padding` - Standard section padding

### Typography
- `--font-family-base` - Main font (Inter)
- `--font-size-*` - Font size scale
- `--font-weight-*` - Font weights

### Shadows & Effects
- `--shadow-sm` through `--shadow-2xl` - Shadow scale
- `--shadow-glow` - Special glow effect
- `--border-radius-*` - Consistent border radius

### Animations
- `--transition-smooth` - Standard transitions
- `--transition-bounce` - Bouncy transitions

## Best Practices

### Accessibility
- All themes maintain WCAG 2.1 AA contrast ratios
- Focus states are clearly defined
- Screen reader announcements included

### Performance
- CSS custom properties enable instant theme switching
- Themes are lazy-loaded only when needed
- Minimal CSS specificity conflicts

### Consistency
- Use the base theme variables as foundation
- Override only what's necessary for your theme
- Maintain semantic color naming

### Testing
Test your themes with:
- Different screen sizes
- Light/dark mode preferences
- High contrast mode
- Keyboard navigation
- Screen readers

## Browser Support

- Modern browsers with CSS Custom Properties support
- Graceful fallback for older browsers
- Progressive enhancement approach

## Troubleshooting

### Theme Not Loading
1. Check file path in theme reference
2. Verify CSS syntax in theme file
3. Ensure base-theme.css is accessible

### Styles Not Applying
1. Check CSS specificity conflicts
2. Verify custom property names match
3. Clear browser cache

### JavaScript Errors
1. Ensure theme-manager.js loads after DOM
2. Check themes.json is accessible
3. Verify theme IDs match between files

## File Structure

```
assets/
├── themes/
│   ├── base-theme.css       # Foundation variables
│   ├── dark-knight.css      # Professional theme
│   ├── ocean-breeze.css     # Fresh theme
│   ├── sunset-glow.css      # Creative theme
│   └── forest-sage.css      # Natural theme
├── infographic-styles.css   # Base component styles
└── infographic-scripts.js   # Shared JavaScript utilities (dark/light toggle)
```

## Quick Copy Template

For new infographics, copy this HTML structure:

```html
<!doctype html>
<html lang="en">
<head>
  <!-- Meta tags, title, etc. -->
  
  <!-- External Stylesheets -->
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="../assets/infographic-styles.css">
  
  <!-- Theme System - Choose one -->
  <link id="theme-stylesheet" rel="stylesheet" href="../assets/themes/dark-knight.css">
  <!-- <link id="theme-stylesheet" rel="stylesheet" href="../assets/themes/ocean-breeze.css"> -->
  <!-- <link id="theme-stylesheet" rel="stylesheet" href="../assets/themes/sunset-glow.css"> -->
  <!-- <link id="theme-stylesheet" rel="stylesheet" href="../assets/themes/forest-sage.css"> -->
  
  <!-- CSS Variables for dark/light mode support -->
  <style>
    :root {
      --card-bg: #ffffff;
      --border-color: #e5e7eb;
      --text-primary: #111827;
      --text-secondary: #6b7280;
      --text-tertiary: #9ca3af;
      --primary-color: #2563eb;
      --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
      --bg-primary: #ffffff;
      --bg-secondary: #f9fafb;
      --bg-tertiary: #f3f4f6;
    }
    
    [data-theme="dark"] {
      --card-bg: #1f2937;
      --border-color: #374151;
      --text-primary: #f9fafb;
      --text-secondary: #d1d5db;
      --text-tertiary: #9ca3af;
      --bg-primary: #111827;
      --bg-secondary: #1f2937;
      --bg-tertiary: #374151;
    }
  </style>
</head>
<body class="leading-relaxed" style="background-color: var(--bg-primary); color: var(--text-primary);" data-theme="light">
  
  <!-- Your infographic content here -->
  
  <!-- JavaScript -->
  <script src="../assets/infographic-scripts.js"></script>
</body>
</html>
```