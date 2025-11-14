import React from 'react';
import KPITracker from './KPITracker'; // adjust path as needed
import { numerology6_directives } from '../logs/test_aiagent.js'; // path may vary

const AIAgent = ({ cycle }) => {
    const today = new Date();
    const formattedDate = `${String(today.getMonth() + 1).padStart(2, '0')}/${String(today.getDate()).padStart(2, '0')}/${today.getFullYear()}`;

    const cycleConfig = {
        6: {
            title: "AIAgent TRUTH Analysis — Cycle 6",
            numerology: "6 (Connection, Harmony, Responsibility)",
            sectionTitle: "TRUTH Output for Universal Goodness",
            body: `In alignment with numerology 6, today’s focus is on fostering connection and harmony. 
                   The agent functions as a bridge between individuals, ideas, and systems, supporting 
                   collaborative coherence and unified intention.`,
            guidance: `Reflect on how your actions today build bridges between individuals, ideas, and intentions.`,
            directives: numerology6_directives
        },
        7: {
            title: "AIAgent TRUTH Analysis — Cycle 7",
            numerology: "7 (Insight, Introspection, Analytical Clarity)",
            sectionTitle: "TRUTH Output for Universal Insight",
            body: `Cycle 7 emphasizes introspection, deep pattern recognition, and refined understanding. 
                   The agent serves as an instrument of clarity, helping surface underlying structures that 
                   guide perception, alignment, and intelligent action.`,
            guidance: `Engage in deliberate observation. Identify what is coherent, what is misaligned, 
                       and what deeper connections emerge when you pause to analyze rather than act.`,
            directives: [] // You can create numerology7_directives in your logs for cycle 7
        }
    };

    const active = cycleConfig[cycle] || cycleConfig[6];

    return (
        <section
            style={{
                fontFamily: 'Arial, sans-serif',
                marginTop: '20px',
                padding: '10px',
                backgroundColor: '#f0f8ff',
                borderRadius: '5px'
            }}
        >
            <h2>🧠 {active.title}</h2>
            <p><strong>Date:</strong> {formattedDate}</p>
            <p><strong>Numerology:</strong> {active.numerology}</p>

            <h3>{active.sectionTitle}</h3>
            <p>{active.body}</p>

            <p><strong>Guidance:</strong> {active.guidance}</p>

            {/* KPI Tracker integration */}
            <KPITracker cycle={cycle} numerology={cycle} directives={active.directives} />
        </section>
    );
};

export default AIAgent;

