import React from 'react';

// expects you to pass in the directive list for the active cycle
// example: <KPITracker cycle={6} numerology={6} directives={numerology6_directives} />

const KPITracker = ({ cycle, numerology, directives }) => {

    // numerology metadata for dynamic UI/text
    const numerologyMap = {
        1: { label: "Initiation", theme: "#fff4e6" },
        2: { label: "Balance", theme: "#e8f7f1" },
        3: { label: "Expression", theme: "#f9e6ff" },
        4: { label: "Foundation", theme: "#f0f0f0" },
        5: { label: "Change", theme: "#fffbea" },
        6: { label: "Connection", theme: "#e6f0ff" },
        7: { label: "Insight", theme: "#eef0ff" },
        8: { label: "Power", theme: "#f1e6ff" },
        9: { label: "Completion", theme: "#fff0f0" }
    };

    const current = numerologyMap[numerology] || numerologyMap[6];

    const kpiData = directives.map((directive, index) => ({
        id: `KPI_${String(index + 1).padStart(3, '0')}`,
        name: `Cycle ${cycle} Task (${numerology})`,
        status: '☐ Pending',
        notes: `[${directive.email}] ${directive.task}`
    }));

    return (
        <section
            style={{
                fontFamily: 'Arial, sans-serif',
                marginTop: '20px',
                padding: '10px',
                backgroundColor: '#f8faff',
                borderRadius: '6px'
            }}
        >
            <h2>🔁 Cycle {cycle} KPI Tracker — {current.label} Series</h2>

            <p>
                Numerology Cycle: <strong>{numerology} ({current.label})</strong>
            </p>

            <table style={{ borderCollapse: 'collapse', width: '100%', marginTop: '10px' }}>
                <thead>
                    <tr style={{ backgroundColor: current.theme }}>
                        <th style={{ border: '1px solid #ddd', padding: '8px' }}>KPI ID</th>
                        <th style={{ border: '1px solid #ddd', padding: '8px' }}>Name</th>
                        <th style={{ border: '1px solid #ddd', padding: '8px' }}>Status</th>
                        <th style={{ border: '1px solid #ddd', padding: '8px' }}>Notes</th>
                    </tr>
                </thead>

                <tbody>
                    {kpiData.map(kpi => (
                        <tr key={kpi.id} style={{ borderBottom: '1px solid #ddd' }}>
                            <td style={{ border: '1px solid #ddd', padding: '8px' }}>{kpi.id}</td>
                            <td style={{ border: '1px solid #ddd', padding: '8px' }}>{kpi.name}</td>
                            <td style={{ border: '1px solid #ddd', padding: '8px' }}>{kpi.status}</td>
                            <td style={{ border: '1px solid #ddd', padding: '8px' }}>{kpi.notes}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    );
};

export default KPITracker;
