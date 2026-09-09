import React from 'react';
import { Volume2, VolumeX, BookOpen, Sparkles, Flame } from 'lucide-react';
import { sound } from '../utils/soundEffects';

interface BoothHeaderProps {
  score: number;
  streak: number;
  isAudioOn: boolean;
  onToggleAudio: () => void;
  onOpenGuide: () => void;
  onResetToWelcome: () => void;
  currentRound?: number;
  totalRounds?: number;
  isPlaying?: boolean;
}

export const BoothHeader: React.FC<BoothHeaderProps> = ({
  score,
  streak,
  isAudioOn,
  onToggleAudio,
  onOpenGuide,
  onResetToWelcome,
  currentRound,
  totalRounds,
  isPlaying = false,
}) => {
  const [logoFailed, setLogoFailed] = React.useState(false);

  return (
    <header id="booth-header" className="w-full bg-slate-900/90 backdrop-blur-md border-b border-slate-800 sticky top-0 z-40 px-4 py-3 sm:px-6">
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-3">
        {/* Left: Branding */}
        <button
          id="brand-logo-btn"
          onClick={onResetToWelcome}
          className="flex items-center gap-2.5 text-left group transition-transform active:scale-95"
        >
          <div className="w-9 h-9 rounded-xl flex items-center justify-center">
            {logoFailed ? (
              <Sparkles className="w-4 h-4 text-cyan-400 group-hover:rotate-12 transition-transform" />
            ) : (
              <img
                src="/assets/logo/logo.png"
                alt="Logo AI or Not"
                className="w-full object-cover"
                onError={() => setLogoFailed(true)}
              />
            )}
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-black text-white text-base sm:text-lg tracking-tight">AI or Not?</span>
              <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                ORMIK '26
              </span>
            </div>
            <p className="text-[11px] text-slate-400 hidden sm:block">
              Google Developer Groups on Campus • STT Terpadu Nurul Fikri
            </p>
          </div>
        </button>

        {/* Center: Gameplay Round & Score info if playing */}
        {isPlaying && currentRound && totalRounds && (
          <div id="gameplay-stats-center" className="flex items-center gap-3 sm:gap-5 bg-slate-950/70 border border-slate-800/80 px-3.5 py-1.5 rounded-full">
            <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-300">
              <span className="text-slate-400">Ronde</span>
              <span className="text-cyan-400 font-bold">{currentRound}</span>
              <span className="text-slate-600">/</span>
              <span>{totalRounds}</span>
            </div>

            <div className="h-3 w-px bg-slate-800" />

            <div className="flex items-center gap-1.5 text-xs font-semibold">
              <span className="text-slate-400">Skor:</span>
              <span className="text-amber-400 font-extrabold text-sm">{score}</span>
            </div>

            {streak >= 2 && (
              <div className="hidden md:flex items-center gap-1 text-[11px] font-bold text-orange-400 bg-orange-950/60 border border-orange-500/40 px-2 py-0.5 rounded-full animate-pulse">
                <Flame className="w-3 h-3 text-orange-400" />
                <span>Streak {streak}x!</span>
              </div>
            )}
          </div>
        )}

        {/* Right: Sound & Guide */}
        <div id="header-action-buttons" className="flex items-center gap-1.5 sm:gap-2">
          <button
            id="guide-btn"
            onClick={() => {
              sound.playClick();
              onOpenGuide();
            }}
            title="Tips Deteksi AI"
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-white bg-slate-800/60 hover:bg-slate-800 border border-slate-700/60 rounded-lg transition-colors"
          >
            <BookOpen className="w-3.5 h-3.5 text-indigo-400" />
            <span className="hidden sm:inline">Tips Deteksi</span>
          </button>

          <button
            id="sound-toggle-btn"
            onClick={() => {
              onToggleAudio();
              sound.playClick();
            }}
            aria-label={isAudioOn ? "Matikan Suara" : "Aktifkan Suara"}
            title={isAudioOn ? "Suara Aktif" : "Suara Hening"}
            className="p-1.5 text-slate-400 hover:text-white bg-slate-800/60 hover:bg-slate-800 border border-slate-700/60 rounded-lg transition-colors"
          >
            {isAudioOn ? <Volume2 className="w-4 h-4 text-cyan-400" /> : <VolumeX className="w-4 h-4 text-slate-500" />}
          </button>
        </div>
      </div>
    </header>
  );
};
