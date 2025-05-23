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

function main() {
  const args = process.argv.slice(2).map(Number);
  const userNeed = args[0] ?? 5;
  const threatLevel = args[1] ?? 5;

  console.log(`\n▶ Running Motivator with userNeed=${userNeed}, threatLevel=${threatLevel}`);
  const state = calculateMotivations({ userNeed, threatLevel });
  const action = decide(state);
  console.log(`Motivation Weights:`, state);
  console.log(`⇒ Selected Action:`, action, `\n`);
}

main();