// Numerology Directive Engine
// Supports dynamic cycle selection across all AIAgent and KPITracker components
// Project: https://github.com/brforeal/Numerology-Cycle-6

/*
    This module replaces the prior Cycle-6-only configuration with a scalable,
    multi-cycle directive registry. It provides:

    - numerologyDirectives: directives mapped 1–9
    - calculateNumerology(): date → cycle reducer
    - logNumerologyTasks(): CLI logger for any cycle
*/

// ------------------------------------------------------------
// 1. Directive Registry (extend as needed for cycles 1–9)
// ------------------------------------------------------------
const numerologyDirectives = {
    6: [
        {
            email: "brforeal@gmail.com",
            task: "Collaborate on app updates — integrate philosophical reflection (Ogyen Trinley Dorje’s teachings)."
        },
        {
            email: "brforeal.dev@gmail.com",
            task: "Enhance AIAgent UI — display TRUTH analysis for universal goodness (numerology 6)."
        }
    ],
    7: [
        {
            email: "bmichaelh13@gmail.com",
            task: "Conduct introspective review of AI logic — isolate hidden assumptions and refine symbolic mapping."
        },
        {
            email: "brforeal.dev@gmail.com",
            task: "Implement deeper analytics in AIAgent — support Cycle 7 insight patterns."
        }
    ]
    // Extend: cycles 1–9 can be added here when needed.
};


// ------------------------------------------------------------
// 2. Numerology Calculator
// ------------------------------------------------------------
function calculateNumerology(dateStr) {
    try {
        const digits = dateStr.replace(/\D/g, "").split("").map(Number);
        let sum = digits.reduce((a, b) => a + b, 0);

        while (sum > 9) {
            sum = sum
                .toString()
                .split("")
                .map(Number)
                .reduce((a, b) => a + b, 0);
        }

        return sum;
    } catch (error) {
        console.error(`Error calculating numerology for ${dateStr}:`, error.message);
        return null;
    }
}


// ------------------------------------------------------------
// 3. Logger for CLI visualization (Cycle-Agnostic)
// ------------------------------------------------------------
function logNumerologyTasks(dateStr) {
    try {
        const numerologyValue = calculateNumerology(dateStr);

        console.log(`🧠 Numerology Directive Summary for ${dateStr}`);
        console.log(`Cycle: ${numerologyValue}`);
        console.log("---");

        const directives = numerologyDirectives[numerologyValue];

        if (!directives || directives.length === 0) {
            console.warn(`No directives found for cycle ${numerologyValue}.`);
            return;
        }

        directives.forEach((directive, i) => {
            console.log(`${i + 1}. [${directive.email}] → Task: ${directive.task}`);
        });

    } catch (error) {
        console.error("Error logging numerology tasks:", error.message);
    }
}


// ------------------------------------------------------------
// 4. Demo Log (Safe to remove in production)
// ------------------------------------------------------------
logNumerologyTasks("05/01/2025");


// ------------------------------------------------------------
// 5. Exports
// ------------------------------------------------------------
module.exports = {
    numerologyDirectives,
    calculateNumerology,
    logNumerologyTasks
};
