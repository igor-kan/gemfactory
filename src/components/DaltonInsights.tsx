
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Lightbulb, Building, Users, TrendingUp } from 'lucide-react';

const insights = [
  {
    icon: Lightbulb,
    title: "The Hidden Goldmine",
    description: "Internal tools with funny nicknames that never see daylight",
    quote: "If it's very useful at one company, it's very useful at others.",
    examples: ["Deploy bot 'Jenkins Jr.'", "Database migrator 'DBuddy'", "Log analyzer 'Sherlock'"],
    color: "from-yellow-500 to-orange-500"
  },
  {
    icon: Building,
    title: "Proven Problem-Solution Fit",
    description: "These tools solved real, painful problems at scale",
    quote: "Built by programmers to solve their own particularly painful problems.",
    examples: ["Saved hours daily", "Prevented production outages", "Eliminated manual processes"],
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Users,
    title: "Natural Adoption Pattern",
    description: "Tools that spread organically prove market demand",
    quote: "The lineage of all software tools traces back to something a programmer built.",
    examples: ["Other teams requested access", "Became part of standard workflow", "Reduced support tickets"],
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: TrendingUp,
    title: "Startup Inspiration Source",
    description: "Your competitive advantage is knowing what works",
    quote: "Aspiring founders don't realize internal tools are great inspiration sources.",
    examples: ["You know the exact pain point", "You understand the workflow", "You've seen it work at scale"],
    color: "from-purple-500 to-pink-500"
  }
];

export const DaltonInsights = () => {
  return (
    <section className="py-20 px-4 bg-slate-900/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 text-sm">
            Dalton Caldwell's Framework
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Why Internal Tools Make Great Startups
          </h2>
          <p className="text-xl text-slate-300 max-w-4xl mx-auto">
            Y Combinator's Dalton Caldwell reveals why the tools you built at your last job 
            could be your next billion-dollar startup opportunity.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {insights.map((insight, index) => (
            <Card key={index} className="bg-slate-800/50 backdrop-blur-sm border-slate-700 hover:border-slate-600 transition-all duration-300 group">
              <CardHeader>
                <div className="flex items-start space-x-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${insight.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <insight.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-white text-xl mb-2">{insight.title}</CardTitle>
                    <CardDescription className="text-slate-400 mb-4">{insight.description}</CardDescription>
                    <blockquote className="border-l-4 border-blue-500 pl-4 italic text-slate-300 text-sm">
                      "{insight.quote}"
                    </blockquote>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <h4 className="text-slate-300 font-semibold mb-3">Key Indicators:</h4>
                <ul className="space-y-2">
                  {insight.examples.map((example, i) => (
                    <li key={i} className="text-slate-400 text-sm flex items-center">
                      <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mr-3"></div>
                      {example}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Card className="bg-gradient-to-r from-slate-800/80 to-slate-700/80 border-slate-600 max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-white mb-4">The Pattern is Clear</h3>
              <p className="text-slate-300 mb-6 text-lg leading-relaxed">
                Every successful developer tool started as someone solving their own problem. 
                GitHub, Jira, PagerDuty, and Retool all began as internal solutions that teams loved so much, 
                they couldn't imagine working without them.
              </p>
              <div className="bg-blue-900/30 rounded-lg p-6 border border-blue-500/30">
                <p className="text-blue-200 font-medium">
                  "There is no reason to doubt this pattern won't continue to be true." 
                  <span className="text-blue-400">— Dalton Caldwell</span>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
