/**
 * Theme System Utilities
 * Provides functionality for dynamic theme switching and management
 */

class ThemeManager {
    constructor() {
        this.currentTheme = 'dark-knight'; // Default theme
        this.themes = {};
    }

    /**
     * Load theme registry from themes.json
     */
    async loadThemeRegistry() {
        try {
            const response = await fetch('../assets/themes/themes.json');
            const data = await response.json();
            this.themes = data.themes.reduce((acc, theme) => {
                acc[theme.id] = theme;
                return acc;
            }, {});
            console.log('Theme registry loaded:', Object.keys(this.themes));
            
            // Create theme selector after themes are loaded
            this.createThemeSelector();
        } catch (error) {
            console.error('Failed to load theme registry:', error);
            // Fallback themes if JSON fails to load
            this.themes = {
                'dark-knight': { id: 'dark-knight', name: 'Dark Knight', file: 'dark-knight.css' },
                'ocean-breeze': { id: 'ocean-breeze', name: 'Ocean Breeze', file: 'ocean-breeze.css' },
                'sunset-glow': { id: 'sunset-glow', name: 'Sunset Glow', file: 'sunset-glow.css' }
            };
            console.log('Using fallback themes:', Object.keys(this.themes));
            this.createThemeSelector();
        }
    }

    /**
     * Apply a theme by ID
     * @param {string} themeId - The theme identifier
     */
    applyTheme(themeId) {
        if (!this.themes[themeId]) {
            console.error(`Theme '${themeId}' not found`);
            return false;
        }

        // Try to update existing theme stylesheet first
        if (!this.updateExistingTheme(themeId)) {
            // If no existing stylesheet, create new one
            const link = document.createElement('link');
            link.id = 'theme-stylesheet';
            link.rel = 'stylesheet';
            link.href = `../assets/themes/${this.themes[themeId].file}`;
            link.onload = () => {
                console.log(`Theme '${themeId}' applied successfully`);
                this.announceThemeChange(themeId);
            };
            link.onerror = () => {
                console.error(`Failed to load theme '${themeId}'`);
            };

            document.head.appendChild(link);
        } else {
            console.log(`Theme '${themeId}' updated successfully`);
            this.announceThemeChange(themeId);
        }
        this.currentTheme = themeId;
        
        // Store preference (separate from basic dark/light mode)
        localStorage.setItem('preferred-theme', themeId);
        
        // Don't override the existing data-theme attribute used by dark/light toggle
        // The color themes work on top of the basic dark/light system
        document.body.setAttribute('data-color-theme', themeId);

        return true;
    }

    /**
     * Remove current theme stylesheet
     */
    removeCurrentTheme() {
        const existingTheme = document.getElementById('theme-stylesheet');
        if (existingTheme) {
            existingTheme.remove();
        }
    }
    
    /**
     * Update existing theme stylesheet
     */
    updateExistingTheme(themeId) {
        const existingTheme = document.getElementById('theme-stylesheet');
        if (existingTheme) {
            existingTheme.href = `../assets/themes/${this.themes[themeId].file}`;
            return true;
        }
        return false;
    }

    /**
     * Get current theme information
     */
    getCurrentTheme() {
        return this.themes[this.currentTheme] || null;
    }

    /**
     * Get all available themes
     */
    getAvailableThemes() {
        return Object.values(this.themes);
    }

    /**
     * Get themes by category
     * @param {string} category - Theme category
     */
    getThemesByCategory(category) {
        return Object.values(this.themes).filter(theme => 
            theme.category.toLowerCase() === category.toLowerCase()
        );
    }

    /**
     * Initialize theme system
     */
    async init() {
        // Load theme registry first
        await this.loadThemeRegistry();
        
        // Don't apply initial theme if it conflicts with existing dark/light toggle
        const existingTheme = document.body.getAttribute('data-theme');
        
        // Only apply color theme if we're not in basic dark/light mode
        if (!existingTheme || existingTheme === 'light') {
            const savedTheme = localStorage.getItem('preferred-theme') || 'dark-knight';
            
            // Apply initial theme
            setTimeout(() => {
                this.applyTheme(savedTheme);
            }, 200);
        }
    }

