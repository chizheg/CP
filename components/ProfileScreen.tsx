import { MailIcon, CalendarIcon, TrophyIcon, TargetIcon, SettingsIcon, LogOutIcon, ChevronRightIcon, BrainIcon } from "./icons";
import { Card } from "./ui/card";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";
import { Button } from "./ui/button";

export function ProfileScreen() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 p-6 pb-24">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-slate-100">Profile</h1>
      </div>

      {/* User Info Card */}
      <Card className="p-6 bg-slate-800/50 backdrop-blur-sm border-slate-700/50 shadow-lg mb-6">
        <div className="flex items-start gap-4 mb-6">
          <Avatar className="w-20 h-20 border-4 border-indigo-900/80">
            <AvatarFallback className="bg-gradient-to-br from-indigo-900 to-purple-900 text-indigo-300 text-2xl">
              AS
            </AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <h2 className="text-slate-100">Alex Smith</h2>
              <Badge className="bg-indigo-900/60 text-indigo-300 border-indigo-700/50 text-xs px-2 py-0.5 border">
                Level 8
              </Badge>
            </div>
            <div className="flex items-center gap-2 text-slate-400 text-sm mb-2">
              <MailIcon className="w-4 h-4" />
              <span>alex.smith@email.com</span>
            </div>
            <div className="flex items-center gap-2 text-slate-400 text-sm">
              <CalendarIcon className="w-4 h-4" />
              <span>Member since March 2024</span>
            </div>
          </div>
        </div>

        {/* Edit Level Button */}
        <Button 
          className="w-full mb-4 bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-500 hover:to-blue-500 text-white shadow-lg rounded-xl"
        >
          <BrainIcon className="w-4 h-4 mr-2" />
          Edit Training Level
        </Button>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-700/50">
          <div className="text-center">
            <div className="text-slate-100 mb-1">24</div>
            <div className="text-slate-400 text-xs">Completed</div>
          </div>
          <div className="text-center">
            <div className="text-slate-100 mb-1">12</div>
            <div className="text-slate-400 text-xs">Day Streak</div>
          </div>
          <div className="text-center">
            <div className="text-slate-100 mb-1">8</div>
            <div className="text-slate-400 text-xs">Achievements</div>
          </div>
        </div>
      </Card>

      {/* Achievements */}
      <Card className="p-6 bg-slate-800/50 backdrop-blur-sm border-slate-700/50 shadow-lg mb-6">
        <div className="flex items-center gap-2 mb-4">
          <TrophyIcon className="w-5 h-5 text-amber-400" />
          <h3 className="text-slate-100">Recent Achievements</h3>
        </div>
        
        <div className="space-y-3">
          <div className="flex items-center gap-3 p-3 bg-gradient-to-br from-amber-950/50 to-yellow-950/50 rounded-xl border border-amber-900/50">
            <div className="w-10 h-10 rounded-xl bg-amber-900/60 flex items-center justify-center flex-shrink-0 border border-amber-800/50">
              🏆
            </div>
            <div className="flex-1">
              <p className="text-slate-200 text-sm">First Week</p>
              <p className="text-slate-400 text-xs">Complete 7 days of training</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 bg-gradient-to-br from-indigo-950/50 to-blue-950/50 rounded-xl border border-indigo-900/50">
            <div className="w-10 h-10 rounded-xl bg-indigo-900/60 flex items-center justify-center flex-shrink-0 border border-indigo-800/50">
              🎯
            </div>
            <div className="flex-1">
              <p className="text-slate-200 text-sm">Focus Master</p>
              <p className="text-slate-400 text-xs">Score 90%+ in attention activities</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 bg-gradient-to-br from-purple-950/50 to-pink-950/50 rounded-xl border border-purple-900/50">
            <div className="w-10 h-10 rounded-xl bg-purple-900/60 flex items-center justify-center flex-shrink-0 border border-purple-800/50">
              ⚡
            </div>
            <div className="flex-1">
              <p className="text-slate-200 text-sm">Quick Thinker</p>
              <p className="text-slate-400 text-xs">Improve reaction time by 20%</p>
            </div>
          </div>
        </div>
      </Card>

      {/* Current Goals */}
      <Card className="p-6 bg-slate-800/50 backdrop-blur-sm border-slate-700/50 shadow-lg mb-6">
        <div className="flex items-center gap-2 mb-4">
          <TargetIcon className="w-5 h-5 text-teal-400" />
          <h3 className="text-slate-100">Current Goals</h3>
        </div>
        
        <div className="space-y-4">
          <div>
            <div className="flex justify-between items-center mb-2">
              <p className="text-slate-200 text-sm">Complete 5 activities this week</p>
              <span className="text-slate-400 text-xs">3/5</span>
            </div>
            <Progress value={60} className="h-2" />
          </div>

          <div>
            <div className="flex justify-between items-center mb-2">
              <p className="text-slate-200 text-sm">Improve memory score</p>
              <span className="text-slate-400 text-xs">75%</span>
            </div>
            <Progress value={75} className="h-2" />
          </div>

          <div>
            <div className="flex justify-between items-center mb-2">
              <p className="text-slate-200 text-sm">Maintain daily streak</p>
              <span className="text-slate-400 text-xs">12 days</span>
            </div>
            <Progress value={85} className="h-2" />
          </div>
        </div>
      </Card>

      {/* Settings Menu */}
      <Card className="p-4 bg-slate-800/50 backdrop-blur-sm border-slate-700/50 shadow-lg">
        <button className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-slate-700/50 transition-colors">
          <div className="flex items-center gap-3">
            <SettingsIcon className="w-5 h-5 text-slate-400" />
            <span className="text-slate-200">Settings</span>
          </div>
          <ChevronRightIcon className="w-5 h-5 text-slate-500" />
        </button>
        
        <button className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-slate-700/50 transition-colors">
          <div className="flex items-center gap-3">
            <LogOutIcon className="w-5 h-5 text-slate-400" />
            <span className="text-slate-200">Log Out</span>
          </div>
          <ChevronRightIcon className="w-5 h-5 text-slate-500" />
        </button>
      </Card>
    </div>
  );
}
