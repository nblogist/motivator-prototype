// src/lib/motivator.ts
export type Motivation = 'helpUser' | 'explore' | 'avoid';

export interface MotivationState {
  helpUser: number;
  explore: number;
  avoid: number;
}

export function calculateMotivations(input: { userNeed: number; threatLevel: number }): MotivationState {
  return {
    helpUser: input.userNeed * 1.2,
    explore: Math.max(0, 10 - input.userNeed - input.threatLevel),
    avoid: input.threatLevel * 1.5,
  };
}

export function decide(state: MotivationState): Motivation {
  const sorted = Object.entries(state).sort((a, b) => b[1] - a[1]);
  return sorted[0][0] as Motivation;
}
