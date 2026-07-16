// test_aiagent.js
// Canonical directive registry for the live app (src/App.jsx, src/components/KPITracker.jsx).
// Lives at src/logs/ — App.jsx's import should be './logs/test_aiagent.js' (same dir tree),
// not '../logs/test_aiagent.js' (that reaches outside src/ entirely). Fixed the import in
// App.jsx to match; KPITracker.jsx's '../logs/test_aiagent.js' already resolved here correctly.

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

// Filled out per the README TODO — was an empty stub in the older reflectionLog.js version.
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

export const directivesByCycle = {
    6: numerology6_directives,
    7: numerology7_directives
};
