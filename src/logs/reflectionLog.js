// reflectionLog.js
// App.jsx imports { phaseClock, taskChecklist } from here. Neither existed anywhere in the
// repo under these names — the all-day-voice6/src/logs/reflectionLog.js file has the same
// filename but exports completely different things (numerologyDirectives, calculateNumerology,
// logNumerologyTasks) via CommonJS. This is a fresh module built to match what App.jsx
// actually calls: phaseClock(currentHour) and taskChecklist(dateStr, num, taskList).

// ------------------------------------------------------------
// phaseClock — maps an hour of day (0-23) to a phase label
// ------------------------------------------------------------
export function phaseClock(hour) {
    if (hour >= 5 && hour < 12) return 'Morning Initiation';
    if (hour >= 12 && hour < 17) return 'Midday Momentum';
    if (hour >= 17 && hour < 21) return 'Evening Reflection';
    return 'Night Recalibration';
}

// ------------------------------------------------------------
// taskChecklist — builds a stateful checklist from a list of task strings
// App.jsx reads .status and calls .markComplete(index), then re-spreads
// .status into React state, so markComplete mutates the same array in place.
// ------------------------------------------------------------
export function taskChecklist(dateStr, num, taskList) {
    const status = taskList.map((task) => ({ task, complete: false }));

    return {
        date: dateStr,
        numerology: num,
        status,
        markComplete(index) {
            if (status[index]) {
                status[index].complete = true;
            }
        }
    };
}
