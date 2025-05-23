# Motivator Prototype

This is a minimal working prototype of a motivation engine for digital agents.  
It simulates how an agent might shift priorities like “help user,” “explore,” or “avoid risk” based on dynamic internal and external conditions.

## How it works

- Motivations are assigned weights.
- External inputs (like `userNeed`, `threatLevel`, etc.) shift these weights.
- The agent selects the highest-weighted motivation as its current action.

## Example Use Case

A chatbot can decide whether to:
- answer the user (if userNeed is high),
- explore new data sources (if idle),
- or stay idle (if threatLevel is high).

## Getting Started

1. Clone the repo: `git clone https://github.com/nblogist/motivator-prototype.git`
2. Install dependencies: `npm install`
3. Run the prototype: `npm start`

## Interactive Demo

You can try different inputs right now:

# default (userNeed=5, threatLevel=5)
npm start

# high help demand
npm start -- 9 2

# exploration mode
npm start -- 2 1

# danger zone
npm start -- 3 9

# Demo
You can also run `./demo.sh` to see three example scenarios.
note: pls make it executable `chmod +x demo.sh` before running it.

## License

GNU GPL v3
