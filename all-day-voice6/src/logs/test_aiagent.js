// test_aiagent.js
// Directive registry consumed by all-day-voice6/src/components/aiAgent.js
// aiAgent.js already does: import { numerology6_directives } from '../logs/test_aiagent.js'
// — this file didn't exist yet, so that import was broken. This closes the gap.
//
// ESM exports (matches package.json "type": "module" — reflectionLog.js next door
// uses module.exports/CommonJS, which won't actually resolve under Vite/ESM. Worth
// fixing that file the same way when we touch it next.)

export const numerology6_directives = [
    {
        email: "brforeal@gmail.com",
        task: "Collaborate on app updates — integrate philosophical reflection (Ogyen Trinley Dorje's teachings)."
    },
    {
        email: "brforeal.dev@gmail.com",
        task: "Enhance AIAgent UI — display TRUTH analysis for universal goodness (numerology 6)."
    }
];

// Cycle 7 was a stub in reflectionLog.js (empty array). README TODO calls for
// expanding this — filled out to match cycle 6's shape/depth so KPITracker
// renders real rows instead of an empty table for Cycle 7.
export const numerology7_directives = [
    {
        email: "bmichaelh13@gmail.com",
        task: "Conduct introspective review of AI logic — isolate hidden assumptions and refine symbolic mapping."
    },
    {
        email: "brforeal.dev@gmail.com",
        task: "Implement deeper analytics in AIAgent — support Cycle 7 insight patterns."
    }
];

// Convenience lookup if a component wants to select by cycle number
// rather than importing each named export directly.
export const directivesByCycle = {
    6: numerology6_directives,
    7: numerology7_directives
};
