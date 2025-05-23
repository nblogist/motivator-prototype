#!/usr/bin/env bash


# 1) High user demand (e.g. urgent customer support)
echo "Scenario 1: Urgent support request (userNeed=9, threatLevel=2)"
npm start -- 9 2

# 2) Security alert (e.g. service under attack)
echo "Scenario 2: Security threat (userNeed=2, threatLevel=9)"
npm start -- 2 9

# 3) Normal operation (balanced signals)
echo "Scenario 3: Regular operation (userNeed=5, threatLevel=5)"
npm start -- 5 5

# 4) Real-world: Virtual assistant “off-hours” cleanup
#    - No active user requests
#    - Low threat
#    Agent should explore (e.g. index new emails, prefetch data)
echo "Scenario 4: Off-hours maintenance (userNeed=0, threatLevel=1)"
npm start -- 0 1

# 5) Real-world: Factory robot encountering moderate risk
#    - Low userNeed (no direct commands)
#    - Moderate threats (moving machinery nearby)
#    Agent should prioritize avoidance
echo "Scenario 5: Warehouse risk assessment (userNeed=1, threatLevel=6)"
npm start -- 1 6