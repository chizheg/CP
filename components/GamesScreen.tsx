import { useState } from "react";
import { PlayIcon, ClockIcon, BrainIcon, ZapIcon, ChevronRightIcon } from "./icons";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const games = [
  {
    id: 1,
    title: "Pattern Memory",
    description: "Remember and reproduce sequences of patterns to strengthen your visual memory and recall abilities.",
    category: "Memory",
    difficulty: "Medium",
    difficultyLevel: 2,
    duration: "5 min",
    image: "https://images.unsplash.com/photo-1759868937448-423d3c7c8133?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW1vcnklMjBjYXJkcyUyMGdhbWV8ZW58MXx8fHwxNzYyNzAzNzIyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    icon: "🧠",
    color: "from-rose-900/40 to-pink-900/40",
    iconBg: "bg-rose-900/60",
    iconColor: "text-rose-400"
  },
  {
    id: 2,
    title: "Focus Challenge",
    description: "Test your concentration by identifying target elements among distractions. Improve sustained attention.",
    category: "Attention",
    difficulty: "Easy",
    difficultyLevel: 1,
    duration: "3 min",
    image: "https://images.unsplash.com/photo-1674504502895-3ac04ab2943e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb2N1cyUyMG1lZGl0YXRpb258ZW58MXx8fHwxNzYyNjEwOTYzfDA&ixlib=rb-4.1.0&q=80&w=1080",
    icon: "🎯",
    color: "from-teal-900/40 to-cyan-900/40",
    iconBg: "bg-teal-900/60",
    iconColor: "text-teal-400"
  },
  {
    id: 3,
    title: "Quick Tap",
    description: "React as fast as you can to visual stimuli. Enhance your reaction time and processing speed.",
    category: "Reaction",
    difficulty: "Easy",
    difficultyLevel: 1,
    duration: "2 min",
    image: "https://images.unsplash.com/photo-1682285625534-c8aafd61803b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWFjdGlvbiUyMHNwZWVkfGVufDF8fHx8MTc2MjcwMzgzMHww&ixlib=rb-4.1.0&q=80&w=1080",
    icon: "⚡",
    color: "from-purple-900/40 to-indigo-900/40",
    iconBg: "bg-purple-900/60",
    iconColor: "text-purple-400"
  },
  {
    id: 4,
    title: "Brain Puzzle",
    description: "Solve logic puzzles and challenges that engage multiple cognitive skills simultaneously.",
    category: "Logic",
    difficulty: "Hard",
    difficultyLevel: 3,
    duration: "10 min",
    image: "https://images.unsplash.com/photo-1605902394069-ff2ae2430e62?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFpbiUyMHB1enpsZSUyMGdhbWV8ZW58MXx8fHwxNzYyNzAzODI5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    icon: "🧩",
    color: "from-amber-900/40 to-orange-900/40",
    iconBg: "bg-amber-900/60",
    iconColor: "text-amber-400"
  },
  {
    id: 5,
    title: "Word Association",
    description: "Connect related words and concepts to improve verbal reasoning and semantic memory.",
    category: "Logic",
    difficulty: "Medium",
    difficultyLevel: 2,
    duration: "7 min",
    image: "https://images.unsplash.com/photo-1682285625534-c8aafd61803b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWFjdGlvbiUyMHNwZWVkfGVufDF8fHx8MTc2MjcwMzgzMHww&ixlib=rb-4.1.0&q=80&w=1080",
    icon: "📝",
    color: "from-blue-900/40 to-indigo-900/40",
    iconBg: "bg-blue-900/60",
    iconColor: "text-blue-400"
  }
];

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty) {
    case "Easy":
      return "bg-teal-900/50 text-teal-300 border-teal-700/50";
    case "Medium":
      return "bg-amber-900/50 text-amber-300 border-amber-700/50";
    case "Hard":
      return "bg-rose-900/50 text-rose-300 border-rose-700/50";
    default:
      return "bg-slate-800/50 text-slate-300 border-slate-700/50";
  }
};

type SortOption = "all" | "easy" | "medium" | "hard";

