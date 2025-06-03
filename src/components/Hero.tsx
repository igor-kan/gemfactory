
import React from 'react';
import { Button } from '@/components/ui/button';
import { Code, Rocket, Zap } from 'lucide-react';

export const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center px-4">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-3xl"></div>
      
      <div className="relative z-10 text-center max-w-5xl mx-auto">
        <div className="flex justify-center mb-8">
          <div className="relative">
            <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-xl opacity-30"></div>
            <div className="relative bg-gradient-to-r from-blue-500 to-purple-500 p-6 rounded-full">
              <Code className="h-12 w-12 text-white" />
            </div>
          </div>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Turn Your <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Internal Tool</span> Into a SaaS
        </h1>
        
        <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed">
          Transform those powerful internal dev tools into market-changing products. 
          <br />Based on Dalton Caldwell&apos;s proven framework.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-4 text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl"
          >
            <Rocket className="mr-2 h-5 w-5" />
            Start Tool Discovery
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            className="border-slate-400 text-slate-300 hover:bg-slate-800 hover:text-white px-8 py-4 text-lg font-semibold transition-all duration-300"
          >
            <Zap className="mr-2 h-5 w-5" />
            View Case Studies
          </Button>
        </div>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
            <div className="text-3xl font-bold text-blue-400 mb-2">10,000+</div>
            <div className="text-slate-300">Teams Need Your Tool</div>
          </div>
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
            <div className="text-3xl font-bold text-purple-400 mb-2">&lt; 10 min</div>
            <div className="text-slate-300">Integration Time</div>
          </div>
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
            <div className="text-3xl font-bold text-green-400 mb-2">∞</div>
            <div className="text-slate-300">Market Potential</div>
          </div>
        </div>
      </div>
    </div>
  );
};
