import React from 'react';
import { Timer, AlertTriangle } from 'lucide-react';

interface TimerBarProps {
  timeLeft: number; // 0 to 30
  maxTime?: number; // default 30
}

export const TimerBar: React.FC<TimerBarProps> = ({ timeLeft, maxTime = 30 }) => {
  const percentage = Math.max(0, Math.min(100, (timeLeft / maxTime) * 100));
  const isUrgent = timeLeft <= 5;
  const isWarning = timeLeft <= 12 && timeLeft > 5;

  let barColor = 'bg-gradient-to-r from-cyan-500 to-indigo-500';
  let badgeColor = 'text-cyan-300 border-cyan-500/30 bg-cyan-950/40';

  if (isUrgent) {
    barColor = 'bg-gradient-to-r from-red-600 to-rose-500';
    badgeColor = 'text-rose-400 border-rose-500/50 bg-rose-950/60 animate-pulse';
  } else if (isWarning) {
    barColor = 'bg-gradient-to-r from-amber-500 to-orange-500';
    badgeColor = 'text-amber-300 border-amber-500/40 bg-amber-950/50';
  }

  return (
    <div id="timer-bar-container" className="w-full space-y-1.5">
      <div className="flex items-center justify-between text-xs font-semibold px-1">
        <div className="flex items-center gap-1.5 text-slate-300">
          <Timer className={`w-3.5 h-3.5 ${isUrgent ? 'text-rose-400 animate-spin' : 'text-cyan-400'}`} />
          <span>Waktu Tebak:</span>
        </div>

        <div className={`flex items-center gap-1 px-2 py-0.5 rounded-full border text-xs font-mono font-bold ${badgeColor}`}>
          {isUrgent && <AlertTriangle className="w-3 h-3 text-rose-400" />}
          <span>{timeLeft}s</span>
          <span className="text-[10px] text-slate-400 font-normal">/ 30s</span>
        </div>
      </div>

      {/* Track bar */}
      <div className="w-full h-2.5 bg-slate-950 rounded-full overflow-hidden border border-slate-800 p-0.5">
        <div
          className={`h-full rounded-full transition-all duration-300 ease-linear ${barColor}`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};
