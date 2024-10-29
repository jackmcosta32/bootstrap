const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ['class'],
    presets: [require('../../tailwind-workspace-preset')],
  content: [join(__dirname, './src/**/*!(*.stories|*.spec).{ts,tsx,html}')],
    theme: {
    	extend: {
    		colors: {
    			sidebar: {
    				DEFAULT: 'hsl(var(--sidebar-background))',
    				foreground: 'hsl(var(--sidebar-foreground))',
    				primary: 'hsl(var(--sidebar-primary))',
    				'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
    				accent: 'hsl(var(--sidebar-accent))',
    				'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
    				border: 'hsl(var(--sidebar-border))',
    				ring: 'hsl(var(--sidebar-ring))'
    			}
    		}
    	}
    }
};
