import React, { useState, useEffect } from 'react';
import KPITracker from './components/KPITracker';
import AIAgent from './components/AIAgent';
import { numerology6_directives } from '../logs/test_aiagent.js';
import { phaseClock, taskChecklist } from './logs/reflectionLog.js';
 

const calculateNumerology = (dateStr) => {
  const digits = dateStr.replace(/\D/g, '').split('').map(Number);
  let sum = digits.reduce((a, b) => a + b, 0);
  while (sum > 9) sum = sum.toString().split('').reduce((a, b) => a + b, 0);
  return sum;
};

const getFormattedDate = (date) => {
  return `${String(date.getMonth() + 1).padStart(2, '0')}/${String(date.getDate()).padStart(2, '0')}/${date.getFullYear()}`;
};

const phaseLabels = {
  1: 'Presence - Initialize focus and awareness',
  2: 'Planning - Organize tasks and mental space',
  3: 'Action - Initiate movement and expression',
  4: 'Reflection - Midpoint awareness and recalibration',
  5: 'Correction - Adjustments to alignment and path',
  6: 'Connection - Collaboration and synchronicity',
  7: 'Rest - Restoration and pause',
  8: 'Recalibration - Data-driven analysis and regroup',
  9: 'Release + Restart - Completion and gateway to next cycle'
};

function App() {
  const [timeline, setTimeline] = useState({ yesterday: {}, today: {}, tomorrow: {} });
  const [currentPhase, setCurrentPhase] = useState('');
  const [tasks, setTasks] = useState([]);
  const [checklist, setChecklist] = useState(null);

  useEffect(() => {
    const todayDate = new Date();
    const yesterdayDate = new Date(todayDate);
    yesterdayDate.setDate(todayDate.getDate() - 1);
    const tomorrowDate = new Date(todayDate);
    tomorrowDate.setDate(todayDate.getDate() + 1);

    const todayStr = getFormattedDate(todayDate);
    const yesterdayStr = getFormattedDate(yesterdayDate);
    const tomorrowStr = getFormattedDate(tomorrowDate);

    const yesterdayNum = calculateNumerology(yesterdayStr);
    const todayNum = calculateNumerology(todayStr);
    const tomorrowNum = calculateNumerology(tomorrowStr);

    setTimeline({
      yesterday: { date: yesterdayStr, num: yesterdayNum, label: phaseLabels[yesterdayNum] },
      today: { date: todayStr, num: todayNum, label: phaseLabels[todayNum] },
      tomorrow: { date: tomorrowStr, num: tomorrowNum, label: phaseLabels[tomorrowNum] }
    });

    const currentHour = todayDate.getHours();
    setCurrentPhase(phaseClock ? phaseClock(currentHour) : 'Unknown Phase');

    const taskList = numerology6_directives.map(d => d.task);
    const checklistInstance = taskChecklist
      ? taskChecklist(todayStr, todayNum, taskList)
      : { status: taskList.map(task => ({ task, complete: false })), markComplete: () => {} };

    setTasks(checklistInstance.status);
    setChecklist(checklistInstance);
  }, []);

  const handleMarkComplete = (index) => {
    if (checklist) {
      checklist.markComplete(index);
      setTasks([...checklist.status]);
    }
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px', backgroundColor: '#f0f8ff' }}>
      <h1>🔁 Numerology Cycle 6 Dashboard</h1>
      <p>
        Welcome to the <strong>Connection Phase ({timeline.today.num})</strong>. Today’s focus is collaboration, synchronicity, and harmony.
      </p>
      <p>
        🕒 Yesterday ({timeline.yesterday.num}): {timeline.yesterday.label} <br />
        🚀 Today ({timeline.today.num}): {timeline.today.label} <br />
        ⭐ Tomorrow ({timeline.tomorrow.num}): {timeline.tomorrow.label}
      </p>
      <h3>🧭 Current Phase: {currentPhase}</h3>
      <h3>📝 Tasks for Today:</h3>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {index + 1}. {task.task} [{task.complete ? '✅ Complete' : '☐ Pending'}]
            {!task.complete && (
              <button
                onClick={() => handleMarkComplete(index)}
                style={{ marginLeft: '10px', padding: '2px 5px', cursor: 'pointer' }}
              >
                Mark Complete
              </button>
            )}
          </li>
        ))}
      </ul>
      <KPITracker cycle={6} numerology={timeline.today.num} />
      <AIAgent />
    </div>
  );
}

export default App;
