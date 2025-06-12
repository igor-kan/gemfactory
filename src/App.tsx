/**
 * GemFactory App - Internal Gem Creation Platform
 * 
 * Main application component for the internal gem factory management system.
 * This application handles the complete gem creation pipeline including:
 * - Raw material processing and inventory management
 * - Gem cutting and polishing workflows
 * - Quality control and certification processes
 * - Production analytics and reporting
 * 
 * Architecture Decision: Uses HashRouter for deployment flexibility
 * HashRouter eliminates the need for server-side routing configuration,
 * making it ideal for static hosting environments and GitHub Pages.
 */

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

/**
 * Global React Query Client Configuration
 * 
 * Manages server state for the gem factory operations with optimized settings:
 * - Caches API responses for improved performance
 * - Handles background refetching for real-time data updates
 * - Implements retry logic for robust error handling
 * - Provides optimistic updates for better user experience
 * 
 * The default configuration is suitable for most gem factory operations,
 * but can be customized for specific data freshness requirements.
 */
const queryClient = new QueryClient();

/**
 * Root GemFactory Application Component
 * 
 * Establishes the foundational infrastructure for the gem factory system:
 * 
 * Provider Hierarchy (order is critical):
 * 1. QueryClientProvider - Enables data fetching and caching throughout the app
 * 2. TooltipProvider - Ensures consistent tooltip behavior for enhanced UX
 * 3. Toast Systems - Dual notification system for different message types
 * 4. HashRouter - Client-side routing with hash-based navigation
 * 
 * Routing Strategy:
 * - HashRouter chosen for deployment simplicity and compatibility
 * - No server configuration required for route handling
 * - Works seamlessly with static hosting services
 * 
 * Route Structure:
 * - "/" : Main factory dashboard and control interface
 * - "*" : 404 error handling for invalid routes (must be last)
 * 
 * @returns {JSX.Element} Complete application component tree with providers
 */
const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      {/* 
        Dual Toast Notification System
        - Toaster: Standard notifications for system messages and confirmations
        - Sonner: Modern, elegant notifications for success/error states
        This combination provides comprehensive user feedback capabilities
      */}
      <Toaster />
      <Sonner />
      
      {/*
        HashRouter Implementation
        
        Benefits for GemFactory deployment:
        - No server configuration required for routing
        - Compatible with all static hosting providers
        - Eliminates 404 errors on direct URL access
        - Simplifies CI/CD deployment pipeline
        
        Trade-offs:
        - URLs include hash fragments (e.g., /#/dashboard)
        - Slightly less SEO-friendly than BrowserRouter
        - Analytics may require special configuration for hash routes
      */}
      <HashRouter>
        <Routes>
          {/* Main factory interface - comprehensive dashboard view */}
          <Route path="/" element={<Index />} />
          
          {/* 
            Universal error handler for unmatched routes
            CRITICAL: Must remain as the final route definition
            Provides graceful degradation for:
            - Broken internal links
            - Manual URL typos
            - Removed or renamed routes
          */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
