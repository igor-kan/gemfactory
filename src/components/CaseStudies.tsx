
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, TrendingUp } from 'lucide-react';

const caseStudies = [
  {
    company: "GitHub",
    origin: "Internal Git collaboration tool",
    problem: "Better version control collaboration",
    outcome: "$7.5B acquisition by Microsoft",
    category: "Code Collaboration",
    color: "from-gray-600 to-gray-800"
  },
  {
    company: "PagerDuty",
    origin: "In-house alert handling system",
    problem: "Managing critical incidents and alerts",
    outcome: "$1.7B public company",
    category: "DevOps",
    color: "from-green-600 to-green-800"
  },
  {
    company: "Retool",
    origin: "Internal admin tools at Stripe/Coinbase",
    problem: "Building internal dashboards quickly",
    outcome: "$3.2B valuation",
    category: "Internal Tools",
    color: "from-orange-600 to-orange-800"
  },
  {
    company: "Jira",
    origin: "Atlassian's project tracker",
    problem: "Issue tracking and project management",
    outcome: "Part of $58B Atlassian",
    category: "Project Management",
    color: "from-blue-600 to-blue-800"
  }
];

export const CaseStudies = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Billion-Dollar Tools Started Internal
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            These companies turned their internal tools into market-defining products
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => (
            <Card key={index} className="bg-slate-800/50 backdrop-blur-sm border-slate-700 hover:border-slate-600 transition-all duration-300 group">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-white text-xl flex items-center">
                      {study.company}
                      <ExternalLink className="ml-2 h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </CardTitle>
                    <Badge variant="secondary" className="mt-2">
                      {study.category}
                    </Badge>
                  </div>
                  <TrendingUp className="h-8 w-8 text-green-400" />
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="text-slate-300 font-semibold mb-1">Origin</h4>
                  <p className="text-slate-400 text-sm">{study.origin}</p>
                </div>
                <div>
                  <h4 className="text-slate-300 font-semibold mb-1">Problem Solved</h4>
                  <p className="text-slate-400 text-sm">{study.problem}</p>
                </div>
                <div className="pt-2 border-t border-slate-700">
                  <h4 className="text-green-400 font-semibold mb-1">Outcome</h4>
                  <p className="text-green-300 font-medium">{study.outcome}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Card className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 border-slate-700 max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Your Tool Could Be Next</h3>
              <p className="text-slate-300 mb-6">
                Every successful developer tool started as someone solving their own problem. 
                The key is recognizing when that solution has broader market appeal.
              </p>
              <div className="text-4xl">🚀</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