export function GamesScreen() {
  const [sortBy, setSortBy] = useState<SortOption>("all");

  const filteredGames = games.filter(game => {
    if (sortBy === "all") return true;
    return game.difficulty.toLowerCase() === sortBy;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 p-6 pb-24">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-slate-100 mb-2">Cognitive Activities</h1>
        <p className="text-slate-400 text-sm">Choose an activity to enhance your mind</p>
      </div>

      {/* Sort/Filter Options */}
      <div className="mb-6">
        <p className="text-slate-400 text-sm mb-3">Filter by difficulty</p>
        <div className="flex gap-2 overflow-x-auto pb-2">
          <button
            onClick={() => setSortBy("all")}
            className={`px-4 py-2 rounded-xl text-sm transition-all whitespace-nowrap ${
              sortBy === "all"
                ? "bg-indigo-900/60 text-indigo-300 shadow-lg border border-indigo-700/50"
                : "bg-slate-800/50 text-slate-400 border border-slate-700/50 hover:bg-slate-800"
            }`}
          >
            All Activities
          </button>
          <button
            onClick={() => setSortBy("easy")}
            className={`px-4 py-2 rounded-xl text-sm transition-all whitespace-nowrap ${
              sortBy === "easy"
                ? "bg-teal-900/60 text-teal-300 shadow-lg border border-teal-700/50"
                : "bg-slate-800/50 text-slate-400 border border-slate-700/50 hover:bg-slate-800"
            }`}
          >
            Easy
          </button>
          <button
            onClick={() => setSortBy("medium")}
            className={`px-4 py-2 rounded-xl text-sm transition-all whitespace-nowrap ${
              sortBy === "medium"
                ? "bg-amber-900/60 text-amber-300 shadow-lg border border-amber-700/50"
                : "bg-slate-800/50 text-slate-400 border border-slate-700/50 hover:bg-slate-800"
            }`}
          >
            Medium
          </button>
          <button
            onClick={() => setSortBy("hard")}
            className={`px-4 py-2 rounded-xl text-sm transition-all whitespace-nowrap ${
              sortBy === "hard"
                ? "bg-rose-900/60 text-rose-300 shadow-lg border border-rose-700/50"
                : "bg-slate-800/50 text-slate-400 border border-slate-700/50 hover:bg-slate-800"
            }`}
          >
            Hard
          </button>
        </div>
      </div>

      {/* Games List */}
      <div className="space-y-4">
        {filteredGames.map((game) => (
          <Card key={game.id} className="overflow-hidden bg-slate-800/50 backdrop-blur-sm border-slate-700/50 shadow-lg hover:shadow-xl transition-all hover:border-slate-600/50">
            <div className="flex gap-4 p-4">
              {/* Game Image/Icon */}
              <div className="relative w-24 h-24 flex-shrink-0">
                <ImageWithFallback
                  src={game.image}
                  alt={game.title}
                  className="w-full h-full object-cover rounded-xl opacity-80"
                />
                <div className={`absolute -bottom-2 -right-2 w-10 h-10 rounded-full ${game.iconBg} flex items-center justify-center shadow-lg border-2 border-slate-800`}>
                  <span className="text-lg">{game.icon}</span>
                </div>
              </div>

              {/* Game Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="text-slate-100">{game.title}</h3>
                  <Badge className={`${getDifficultyColor(game.difficulty)} text-xs px-2 py-0.5 border`}>
                    {game.difficulty}
                  </Badge>
                </div>
                
                <p className="text-slate-400 text-sm leading-relaxed mb-3 line-clamp-2">
                  {game.description}
                </p>

                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-4 text-slate-500 text-xs">
                    <div className="flex items-center gap-1">
                      <BrainIcon className="w-3.5 h-3.5" />
                      <span>{game.category}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <ClockIcon className="w-3.5 h-3.5" />
                      <span>{game.duration}</span>
                    </div>
                  </div>
                  
                  <Button 
                    size="sm" 
                    className="bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-500 hover:to-blue-500 text-white shadow-lg h-8 px-4 rounded-xl"
                  >
                    <PlayIcon className="w-3.5 h-3.5 mr-1.5" />
                    Start
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Coming Soon */}
      <Card className="mt-6 p-6 bg-gradient-to-br from-slate-800/50 to-indigo-950/50 backdrop-blur-sm border-slate-700/50 border-dashed shadow-lg">
        <div className="text-center">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-900/80 to-blue-900/80 flex items-center justify-center mx-auto mb-3 border border-indigo-800/50">
            <ZapIcon className="w-6 h-6 text-indigo-400" />
          </div>
          <h3 className="text-slate-100 mb-2">More Activities Coming Soon</h3>
          <p className="text-slate-400 text-sm">
            We're developing new exercises to help you strengthen even more cognitive skills.
          </p>
        </div>
      </Card>
    </div>
  );
}
