import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Play, Eye, Zap, Cpu, Users, Target } from 'lucide-react';
import { ImageChallengeItem, RoundResult, GameScreen } from './types';
import { QUIZ_ITEMS } from './data/quizData';
import { BoothHeader } from './components/BoothHeader';
import { TimerBar } from './components/TimerBar';
import { ImageChallenge } from './components/ImageChallenge';
import { ChoiceButtons } from './components/ChoiceButtons';
import { RoundFeedbackModal } from './components/RoundFeedbackModal';
import { GameOverView } from './components/GameOverView';
import { CampusGuideModal } from './components/CampusGuideModal';
import { sound } from './utils/soundEffects';

const MAX_ROUND_SECONDS = 30;
const FIXED_ROUNDS_COUNT = 5;

export default function App() {
  // Game session states
  const [screen, setScreen] = useState<GameScreen>('welcome');
  const [shuffledItems, setShuffledItems] = useState<ImageChallengeItem[]>([]);
  const [currentRoundIndex, setCurrentRoundIndex] = useState<number>(0);
  const [timeLeft, setTimeLeft] = useState<number>(MAX_ROUND_SECONDS);
  const [score, setScore] = useState<number>(0);
  const [streak, setStreak] = useState<number>(0);
  const [roundResults, setRoundResults] = useState<RoundResult[]>([]);
  const [currentRoundResult, setCurrentRoundResult] = useState<RoundResult | null>(null);

  // Modals & Settings
  const [isAudioOn, setIsAudioOn] = useState<boolean>(true);
  const [showGuide, setShowGuide] = useState<boolean>(false);

  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Toggle audio
  const handleToggleAudio = () => {
    sound.enabled = !isAudioOn;
    setIsAudioOn(!isAudioOn);
  };

  // Helper to shuffle quiz questions (Fisher-Yates)
  const getRandomizedItems = (count: number): ImageChallengeItem[] => {
    const array = [...QUIZ_ITEMS];
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array.slice(0, count);
  };

  // Start new game (locked strictly to 5 rounds)
  const handleStartGame = () => {
    sound.playClick();
    const items = getRandomizedItems(FIXED_ROUNDS_COUNT);
    setShuffledItems(items);
    setCurrentRoundIndex(0);
    setTimeLeft(MAX_ROUND_SECONDS);
    setScore(0);
    setStreak(0);
    setRoundResults([]);
    setCurrentRoundResult(null);
    setScreen('playing');
  };

  // Timer countdown handler during 'playing'
  useEffect(() => {
    if (screen !== 'playing') {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          // Timeout reached!
          if (timerRef.current) clearInterval(timerRef.current);
          handleTimeOut();
          return 0;
        }

        // Play warning tick for last 5 seconds
        if (prev <= 6) {
          sound.playTick(true);
        }

        return prev - 1;
      });
    }, 1000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [screen, currentRoundIndex]);

  // Handle Timeout (30 seconds expired without answer)
  const handleTimeOut = useCallback(() => {
    if (screen !== 'playing') return;
    sound.playWrong();

    const currentItem = shuffledItems[currentRoundIndex];
    if (!currentItem) return;

    const result: RoundResult = {
      roundNumber: currentRoundIndex + 1,
      item: currentItem,
      userGuess: !currentItem.isAi, // default mismatch
      isCorrect: false,
      timeTakenSeconds: MAX_ROUND_SECONDS,
      pointsEarned: 0,
      timedOut: true,
    };

    setStreak(0);
    setCurrentRoundResult(result);
    setRoundResults((prev) => [...prev, result]);
    setScreen('round_result');
  }, [screen, currentRoundIndex, shuffledItems]);

  // Handle user guess ("AI" or "Bukan AI")
  const handleGuess = (isAiGuess: boolean) => {
    if (screen !== 'playing') return;
    if (timerRef.current) clearInterval(timerRef.current);

    const currentItem = shuffledItems[currentRoundIndex];
    if (!currentItem) return;

    const timeTaken = MAX_ROUND_SECONDS - timeLeft;
    const isCorrect = isAiGuess === currentItem.isAi;

    let roundPoints = 0;
    if (isCorrect) {
      sound.playCorrect();
      // Base points: 100
      // Speed bonus: up to 60 points based on remaining seconds
      // Streak bonus: +20 points per current streak
      const basePoints = 100;
      const speedBonus = timeLeft * 2;
      const streakBonus = streak * 20;
      roundPoints = basePoints + speedBonus + streakBonus;

      setScore((prev) => prev + roundPoints);
      setStreak((prev) => prev + 1);
    } else {
      sound.playWrong();
      setStreak(0);
    }

    const result: RoundResult = {
      roundNumber: currentRoundIndex + 1,
      item: currentItem,
      userGuess: isAiGuess,
      isCorrect,
      timeTakenSeconds: timeTaken,
      pointsEarned: roundPoints,
      timedOut: false,
    };

    setCurrentRoundResult(result);
    setRoundResults((prev) => [...prev, result]);
    setScreen('round_result');
  };

  // Next round transition
  const handleNextRound = () => {
    const nextIndex = currentRoundIndex + 1;
    if (nextIndex < shuffledItems.length) {
      setCurrentRoundIndex(nextIndex);
      setTimeLeft(MAX_ROUND_SECONDS);
      setCurrentRoundResult(null);
      setScreen('playing');
    } else {
      // Game Over after 5 rounds
      sound.playGameOver();
      setScreen('game_over');
    }
  };

  const currentItem = shuffledItems[currentRoundIndex];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Booth Navigation & Stats Header */}
      <BoothHeader
        score={score}
        streak={streak}
        isAudioOn={isAudioOn}
        onToggleAudio={handleToggleAudio}
        onOpenGuide={() => setShowGuide(true)}
        onResetToWelcome={() => setScreen('welcome')}
        currentRound={currentRoundIndex + 1}
        totalRounds={FIXED_ROUNDS_COUNT}
        isPlaying={screen === 'playing'}
      />

      {/* Main Game Stage Area */}
      <main className="flex-1 max-w-5xl w-full mx-auto p-4 sm:p-6 flex flex-col items-center justify-center">
        {/* Screen 1: Welcome & Booth Entrance */}
        {screen === 'welcome' && (
          <div id="welcome-screen" className="w-full max-w-2xl py-4 space-y-6 text-center animate-in fade-in zoom-in-95 duration-200">
            {/* Campus tech banner */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 border border-slate-700/80 text-cyan-300 text-xs font-semibold shadow-inner">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>Booth Interaktif GDGoC STT Terpadu Nurul Fikri</span>
            </div>

            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-white">
                Mini-Game:{' '}
                <span className="bg-gradient-to-r from-cyan-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">
                  AI or Not?
                </span>
              </h1>
              <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
                Tantang ketajaman matamu membedakan jepretan kamera asli <b>vs</b> ilustrasi nyata <b>vs</b> citra hasil generasi AI dalam format tantangan cepat 5 ronde!
              </p>
            </div>

            {/* Feature Cards Showcase */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-left">
              <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-start gap-3">
                <div className="p-2 rounded-xl bg-cyan-950 border border-cyan-500/30 text-cyan-400 shrink-0">
                  <Eye className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white">Gambar Acak</h4>
                  <p className="text-[11px] text-slate-400 mt-0.5">
                    Analisis satu foto per ronde dengan fitur kaca pembesar.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-start gap-3">
                <div className="p-2 rounded-xl bg-amber-950 border border-amber-500/30 text-amber-400 shrink-0">
                  <Zap className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white">Latih Ketangkasan</h4>
                  <p className="text-[11px] text-slate-400 mt-0.5">
                    Timer hitung mundur cepat. Makin cepat tebak tepat, poin makin tinggi.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-start gap-3">
                <div className="p-2 rounded-xl bg-purple-950 border border-purple-500/30 text-purple-400 shrink-0">
                  <Cpu className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white">Tebak Gambarnya</h4>
                  <p className="text-[11px] text-slate-400 mt-0.5">
                    Pilih "AI" atau "Bukan AI" disertai sumber dan pembahasan edukatif.
                  </p>
                </div>
              </div>
            </div>

            {/* Locked 5 Rounds Notice */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900/90 border border-indigo-500/30 text-indigo-300 text-xs font-semibold">
              <span>Format Tantangan: <strong className="text-white font-bold">5 Ronde Penuh Kejutan</strong></span>
            </div>

            {/* Start Button */}
            <div className="pt-2">
              <button
                id="btn-start-game"
                onClick={handleStartGame}
                className="w-full sm:w-auto px-10 py-4 rounded-2xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 text-white font-extrabold text-base sm:text-lg shadow-xl shadow-indigo-500/30 flex items-center justify-center gap-3 mx-auto transition-all active:scale-95 group"
              >
                <Play className="w-5 h-5 fill-white group-hover:translate-x-0.5 transition-transform" />
                <span>Mulai Tantangan (5 Ronde)</span>
              </button>
            </div>
          </div>
        )}

        {/* Screen 2: Active Gameplay (1 Image + 30s Timer + Two Buttons) */}
        {(screen === 'playing' || screen === 'round_result') && currentItem && (
          <div id="gameplay-container" className="w-full max-w-3xl flex flex-col items-center animate-in fade-in duration-150">
            {/* 30 Seconds Timer Bar */}
            <div className="w-full mb-3">
              <TimerBar timeLeft={timeLeft} maxTime={MAX_ROUND_SECONDS} />
            </div>

            {/* The Single Challenge Image for this round */}
            <ImageChallenge
              item={currentItem}
              roundNumber={currentRoundIndex + 1}
            />

            {/* The Two Choice Buttons: "AI" and "Bukan AI" */}
            <ChoiceButtons
              onSelect={handleGuess}
              disabled={screen === 'round_result'}
            />

            {/* Instant Feedback Modal after answering or timeout */}
            {screen === 'round_result' && currentRoundResult && (
              <RoundFeedbackModal
                result={currentRoundResult}
                onNext={handleNextRound}
                isLastRound={currentRoundIndex + 1 >= FIXED_ROUNDS_COUNT}
              />
            )}
          </div>
        )}

        {/* Screen 3: Game Over & Final Score */}
        {screen === 'game_over' && (
          <GameOverView
            roundResults={roundResults}
            totalScore={score}
            onPlayAgain={handleStartGame}
          />
        )}
      </main>

      {/* Guide Modal */}
      {showGuide && (
        <CampusGuideModal onClose={() => setShowGuide(false)} />
      )}

      {/* Footer */}
      <footer className="w-full py-3 px-4 border-t border-slate-900 bg-slate-950 text-center text-xs text-slate-500">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-2">
          <p>
            Dibuat oleh Mahasiswa Gabut Kebelet Ngoding (Padahal Nggak Bisa Ngoding)
          </p>
        </div>
      </footer>
    </div>
  );
}
