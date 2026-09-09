import React, { useEffect } from 'react';
import { Bot, Camera } from 'lucide-react';
import { sound } from '../utils/soundEffects';

interface ChoiceButtonsProps {
  onSelect: (isAiGuess: boolean) => void;
  disabled?: boolean;
}

export const ChoiceButtons: React.FC<ChoiceButtonsProps> = ({ onSelect, disabled = false }) => {
  // Keyboard shortcut listener for booth exhibition ease
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (disabled) return;
      if (e.key === '1' || e.key === 'ArrowLeft') {
        sound.playClick();
        onSelect(true);
      } else if (e.key === '2' || e.key === 'ArrowRight') {
        sound.playClick();
        onSelect(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onSelect, disabled]);

  const handleChoice = (isAi: boolean) => {
    if (disabled) return;
    sound.playClick();
    onSelect(isAi);
  };

  return (
    <div id="choice-buttons-section" className="w-full mt-4 space-y-2.5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
        {/* Button 1: AI */}
        <button
          id="btn-choice-ai"
          onClick={() => handleChoice(true)}
          disabled={disabled}
          className="group relative flex items-center justify-between p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-indigo-950/80 to-purple-950/70 hover:from-indigo-900/90 hover:to-purple-900/80 border-2 border-indigo-500/40 hover:border-indigo-400 active:scale-[0.98] transition-all shadow-lg hover:shadow-indigo-500/20 disabled:opacity-50 disabled:pointer-events-none text-left"
        >
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-xl bg-indigo-600/30 border border-indigo-400/40 flex items-center justify-center text-indigo-300 group-hover:scale-110 group-hover:bg-indigo-600/50 transition-all">
              <Bot className="w-6 h-6 text-indigo-300" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xl sm:text-2xl font-black text-white tracking-tight">
                  AI
                </span>
              </div>
              <p className="text-xs text-indigo-200/70 mt-0.5">
                Dibuat oleh Generatif AI
              </p>
            </div>
          </div>

          <div className="hidden sm:flex flex-col items-end">
            <span className="text-[10px] font-mono text-indigo-400/80 bg-indigo-950/90 px-2 py-0.5 rounded border border-indigo-800/60">
              Tombol [ 1 ]
            </span>
          </div>
        </button>

        {/* Button 2: Bukan AI */}
        <button
          id="btn-choice-not-ai"
          onClick={() => handleChoice(false)}
          disabled={disabled}
          className="group relative flex items-center justify-between p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-emerald-950/80 to-teal-950/70 hover:from-emerald-900/90 hover:to-teal-900/80 border-2 border-emerald-500/40 hover:border-emerald-400 active:scale-[0.98] transition-all shadow-lg hover:shadow-emerald-500/20 disabled:opacity-50 disabled:pointer-events-none text-left"
        >
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-xl bg-emerald-600/30 border border-emerald-400/40 flex items-center justify-center text-emerald-300 group-hover:scale-110 group-hover:bg-emerald-600/50 transition-all">
              <Camera className="w-6 h-6 text-emerald-300" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xl sm:text-2xl font-black text-white tracking-tight">
                  Bukan AI
                </span>
              </div>
              <p className="text-xs text-emerald-200/70 mt-0.5">
                Fotografi / ilustrasi nyata
              </p>
            </div>
          </div>

          <div className="hidden sm:flex flex-col items-end">
            <span className="text-[10px] font-mono text-emerald-400/80 bg-emerald-950/90 px-2 py-0.5 rounded border border-emerald-800/60">
              Tombol [ 2 ]
            </span>
          </div>
        </button>
      </div>

      <div className="text-center text-[11px] text-slate-400">
        <span className="text-slate-300 font-medium">Tips:</span> Klik tombol di layar atau gunakan tombol <kbd className="px-1.5 py-0.5 bg-slate-800 border border-slate-700 rounded text-slate-300 font-mono">1</kbd> / <kbd className="px-1.5 py-0.5 bg-slate-800 border border-slate-700 rounded text-slate-300 font-mono">2</kbd> pada keyboard.
      </div>
    </div>
  );
};
