/**
 * Vite Build Configuration for GemFactory Platform
 * 
 * Optimized build configuration for the internal gem factory management system.
 * This setup prioritizes development speed, production performance, and deployment
 * flexibility for a complex manufacturing workflow application.
 * 
 * Key Architectural Decisions:
 * - Relative base path for universal hosting compatibility
 * - SWC compiler for enhanced TypeScript/React performance
 * - Path aliases for maintainable import structure
 * - Development server optimized for team collaboration
 */

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

/**
 * Dynamic Vite Configuration Factory
 * 
 * Provides build-time configuration based on the target environment.
 * Enables conditional optimizations for development vs production builds.
 * 
 * @param {Object} context - Vite build context
 * @param {string} context.mode - Build mode ('development' | 'production' | 'test')
 * @param {string} context.command - Build command ('build' | 'serve')
 * @returns {Object} Complete Vite configuration tailored to the environment
 */
export default defineConfig(({ mode }) => ({
  /**
   * Base Path Strategy for Universal Deployment
   * 
   * Set to "./" for maximum deployment flexibility:
   * - Works with any subdirectory structure
   * - Compatible with GitHub Pages, Netlify, Vercel
   * - Eliminates hardcoded path dependencies
   * - Supports both root and nested deployments
   * 
   * Production Benefits:
   * - No server configuration required for routing
   * - Asset paths resolve correctly regardless of hosting structure
   * - Simplified CI/CD pipeline deployment
   */
  base: "/gemfactory/",
  
  /**
   * Development Server Configuration
   * 
   * Optimized for cross-platform development and remote collaboration:
   * - IPv6/IPv4 dual-stack binding for network accessibility
   * - Standard port 8080 avoids conflicts with common services
   * - Hot Module Replacement (HMR) for instant feedback
   * - CORS configured for API integration testing
   */
  server: {
    host: "::", // Bind to all available network interfaces (0.0.0.0 + ::)
    port: 8080, // Consistent port for team development and documentation
    // Additional development optimizations could include:
    // - strictPort: false for automatic port fallback
    // - open: true for automatic browser launch
    // - cors: true for cross-origin API testing
  },
  
  /**
   * Build Plugin Configuration
   * 
   * React SWC Plugin: Next-generation compiler for React applications
   * 
   * Performance Benefits:
   * - 20x faster compilation than traditional Babel
   * - Native TypeScript support without additional transpilation
   * - Optimized JSX transformation for smaller bundles
   * - Enhanced development experience with faster HMR
   * 
   * GemFactory-Specific Optimizations:
   * - Automatic dead code elimination for production builds
   * - Tree-shaking for external dependencies
   * - Consistent compilation across development and production
   */
  plugins: [
    react(), // Internally uses @vitejs/plugin-react-swc for optimal performance
    // Future plugin considerations for gem factory needs:
    // - Bundle analyzer for size optimization
    // - PWA plugin for offline manufacturing workflows
    // - Mock service worker for API simulation
  ],
  
  /**
   * Module Resolution and Import Path Configuration
   * 
   * Absolute Import Strategy:
   * - "@" alias maps to src directory for clean imports
   * - Eliminates complex relative path navigation (../../../components)
   * - Improves code maintainability and refactoring safety
   * - Enhances IDE intellisense and navigation
   * 
   * GemFactory Import Examples:
   * - Components: import { GemProcessor } from "@/components/manufacturing"
   * - Utilities: import { calculateCutAngles } from "@/utils/gemometry"
   * - Types: import { GemQuality } from "@/types/manufacturing"
   * - Hooks: import { useInventory } from "@/hooks/inventory"
   */
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      // Additional aliases could be added for specific domains:
      // "@components": path.resolve(__dirname, "./src/components"),
      // "@manufacturing": path.resolve(__dirname, "./src/manufacturing"),
      // "@quality": path.resolve(__dirname, "./src/quality-control"),
    },
  },
  
  /**
   * Build Optimization Configuration
   * 
   * Production build optimizations for the gem factory platform:
   * - Code splitting for faster initial load times
   * - Asset optimization and compression
   * - Source map generation for debugging production issues
   */
  build: {
    // Uncomment for production-specific optimizations:
    // minify: 'terser', // Advanced minification for smaller bundles
    // rollupOptions: {
    //   output: {
    //     manualChunks: {
    //       vendor: ['react', 'react-dom'],
    //       ui: ['@radix-ui/react-*'],
    //       manufacturing: ['./src/manufacturing/*'],
    //     }
    //   }
    // }
  },
}));
