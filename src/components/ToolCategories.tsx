
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { GitBranch, Shield, Database, Users, Settings, Zap } from 'lucide-react';

const categories = [
  {
    icon: GitBranch,
    title: "Build & Release Tools",
    description: "CI/CD pipelines, deploy automation, test runners",
    examples: ["Pre-tested deploy paths", "Automated rollback logic", "Ephemeral environments"],
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Shield,
    title: "DevSecOps",
    description: "Security scanning, dependency auditing, policy enforcement",
    examples: ["Secret scanning", "SBOM awareness", "Security without slowdown"],
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: Database,
    title: "Data & Analytics",
    description: "ETL pipelines, data validation, debugging tools",
    examples: ["Simpler than Airflow", "Real-time validation", "Flaky job debugging"],
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: Users,
    title: "Code Collaboration",
    description: "Code search, review automation, knowledge graphs",
    examples: ["Codebase knowledge graph", "Git hook automation", "Slack-integrated reviews"],
    color: "from-orange-500 to-red-500"
  },
  {
    icon: Settings,
    title: "ChatOps & Admin",
    description: "Bots for cloud resources, no-code dashboards",
    examples: ["Cloud resource management", "PM/analyst dashboards", "Internal status pages"],
    color: "from-indigo-500 to-purple-500"
  },
  {
    icon: Zap,
    title: "Developer Experience",
    description: "Tools that make developers more productive",
    examples: ["Local dev environments", "API mocking", "Performance profiling"],
    color: "from-yellow-500 to-orange-500"
  }
];

export const ToolCategories = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            What Kind of Tool Did You Build?
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Identify the category of your internal tool to understand its market potential
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <Card key={index} className="bg-slate-800/50 backdrop-blur-sm border-slate-700 hover:border-slate-600 transition-all duration-300 hover:transform hover:scale-105 group">
              <CardHeader>
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-white text-xl">{category.title}</CardTitle>
                <CardDescription className="text-slate-400">{category.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {category.examples.map((example, i) => (
                    <li key={i} className="text-slate-300 text-sm flex items-center">
                      <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mr-3"></div>
                      {example}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
