import React, { useEffect } from 'react';
import { CheckCircle2, XCircle, Clock, ArrowRight, Check, Sparkles } from 'lucide-react';
import { RoundResult } from '../types';
import { sound } from '../utils/soundEffects';

interface RoundFeedbackModalProps {
  result: RoundResult;
  onNext: () => void;
  isLastRound: boolean;
}

export const RoundFeedbackModal: React.FC<RoundFeedbackModalProps> = ({
  result,
  onNext,
  isLastRound,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        sound.playClick();
        onNext();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onNext]);

  const { item, isCorrect, timedOut, userGuess, pointsEarned, timeTakenSeconds } = result;

  return (
    <div
      id="feedback-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200"
    >
      <div
        id="feedback-card"
        className="w-full max-w-lg bg-slate-900 border border-slate-700/80 rounded-2xl p-5 sm:p-6 shadow-2xl relative overflow-hidden"
      >
        {/* Top ambient glow */}
        <div
          className={`absolute -top-12 left-1/2 -translate-x-1/2 w-48 h-20 blur-3xl pointer-events-none rounded-full ${
            isCorrect ? 'bg-emerald-500/30' : 'bg-rose-500/30'
          }`}
        />

        {/* Status Header */}
        <div className="flex items-center gap-3 mb-4">
          <div
            className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${
              isCorrect
                ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                : timedOut
                ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
                : 'bg-rose-500/20 text-rose-400 border border-rose-500/30'
            }`}
          >
            {isCorrect ? (
              <CheckCircle2 className="w-7 h-7" />
            ) : timedOut ? (
              <Clock className="w-7 h-7" />
            ) : (
              <XCircle className="w-7 h-7" />
            )}
          </div>

          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-black text-white">
                {isCorrect
                  ? 'Tebakanmu Tepat! 🎉'
                  : timedOut
                  ? 'Waktu 30 Detik Habis! ⏱️'
                  : 'Kurang Tepat! 🧐'}
              </h3>
            </div>
            <p className="text-xs text-slate-400">
              {isCorrect
                ? `Hebat! Kamu menjawab dalam ${timeTakenSeconds} detik (+${pointsEarned} poin).`
                : timedOut
                ? 'Waktu habis sebelum kamu memilih.'
                : `Kamu memilih ${userGuess ? 'AI' : 'Bukan AI'}, padahal gambar ini sebenarnya ${item.isAi ? 'AI' : 'Bukan AI'}.`}
            </p>
          </div>
        </div>

        {/* The Real Truth Card */}
        <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2 mb-4">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <span className="text-xs font-semibold text-slate-400">Status Sebenarnya:</span>
            <span
              className={`text-xs font-extrabold px-2.5 py-0.5 rounded-full border ${
                item.isAi
                  ? 'bg-indigo-950 text-indigo-300 border-indigo-500/40'
                  : 'bg-emerald-950 text-emerald-300 border-emerald-500/40'
              }`}
            >
              {item.isAi ? '🤖 HASIL GENERASI AI' : '📷 FOTO ASLI (BUKAN AI)'}
            </span>
          </div>

          {/* Sumber Foto Asli */}
          {!item.isAi && item.source && (
            <div className="flex items-center gap-2 px-2.5 py-1 rounded-lg bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 text-xs font-bold">
              <span>Sumber:</span>
              <span className="text-white underline decoration-emerald-400/60 font-semibold">{item.source}</span>
            </div>
          )}

          <p className="text-xs text-slate-300 font-medium">
            {item.creatorInfo}
          </p>

          <p className="text-xs text-slate-400 leading-relaxed pt-1 border-t border-slate-800/80">
            {item.detailedExplanation}
          </p>
        </div>

        {/* Educational Clues List */}
        <div className="space-y-1.5 mb-5">
          <div className="flex items-center gap-1.5 text-xs font-semibold text-cyan-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Petunjuk Deteksi Gambar Ini:</span>
          </div>
          <ul className="space-y-1.5 text-xs text-slate-300">
            {item.clues.map((clue, idx) => (
              <li key={idx} className="flex items-start gap-2 bg-slate-800/40 px-2.5 py-1.5 rounded-lg border border-slate-700/50">
                <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                <span>{clue}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Action Button */}
        <button
          id="btn-next-round"
          onClick={() => {
            sound.playClick();
            onNext();
          }}
          className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 text-white font-bold text-sm shadow-lg shadow-indigo-500/25 flex items-center justify-center gap-2 transition-all active:scale-[0.98]"
        >
          <span>{isLastRound ? 'Lihat Skor Akhir' : 'Lanjut ke Ronde Berikutnya'}</span>
          <ArrowRight className="w-4 h-4" />
          <span className="text-[11px] font-mono opacity-75 ml-1 hidden sm:inline">(Tekan Spasi / Enter)</span>
        </button>
      </div>
    </div>
  );
};
