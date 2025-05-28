import React from 'react';
import { numerology6_directives } from '../../logs/test_aiagent.js';

// Define kpiData array directly without a type alias
const KPITracker = ({ cycle, numerology }) => {
    const kpiData = numerology6_directives.map((directive, index) => ({
        id: `KPI_${String(index + 1).padStart(3, '0')}`,
        name: `Cycle ${cycle} Task (${numerology})`,
        status: '☐ Pending', // Initial status; can be synced with taskChecklist later
        notes: `[${directive.email}] ${directive.task}`
    }));

    return (
        <section style={{ fontFamily: 'Arial, sans-serif', marginTop: '20px' }}>
            <h2>🔁 Cycle-{cycle} KPI Tracker — Connection Series</h2>
            <p>Numerology Cycle: <strong>{numerology} (Connection)</strong></p>
            <table style={{ borderCollapse: 'collapse', width: '100%', marginTop: '10px' }}>
                <thead>
                    <tr style={{ backgroundColor: '#e6f0ff' }}>
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