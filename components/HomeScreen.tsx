import { SparklesIcon, TrendingUpIcon, ChevronRightIcon, BrainIcon, TargetIcon, ZapIcon } from "./icons";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

interface HomeScreenProps {
  onProfileClick: () => void;
  onNavigateToGames: () => void;
}

const recommendedGames = [
  {
    id: 1,
    title: "Focus Challenge",
    description: "Improve your sustained attention",
    duration: "3 min",
    category: "Attention",
    icon: "🎯",
    color: "from-teal-900/40 to-cyan-900/40",
    iconBg: "bg-teal-900/60",
    iconColor: "text-teal-400"
  },
  {
    id: 2,
    title: "Pattern Memory",
    description: "Strengthen your visual memory",
    duration: "5 min",
    category: "Memory",
    icon: "🧠",
    color: "from-rose-900/40 to-pink-900/40",
    iconBg: "bg-rose-900/60",
    iconColor: "text-rose-400"
  }
];

const tips = [
  {
    icon: "🌅",
    title: "Morning Practice",
    description: "Train your mind when it's most alert - first thing in the morning.",
    color: "from-amber-900/30 to-yellow-900/30"
  },
  {
    icon: "🧘",
    title: "Stay Consistent",
    description: "Regular daily practice is more effective than sporadic intensive sessions.",
    color: "from-blue-900/30 to-indigo-900/30"
  },
  {
    icon: "💧",
    title: "Stay Hydrated",
    description: "Proper hydration significantly improves cognitive performance.",
    color: "from-cyan-900/30 to-teal-900/30"
  }
];

export function HomeScreen({ onProfileClick, onNavigateToGames }: HomeScreenProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 p-6 pb-24">
      {/* Welcome Section - At the very top */}
      <div className="mb-6">
        <div className="flex justify-between items-start mb-4">
          <div className="flex-1">
            <p className="text-slate-400 text-sm mb-1">Welcome back,</p>
            <h1 className="text-slate-100">Alex</h1>
          </div>
          <button
            onClick={onProfileClick}
            className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-900/80 to-purple-900/80 flex items-center justify-center text-indigo-300 shadow-lg hover:shadow-xl transition-shadow border border-indigo-800/50"
          >
            <span className="text-lg">👤</span>
          </button>
        </div>
        
        {/* Daily Quote/Message */}
        <Card className="p-5 bg-gradient-to-br from-indigo-950/50 to-blue-950/50 border-indigo-800/50 shadow-lg">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-900/80 to-blue-900/80 flex items-center justify-center flex-shrink-0 border border-indigo-700/50">
              <SparklesIcon className="w-5 h-5 text-indigo-400" />
            </div>
            <div>
              <h3 className="text-slate-100 mb-1">Today's Focus</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Your mind is your most powerful tool. Let's nurture it with gentle, focused practice today.
              </p>
            </div>
          </div>
        </Card>
      </div>

      {/* Recommended Activities */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-slate-100">Recommended for You</h2>
          <button 
            onClick={onNavigateToGames}
            className="text-indigo-400 text-sm hover:text-indigo-300 transition-colors"
          >
            View all
          </button>
        </div>

        <div className="space-y-3">
          {recommendedGames.map((game) => (
            <Card key={game.id} className="overflow-hidden bg-slate-800/50 backdrop-blur-sm border-slate-700/50 shadow-lg hover:shadow-xl transition-all hover:border-slate-600/50">
              <div className="flex items-center gap-4 p-4">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${game.color} flex items-center justify-center flex-shrink-0 border border-slate-700/50`}>
                  <span className="text-2xl">{game.icon}</span>
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-slate-100">{game.title}</h3>
                    <Badge className="bg-slate-700/50 text-slate-300 text-xs px-2 py-0.5 border-0">
                      {game.duration}
                    </Badge>
                  </div>
                  <p className="text-slate-400 text-sm">{game.description}</p>
                </div>

                <button className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-600 to-blue-600 hover:from-indigo-500 hover:to-blue-500 flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all flex-shrink-0">
                  <ChevronRightIcon className="w-5 h-5" />
                </button>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Tips Section */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-4">
          <TrendingUpIcon className="w-5 h-5 text-indigo-400" />
          <h2 className="text-slate-100">Tips to Improve</h2>
        </div>

        <div className="space-y-3">
          {tips.map((tip, index) => (
            <Card key={index} className={`p-4 bg-gradient-to-br ${tip.color} border-slate-700/50 shadow-lg backdrop-blur-sm`}>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-slate-800/60 flex items-center justify-center flex-shrink-0 border border-slate-700/50">
                  <span className="text-xl">{tip.icon}</span>
                </div>
                <div className="flex-1">
                  <p className="text-slate-100 mb-1">{tip.title}</p>
                  <p className="text-slate-400 text-sm leading-relaxed">{tip.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Quick Stats */}
      <Card className="p-5 bg-slate-800/50 backdrop-blur-sm border-slate-700/50 shadow-lg">
        <h3 className="text-slate-100 mb-4">Your Journey</h3>
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-900/60 to-cyan-900/60 flex items-center justify-center mx-auto mb-2 border border-teal-800/50">
              <TargetIcon className="w-5 h-5 text-teal-400" />
            </div>
            <div className="text-slate-100 mb-1">12</div>
            <div className="text-slate-400 text-xs">Day Streak</div>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-900/60 to-indigo-900/60 flex items-center justify-center mx-auto mb-2 border border-purple-800/50">
              <BrainIcon className="w-5 h-5 text-purple-400" />
            </div>
            <div className="text-slate-100 mb-1">24</div>
            <div className="text-slate-400 text-xs">Completed</div>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-900/60 to-yellow-900/60 flex items-center justify-center mx-auto mb-2 border border-amber-800/50">
              <ZapIcon className="w-5 h-5 text-amber-400" />
            </div>
            <div className="text-slate-100 mb-1">82%</div>
            <div className="text-slate-400 text-xs">Progress</div>
          </div>
        </div>
      </Card>
    </div>
  );
}
