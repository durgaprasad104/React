import React, { useState } from 'react';

const MTechPage = () => {
    const [selectedYear, setSelectedYear] = useState('');

    // Handle Year Selection
    const handleYearChange = (event) => {
        setSelectedYear(event.target.value);
    };

    // Detailed point-wise guidance based on the selected year
    const yearGuidance = {
        "1st Year": (
            <ul>
                <li><strong>Strengthen Research Skills:</strong> Focus on understanding the basics of research methodology. Start reading research papers and get comfortable with technical writing.</li>
                <li><strong>Choose Your Specialization Wisely:</strong> If you haven’t already, consider which area of your field interests you the most. This will guide your project and thesis work.</li>
                <li><strong>Engage with Professors:</strong> Build relationships with your professors. They can provide valuable guidance and may become your research advisors.</li>
                <li><strong>Prepare for Competitive Exams:</strong> If you are interested in pursuing government jobs or further studies (like a Ph.D.), consider starting your preparation for exams like GATE, NET, or other relevant tests.</li>
                <li><strong>Attend Workshops and Seminars:</strong> Participate in workshops and seminars related to your specialization to enhance your understanding and network with experts in your field.</li>
            </ul>
        ),
        "2nd Year": (
            <ul>
                <li><strong>Focus on Your Thesis:</strong> Begin working on your thesis early in the second year. This is a significant part of your MTech degree and requires careful planning and execution.</li>
                <li><strong>Start Publishing Papers:</strong> If you have results or findings from your research, start writing and submitting papers to journals or conferences.</li>
                <li><strong>Apply for Internships:</strong> Look for internships that align with your research interests or that can provide practical experience in your field of study.</li>
                <li><strong>Prepare for Job Interviews:</strong> If you plan to enter the workforce after your MTech, start preparing for technical interviews. Practice problem-solving and brush up on key concepts.</li>
                <li><strong>Government Job Preparation:</strong> If you are interested in government jobs, this is the time to intensify your preparation. Focus on GATE, public sector undertakings (PSUs) recruitment exams, or other relevant government exams.</li>
                <li><strong>Consider Further Studies:</strong> If you are planning to pursue a Ph.D., start preparing your research proposal and identify potential supervisors and universities.</li>
            </ul>
        ),
    };

    return (
        <div style={{ textAlign: 'left', padding: '50px' }}>
            <h2>Master of Technology (MTech) Guidance</h2>
            <p>Select your academic year to view detailed guidance on what to focus on during that year of your MTech program.</p>

            {/* Select Year */}
            <div style={{ marginBottom: '20px' }}>
                <label htmlFor="academic-year"><h2>Select Year:</h2></label>
                <select
                    id="academic-year"
                    onChange={handleYearChange}
                    value={selectedYear}
                    style={{ width: '350px', height: '60px',fontSize:'15px' }} // Adjusted width and height
                >
                    <option value="">Select a Year</option>
                    <option value="1st Year">1st Year</option>
                    <option value="2nd Year">2nd Year</option>
                </select>
            </div>

            {/* Display Guidance */}
            {selectedYear && (
                <div style={{ marginTop: '20px' }}>
                    <h3>{selectedYear} Guidance</h3>
                    {yearGuidance[selectedYear]}
                </div>
            )}
        </div>
    );
};

export default MTechPage;
