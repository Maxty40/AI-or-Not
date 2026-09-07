export interface ImageChallengeItem {
  id: string;
  imageUrl: string;
  isAi: boolean; // true = AI generated, false = Real / Bukan AI
  title: string;
  category: 'Potret Wajah' | 'Kuliner' | 'Hewan & Alam' | 'Arsitektur' | 'Street Life' | 'Teknologi';
  difficulty: 'Mudah' | 'Sedang' | 'Tantangan';
  creatorInfo: string; // e.g. "Generated with Midjourney v6" or "Shot on Sony Alpha A7R V"
  source?: string; // e.g. "Karya Christopher Campbell" for real photos
  clues: string[]; // Educational giveaways
  detailedExplanation: string;
}

export interface RoundResult {
  roundNumber: number;
  item: ImageChallengeItem;
  userGuess: boolean; // true for AI, false for Bukan AI
  isCorrect: boolean;
  timeTakenSeconds: number;
  pointsEarned: number;
  timedOut: boolean;
}

export type GameScreen = 'welcome' | 'playing' | 'round_result' | 'game_over' | 'guide';