    /**
     * Create theme selector UI
     */
    createThemeSelector() {
        const container = document.getElementById('theme-selector-container');
        if (!container) {
            console.log('Theme selector container not found');
            return;
        }

        // Clear any existing content
        container.innerHTML = '';

        // Check if we have themes loaded
        if (Object.keys(this.themes).length === 0) {
            console.log('No themes loaded yet');
            return;
        }

        const selector = document.createElement('div');
        selector.className = 'theme-selector';
        
        const label = document.createElement('label');
        label.htmlFor = 'theme-select';
        label.className = 'theme-selector-label';
        label.textContent = 'Theme:';
        
        const select = document.createElement('select');
        select.id = 'theme-select';
        select.className = 'theme-select';
        select.setAttribute('aria-label', 'Select theme');
        
        // Add options
        Object.values(this.themes).forEach(theme => {
            const option = document.createElement('option');
            option.value = theme.id;
            option.textContent = theme.name;
            if (theme.id === this.currentTheme) {
                option.selected = true;
            }
            select.appendChild(option);
        });

        // Add event listener
        select.addEventListener('change', (e) => {
            console.log('Theme changed to:', e.target.value);
            this.applyTheme(e.target.value);
        });

        selector.appendChild(label);
        selector.appendChild(select);
        container.appendChild(selector);
        
        console.log('Theme selector created with themes:', Object.keys(this.themes));
    }

    /**
     * Announce theme change for accessibility
     * @param {string} themeId - The applied theme ID
     */
    announceThemeChange(themeId) {
        const theme = this.themes[themeId];
        if (!theme) return;

        // Create announcement for screen readers
        const announcement = document.createElement('div');
        announcement.setAttribute('aria-live', 'polite');
        announcement.setAttribute('aria-atomic', 'true');
        announcement.className = 'sr-only';
        announcement.textContent = `Theme changed to ${theme.name}: ${theme.description}`;
        
        document.body.appendChild(announcement);
        
        // Remove announcement after it's been read
        setTimeout(() => {
            document.body.removeChild(announcement);
        }, 1000);
    }

    /**
     * Preview theme colors
     * @param {string} themeId - Theme to preview
     */
    previewTheme(themeId) {
        const theme = this.themes[themeId];
        if (!theme) return null;

        return {
            primary: theme.primaryColor,
            accent: theme.accentColor,
            background: theme.backgroundColor,
            text: theme.textColor
        };
    }

    /**
     * Generate theme preview HTML
     * @param {string} themeId - Theme to preview
     */
    generateThemePreview(themeId) {
        const theme = this.themes[themeId];
        const colors = this.previewTheme(themeId);
        
        if (!theme || !colors) return '';

        return `
            <div class="theme-preview" style="
                background: ${colors.background};
                color: ${colors.text};
                border: 2px solid ${colors.primary};
                padding: 16px;
                border-radius: 8px;
                margin: 8px 0;
            ">
                <h4 style="color: ${colors.primary}; margin: 0 0 8px 0;">
                    ${theme.name}
                </h4>
                <p style="margin: 0 0 8px 0; font-size: 14px;">
                    ${theme.description}
                </p>
                <div style="display: flex; gap: 8px; margin-top: 8px;">
                    <div style="
                        width: 24px; 
                        height: 24px; 
                        background: ${colors.primary}; 
                        border-radius: 50%;
                    "></div>
                    <div style="
                        width: 24px; 
                        height: 24px; 
                        background: ${colors.accent}; 
                        border-radius: 50%;
                    "></div>
                    <div style="
                        width: 24px; 
                        height: 24px; 
                        background: ${colors.text}; 
                        border-radius: 50%;
                    "></div>
                </div>
            </div>
        `;
    }
}

// Initialize theme manager when DOM is loaded
document.addEventListener('DOMContentLoaded', async () => {
    console.log('Initializing theme manager...');
    window.themeManager = new ThemeManager();
    try {
        await window.themeManager.init();
        console.log('Theme manager initialized successfully');
    } catch (error) {
        console.error('Failed to initialize theme manager:', error);
    }
});

// Export for module systems
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ThemeManager;
}