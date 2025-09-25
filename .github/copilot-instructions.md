# AI Fluency Infographic System - Copilot Instructions

This project is a sophisticated infographic mini-site generator with a theme system for creating data-driven, accessible content pages. Focus on the theme system architecture and component patterns when making changes.

## 🏗️ Project Architecture

### Core System Components
- **Theme System**: CSS variable-based themes with dark/light mode support (`assets/themes/`)
- **Component Library**: Reusable infographic components with consistent styling (`assets/infographic-styles.css`)
- **Theme Registry**: JSON-based theme metadata system (`assets/themes/themes.json`)
- **Shared Scripts**: Common functionality for dark/light toggle, social sharing, accessibility (`assets/infographic-scripts.js`)

### File Structure Patterns
```
infographics/               # Individual infographic HTML pages
assets/themes/             # Theme CSS files + themes.json registry
assets/                    # Shared CSS, JS, and theme management
[topic]-theme-demo.html    # Theme demonstration pages
theme-showcase.html        # Live preview of all themes
```

### Critical Path Resolution
- **Files in `infographics/`**: Use `../assets/` for asset paths
- **Files in root**: Use `assets/` for asset paths
- **Files in subdirectories**: Adjust paths accordingly (`../../assets/` etc.)
- Always verify asset paths match the target file location

## 🎨 Theme System Deep Dive

### Theme Implementation Pattern
Each theme is a CSS file that overrides CSS custom properties from `base-theme.css`. Themes are registered in `themes.json` with metadata like:
- Primary/accent colors, use cases, categories
- Support for light/dark mode variants
- Brand-specific styling (Google colors, corporate themes, etc.)

### CSS Variable Architecture
The system uses a comprehensive CSS variable system:
- `--bg-primary/secondary/tertiary` for backgrounds
- `--text-primary/secondary/tertiary` for text colors
- Color-coded scheme backgrounds: `--blue-bg-light`, `--green-bg-medium`, etc.
- Component-specific variables: `--card-bg`, `--pill-neutral-bg`

### Theme Application Methods
1. **Direct CSS linking**: `<link rel="stylesheet" href="../assets/themes/[theme].css">`
2. **JavaScript theme manager**: Dynamic switching via `theme-manager.js`
3. **Theme demos**: Individual HTML files showcasing specific themes

## 📊 Component System

### Card Components
- **KPI Cards**: Statistical displays with progress bars, use `card-shadow card-hover focusable`
- **Timeline Cards**: Sequential content with gradient backgrounds
- **Newsletter CTA**: Standardized author bio with profile image and Substack link

### Essential UI Patterns
- **Pill badges**: Status indicators with semantic colors (`pill bg-[color]-100 text-[color]-800`)
- **Social sharing**: Fixed top-right navigation with platform-specific sharing URLs
- **Theme toggle**: Dark/light mode switch with accessibility announcements
- **Progress bars**: Visual indicators using `--p` CSS variable for percentage

### Layout Grid Systems
- **KPI Grid**: `grid-template-columns: repeat(6, 1fr)` for desktop, responsive down to 1 column
- **Schedule Grid**: 5-column layout for daily schedules
- **Auto-fit Grid**: `repeat(auto-fit, minmax(280px, 1fr))` for flexible layouts

## 🎯 Content Creation Patterns

### Infographic Structure Template
1. **Header**: Logo, title, feature list with colored dots, source attribution, CTA
2. **Key Facts Section**: KPI cards in responsive grid
3. **Content Sections**: Topic-specific content using timeline/card components
4. **Newsletter CTA**: Personal introduction with Chris Prakoso profile
5. **Footer**: Social links and additional navigation

### SEO & Meta Tag Requirements
- Complete Open Graph and Twitter Card meta tags
- Structured data (JSON-LD) for appropriate schema.org types
- Canonical URLs and proper meta descriptions
- Social sharing preview optimization

### Accessibility Standards
- WCAG 2.1 AA compliance with proper ARIA labels
- Skip navigation links: `<a href="#main-content">Skip to main content</a>`
- Screen reader announcements for dynamic content
- Keyboard navigation support with focus management

## 🔧 Development Workflows

### Adding New Themes
1. Copy existing theme CSS file as template
2. Override CSS custom properties for colors/styling
3. Add theme metadata to `themes.json` registry
4. Create demo page: `[theme-name]-theme-demo.html`
5. Test with existing components and dark/light modes

### Creating New Infographics
1. **ALWAYS refer to `docs/DESIGN_SPEC.md`** for complete HTML template and component patterns
2. **Clarify target folder** - Ask user where to create the HTML file if not specified (affects path resolution for assets)
3. **Use Dark Knight theme as default** unless specifically requested otherwise: `<link rel="stylesheet" href="../assets/themes/dark-knight.css">`
4. Follow component library patterns for consistent styling from design spec
5. Include required meta tags, structured data, and accessibility features per design spec
6. Test responsive design and theme switching

### JavaScript Integration
- Use `infographic-scripts.js` for common functionality (theme toggle, social sharing, clipboard)
- Theme manager (`theme-manager.js`) for dynamic theme switching
- Initialize with `initializeInfographic()` on DOM ready

## 📱 Responsive & Performance Patterns

### Mobile-First Design
- Grid layouts collapse: 6→3→2→1 columns
- Typography scales with responsive classes: `text-4xl md:text-5xl lg:text-6xl`
- Touch-friendly interactive elements (min 44px)

### Performance Optimizations
- Lazy loading for images: `loading="lazy"`
- CSS custom properties enable instant theme switching
- Shared CSS/JS files reduce duplication
- CDN usage for external dependencies (Tailwind, Google Fonts)

## 🎨 Brand & Visual Guidelines

### Chris Prakoso / Augmented Humanity Branding
- Newsletter CTA always includes profile image and Substack link
- Source attribution format: "Curated by: Chris Prakoso" with LinkedIn
- Logo positioning: Fixed top-left, links to newsletter
- Social handles: @mahadewa (Twitter), linkedin.com/in/mahadewa

### Color Usage Semantics
- **Blue**: Foundation concepts, primary actions
- **Green**: Tools, success states, environmental themes
- **Purple**: Advanced concepts, memory, context
- **Amber**: Quality, evaluation, warnings
- **Red/Crimson**: Data, analytics, critical metrics (Hawkeye theme)

## 🔍 Key Files to Understand

- **`docs/DESIGN_SPEC.md`**: **MANDATORY REFERENCE** - Complete HTML templates, component library, and layout patterns for all new infographics
- **`docs/THEME_USAGE.md`**: Theme selection guide and usage recommendations
- **`docs/THEME_SYSTEM.md`**: Theme system architecture and technical implementation details
- `assets/themes/themes.json`: Theme registry with metadata and use cases
- `assets/infographic-styles.css`: Base component styles and utilities
- `theme-showcase.html`: Live preview system for all themes
- `infographics/*.html`: Real-world implementation examples

## 🎯 Default Standards for New Projects

- **Always consult `docs/DESIGN_SPEC.md`** before creating any new infographic or mini-site
- **Reference `docs/THEME_USAGE.md`** for theme selection guidance and recommendations
- **Clarify target folder** - Ask user where to create the HTML file if not specified (affects path resolution for assets)
- **Default theme**: Dark Knight (`dark-knight.css`) unless client specifies otherwise
- **Required structure**: Follow the complete HTML document structure from design spec
- **Component consistency**: Use established patterns from the component library

When making changes, always test with multiple themes and both light/dark modes to ensure consistency across the system.