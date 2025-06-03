
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, Clock, DollarSign, Target } from 'lucide-react';

const validationSteps = [
  {
    icon: Clock,
    title: "Time Saved",
    question: "How many hours did this tool save your team weekly?",
    criteria: ["Saved 5+ hours per developer", "Eliminated repetitive tasks", "Reduced deployment time by 50%+"],
    weight: "High"
  },
  {
    icon: DollarSign,
    title: "Cost Replacement",
    question: "Did it replace expensive SaaS or prevent tool purchases?",
    criteria: ["Replaced $1000+/month tools", "Prevented new subscriptions", "Reduced infrastructure costs"],
    weight: "Medium"
  },
  {
    icon: Target,
    title: "Organic Adoption",
    question: "Did other teams start using it without being forced?",
    criteria: ["Spread to other teams", "Developers requested access", "Became part of workflow"],
    weight: "High"
  },
  {
    icon: CheckCircle,
    title: "Problem Universality",
    question: "Do other companies have this same pain point?",
    criteria: ["Common in your industry", "Mentioned in tech blogs", "Discussed in forums/communities"],
    weight: "Critical"
  }
];

export const ValidationFramework = () => {
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  const toggleStep = (index: number) => {
    setCompletedSteps(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const score = completedSteps.length;
  const getScoreColor = () => {
    if (score >= 3) return "text-green-400";
    if (score >= 2) return "text-yellow-400";
    return "text-red-400";
  };

  const getScoreMessage = () => {
    if (score >= 3) return "🚀 High potential! Start building your MVP";
    if (score >= 2) return "⚡ Good potential! Validate with more users";
    return "🤔 Lower potential. Consider other tools or pivot";
  };

  return (
    <section className="py-20 px-4 bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Validate Your Tool's Market Potential
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Check these criteria to see if your internal tool has commercial viability
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            {validationSteps.map((step, index) => (
              <Card 
                key={index} 
                className={`bg-slate-800/50 backdrop-blur-sm border-slate-700 transition-all duration-300 cursor-pointer ${
                  completedSteps.includes(index) ? 'border-green-500 bg-green-900/20' : 'hover:border-slate-600'
                }`}
                onClick={() => toggleStep(index)}
              >
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                        completedSteps.includes(index) 
                          ? 'bg-green-500' 
                          : 'bg-gradient-to-r from-blue-500 to-purple-500'
                      }`}>
                        {completedSteps.includes(index) ? (
                          <CheckCircle className="h-5 w-5 text-white" />
                        ) : (
                          <step.icon className="h-5 w-5 text-white" />
                        )}
                      </div>
                      <div>
                        <CardTitle className="text-white text-lg">{step.title}</CardTitle>
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          step.weight === 'Critical' ? 'bg-red-500/20 text-red-400' :
                          step.weight === 'High' ? 'bg-yellow-500/20 text-yellow-400' :
                          'bg-blue-500/20 text-blue-400'
                        }`}>
                          {step.weight}
                        </span>
                      </div>
                    </div>
                  </div>
                  <CardDescription className="text-slate-400 mt-2">
                    {step.question}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {step.criteria.map((criterion, i) => (
                      <li key={i} className="text-slate-300 text-sm flex items-center">
                        <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mr-3"></div>
                        {criterion}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="lg:sticky lg:top-8">
            <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white text-2xl text-center">Validation Score</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className={`text-6xl font-bold mb-4 ${getScoreColor()}`}>
                  {score}/4
                </div>
                <p className="text-lg text-slate-300 mb-6">
                  {getScoreMessage()}
                </p>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-400">Market Validation</span>
                    <span className={getScoreColor()}>{Math.round((score/4) * 100)}%</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${(score/4) * 100}%` }}
                    ></div>
                  </div>
                </div>
                {score >= 2 && (
                  <Button className="mt-6 w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600">
                    Generate MVP Plan
                  </Button>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
