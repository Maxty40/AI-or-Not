import React, { useState } from 'react';
import { Trophy, Award, RotateCcw, CheckCircle2, XCircle, Share2 } from 'lucide-react';
import { RoundResult } from '../types';
import { BOOTH_RANKS } from '../data/quizData';
import { sound } from '../utils/soundEffects';

interface GameOverViewProps {
  roundResults: RoundResult[];
  totalScore: number;
  onPlayAgain: () => void;
}

export const GameOverView: React.FC<GameOverViewProps> = ({
  roundResults,
  totalScore,
  onPlayAgain,
}) => {
  const [copied, setCopied] = useState(false);

  const totalRounds = roundResults.length;
  const correctCount = roundResults.filter((r) => r.isCorrect).length;
  const accuracy = Math.round((correctCount / totalRounds) * 100) || 0;

  // Find rank
  const earnedRank =
    BOOTH_RANKS.find((r) => totalScore >= r.minScore && totalScore <= r.maxScore) ||
    BOOTH_RANKS[BOOTH_RANKS.length - 1];

  return (
    <div id="game-over-screen" className="w-full max-w-3xl mx-auto py-4 px-3 sm:px-4 space-y-6">
      {/* Score Hero Card */}
      <div className="relative rounded-3xl bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 p-6 sm:p-8 text-center shadow-2xl overflow-hidden">
        {/* Glow */}
        <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-64 h-32 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none" />

        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-950/80 border border-indigo-500/40 text-indigo-300 text-xs font-bold mb-3">
          <Trophy className="w-4 h-4 text-amber-400" />
          <span>FINAL SCORE</span>
        </div>

        <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-2">
          Game Over!
        </h2>
        <p className="text-slate-400 text-sm max-w-md mx-auto">
          Terima kasih telah berkunjung ke booth kami! Inilah hasil kemampuan kamu dalam mendeteksi visual AI kamu dalam 5 ronde tantangan:
        </p>

        {/* Main Big Score */}
        <div className="my-6 p-5 sm:p-6 rounded-2xl bg-slate-950/90 border border-slate-800 inline-block min-w-[260px] shadow-inner">
          <span className="text-xs uppercase tracking-widest text-slate-400 font-bold block mb-1">
            Total Skor Kamu
          </span>
          <span className="text-5xl sm:text-6xl font-black bg-gradient-to-r from-cyan-400 via-indigo-300 to-amber-400 bg-clip-text text-transparent">
            {totalScore}
          </span>
          <div className="flex items-center justify-center gap-4 mt-3 pt-3 border-t border-slate-800 text-xs text-slate-300">
            <div>
              <span className="text-slate-500 block">Benar</span>
              <span className="font-bold text-emerald-400">{correctCount} / {totalRounds}</span>
            </div>
            <div className="h-6 w-px bg-slate-800" />
            <div>
              <span className="text-slate-500 block">Akurasi</span>
              <span className="font-bold text-cyan-400">{accuracy}%</span>
            </div>
            <div className="h-6 w-px bg-slate-800" />
            <div>
              <span className="text-slate-500 block">Predikat</span>
              <span className="font-bold text-amber-300">{earnedRank.badge}</span>
            </div>
          </div>
        </div>

        {/* Rank Badge Box */}
        <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 max-w-md mx-auto text-left flex items-start gap-3.5 mb-6">
          <div className="w-10 h-10 rounded-lg bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0 mt-0.5">
            <Award className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h4 className="font-bold text-white text-sm">{earnedRank.title}</h4>
              <span className="text-[11px] font-bold text-amber-400 bg-amber-950 px-2 py-0.5 rounded border border-amber-600/30">
                Gelar Booth
              </span>
            </div>
            <p className="text-xs text-slate-400 mt-1 leading-relaxed">
              {earnedRank.desc}
            </p>
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 mt-4">
          <button
            id="btn-play-again"
            onClick={() => {
              sound.playClick();
              onPlayAgain();
            }}
            className="py-3 px-6 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm shadow-lg shadow-indigo-600/30 flex items-center gap-2 transition-all active:scale-95"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Main Lagi (5 Ronde Baru)</span>
          </button>
        </div>
      </div>

      {/* Recap breakdown of all rounds */}
      <div className="space-y-3">
        <h3 className="text-base font-bold text-white flex items-center gap-2 px-1">
          <span>Rekap Jawaban Tiap Ronde</span>
          <span className="text-xs text-slate-400 font-normal">
            (5 Ronde Tantangan)
          </span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {roundResults.map((r, idx) => (
            <div
              key={idx}
              className={`p-3.5 rounded-xl border flex gap-3 items-center bg-slate-900/80 ${
                r.isCorrect ? 'border-emerald-500/30' : 'border-rose-500/30'
              }`}
            >
              <img
                src={r.item.imageUrl}
                alt={r.item.title}
                referrerPolicy="no-referrer"
                className="w-16 h-16 rounded-lg object-cover border border-slate-800 shrink-0"
              />
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-1">
                  <span className="text-xs font-bold text-slate-200 truncate">
                    Ronde {r.roundNumber}: {r.item.title}
                  </span>
                  {r.isCorrect ? (
                    <span className="text-[10px] font-bold text-emerald-400 flex items-center gap-0.5 shrink-0">
                      <CheckCircle2 className="w-3 h-3" /> Benar
                    </span>
                  ) : (
                    <span className="text-[10px] font-bold text-rose-400 flex items-center gap-0.5 shrink-0">
                      <XCircle className="w-3 h-3" /> Salah
                    </span>
                  )}
                </div>
                <div className="text-[11px] text-slate-400 mt-1 flex items-center justify-between">
                  <span>
                    Asli: <strong className={r.item.isAi ? 'text-indigo-400' : 'text-emerald-400'}>{r.item.isAi ? 'AI' : 'Bukan AI'}</strong>
                  </span>
                  <span className="font-mono text-cyan-400">+{r.pointsEarned} pt</span>
                </div>
                {!r.item.isAi && r.item.source && (
                  <div className="text-[10px] text-emerald-300/90 font-medium truncate mt-0.5">
                    Sumber: <span className="text-white">{r.item.source}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
