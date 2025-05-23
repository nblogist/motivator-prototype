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

## License

GNU GPL v3
