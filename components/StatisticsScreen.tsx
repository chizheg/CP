import { TrendingUpIcon, TargetIcon, ZapIcon, BrainIcon, CalendarIcon } from "./icons";
import { Card } from "./ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "./ui/chart";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer } from "recharts@2.15.2";

const weeklyProgressData = [
  { day: "Mon", attention: 65, reaction: 72, memory: 58, logic: 62 },
  { day: "Tue", attention: 70, reaction: 75, memory: 62, logic: 68 },
  { day: "Wed", attention: 68, reaction: 78, memory: 65, logic: 70 },
  { day: "Thu", attention: 75, reaction: 80, memory: 70, logic: 73 },
  { day: "Fri", attention: 78, reaction: 82, memory: 72, logic: 76 },
  { day: "Sat", attention: 82, reaction: 85, memory: 75, logic: 79 },
  { day: "Sun", attention: 85, reaction: 88, memory: 78, logic: 82 }
];

const skillRadarData = [
  { skill: "Attention", value: 85, fullMark: 100 },
  { skill: "Reaction", value: 88, fullMark: 100 },
  { skill: "Memory", value: 78, fullMark: 100 },
  { skill: "Logic", value: 82, fullMark: 100 },
  { skill: "Processing", value: 80, fullMark: 100 }
];

const monthlyData = [
  { month: "Week 1", score: 65 },
  { month: "Week 2", score: 70 },
  { month: "Week 3", score: 75 },
  { month: "Week 4", score: 82 }
];

const chartConfig = {
  attention: {
    label: "Attention",
    color: "#14b8a6",
  },
  reaction: {
    label: "Reaction",
    color: "#a855f7",
  },
  memory: {
    label: "Memory",
    color: "#f43f5e",
  },
  logic: {
    label: "Logic",
    color: "#f59e0b",
  },
  score: {
    label: "Overall Score",
    color: "#818cf8",
  },
};

