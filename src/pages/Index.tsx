
import React from 'react';
import { Hero } from '@/components/Hero';
import { DaltonInsights } from '@/components/DaltonInsights';
import { ToolCategories } from '@/components/ToolCategories';
import { ValidationFramework } from '@/components/ValidationFramework';
import { CaseStudies } from '@/components/CaseStudies';
import { ActionSteps } from '@/components/ActionSteps';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <Hero />
      <DaltonInsights />
      <ToolCategories />
      <ValidationFramework />
      <CaseStudies />
      <ActionSteps />
    </div>
  );
};

export default Index;
