# Infographic Mini-Site Design Specification

**Version**: 1.0  
**Author**: Chris Prakoso - Augmented Humanity  
**Date**: September 2025  
**Purpose**: Standardized design system for consistent infographic mini-site creation

---

## 📋 Table of Contents

1. [Overview](#overview)
2. [File Structure](#file-structure)
3. [HTML Document Structure](#html-document-structure)
4. [SEO & Meta Tags](#seo--meta-tags)
5. [Visual Design System](#visual-design-system)
6. [Component Library](#component-library)
7. [Layout Patterns](#layout-patterns)
8. [Typography](#typography)
9. [Responsive Design](#responsive-design)
10. [Accessibility Guidelines](#accessibility-guidelines)
11. [Performance Considerations](#performance-considerations)
12. [Implementation Checklist](#implementation-checklist)

---

## 🎯 Overview

This design specification defines the standards for creating consistent, accessible, and high-performance infographic mini-sites. Each site should follow these guidelines to ensure brand consistency and optimal user experience.

### Core Principles
- **Accessibility First**: WCAG 2.1 AA compliance
- **Performance Optimized**: Fast loading and efficient rendering
- **Mobile Responsive**: Mobile-first design approach
- **SEO Optimized**: Rich meta tags and structured data
- **Brand Consistent**: Consistent visual language across all sites

---

## 📁 File Structure

```
project-root/
├── infographics/
│   └── [topic-name].html          # Main infographic page
├── assets/
│   ├── infographic-styles.css     # Shared CSS library
│   ├── infographic-scripts.js     # Shared JavaScript library
│   ├── augmented-humanity-logo.jpg
│   └── chris-prakoso-profile-picture.jpg
└── DESIGN_SPEC.md                 # This document
```

---

## 📄 HTML Document Structure

### Required Document Sections

1. **HTML Head**
   - Primary meta tags
   - Open Graph properties
   - Twitter Card meta
   - Structured data (Course/Event schema)
   - External dependencies (Tailwind CSS, Google Fonts)
   - Link to shared CSS

2. **Body Structure**
   ```html
   <body data-theme="light">
     <!-- Skip Navigation -->
     <!-- Augmented Humanity Logo (fixed top-left) -->
     <!-- Social Sharing & Theme Toggle (fixed top-right) -->
     
     <main id="main-content">
       <!-- Header Section -->
       <!-- Key Facts/Highlights Section -->
       <!-- Content Sections (flexible) -->
       <!-- Newsletter CTA Section -->
     </main>
     
     <!-- Footer -->
     <!-- JavaScript -->
   </body>
   ```

### Essential Elements

- **Skip Navigation**: `<a href="#main-content">` for accessibility
- **Augmented Humanity Logo**: Fixed positioning, links to newsletter
- **Social Sharing Buttons**: X/Twitter, LinkedIn, Facebook, Copy Link
- **Dark/Light Theme Toggle**: With proper ARIA labels
- **Main Content**: Wrapped in `<main id="main-content">`

---

## 🔍 SEO & Meta Tags

### Required Meta Tags Template

```html
<!-- Primary Meta Tags -->
<title>[Topic] — [Subtitle/Description]</title>
<meta name="title" content="[Same as title]" />
<meta name="description" content="[150-160 character description]" />
<meta name="keywords" content="[relevant, comma-separated, keywords]" />
<meta name="author" content="Chris Prakoso" />
<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
<link rel="canonical" href="[canonical URL]" />

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website" />
<meta property="og:url" content="[page URL]" />
<meta property="og:title" content="[title]" />
<meta property="og:description" content="[description]" />
<meta property="og:image" content="[social image URL]" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta property="og:site_name" content="Augmented Humanity" />
<meta property="og:locale" content="en_US" />

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:url" content="[page URL]" />
<meta property="twitter:title" content="[title]" />
<meta property="twitter:description" content="[description]" />
<meta property="twitter:image" content="[social image URL]" />
<meta property="twitter:creator" content="@mahadewa" />
```

### Structured Data Requirements

- Use appropriate schema.org types (Course, Event, Article, etc.)
- Include comprehensive JSON-LD structured data
- Provide proper instructor/organizer information
- Include dates, pricing, and accessibility information

---

## 🎨 Visual Design System

### Color Palette (CSS Variables)

#### Light Theme
```css
--bg-primary: rgb(250, 250, 250);
--bg-secondary: rgb(255, 255, 255);
--bg-tertiary: rgb(245, 245, 245);
--text-primary: rgb(17, 24, 39);
--text-secondary: rgb(107, 114, 128);
--text-tertiary: rgb(156, 163, 175);
--card-bg: rgb(255, 255, 255);
```

#### Dark Theme
```css
--bg-primary: rgb(17, 24, 39);
--bg-secondary: rgb(31, 41, 55);
--bg-tertiary: rgb(55, 65, 81);
--text-primary: rgb(243, 244, 246);
--text-secondary: rgb(156, 163, 175);
--text-tertiary: rgb(107, 114, 128);
--card-bg: rgb(31, 41, 55);
```

#### Brand Colors
```css
--google-blue: rgb(66, 133, 244);
--google-red: rgb(234, 67, 53);
--google-yellow: rgb(251, 188, 5);
--google-green: rgb(52, 168, 83);
--primary-blue: rgb(37, 99, 235);
```

#### Contextual Colors
- **Blue**: Foundation, primary concepts
- **Green**: Tools, integrations, success states
- **Purple**: Context, memory, advanced concepts
- **Amber**: Quality, evaluation, warning states
- **Red**: Production, deployment, error states

### Shadow System

```css
/* Card Elevation */
.card-shadow {
  box-shadow: 
    0 1px 3px 0 rgba(0, 0, 0, 0.1), 
    0 1px 2px -1px rgba(0, 0, 0, 0.1),
    0 4px 6px -1px rgba(0, 0, 0, 0.05),
    0 10px 15px -3px rgba(0, 0, 0, 0.04);
}

/* Hover Elevation */
.card-hover:hover {
  box-shadow: 
    0 4px 6px -1px rgba(0, 0, 0, 0.1), 
    0 2px 4px -2px rgba(0, 0, 0, 0.1),
    0 10px 15px -3px rgba(0, 0, 0, 0.08),
    0 20px 25px -5px rgba(0, 0, 0, 0.06);
}
```

---

## 📊 Interactive Diagrams & Charts

### ECharts Integration

**Purpose**: Advanced data visualization with interactive charts, graphs, and diagrams  
**Library**: [Apache ECharts](https://echarts.apache.org/)  
**Use Cases**: Statistical charts, network diagrams, geographic visualizations, time series data

#### Implementation Setup
```html
<!-- ECharts CDN -->
<script src="https://cdn.jsdelivr.net/npm/echarts@5.4.3/dist/echarts.min.js"></script>

<!-- Chart Container -->
<div id="chart-container" style="width: 100%; height: 400px;"></div>
```

#### ECharts Theme Integration
```javascript
// Define theme colors based on current CSS theme
const getChartTheme = () => {
  const isDark = document.body.getAttribute('data-theme') === 'dark';
  return {
    backgroundColor: isDark ? '#1f2937' : '#ffffff',
    textStyle: {
      color: isDark ? '#f3f4f6' : '#111827',
      fontFamily: 'Inter, sans-serif'
    },
    color: [
      'var(--hawkeye-crimson)', // #dc2626
      'var(--google-blue)',     // #4285f4
      'var(--google-green)',    // #34a853
      'var(--google-yellow)',   // #fbbc05
      'var(--google-red)',      // #ea4335
      'var(--purple-text)',     // #581c87
      'var(--amber-text)'       // #92400e
    ]
  };
};
```

#### Common Chart Types

**1. KPI Dashboard Charts**
```javascript
// Gauge Chart for Progress Indicators
const gaugeOption = {
  series: [{
    type: 'gauge',
    detail: { fontSize: 24, fontWeight: 'bold' },
    data: [{ value: 77, name: 'Automation Rate' }],
    axisLine: {
      lineStyle: {
        width: 20,
        color: [
          [0.3, '#fd7f6f'],
          [0.7, '#7eb0d3'],
          [1, '#b2e061']
        ]
      }
    }
  }]
};
```

**2. Geographic Data Visualization**
```javascript
// Scatter plot on world map for AUI data
const mapOption = {
  geo: {
    type: 'map',
    map: 'world',
    roam: true,
    itemStyle: {
      areaColor: 'var(--bg-tertiary)',
      borderColor: 'var(--border-primary)'
    }
  },
  series: [{
    type: 'scatter',
    coordinateSystem: 'geo',
    data: [
      { name: 'Israel', value: [34.85, 31.05, 7.00] },
      { name: 'Singapore', value: [103.8, 1.35, 4.57] },
      { name: 'Australia', value: [133.78, -25.27, 4.10] }
    ],
    symbolSize: (val) => Math.max(val[2] * 5, 10)
  }]
};
```

**3. Time Series Analysis**
```javascript
// Line chart for trend analysis
const timeSeriesOption = {
  xAxis: { type: 'category', data: ['Jan 2025', 'Mar 2025', 'Aug 2025'] },
  yAxis: { type: 'value' },
  series: [{
    data: [37.2, 39.6, 36.9],
    type: 'line',
    smooth: true,
    lineStyle: { color: 'var(--hawkeye-crimson)', width: 3 }
  }]
};
```

### Plotly Integration

**Purpose**: Scientific and statistical visualizations, 3D plots, and interactive dashboards  
**Library**: [Plotly.js](https://plotly.com/javascript/)  
**Use Cases**: Statistical analysis, scientific data, correlation matrices, 3D visualizations

#### Implementation Setup
```html
<!-- Plotly CDN -->
<script src="https://cdn.plot.ly/plotly-2.26.0.min.js"></script>

<!-- Plot Container -->
<div id="plotly-container" style="width: 100%; height: 500px;"></div>
```

#### Plotly Theme Configuration
```javascript
// Plotly layout theme matching design system
const plotlyLayout = {
  paper_bgcolor: 'var(--card-bg)',
  plot_bgcolor: 'var(--bg-secondary)',
  font: {
    family: 'Inter, sans-serif',
    size: 14,
    color: 'var(--text-primary)'
  },
  colorway: [
    '#dc2626', // Hawkeye Crimson
    '#4285f4', // Google Blue
    '#34a853', // Google Green
    '#fbbc05', // Google Yellow
    '#ea4335', // Google Red
    '#581c87', // Purple
    '#92400e'  // Amber
  ]
};
```

#### Common Plotly Visualizations

**1. Correlation Heatmap**
```javascript
// Income vs AUI correlation analysis
const heatmapData = [{
  z: correlationMatrix,
  type: 'heatmap',
  colorscale: [
    [0, '#fee2e2'],
    [0.5, '#fecaca'],
    [1, '#dc2626']
  ],
  showscale: true
}];

Plotly.newPlot('correlation-heatmap', heatmapData, plotlyLayout);
```

**2. 3D Scatter Plot**
```javascript
// Multi-dimensional data analysis
const scatter3D = [{
  x: incomeData,
  y: auiData,
  z: populationData,
  mode: 'markers',
  type: 'scatter3d',
  marker: {
    size: 5,
    color: 'var(--hawkeye-crimson)',
    opacity: 0.7
  }
}];
```

**3. Statistical Box Plots**
```javascript
// Distribution analysis
const boxPlot = [{
  y: usageData,
  type: 'box',
  name: 'Usage Distribution',
  marker: { color: 'var(--hawkeye-crimson)' },
  boxpoints: 'outliers'
}];
```

### Theme Integration Best Practices

#### 1. Dynamic Theme Updates
```javascript
// Listen for theme changes and update charts
const observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    if (mutation.attributeName === 'data-theme') {
      updateChartThemes();
    }
  });
});

observer.observe(document.body, { 
  attributes: true, 
  attributeFilter: ['data-theme'] 
});

function updateChartThemes() {
  // Update ECharts
  if (window.echartsInstance) {
    window.echartsInstance.setOption(getChartTheme(), true);
  }
  
  // Update Plotly
  if (window.plotlyContainer) {
    Plotly.relayout('plotly-container', getPlotlyTheme());
  }
}
```

#### 2. Responsive Chart Design
```javascript
// Make charts responsive
window.addEventListener('resize', () => {
  // ECharts resize
  if (window.echartsInstance) {
    window.echartsInstance.resize();
  }
  
  // Plotly resize
  if (window.plotlyContainer) {
    Plotly.Plots.resize('plotly-container');
  }
});
```

#### 3. Accessibility for Charts
```javascript
// Add ARIA labels and descriptions
const chartContainer = document.getElementById('chart-container');
chartContainer.setAttribute('role', 'img');
chartContainer.setAttribute('aria-label', 'Interactive chart showing AI usage correlation with income levels');
chartContainer.setAttribute('tabindex', '0');

// Provide data table alternative
const createDataTable = (chartData) => {
  // Generate accessible HTML table from chart data
  return `
    <table class="sr-only" aria-label="Chart data in tabular format">
      <caption>AI Usage Index by Country</caption>
      <thead>
        <tr>
          <th>Country</th>
          <th>AUI Value</th>
          <th>Income Level</th>
        </tr>
      </thead>
      <tbody>
        ${chartData.map(row => `
          <tr>
            <td>${row.country}</td>
            <td>${row.aui}</td>
            <td>${row.income}</td>
          </tr>
        `).join('')}
      </tbody>
    </table>
  `;
};
```

### Chart Component Templates

#### Interactive KPI Chart Card
```html
<div class="card-shadow rounded-2xl p-6" style="background-color: var(--card-bg);">
  <div class="flex items-center justify-between mb-4">
    <h3 class="text-xl font-bold hawkeye-crimson">Usage Trends Analysis</h3>
    <span class="pill" style="background-color: var(--red-bg-light); color: var(--red-text);">Interactive</span>
  </div>
  
  <!-- Chart Container -->
  <div id="usage-trends-chart" 
       style="width: 100%; height: 300px;" 
       role="img" 
       aria-label="Interactive line chart showing AI usage trends from January to August 2025"
       tabindex="0">
  </div>
  
  <!-- Chart Controls -->
  <div class="flex gap-2 mt-4">
    <button class="pill bg-blue-100 text-blue-800" onclick="updateChart('monthly')">Monthly View</button>
    <button class="pill bg-green-100 text-green-800" onclick="updateChart('quarterly')">Quarterly View</button>
  </div>
  
  <!-- Accessible Data Table (Hidden) -->
  <div class="sr-only">
    <table aria-label="Usage trends data in tabular format">
      <!-- Table content generated from chart data -->
    </table>
  </div>
</div>
```

### Performance Considerations

#### 1. Lazy Loading Charts
```javascript
// Load charts only when visible
const chartObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      loadChart(entry.target);
      chartObserver.unobserve(entry.target);
    }
  });
});

document.querySelectorAll('.chart-container').forEach(container => {
  chartObserver.observe(container);
});
```

#### 2. Data Optimization
```javascript
// Reduce data points for performance
const optimizeData = (data, maxPoints = 100) => {
  if (data.length <= maxPoints) return data;
  
  const step = Math.ceil(data.length / maxPoints);
  return data.filter((_, index) => index % step === 0);
};
```

#### 3. Chart Cleanup
```javascript
// Proper cleanup to prevent memory leaks
window.addEventListener('beforeunload', () => {
  if (window.echartsInstance) {
    window.echartsInstance.dispose();
  }
  
  if (window.plotlyContainer) {
    Plotly.purge('plotly-container');
  }
});
```

---

## 🧩 Component Library

### 1. KPI Cards

**Purpose**: Display key metrics and statistics  
**Structure**:
```html
<div class="card-shadow card-hover focusable rounded-2xl p-6" 
     style="background-color: var(--card-bg);" 
     tabindex="0" 
     role="img" 
     aria-label="[descriptive label]">
  <div class="text-sm font-medium mb-3" style="color: var(--text-secondary);">[Label]</div>
  <div class="flex items-baseline gap-3 mb-4">
    <div class="text-5xl font-black [brand-color]">[Value]</div>
    <div class="text-lg font-semibold" style="color: var(--text-primary);">[Unit]</div>
  </div>
  <div class="progress-bar mb-3" style="--p:[percentage]%" aria-hidden="true"></div>
  <div class="text-xs" style="color: var(--text-tertiary);">[Additional info]</div>
</div>
```

### 2. Timeline Cards

**Purpose**: Daily schedule, process steps  
**Structure**:
```html
<div class="card-shadow rounded-2xl p-6 timeline-item" 
     style="background: linear-gradient(135deg, var(--[color]-bg-light), var(--[color]-bg-medium));">
  <div class="flex items-center justify-between mb-4">
    <h3 class="text-xl font-bold" style="color: var(--[color]-text-dark);">[Day/Step]</h3>
    <span class="pill" style="background-color: var(--[color]-bg-medium); color: var(--[color]-text-dark);">[Category]</span>
  </div>
  <h4 class="font-semibold mb-3" style="color: var(--[color]-text-dark);">[Title]</h4>
  <p class="text-sm mb-4" style="color: var(--[color]-text);">[Description]</p>
  <div class="space-y-2">
    <!-- Bullet points -->
  </div>
</div>
```

### 3. Pill Badges

**Purpose**: Tags, status indicators, categories  
**Classes**: `.pill` + color variants
```html
<span class="pill bg-green-100 text-green-800 border border-green-200">FREE</span>
<span class="pill bg-blue-100 text-blue-800 border border-blue-200">Live Sessions</span>
```

### 4. Progress Bars

**Purpose**: Visual progress indicators  
**Usage**: Set `--p` CSS variable to percentage
```html
<div class="progress-bar" style="--p:75%" aria-hidden="true"></div>
```

### 5. Social Sharing Buttons

**Purpose**: Share on social media platforms  
**Structure**:
```html
<nav class="fixed top-4 right-4 z-1000 flex items-center gap-2">
  <span class="text-sm font-medium px-2 py-1 rounded-md">Share:</span>
  <a href="[sharing URL]" class="w-10 h-10 [platform-color] rounded-full flex items-center justify-center">
    <span>[icon]</span>
  </a>
</nav>
```

### 6. CTA Buttons

**Purpose**: Primary actions (registration, newsletter signup)  
**Classes**: `.btn-primary` or inline gradient styles
```html
<a href="[URL]" class="btn-primary">
  <span aria-hidden="true">[emoji]</span>
  <span>[Call to Action Text]</span>
</a>
```

### 7. Newsletter CTA Section

**Purpose**: Promote newsletter subscription  
**Layout**: Two-column layout with profile image and content  
**Background**: Gradient from blue to purple light variants

**Required Elements**:

#### Profile Image
- **File**: `chris-prakoso-profile-picture.jpg`
- **Classes**: `w-20 h-20 rounded-full object-cover shadow-lg border-4 border-white`
- **Alt text**: `"Chris Prakoso, curator of this course information and author of Augmented Humanity newsletter"`
- **Loading**: `loading="lazy"`

#### Content Structure
**Heading**: `"Hi there, I'm Chris Prakoso."`  
**Classes**: `text-2xl font-bold mb-4`

**Paragraph 1**:  
```
I believe that AI isn't here to replace us - it's here to elevate us. In **Augmented Humanity**, I explore how AI, data, and emerging tech enhance human potential, reshape industries, and redefine human-machine collaboration.
```

**Paragraph 2**:  
```
Subscribe today to get fresh insights, practical guides, and future-driven analysis delivered straight to your inbox.
```

#### CTA Button
- **Text**: `"Subscribe to Augmented Humanity"`
- **Icon**: 📧 (email emoji)
- **URL**: `https://augmentedhumanity.substack.com/`
- **Style**: Purple to blue gradient with hover effects
- **Classes**: `bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700`

#### FREE Badge
- **Text**: `"FREE Newsletter"`
- **Classes**: `bg-green-100 text-green-800 rounded-full`
- **Role**: `role="note" aria-label="Newsletter is free of charge"`

#### Complete Template
```html
<section class="px-6 md:px-10 lg:px-12 py-8" role="region" aria-labelledby="newsletter-heading">
  <div class="max-w-4xl mx-auto">
    <div class="card-shadow rounded-2xl p-8" style="background: linear-gradient(135deg, var(--blue-bg-light), var(--purple-bg-light));">
      <div class="flex items-start gap-6">
        <!-- Profile Image -->
        <div class="flex-shrink-0">
          <img src="../assets/chris-prakoso-profile-picture.jpg" 
               alt="Chris Prakoso, curator of this course information and author of Augmented Humanity newsletter" 
               class="w-20 h-20 rounded-full object-cover shadow-lg border-4 border-white"
               loading="lazy">
        </div>
        
        <!-- Content -->
        <div class="flex-1">
          <h2 id="newsletter-heading" class="text-2xl font-bold mb-4" style="color: var(--text-primary);">Hi there, I'm Chris Prakoso.</h2>
          
          <p class="text-base mb-4" style="color: var(--text-secondary);">
            I believe that AI isn't here to replace us - it's here to elevate us. In <strong>Augmented Humanity</strong>, I explore how AI, data, and emerging tech enhance human potential, reshape industries, and redefine human-machine collaboration.
          </p>
          
          <p class="text-base mb-6" style="color: var(--text-secondary);">
            Subscribe today to get fresh insights, practical guides, and future-driven analysis delivered straight to your inbox.
          </p>
          
          <!-- CTA Button -->
          <div class="flex items-center gap-4">
            <a href="https://augmentedhumanity.substack.com/" 
               target="_blank" 
               rel="noopener" 
               class="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-3 px-6 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 focus:outline-2 focus:outline-white focus:outline-offset-2"
               aria-label="Subscribe to Chris Prakoso's Augmented Humanity newsletter">
              <span aria-hidden="true">📧</span>
              <span>Subscribe to Augmented Humanity</span>
            </a>
            <span class="text-sm font-medium px-3 py-1 bg-green-100 text-green-800 rounded-full" role="note" aria-label="Newsletter is free of charge">FREE Newsletter</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
```

---

## 📐 Layout Patterns

### Grid Systems

#### KPI Grid
```css
.grid-kpi { 
  grid-template-columns: repeat(6, 1fr); /* Desktop: 6 columns */
}
/* Tablet: 3 columns, Mobile: auto-fit */
```

#### Schedule Grid
```css
.schedule-grid {
  grid-template-columns: repeat(5, 1fr); /* 5-day layout */
}
/* Responsive: auto-fit with min 240px */
```

#### Auto-fit Grid
```css
.grid-auto-fit { 
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); 
}
```

### Section Structure

1. **Header Section**
   - Brand logo and meta info
   - Main heading (H1)
   - Description paragraph
   - Feature list with status indicators (see template below)
   - Source attribution
   - Primary CTA button
   - Tag badges

#### Header Feature List Template
**Purpose**: 3 key selling points with colored status indicators  
**Structure**: Horizontal flex layout with colored dots

```html
<ul class="flex items-center gap-4 text-sm mb-6" role="list" aria-label="Course features">
  <li class="flex items-center gap-2">
    <span class="w-3 h-3 rounded-full bg-green-500" aria-hidden="true"></span>
    <span style="color: var(--text-secondary);">Open to all levels</span>
  </li>
  <li class="flex items-center gap-2">
    <span class="w-3 h-3 rounded-full bg-blue-500" aria-hidden="true"></span>
    <span style="color: var(--text-secondary);">Live interactive sessions</span>
  </li>
  <li class="flex items-center gap-2">
    <span class="w-3 h-3 rounded-full bg-purple-500" aria-hidden="true"></span>
    <span style="color: var(--text-secondary);">Competitive capstone</span>
  </li>
</ul>
```

**Customization**: Adapt the text content to match your topic while keeping the same structure and color scheme:
- **Green dot**: Accessibility/Entry level features
- **Blue dot**: Interactive/Live features  
- **Purple dot**: Advanced/Competition features

#### Source Attribution Template
**Purpose**: Credit source material and provide curation information  
**Placement**: Directly after the feature list, before CTA button  
**Structure**: 3-line aside with source, curator, and newsletter links

```html
<aside class="mt-3 text-sm space-y-1" style="color: var(--text-tertiary);" aria-label="Course source and curation information">
  <p>Source: <a href="[ORIGINAL SOURCE URL]" target="_blank" rel="noopener" class="text-blue-600 hover:underline focus:outline-2 focus:outline-blue-400 focus:outline-offset-2">[SOURCE TITLE]</a></p>
  <p>Curated by: Chris Prakoso <a href="https://www.linkedin.com/in/mahadewa" target="_blank" rel="noopener" class="text-blue-600 hover:underline focus:outline-2 focus:outline-blue-400 focus:outline-offset-2" aria-label="Chris Prakoso's LinkedIn profile">www.linkedin.com/in/mahadewa</a></p>
  <p>Subscribe to my newsletter for the latest updates: <a href="https://augmentedhumanity.substack.com/" target="_blank" rel="noopener" class="text-blue-600 hover:underline focus:outline-2 focus:outline-blue-400 focus:outline-offset-2">Augmented Humanity</a></p>
</aside>
```

**Required Elements**:
- **Line 1**: Source attribution with link to original content
- **Line 2**: "Curated by: Chris Prakoso" with LinkedIn profile link
- **Line 3**: Newsletter subscription call-to-action
- **Styling**: Tertiary text color, 1px spacing between lines
- **Accessibility**: ARIA label describing the section purpose

2. **Key Facts Section**
   - H2 heading: "Course Highlights" / "[Topic] Highlights"
   - KPI cards in grid layout

3. **Content Sections** (flexible based on topic)
   - Daily schedule, features, details, etc.
   - Use timeline cards for sequential content

4. **Newsletter CTA Section**
   - Personal introduction
   - Newsletter description
   - Subscription call-to-action

5. **FAQ Section**
   - Two-column layout: FAQ + Registration details
   - Accordion-style or simple Q&A format

---

## 📝 Typography

### Font Family
- **Primary**: Inter (Google Fonts)
- **Fallback**: System UI stack

### Heading Hierarchy
```css
/* H1 - Main page title */
.text-4xl md:text-5xl lg:text-6xl font-black

/* H2 - Section headings */  
.text-2xl md:text-3xl font-bold

/* H3 - Subsection headings */
.text-xl font-bold

/* H4 - Card/component titles */
.font-semibold
```

### Text Styles
- **Primary text**: `color: var(--text-primary)`
- **Secondary text**: `color: var(--text-secondary)` 
- **Tertiary text**: `color: var(--text-tertiary)`
- **Body text**: 14px-16px, leading-relaxed

---

## 📱 Responsive Design

### Breakpoints (Tailwind CSS)
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px
- **Large Desktop**: > 1400px

### Mobile-First Approach

1. **Navigation**
   - Logo scales down on mobile
   - Social sharing buttons remain accessible
   - Theme toggle maintains functionality

2. **Grid Layouts**
   - KPI cards: 6 → 3 → 2 → 1 columns
   - Schedule: 5 → 2 → 1 columns
   - Two-column sections become single column

3. **Typography**
   - Responsive text sizing
   - Maintain readability on small screens

4. **Interactive Elements**
   - Touch-friendly button sizes (min 44px)
   - Adequate spacing between clickable elements

---

## ♿ Accessibility Guidelines

### WCAG 2.1 AA Compliance

1. **Semantic HTML**
   - Proper heading hierarchy (H1 → H2 → H3)
   - Landmark elements (`<main>`, `<header>`, `<footer>`, `<nav>`)
   - ARIA roles where appropriate

2. **Skip Navigation**
   ```html
   <a href="#main-content" class="sr-only focus:not-sr-only">Skip to main content</a>
   ```

3. **Focus Management**
   - Visible focus indicators
   - Logical tab order
   - Focus trapping in modals

4. **Screen Reader Support**
   - Alt text for all images
   - ARIA labels for interactive elements
   - Screen reader announcements for dynamic content

5. **Color and Contrast**
   - Minimum 4.5:1 contrast ratio
   - Information not conveyed by color alone
   - Dark mode support

6. **Keyboard Navigation**
   - All interactive elements keyboard accessible
   - Escape key support
   - Enter/Space key activation

### Required ARIA Attributes
```html
<!-- Cards with data -->
role="img" aria-label="[descriptive label]" tabindex="0"

<!-- Buttons -->
aria-label="[clear action description]"

<!-- Theme toggle -->
aria-describedby="theme-status"

<!-- Navigation -->
role="navigation" aria-label="[navigation purpose]"
```

---

## ⚡ Performance Considerations

### Loading Optimization

1. **Critical Resources**
   - Inline critical CSS or load CSS early
   - Preconnect to external fonts
   - Optimize images (WebP, lazy loading)

2. **JavaScript**
   - Load non-critical JS after page load
   - Use `defer` attribute for scripts
   - Minimize DOM manipulation

3. **Images**
   ```html
   <img src="[src]" alt="[alt]" loading="lazy" />
   ```

4. **Fonts**
   ```html
   <link rel="preconnect" href="https://fonts.googleapis.com">
   <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
   ```

### Resource Management
- Shared CSS/JS files reduce redundancy
- CDN usage (Tailwind CSS)
- Minimize external dependencies

---

## ✅ Implementation Checklist

### Pre-Development
- [ ] Define topic and key content sections
- [ ] Prepare assets (images, data, content)
- [ ] Choose appropriate schema.org type
- [ ] Plan responsive grid layouts

### HTML Structure
- [ ] Document head with all required meta tags
- [ ] Structured data implementation
- [ ] Semantic HTML structure
- [ ] Skip navigation link
- [ ] Main content wrapper with ID

### Visual Design
- [ ] Augmented Humanity logo (fixed top-left)
- [ ] Social sharing buttons (fixed top-right)
- [ ] Dark/light theme toggle
- [ ] Consistent color scheme usage
- [ ] Proper card elevation and shadows

### Content Sections
- [ ] Header with brand, title, and CTA
- [ ] Key facts/highlights section
- [ ] Main content sections (topic-specific)
- [ ] Newsletter CTA section
- [ ] FAQ section (if applicable)
- [ ] Footer with social links

### Accessibility
- [ ] WCAG 2.1 AA compliance
- [ ] Screen reader testing
- [ ] Keyboard navigation testing
- [ ] Focus management
- [ ] ARIA labels and roles

### Performance
- [ ] Image optimization and lazy loading
- [ ] Critical CSS optimization
- [ ] JavaScript performance review
- [ ] Mobile performance testing

### SEO
- [ ] Complete meta tag implementation
- [ ] Structured data validation
- [ ] Social media preview testing
- [ ] Canonical URL configuration

### Final Testing
- [ ] Cross-browser compatibility
- [ ] Mobile responsiveness
- [ ] Dark/light theme functionality
- [ ] Social sharing functionality
- [ ] Accessibility audit
- [ ] Performance audit (Lighthouse)

---

## 📞 Support & Updates

For questions or suggestions regarding this design specification:

- **Author**: Chris Prakoso
- **Email**: Contact via [Augmented Humanity](https://augmentedhumanity.substack.com/)
- **LinkedIn**: [linkedin.com/in/mahadewa](https://linkedin.com/in/mahadewa)

### Version History
- **v1.0** (September 2025): Initial specification based on Google AI Agents Course infographic

---

*This specification ensures consistent, accessible, and high-performance infographic mini-sites that maintain the Augmented Humanity brand standards while providing excellent user experience across all devices and abilities.*