// ui/src/pages/index.tsx
import Head from 'next/head'
import { useState } from 'react'
import {
  calculateMotivations,
  decide,
  MotivationState,
  Motivation
} from '../lib/motivator'

const scenarios = [
  { label: 'Urgent support request', userNeed: 9, threatLevel: 2 },
  { label: 'Security threat',         userNeed: 2, threatLevel: 9 },
  { label: 'Regular operation',       userNeed: 5, threatLevel: 5 },
  { label: 'Off-hours maintenance',   userNeed: 0, threatLevel: 1 },
  { label: 'Warehouse risk assessment', userNeed: 1, threatLevel: 6 },
]

const emojiMap: Record<Motivation, string> = {
  helpUser: '🤝',
  explore: '🔍',
  avoid: '🛡️',
}

export default function Home() {
  const [userNeed, setUserNeed] = useState(5)
  const [threatLevel, setThreatLevel] = useState(5)
  const [state, setState] = useState<MotivationState | null>(null)
  const [action, setAction] = useState<Motivation | null>(null)

  const run = (u = userNeed, t = threatLevel) => {
    const s = calculateMotivations({ userNeed: u, threatLevel: t })
    setState(s)
    setAction(decide(s))
  }

  const onScenarioChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const sel = scenarios.find(s => s.label === e.target.value)
    if (sel) {
      setUserNeed(sel.userNeed)
      setThreatLevel(sel.threatLevel)
      run(sel.userNeed, sel.threatLevel)
    }
  }

  return (
    <>
      <Head>
        <title>Motivator Demo — AGI Motivation Engine Prototype</title>
        <meta
          name="description"
          content="Interactive demo for the Motivator AGI Motivation Engine Prototype, built for the DeepFunding RFP 'Develop a Framework for AGI Motivation Systems.'"
        />
      </Head>

      <div style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#f7f7f7',
        fontFamily: '"Segoe UI", sans-serif',
        color: '#333',
        padding: '20px'
      }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>
          Motivator Demo
        </h1>

        <p style={{ marginBottom: '1rem', textAlign: 'center', maxWidth: 400 }}>
          Part of the DeepFunding RFP: “Develop a Framework for AGI Motivation Systems.”  
          <a
            href="https://deepfunding.ai/rfp/develop-a-framework-for-agi-motivation-systems-2/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#0070f3', textDecoration: 'none' }}
          >View RFP</a>
        </p>

        <div style={{ marginBottom: '1.5rem' }}>
          <label htmlFor="scenario" style={{ fontSize: '1.1rem' }}>
            Preset Scenarios:&nbsp;
          </label>
          <select
            id="scenario"
            onChange={onScenarioChange}
            style={{ padding: '6px', fontSize: '1rem' }}
          >
            <option value="">— choose scenario —</option>
            {scenarios.map(s => (
              <option key={s.label} value={s.label}>
                {s.label}
              </option>
            ))}
          </select>
        </div>

        {/* Sliders */}
        <div style={{ width: '300px', marginBottom: '1rem' }}>
          <label style={{ fontSize: '1.1rem' }}>User Need: {userNeed}</label>
          <input
            type="range" min="0" max="10" value={userNeed}
            onChange={e => setUserNeed(+e.target.value)}
            style={{ width: '100%' }}
          />
        </div>
        <div style={{ width: '300px', marginBottom: '1.5rem' }}>
          <label style={{ fontSize: '1.1rem' }}>
            Threat Level: {threatLevel}
          </label>
          <input
            type="range" min="0" max="10" value={threatLevel}
            onChange={e => setThreatLevel(+e.target.value)}
            style={{ width: '100%' }}
          />
        </div>

        <button
          onClick={() => run()}
          style={{
            padding: '0.75rem 1.5rem',
            fontSize: '1rem',
            border: 'none',
            borderRadius: '5px',
            background: '#0070f3',
            color: 'white',
            cursor: 'pointer',
            marginBottom: '2rem'
          }}
        >
          Run
        </button>

        {state && action && (
          <div style={{ textAlign: 'center', lineHeight: 1.4 }}>
            <div style={{ fontSize: '4rem' }}>{emojiMap[action]}</div>
            <p style={{ fontSize: '1.25rem', margin: '0.5rem 0' }}>
              <strong>Action:</strong> {action}
            </p>
            <p style={{ fontSize: '1rem', color: '#555' }}>
              Weights: helpUser={state.helpUser.toFixed(1)}, explore=
              {state.explore.toFixed(1)}, avoid={state.avoid.toFixed(1)}
            </p>
          </div>
        )}

        <footer style={{
          marginTop: '3rem',
          fontSize: '0.9rem',
          color: '#888',
          textAlign: 'center'
        }}>
          Author: <strong>Furqan Ahmed</strong><br />
          Made in Pakistan with ❤️
        </footer>
      </div>
    </>
  )
}
