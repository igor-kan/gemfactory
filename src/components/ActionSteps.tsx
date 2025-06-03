
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Circle, FileText, Rocket, Share2 } from 'lucide-react';

const actionSteps = [
  {
    id: 1,
    icon: Circle,
    title: "Identify Your Tool",
    description: "Document the internal tool that solved real problems",
    tasks: [
      "List tools you built or used that saved significant time",
      "Identify which ones replaced expensive SaaS",
      "Note tools that spread organically to other teams",
      "Choose the one with the biggest impact"
    ],
    deliverable: "Tool selection with impact metrics"
  },
  {
    id: 2,
    icon: FileText,
    title: "Sketch Your MVP",
    description: "Define the core functionality and integration points",
    tasks: [
      "Design the CLI/API entry point",
      "Identify the killer feature that saves the most time",
      "Map integration points with existing workflows",
      "Define the minimum viable feature set"
    ],
    deliverable: "MVP specification document"
  },
  {
    id: 3,
    icon: Share2,
    title: "Build Landing Page",
    description: "Create a compelling story and gather early interest",
    tasks: [
      "Write compelling README.md with real examples",
      "Create landing page explaining the problem",
      "Share with ex-coworkers and communities",
      "Gather feedback and gauge interest"
    ],
    deliverable: "Landing page with early user feedback"
  },
  {
    id: 4,
    icon: Rocket,
    title: "Launch & Iterate",
    description: "Release MVP and build based on user feedback",
    tasks: [
      "Release open source version or beta",
      "Document real-world usage examples",
      "Build community around the tool",
      "Plan monetization strategy"
    ],
    deliverable: "Live product with user base"
  }
];

export const ActionSteps = () => {
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  const toggleStep = (stepId: number) => {
    setCompletedSteps(prev => 
      prev.includes(stepId) 
        ? prev.filter(id => id !== stepId)
        : [...prev, stepId]
    );
  };

  return (
    <section className="py-20 px-4 bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Your 4-Step Launch Plan
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Transform your internal tool into a product that thousands of developers will love
          </p>
        </div>

        <div className="space-y-8">
          {actionSteps.map((step, index) => (
            <Card 
              key={step.id}
              className={`bg-slate-800/50 backdrop-blur-sm border-slate-700 transition-all duration-300 ${
                completedSteps.includes(step.id) ? 'border-green-500 bg-green-900/10' : ''
              }`}
            >
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => toggleStep(step.id)}
                      className={`w-10 h-10 rounded-full ${
                        completedSteps.includes(step.id)
                          ? 'bg-green-500 hover:bg-green-600'
                          : 'bg-slate-700 hover:bg-slate-600'
                      }`}
                    >
                      {completedSteps.includes(step.id) ? (
                        <CheckCircle className="h-5 w-5 text-white" />
                      ) : (
                        <span className="text-white font-bold">{step.id}</span>
                      )}
                    </Button>
                    <div>
                      <CardTitle className="text-white text-xl">{step.title}</CardTitle>
                      <CardDescription className="text-slate-400">{step.description}</CardDescription>
                    </div>
                  </div>
                  <Badge 
                    variant={completedSteps.includes(step.id) ? "default" : "secondary"}
                    className={completedSteps.includes(step.id) ? "bg-green-500" : ""}
                  >
                    {completedSteps.includes(step.id) ? "Complete" : "Todo"}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div className="lg:col-span-2">
                    <h4 className="text-slate-300 font-semibold mb-3">Action Items</h4>
                    <ul className="space-y-2">
                      {step.tasks.map((task, i) => (
                        <li key={i} className="text-slate-400 text-sm flex items-start">
                          <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mr-3 mt-2"></div>
                          {task}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-slate-300 font-semibold mb-3">Deliverable</h4>
                    <div className="bg-slate-700/50 rounded-lg p-4">
                      <p className="text-slate-300 text-sm">{step.deliverable}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Card className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 border-slate-700 max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Ready to Launch?</h3>
              <p className="text-slate-300 mb-6">
                Join thousands of developers who've turned their internal tools into successful products.
                Get templates, examples, and community support to accelerate your journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600">
                  Get Launch Templates
                </Button>
                <Button variant="outline" size="lg" className="border-slate-400 text-slate-300 hover:bg-slate-800">
                  Join Community
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
