# Leaderboard Theme Documentation

## Overview

The **Leaderboard** theme is a sophisticated ranking and competition-focused design system extracted from modern leaderboard interfaces. It features glass morphism effects, animated rankings, and a premium gold-and-blue color palette designed for performance tracking, competition displays, and gamification interfaces.

## Theme Analysis

### Extracted from Source
This theme was analyzed and extracted from a high-performance RAML (Risk Assessment Machine Learning) leaderboard interface that featured:
- **Dark gradient backgrounds** with blue undertones
- **Glass morphism card system** with backdrop blur effects
- **Animated ranking system** with pulsing champion effects
- **Interactive table design** with hover states and filtering
- **Premium badge and medal system** with gold accents
- **Responsive metric displays** with KPI focus

### Key Design Elements
- **Background**: Deep slate-to-blue gradient (`linear-gradient(135deg, #0f172a 0%, #1e3a8a 50%, #0f172a 100%)`)
- **Glass Effects**: Backdrop blur with white transparency overlays
- **Animations**: Pulsing champion effects, gradient shifts, smooth transitions
- **Typography**: Inter font family with weight-based hierarchy
- **Color Harmony**: Navy blues (#1e40af) with gold accents (#f59e0b)

## Color Palette

### Primary Colors
- **Primary Blue**: `#1e40af` - Main brand color for buttons and highlights
- **Primary Light**: `#3b82f6` - Lighter blue for gradients and hover states
- **Primary Dark**: `#1e3a8a` - Darker blue for depth and contrast

### Accent Colors
- **Gold**: `#f59e0b` - Premium accent for rankings and awards
- **Gold Light**: `#fbbf24` - Bright gold for highlights
- **Gold Dark**: `#d97706` - Deep gold for shadows and depth

### Secondary Colors
- **Cyan**: `#06b6d4` - Secondary accent for runner-up elements
- **Cyan Light**: `#0ea5e9` - Bright cyan for active states
- **Cyan Dark**: `#0891b2` - Deep cyan for stability

### Status Colors
- **Success**: `#10b981` - Green for positive metrics and active states
- **Warning**: `#f59e0b` - Orange for cautions and moderate performance
- **Error**: `#ef4444` - Red for alerts and negative trends
- **Info**: `#3b82f6` - Blue for informational elements

## Component System

### Cards (`lb-card`)
```css
.lb-card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(16px);
  border-radius: 1.875rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 2rem;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
}
```

**Features**:
- Glass morphism effect with backdrop blur
- Smooth hover animations with lift effect
- Responsive padding and border radius
- Subtle border with transparency

### Ranking System
#### Champion Effects
- **Champion** (1st place): Gold pulsing glow effect
- **Runner-up** (2nd place): Cyan pulsing glow effect  
- **Third Place** (3rd place): Blue pulsing glow effect

```css
.lb-rank-champion {
  animation: lb-pulse-champion 2s ease-in-out infinite;
  box-shadow: 0 0 25px rgba(251, 191, 36, 0.4);
}
```

#### Rank Badges
Premium circular badges with gradient backgrounds:
```css
.lb-rank-badge {
  background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.75rem;
  font-weight: 700;
}
```

### Badge System
Multiple badge variants for different use cases:
- **Primary**: Blue gradient for main actions
- **Accent**: Gold gradient for premium features
- **Success**: Green for positive states
- **Warning**: Orange for cautions
- **Error**: Red for alerts

### Table System (`lb-table`)
Interactive tables with:
- **Hover Effects**: Row lifting and background color changes
- **Status Row Colors**: Green, yellow, red based on performance
- **Responsive Design**: Horizontal scrolling on mobile
- **Interactive Headers**: Sortable with visual feedback

### Metric Cards (`lb-metric-card`)
Specialized cards for displaying KPIs:
```css
.lb-metric-card {
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(10px);
  border-radius: 1rem;
  padding: 1.5rem;
  text-align: center;
}
```

## Interactive Elements

### Collapsible Sections
Animated headers with gradient backgrounds:
```css
.lb-collapsible-header {
  background: linear-gradient(135deg, #1e40af 0%, #f59e0b 100%);
  background-size: 200% 200%;
  animation: lb-gradient-shift 6s ease infinite;
}
```

### Filter System
Styled form elements and buttons:
- **Filter Buttons**: Active/inactive states with smooth transitions
- **Select Dropdowns**: Glass-themed with proper contrast
- **Toggle States**: Visual feedback for user interactions

## Usage Examples

### Basic Card
```html
<div class="lb-card">
  <h3>Team Performance</h3>
  <p>Performance metrics and analytics</p>
</div>
```

### Champion Ranking
```html
<div class="lb-card lb-rank-champion">
  <div style="text-align: center;">
    <div class="lb-rank-badge">1</div>
    <h3>Team Alpha</h3>
    <span class="lb-badge lb-badge-accent">🥇 Champion</span>
  </div>
</div>
```

### Metric Display
```html
<div class="lb-metric-card">
  <div class="lb-metric-value">98.5</div>
  <div class="lb-metric-label">Performance Score</div>
</div>
```

### Interactive Table
```html
<table class="lb-table">
  <thead>
    <tr>
      <th>Rank</th>
      <th>Team</th>
      <th>Score</th>
    </tr>
  </thead>
  <tbody>
    <tr class="lb-table-row lb-table-row-success">
      <td><div class="lb-rank-badge">1</div></td>
      <td>Team Alpha</td>
      <td>98.5</td>
    </tr>
  </tbody>
</table>
```

## Animation System

### Pulsing Effects
Three levels of ranking animations:
1. **Champion Pulse**: Intense gold glow (0.4 to 0.6 opacity)
2. **Runner-up Pulse**: Moderate cyan glow (0.3 to 0.5 opacity)
3. **Third Place Pulse**: Subtle blue glow (0.2 to 0.4 opacity)

### Gradient Shifts
Background gradients animate position over 6 seconds:
```css
@keyframes lb-gradient-shift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
```

### Hover Transitions
All interactive elements have smooth transitions:
- **Duration**: 200ms for buttons, 300ms for cards
- **Easing**: `ease` for natural movement
- **Transform**: `translateY(-2px)` for lift effect

## Responsive Design

### Breakpoints
- **Mobile**: `max-width: 480px`
- **Tablet**: `max-width: 768px`
- **Desktop**: `min-width: 769px`

### Mobile Adaptations
- Reduced font sizes for headers
- Smaller padding for cards and tables
- Stacked filter controls
- Horizontal table scrolling

## Accessibility Features

### Motion Preferences
Respects `prefers-reduced-motion` for users with vestibular disorders:
```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

### Focus States
Clear focus indicators with accent color:
```css
:focus {
  outline: 2px solid var(--lb-accent);
  outline-offset: 2px;
}
```

### Color Contrast
- **Primary text on dark**: WCAG AA compliant
- **Secondary text**: Sufficient contrast for readability
- **Interactive elements**: Clear visual feedback

## Use Cases

### Perfect For
- **Performance Leaderboards**: Employee, team, or player rankings
- **Competition Interfaces**: Gaming, sports, contests
- **KPI Dashboards**: Business metrics and performance tracking
- **Achievement Systems**: Progress tracking and gamification
- **Analytics Presentations**: Data-driven interfaces
- **Score Tracking**: Any numerical comparison system

### Industry Applications
- **Gaming**: Player leaderboards and achievements
- **Business**: Sales performance and KPI tracking
- **Education**: Student progress and achievements
- **Sports**: Team and player statistics
- **Finance**: Portfolio performance rankings
- **Technology**: System performance metrics

## Integration

### With Theme Manager
```javascript
// Apply leaderboard theme
themeManager.setTheme('leaderboard');

// Check if theme supports ranking animations
if (themeManager.getCurrentTheme().features.includes('ranking-animations')) {
  initializeRankingEffects();
}
```

### Custom Properties
Override theme variables for customization:
```css
:root {
  --lb-accent: #your-brand-color;
  --lb-primary: #your-primary-color;
}
```

## File Structure
```
themes/
├── leaderboard.css          # Main theme file
├── themes.json             # Theme metadata
└── leaderboard-demo.html   # Demo implementation
```

## Version History
- **v1.0** (2025-09-25): Initial release with full feature set
  - Glass morphism card system
  - Animated ranking effects
  - Interactive table components
  - Responsive design system
  - Accessibility features

## Credits
- **Analyzed from**: RAML Leaderboard Interface
- **Author**: Chris Prakoso
- **Inspiration**: Modern competition interfaces and gaming leaderboards
- **Design System**: Glass morphism and premium ranking aesthetics