export function StatisticsScreen() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 p-6 pb-24">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-slate-100 mb-2">Your Progress</h1>
        <p className="text-slate-400 text-sm">Track your cognitive development journey</p>
      </div>

      {/* Overall Stats */}
      <div className="grid grid-cols-2 gap-3 mb-6">
        <Card className="p-4 bg-gradient-to-br from-teal-950/50 to-cyan-950/50 backdrop-blur-sm border-teal-800/50 shadow-lg">
          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-teal-900/80 to-cyan-900/80 flex items-center justify-center mb-2 border border-teal-800/50">
              <TargetIcon className="w-5 h-5 text-teal-400" />
            </div>
            <div className="text-slate-100 mb-1">85%</div>
            <div className="text-slate-400 text-xs">Attention</div>
          </div>
        </Card>

        <Card className="p-4 bg-gradient-to-br from-purple-950/50 to-indigo-950/50 backdrop-blur-sm border-purple-800/50 shadow-lg">
          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-900/80 to-indigo-900/80 flex items-center justify-center mb-2 border border-purple-800/50">
              <ZapIcon className="w-5 h-5 text-purple-400" />
            </div>
            <div className="text-slate-100 mb-1">88%</div>
            <div className="text-slate-400 text-xs">Reaction</div>
          </div>
        </Card>

        <Card className="p-4 bg-gradient-to-br from-rose-950/50 to-pink-950/50 backdrop-blur-sm border-rose-800/50 shadow-lg">
          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-rose-900/80 to-pink-900/80 flex items-center justify-center mb-2 border border-rose-800/50">
              <BrainIcon className="w-5 h-5 text-rose-400" />
            </div>
            <div className="text-slate-100 mb-1">78%</div>
            <div className="text-slate-400 text-xs">Memory</div>
          </div>
        </Card>

        <Card className="p-4 bg-gradient-to-br from-amber-950/50 to-yellow-950/50 backdrop-blur-sm border-amber-800/50 shadow-lg">
          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-900/80 to-yellow-900/80 flex items-center justify-center mb-2 border border-amber-800/50">
              <span className="text-lg">🧩</span>
            </div>
            <div className="text-slate-100 mb-1">82%</div>
            <div className="text-slate-400 text-xs">Logic</div>
          </div>
        </Card>
      </div>

      {/* Weekly Progress Chart */}
      <Card className="p-6 bg-slate-800/50 backdrop-blur-sm border-slate-700/50 shadow-lg mb-6">
        <div className="flex items-center gap-2 mb-4">
          <CalendarIcon className="w-5 h-5 text-indigo-400" />
          <h3 className="text-slate-100">Weekly Progress</h3>
        </div>
        
        <ChartContainer config={chartConfig} className="h-64">
          <LineChart data={weeklyProgressData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
            <XAxis 
              dataKey="day" 
              stroke="#94a3b8" 
              style={{ fontSize: '12px' }}
            />
            <YAxis 
              stroke="#94a3b8" 
              style={{ fontSize: '12px' }}
            />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Line 
              type="monotone" 
              dataKey="attention" 
              stroke="#14b8a6" 
              strokeWidth={2}
              dot={{ fill: '#14b8a6', r: 4 }}
            />
            <Line 
              type="monotone" 
              dataKey="reaction" 
              stroke="#a855f7" 
              strokeWidth={2}
              dot={{ fill: '#a855f7', r: 4 }}
            />
            <Line 
              type="monotone" 
              dataKey="memory" 
              stroke="#f43f5e" 
              strokeWidth={2}
              dot={{ fill: '#f43f5e', r: 4 }}
            />
            <Line 
              type="monotone" 
              dataKey="logic" 
              stroke="#f59e0b" 
              strokeWidth={2}
              dot={{ fill: '#f59e0b', r: 4 }}
            />
          </LineChart>
        </ChartContainer>

        <div className="flex flex-wrap justify-center gap-4 mt-4 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-teal-500"></div>
            <span className="text-slate-400">Attention</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-purple-500"></div>
            <span className="text-slate-400">Reaction</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-rose-500"></div>
            <span className="text-slate-400">Memory</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-amber-500"></div>
            <span className="text-slate-400">Logic</span>
          </div>
        </div>
      </Card>

      {/* Skills Overview Radar */}
      <Card className="p-6 bg-slate-800/50 backdrop-blur-sm border-slate-700/50 shadow-lg mb-6">
        <div className="flex items-center gap-2 mb-4">
          <TrendingUpIcon className="w-5 h-5 text-indigo-400" />
          <h3 className="text-slate-100">Skills Overview</h3>
        </div>
        
        <div className="h-64 flex items-center justify-center">
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart data={skillRadarData}>
              <PolarGrid stroke="#334155" />
              <PolarAngleAxis 
                dataKey="skill" 
                stroke="#94a3b8"
                style={{ fontSize: '12px' }}
              />
              <PolarRadiusAxis 
                angle={90} 
                domain={[0, 100]} 
                stroke="#64748b"
                style={{ fontSize: '10px' }}
              />
              <Radar 
                name="Skills" 
                dataKey="value" 
                stroke="#818cf8" 
                fill="#818cf8" 
                fillOpacity={0.4}
                strokeWidth={2}
              />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </Card>

      {/* Monthly Trend */}
      <Card className="p-6 bg-slate-800/50 backdrop-blur-sm border-slate-700/50 shadow-lg">
        <div className="flex items-center gap-2 mb-4">
          <TrendingUpIcon className="w-5 h-5 text-indigo-400" />
          <h3 className="text-slate-100">Monthly Improvement</h3>
        </div>
        
        <ChartContainer config={chartConfig} className="h-48">
          <BarChart data={monthlyData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
            <XAxis 
              dataKey="month" 
              stroke="#94a3b8"
              style={{ fontSize: '12px' }}
            />
            <YAxis 
              stroke="#94a3b8"
              style={{ fontSize: '12px' }}
            />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Bar 
              dataKey="score" 
              fill="#818cf8" 
              radius={[8, 8, 0, 0]}
            />
          </BarChart>
        </ChartContainer>

        <div className="mt-4 p-4 bg-gradient-to-r from-indigo-950/50 to-blue-950/50 rounded-xl border border-indigo-900/50">
          <div className="flex items-center gap-2 text-sm">
            <TrendingUpIcon className="w-4 h-4 text-indigo-400" />
            <span className="text-slate-200">You've improved by <strong className="text-indigo-400">26%</strong> this month! Keep up the great work.</span>
          </div>
        </div>
      </Card>
    </div>
  );
}
