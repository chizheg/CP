import { useState } from "react";
import { HomeIcon, UserIcon, BrainIcon, BarChart3Icon } from "./components/icons";
import { HomeScreen } from "./components/HomeScreen";
import { ProfileScreen } from "./components/ProfileScreen";
import { GamesScreen } from "./components/GamesScreen";
import { StatisticsScreen } from "./components/StatisticsScreen";

type Screen = "home" | "games" | "stats" | "profile";

export default function App() {
  const [activeScreen, setActiveScreen] = useState<Screen>("home");

  const renderScreen = () => {
    switch (activeScreen) {
      case "home":
        return <HomeScreen onNavigateToGames={() => setActiveScreen("games")} onProfileClick={() => setActiveScreen("profile")} />;
      case "games":
        return <GamesScreen />;
      case "stats":
        return <StatisticsScreen />;
      case "profile":
        return <ProfileScreen />;
      default:
        return <HomeScreen onNavigateToGames={() => setActiveScreen("games")} onProfileClick={() => setActiveScreen("profile")} />;
    }
  };

  const navItems = [
    { id: "home" as Screen, icon: HomeIcon, label: "Home" },
    { id: "games" as Screen, icon: BrainIcon, label: "Activities" },
    { id: "stats" as Screen, icon: BarChart3Icon, label: "Progress" },
    { id: "profile" as Screen, icon: UserIcon, label: "Profile" }
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 max-w-md mx-auto">
      {/* Screen Content */}
      <div className="min-h-screen">
        {renderScreen()}
      </div>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-slate-900/80 backdrop-blur-lg border-t border-slate-700/50">
        <div className="flex justify-around items-center h-16 px-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeScreen === item.id;
            
            return (
              <button
                key={item.id}
                onClick={() => setActiveScreen(item.id)}
                className={`flex flex-col items-center justify-center gap-1 px-4 py-2 rounded-xl transition-all ${
                  isActive
                    ? "text-indigo-400"
                    : "text-slate-500 hover:text-slate-400"
                }`}
              >
                <Icon className={`w-5 h-5 ${isActive ? "scale-110" : ""} transition-transform`} />
                <span className="text-xs">{item.label}</span>
                {isActive && (
                  <div className="absolute bottom-0 w-12 h-0.5 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-t-full" />
                )}
              </button>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
