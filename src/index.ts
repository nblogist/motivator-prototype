// Define possible motivations
type Motivation = 'helpUser' | 'explore' | 'avoid';

// Interface for the internal state of motivations
interface MotivationState {
  helpUser: number;
  explore: number;
  avoid: number;
}

// Calculate raw motivation weights based on input signals
function calculateMotivations(input: { userNeed: number; threatLevel: number }): MotivationState {
  return {
    helpUser: input.userNeed * 1.2,
    explore: Math.max(0, 10 - input.userNeed - input.threatLevel),
    avoid: input.threatLevel * 1.5,
  };
}

// Decide which motivation is strongest
function decide(state: MotivationState): Motivation {
  const sorted = Object.entries(state).sort((a, b) => b[1] - a[1]);
  return sorted[0][0] as Motivation;
}

// Example simulation
const input = { userNeed: 7, threatLevel: 3 };
const state = calculateMotivations(input);
const action = decide(state);

console.log('Input Signals:', input);
console.log('Motivation Weights:', state);
console.log('Selected Action:', action);